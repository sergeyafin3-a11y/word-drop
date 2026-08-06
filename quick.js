/* quick.js — простое добавление лексики обычным текстом.
   Разбирает window.QUICK и подмешивает всё в BATCHES и TOPICS.
   Никаких скобок и запятых — только строки. */
(function () {
  var W = (window.WD = window.WD || {});

  /* стабильный id из названия, чтобы прогресс не сбивался */
  function idOf(prefix, title) {
    var h = 0, s = String(title).toLowerCase().trim();
    for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return prefix + '-' + h.toString(36);
  }

  function split(line) {
    return line.split(/\s+[-—–]\s+|\s*\|\s*|\t+/).map(function (x) { return x.trim(); }).filter(Boolean);
  }

  W.parseQuick = function (text) {
    var lines = String(text || '').split(/\r?\n/);
    var batches = [], topics = [];
    var cur = null, section = 'words';

    lines.forEach(function (raw) {
      var line = raw.trim();
      if (!line || line.indexOf('//') === 0) return;

      /* заголовок блока */
      if (line.charAt(0) === '#') {
        var parts = line.replace(/^#+\s*/, '').split(/\s*\|\s*/).map(function (x) { return x.trim(); });
        var kind = (parts[0] || '').toLowerCase();
        if (kind.indexOf('new') === 0 || kind.indexOf('нов') === 0) {
          cur = { type: 'batch', title: parts[1] || 'New words', date: parts[2] || '', items: [] };
          batches.push(cur);
        } else {
          /* 4-е поле (необязательное) — свои обои: # TOPIC | Travel | ✈️ | 🧳✈️🗺️ */
          var st = (parts[3] || '').match(/\p{Extended_Pictographic}(️|‍\p{Extended_Pictographic})*/gu) || [];
          cur = {
            type: 'topic', title: parts[1] || 'Topic', emoji: parts[2] || '📚',
            sticker: st.length >= 3 ? st.slice(0, 3) : null,
            words: [], phrases: [], questions: [], frames: []
          };
          topics.push(cur);
          section = 'words';
        }
        return;
      }

      /* переключатель раздела внутри темы */
      if (line.charAt(0) === '=') {
        var s2 = line.replace(/^=+\s*/, '').toLowerCase();
        if (s2.indexOf('phr') === 0 || s2.indexOf('фраз') === 0) section = 'phrases';
        else if (s2.indexOf('quest') === 0 || s2.indexOf('вопрос') === 0) section = 'questions';
        else if (s2.indexOf('frame') === 0 || s2.indexOf('полк') === 0) section = 'frames';
        else section = 'words';
        return;
      }

      if (!cur) return;

      if (cur.type === 'topic' && section === 'questions') { cur.questions.push(line); return; }
      if (cur.type === 'topic' && section === 'frames') {
        var ing = /\+\s*ing\s*$/i.test(line);
        var tpl = line.replace(/\+\s*ing\s*$/i, '').replace(/[.…]+$/, '').trim();
        cur.frames.push({ label: tpl + ' …', tpl: tpl, ing: ing });
        return;
      }

      var f = split(line);
      if (!f.length) return;
      var item = { en: f[0], ru: f[1] || '', icon: f[2] || '' };
      if (cur.type === 'batch') cur.items.push(item);
      else cur[section].push(item);
    });

    return { batches: batches, topics: topics };
  };

  /* вливаем разобранное в основные списки */
  W.applyQuick = function (text) {
    var q = W.parseQuick(text);
    window.BATCHES = window.BATCHES || [];
    window.TOPICS = window.TOPICS || [];

    /* новые пачки — сверху, самые свежие первыми */
    q.batches.reverse().forEach(function (b) {
      if (!b.items.length) return;
      window.BATCHES.unshift({ id: idOf('qb', b.title), title: b.title, date: b.date, items: b.items });
    });

    q.topics.forEach(function (t) {
      var found = null;
      window.TOPICS.forEach(function (x) {
        if (x.title.toLowerCase() === t.title.toLowerCase()) found = x;
      });
      if (found) {                       // тема уже есть — дописываем в неё
        found.words = found.words.concat(t.words);
        found.phrases = found.phrases.concat(t.phrases);
        found.questions = (found.questions || []).concat(t.questions);
        if (t.sticker) found.sticker = t.sticker;
        if (t.frames && t.frames.length) found.buckets = t.frames;
      } else {
        window.TOPICS.push({
          id: idOf('qt', t.title), title: t.title, emoji: t.emoji,
          sticker: t.sticker || null,
          words: t.words, phrases: t.phrases, questions: t.questions,
          buckets: (t.frames && t.frames.length) ? t.frames : null
        });
      }
    });
  };

  if (window.QUICK) W.applyQuick(window.QUICK);
})();
