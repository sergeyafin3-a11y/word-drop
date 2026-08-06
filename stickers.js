/* ============================================================
   stickers.js — картинка к вопросу.

   Работает для ЛЮБОЙ темы: смотрит на слова в вопросе и подбирает
   набор эмодзи. Ничего не грузится из интернета — эмодзи рисует
   сам телефон, поэтому работает и без связи.

   Хочешь свой набор — допиши строку в SET:
     { k: ['слова', 'по', 'которым', 'ищем'], e: ['🎧','🎵','🔥'] }
   Ищется по началу слова, поэтому 'music' поймает 'musical', а 'eat' не поймает 'weather'.
   ============================================================ */

window.STICKER_SET = [
  { k: ['music', 'song', 'listen', 'sing', 'playlist', 'headphone'], e: ['🎧', '🎵', '🔥'] },
  { k: ['dance', 'dancing'], e: ['🕺', '💃', '🎶'] },
  { k: ['breakfast', 'eat', 'food', 'lunch', 'dinner', 'hungry', 'pizza', 'cook'], e: ['🍕', '🍔', '😋'] },
  { k: ['tea', 'coffee', 'drink', 'juice', 'water'], e: ['☕️', '🧃', '😌'] },
  { k: ['school', 'lesson', 'class', 'homework', 'study', 'exam', 'teacher'], e: ['🎒', '📚', '😵‍💫'] },
  { k: ['sleep', 'tired', 'wake', 'bed', 'nap', 'energy'], e: ['😴', '🛏️', '⏰'] },
  { k: ['morning'], e: ['🌅', '☕️', '🥱'] },
  { k: ['watch', 'film', 'movie', 'series', 'netflix', 'youtube'], e: ['🍿', '📺', '👀'] },
  { k: ['night', 'tonight', 'evening', 'late'], e: ['🌙', '⭐️', '🌃'] },
  { k: ['weekend', 'saturday', 'sunday', 'plan', 'holiday'], e: ['🎉', '🛼', '🙌'] },
  { k: ['weather', 'rain', 'sun', 'snow', 'cold', 'hot', 'wind'], e: ['🌦️', '☀️', '🌈'] },
  { k: ['game', 'gaming', 'play', 'console', 'minecraft'], e: ['🎮', '👾', '🏆'] },
  { k: ['phone', 'photo', 'picture', 'selfie', 'insta', 'tiktok', 'video', 'screen'], e: ['📱', '📸', '✨'] },
  { k: ['friend', 'talk', 'who', 'people', 'party', 'meet'], e: ['🫂', '💬', '😄'] },
  { k: ['funny', 'smile', 'laugh', 'joke', 'meme', 'happy'], e: ['😂', '🤣', '💀'] },
  { k: ['sport', 'football', 'run', 'gym', 'swim', 'skate', 'bike', 'basketball'], e: ['⚽️', '🏀', '💪'] },
  { k: ['travel', 'trip', 'go to', 'city', 'country', 'plane', 'summer'], e: ['✈️', '🗺️', '🌍'] },
  { k: ['read', 'book', 'story'], e: ['📖', '🤓', '💭'] },
  { k: ['draw', 'art', 'paint', 'creative', 'design'], e: ['🎨', '✏️', '🖼️'] },
  { k: ['money', 'buy', 'shop', 'clothes', 'wear', 'style'], e: ['🛍️', '💸', '😎'] },
  { k: ['pet', 'dog', 'cat', 'animal'], e: ['🐶', '🐱', '🥰'] },
  { k: ['family', 'mum', 'mother', 'dad', 'father', 'sister', 'brother', 'home', 'house'], e: ['🏡', '👨‍👩‍👦', '❤️'] },
  { k: ['outside', 'walk', 'park', 'street', 'nature'], e: ['🌳', '🚶', '🍃'] },
  { k: ['busy', 'work', 'time', 'hurry', 'week'], e: ['⏳', '📅', '😮‍💨'] },
  { k: ['love', 'favourite', 'favorite', 'best', 'like'], e: ['❤️', '⭐️', '🤩'] },
  { k: ['hate', 'boring', 'bad', 'worst', 'angry'], e: ['🙄', '😤', '👎'] },
  { k: ['how are you', 'feel', 'mood', 'good thing'], e: ['👋', '😊', '💬'] },
  { k: ['computer', 'code', 'internet', 'online'], e: ['💻', '🌐', '⚡️'] },
  { k: ['car', 'bus', 'train', 'metro', 'drive'], e: ['🚗', '🚇', '🛣️'] },
  { k: ['dream', 'want', 'wish', 'future', 'would like'], e: ['💭', '🌟', '🚀'] },
  { k: ['one word', 'say', 'tell me', 'describe'], e: ['🗣️', '💬', '🔤'] }
];

