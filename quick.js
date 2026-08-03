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
          cur = { type: 'topic', title: parts[1] || 'Topic', emoji: parts[2] || '📚', words: [], phrases: [], questions: [] };
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
        else section = 'words';
        return;
      }

      if (!cur) return;

      if (cur.type === 'topic' && section === 'questions') { cur.questions.push(line); return; }

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
      } else {
        window.TOPICS.push({
          id: idOf('qt', t.title), title: t.title, emoji: t.emoji,
          words: t.words, phrases: t.phrases, questions: t.questions
        });
      }
    });
  };

  if (window.QUICK) W.applyQuick(window.QUICK);
})();
