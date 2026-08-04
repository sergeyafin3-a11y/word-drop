/* core.js — прогресс, очки, стрик, интервальное повторение */
(function () {
  var W = (window.WD = window.WD || {});
  var KEY = 'wordDrop.v2';

  W.defaults = function () {
    return {
      v: 2,
      xp: 0,
      words: {},        // 'hobbies|words|3' -> {box,due,wrong,right}
      days: {},         // 'YYYY-MM-DD' -> {acts,words,xp}
      records: {},      // 'sprint' -> число
      rules: {},        // 'g-01' -> {done,seen}
      sel: null
    };
  };

  W.load = function () {
    var raw = null;
    try { raw = localStorage.getItem(KEY); } catch (e) { W.noStorage = true; }
    var s = W.defaults();
    if (raw) {
      try {
        var p = JSON.parse(raw);
        Object.keys(p).forEach(function (k) { s[k] = p[k]; });
      } catch (e) {}
    }
    W.s = s;
    return s;
  };

  var t = null;
  W.save = function () { clearTimeout(t); t = setTimeout(W.saveNow, 150); };
  W.saveNow = function () {
    clearTimeout(t);
    try { localStorage.setItem(KEY, JSON.stringify(W.s)); } catch (e) { W.noStorage = true; }
  };

  W.reset = function () {
    try { localStorage.removeItem(KEY); } catch (e) {}
    W.s = W.defaults();
  };

  /* ---------- даты ---------- */
  W.key = function (d) {
    d = d || new Date();
    var m = d.getMonth() + 1, day = d.getDate();
    return d.getFullYear() + '-' + (m < 10 ? '0' + m : m) + '-' + (day < 10 ? '0' + day : day);
  };
  W.today = function () { return W.key(); };
  W.day = function (k) {
    k = k || W.today();
    if (!W.s.days[k]) W.s.days[k] = { acts: 0, words: 0, xp: 0 };
    return W.s.days[k];
  };
  W.streak = function () {
    var d = new Date(), n = 0;
    if (!(W.s.days[W.key(d)] || {}).acts) d.setDate(d.getDate() - 1);
    while ((W.s.days[W.key(d)] || {}).acts) { n++; d.setDate(d.getDate() - 1); }
    return n;
  };
  W.week = function () {
    var out = [], d = new Date();
    d.setDate(d.getDate() - 6);
    var names = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    for (var i = 0; i < 7; i++) {
      out.push({ label: names[d.getDay()], on: !!(W.s.days[W.key(d)] || {}).acts });
      d.setDate(d.getDate() + 1);
    }
    return out;
  };

  /* ---------- очки ---------- */
  W.XP = { card: 10, match: 10, build: 15, type: 15, sprint: 10, say: 20, rule: 10 };

  W.addXP = function (n) {
    W.s.xp = (W.s.xp || 0) + n;
    W.day().xp += n;
    W.save();
    W.popXP(n);
    var el = document.getElementById('xp');
    if (el) el.textContent = W.s.xp + ' XP';
  };

  /* всплывающее «+10» */
  W.popXP = function (n) {
    var el = document.createElement('div');
    el.className = 'xp-pop';
    el.textContent = '+' + n;
    document.body.appendChild(el);
    setTimeout(function () { el.remove(); }, 900);
  };

  /* ---------- наборы: пачки новых слов и темы ---------- */
  W.topics = function () { return window.TOPICS || []; };
  W.batches = function () { return window.BATCHES || []; };

  W.topic = function (id) {
    var a = W.topics();
    for (var i = 0; i < a.length; i++) if (a[i].id === id) return a[i];
    return null;
  };
  W.batch = function (id) {
    var a = W.batches();
    for (var i = 0; i < a.length; i++) if (a[i].id === id) return a[i];
    return null;
  };

  W.KINDS = [
    { id: 'words', label: 'New words' },
    { id: 'phrases', label: 'Speaking phrases' }
  ];
  W.kindLabel = function (k) { return k === 'phrases' ? 'Speaking phrases' : 'New words'; };

  /* Прогресс привязан к САМОМУ СЛОВУ, а не к его месту в списке.
     Поэтому можно вставлять, удалять, переставлять и переименовывать
     что угодно — выученное не собьётся. */
  W.wkey = function (en) {
    return 'w:' + String(en || '').toLowerCase().replace(/\s+/g, ' ').trim();
  };

  W.wordState = function (en) {
    var id = W.wkey(en);
    if (!W.s.words[id]) W.s.words[id] = { box: 0, due: '', wrong: 0, right: 0 };
    return W.s.words[id];
  };

  /* однократный перенос старого прогресса (ключи вида hobbies|words|3) */
  W.migrate = function () {
    if (W.s.mig2) return 0;
    var moved = 0;
    function move(oldKey, en) {
      var o = W.s.words[oldKey];
      if (!o) return;
      var nk = W.wkey(en), cur = W.s.words[nk];
      if (!cur || (o.box || 0) > (cur.box || 0)) W.s.words[nk] = o;
      delete W.s.words[oldKey];
      moved++;
    }
    W.topics().forEach(function (t) {
      (t.words || []).forEach(function (it, i) { move(t.id + '|words|' + i, it.en); });
      (t.phrases || []).forEach(function (it, i) { move(t.id + '|phrases|' + i, it.en); });
    });
    W.batches().forEach(function (b) {
      (b.items || []).forEach(function (it, i) { move(b.id + '|batch|' + i, it.en); });
    });
    W.s.mig2 = true;
    W.saveNow();
    return moved;
  };

  function wrap(a, b, arr) {
    return (arr || []).map(function (it, i) {
      return {
        tid: a, kind: b, i: i,
        en: it.en, ru: it.ru, icon: it.icon || '',
        st: W.wordState(it.en)
      };
    });
  }

  W.list = function (tid, kind) {
    var t2 = W.topic(tid);
    if (!t2) return [];
    return wrap(t2.id, kind, kind === 'phrases' ? t2.phrases : t2.words);
  };
  W.batchLic = function (bid) {
    var b = W.batch(bid);
    return b ? wrap(b.id, 'batch', b.items) : [];
  };

  W.topicAll = function (tid) {
    return W.list(tid, 'words').concat(W.list(tid, 'phrases'));
  };

  W.allWords = function () {
    var out = [];
    W.topics().forEach(function (t2) {
      out = out.concat(W.list(t2.id, 'words')).concat(W.list(t2.id, 'phrases'));
    });
    W.batches().forEach(function (b) { out = out.concat(W.batchLic(b.id)); });
    return out;
  };

  /* текущий выбранный набор: {type:'batch'|'topic', id, kind} */
  W.sel = function () {
    var s = W.s.sel;
    /* набор мог исчезнуть (тему переименовали или удалили) — не оставляем пустой экран */
    if (s && s.type === 'topic' && !W.topic(s.id)) s = null;
    if (s && s.type === 'batch' && !W.batch(s.id)) s = null;
    if (!s || !s.type) {
      var b = W.batches()[0];
      s = b ? { type: 'batch', id: b.id } : { type: 'topic', id: (W.topics()[0] || {}).id, kind: 'words' };
      W.s.sel = s;
    }
    if (s.type === 'topic' && !s.kind) s.kind = 'words';
    return s;
  };
  W.setSel = function (type, id, kind) {
    W.s.sel = { type: type, id: id, kind: kind || (type === 'topic' ? 'words' : '') };
    W.save();
  };

  W.selTitle = function () {
    var s = W.sel();
    if (s.type === 'batch') {
      var b = W.batch(s.id);
      return b ? 'New words · ' + b.title : 'New words';
    }
    var t2 = W.topic(s.id);
    return t2 ? t2.title + ' · ' + W.kindLabel(s.kind) : '';
  };
  W.selEmoji = function () {
    var s = W.sel();
    if (s.type === 'batch') return '🆕';
    var t2 = W.topic(s.id);
    return (t2 && t2.emoji) || '📚';
  };
  W.selSub = function () {
    var s = W.sel();
    if (s.type === 'batch') {
      var b = W.batch(s.id);
      return b ? b.items.length + ' new words · ' + b.date : '';
    }
    var t2 = W.topic(s.id);
    return t2 ? W.list(t2.id, s.kind).length + ' items · ' + t2.title : '';
  };

  W.activeList = function () {
    var s = W.sel();
    return s.type === 'batch' ? W.batchLic(s.id) : W.list(s.id, s.kind);
  };

  /* для режимов урока: фразы текущей темы либо всё подряд */
  W.phrasePool = function () {
    var s = W.sel();
    var t2 = s.type === 'topic' ? W.topic(s.id) : W.topics()[0];
    var pool = t2 ? W.list(t2.id, 'phrases') : [];
    return pool.length >= 4 ? pool : W.allWords();
  };
  W.questionPool = function () {
    var s = W.sel();
    var t2 = s.type === 'topic' ? W.topic(s.id) : W.topics()[0];
    var qs = (t2 && t2.questions) ? t2.questions.slice() : [];
    if (qs.length < 5) W.topics().forEach(function (x) { if (x.questions) qs = qs.concat(x.questions); });
    return qs;
  };

  /* ---------- интервальное повторение ---------- */
  W.BOXES = [1, 2, 4, 8, 16];

  W.mark = function (w, ok) {
    var st = w.st;
    if (ok) { st.box = Math.min((st.box || 0) + 1, W.BOXES.length); st.right++; }
    else { st.box = 0; st.wrong++; }
    var days = st.box > 0 ? W.BOXES[st.box - 1] : 0;
    var d = new Date();
    d.setDate(d.getDate() + days);
    st.due = W.key(d);
    W.day().words++;
    W.save();
  };

  W.isKnown = function (st) { return (st.box || 0) >= 3; };

  W.due = function (list) {
    var today = W.today();
    return (list || W.allWords()).filter(function (w) { return !w.st.due || w.st.due <= today; });
  };

  W.progress = function (list) {
    if (!list.length) return 0;
    var n = 0;
    list.forEach(function (w) { if (W.isKnown(w.st)) n++; });
    return Math.round(n * 100 / list.length);
  };

  W.totalKnown = function () {
    var n = 0;
    W.allWords().forEach(function (w) { if (W.isKnown(w.st)) n++; });
    return n;
  };

  W.weak = function (limit) {
    return W.allWords()
      .filter(function (w) { return w.st.wrong > 0 || (w.st.box || 0) < 2; })
      .sort(function (a, b) { return (b.st.wrong - a.st.wrong) || (a.st.box - b.st.box); })
      .slice(0, limit || 12);
  };

  W.finishAct = function () { W.day().acts++; W.save(); };

  W.record = function (name, value) {
    var cur = W.s.records[name] || 0;
    if (value > cur) { W.s.records[name] = value; W.save(); return true; }
    return false;
  };

  /* ---------- озвучка: американский голос ---------- */
  W.voices = [];
  function loadVoices() {
    W.voices = (window.speechSynthesis && window.speechSynthesis.getVoices()) || [];
  }
  if (window.speechSynthesis) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }

  W.usVoice = function () {
    if (!W.voices.length) loadVoices();
    var us = W.voices.filter(function (v) { return /en[-_]US/i.test(v.lang); });
    if (!us.length) us = W.voices.filter(function (v) { return /^en/i.test(v.lang); });
    var pref = ['Samantha', 'Ava', 'Allison', 'Susan', 'Nicky', 'Aaron', 'Alex', 'Google US English'];
    for (var i = 0; i < pref.length; i++) {
      var m = us.filter(function (v) { return v.name.indexOf(pref[i]) !== -1; })[0];
      if (m) return m;
    }
    return us[0] || null;
  };

  W.canSpeak = function () { return !!window.speechSynthesis; };

  W.speak = function (text) {
    if (!window.speechSynthesis) return false;
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(String(text || ''));
      var v = W.usVoice();
      if (v) u.voice = v;
      u.lang = 'en-US';
      u.rate = 0.92;
      window.speechSynthesis.speak(u);
      return true;
    } catch (e) { return false; }
  };

  /* ---------- утилиты ---------- */
  W.shuffle = function (a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), x = a[i];
      a[i] = a[j]; a[j] = x;
    }
    return a;
  };
  W.pick = function (a, n) { return W.shuffle(a).slice(0, n); };
  W.esc = function (s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  };
  W.norm = function (s) {
    return String(s || '').toLowerCase().replace(/[’']/g, "'")
      .replace(/[^a-z' ]/g, '').replace(/\s+/g, ' ').trim();
  };
})();