/* запасные наборы — если ничего не совпало, берём стабильно по тексту вопроса */
window.STICKER_FALLBACK = [
  ['🤔', '💬', '✨'], ['😎', '🔥', '👌'], ['🙌', '💡', '⚡️'],
  ['🧐', '💭', '🎯'], ['🤗', '🌈', '💫'], ['😃', '🎈', '👏']
];

(function () {
  var W = window.WD;

  function hash(s) {
    var h = 0;
    for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return h;
  }
  W.hashText = hash;

  /* набор эмодзи для любого текста.
     Ищем по НАЧАЛУ слова: 'music' поймает 'musical', но 'eat' уже не поймает 'weather'.
     Если в ключе есть пробел ('how are you') — ищем как кусок фразы. */
  W.stickers = function (text, fallback) {
    var t = String(text || '').toLowerCase();
    var words = t.split(/[^a-zà-ÿ']+/).filter(Boolean);
    var sets = window.STICKER_SET || [];

    for (var i = 0; i < sets.length; i++) {
      var k = sets[i].k;
      for (var j = 0; j < k.length; j++) {
        var kw = k[j];
        if (kw.indexOf(' ') !== -1) {
          if (t.indexOf(kw) !== -1) return sets[i].e;
        } else {
          for (var n = 0; n < words.length; n++) {
            if (words[n].indexOf(kw) === 0) return sets[i].e;
          }
        }
      }
    }
    /* ничего не совпало — берём набор темы, а не случайные смайлики */
    if (fallback && fallback.length >= 3) return fallback;
    var fb = window.STICKER_FALLBACK;
    return fb[hash(t) % fb.length];
  };

  /* ============================================================
     Набор обоев ДЛЯ ТЕМЫ. Ничего дописывать не надо: эмодзи берутся
     из самих слов темы (поле icon), поэтому любая новая тема сразу
     получает свои картинки. Можно задать вручную — полем sticker:
       { id:'travel', title:'Travel', emoji:'✈️', sticker:['🧳','✈️','🗺️'], ... }
     ============================================================ */
  W.topicStickers = function (t, list, n, seed) {
    n = n || 6;

    /* весь запас эмодзи темы */
    var seen = {}, icons = [];
    if (t && t.sticker && t.sticker.length) {
      t.sticker.forEach(function (ic) { if (!seen[ic]) { seen[ic] = 1; icons.push(ic); } });
    }
    (list || []).forEach(function (w) {
      var ic = w.icon || w.emoji;
      if (ic && !seen[ic]) { seen[ic] = 1; icons.push(ic); }
    });

    if (icons.length < 3) {
      if (t && t.emoji) {
        var byTitle = W.stickers(t.title);
        return [t.emoji, byTitle[1], byTitle[2]];
      }
      return null;   /* эмодзи в теме нет — пусть работает подбор по словам вопроса */
    }

    /* На каждый вопрос свой набор: вперёд выходят слова, которые в нём упомянуты,
       остальное добирается по кругу от места, посчитанного из текста вопроса.
       Фон каждый раз разный, но всегда из этой же темы. */
    var head = [];
    if (seed) {
      var low = ' ' + String(seed).toLowerCase() + ' ';
      (list || []).forEach(function (w) {
        var ic = w.icon || w.emoji;
        if (!ic || head.indexOf(ic) !== -1) return;
        var en = String(w.en || '').toLowerCase();
        var key = en.split(/\s+/).filter(function (x) { return x.length > 3; })[0];
        if (key && low.indexOf(key) !== -1) head.push(ic);
      });
    }

    var start = seed ? hash(String(seed)) % icons.length : 0;
    var out = head.slice(0, n);
    for (var i = 0; i < icons.length && out.length < n; i++) {
      var ic2 = icons[(start + i) % icons.length];
      if (out.indexOf(ic2) === -1) out.push(ic2);
    }
    return out;
  };

  /* стабильный оттенок: один и тот же для одного вопроса. Наклона нет — всё ровно. */
  function hue(text) { return hash(text + 'hue') % 360; }

  /* ============================================================
     ОФОРМЛЕНИЕ. Меняется одним словом в index.html:
       <html data-sticker="sticker">
     Варианты: sticker · collage · polaroid · wall · reaction · bubble · none
     ============================================================ */
  W.stickerStyle = function () {
    return document.documentElement.getAttribute('data-sticker') || 'sticker';
  };

  /* HTML вопроса с картинкой.
     label — подпись сверху ('Answer in English')
     set   — готовый набор темы. Передали — весь экран идёт на нём,
             не передали — эмодзи подбираются по словам самого вопроса. */
  W.qCard = function (text, label, set) {
    var e = (set && set.length >= 3) ? set : W.stickers(text);
    var q = W.esc(text);
    var lab = label ? '<div class="q-label">' + W.esc(label) + '</div>' : '';
    var st = W.stickerStyle();

    if (st === 'none') return lab + '<div class="big-q">' + q + '</div>';

    if (st === 'collage') {
      return '<div class="sk-collage" style="--h:' + hue(text) + '">' +
        '<i class="c1">' + e[0] + '</i><i class="c2">' + e[1] + '</i><i class="c3">' + e[2] + '</i>' +
        lab + '<div class="big-q">' + q + '</div></div>';
    }

    if (st === 'polaroid') {
      return '<div class="sk-pol" style="--h:' + hue(text) + '">' +
        '<div class="sk-pol-top"><span>' + e[0] + '</span></div>' +
        '<div class="sk-pol-body">' + lab + '<div class="big-q">' + q + '</div>' +
        '<div class="sk-pol-foot">' + e[1] + ' ' + e[2] + '</div></div></div>';
    }

    if (st === 'wall') {
      var wall = '';
      /* 5 в строке, длина набора другая — узор сам сдвигается, столбиков нет */
      for (var i = 0; i < 30; i++) wall += '<span>' + e[i % e.length] + '</span>';
      return '<div class="sk-wall"><div class="sk-wall-bg">' + wall + '</div>' +
        '<div class="sk-wall-in">' + lab + '<div class="big-q">' + q + '</div></div></div>';
    }

    if (st === 'reaction') {
      return lab +
        '<div class="sk-react-big">' + e[0] + '</div>' +
        '<div class="big-q">' + q + '</div>' +
        '<div class="sk-react-row"><span>' + e[1] + '</span><span>' + e[2] + '</span><span>' + e[0] + '</span></div>';
    }

    if (st === 'bubble') {
      return lab +
        '<div class="sk-bub"><div class="sk-bub-av">' + e[0] + '</div>' +
        '<div class="sk-bub-txt">' + q + '</div></div>' +
        '<div class="sk-bub-me">' + e[1] + ' your turn ' + e[2] + '</div>';
    }

    /* sticker — по умолчанию: одна большая наклейка сверху */
    return lab +
      '<div class="sk-one" style="--h:' + hue(text) + '">' +
      '<b>' + e[0] + '</b><i>' + e[1] + '</i></div>' +
      '<div class="big-q">' + q + '</div>';
  };
})();
