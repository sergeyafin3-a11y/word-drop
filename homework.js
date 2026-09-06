/* homework.js — домашка: заметить → выучить фразой → сказать про себя → рассказать бегло */
(function () {
  var W = window.WD;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = W.esc;

  W.homeworks = function () { return window.HOMEWORK || []; };
  W.homework = function (id) {
    var a = W.homeworks();
    for (var i = 0; i < a.length; i++) if (a[i].id === id) return a[i];
    return null;
  };

  function st(id) {
    if (!W.s.hw) W.s.hw = {};
    var s = W.s.hw[id] || (W.s.hw[id] = {});
    ['found', 'gaps', 'said', 'mine', 'told', 'used'].forEach(function (k) {
      if (!s[k] || typeof s[k] !== 'object') s[k] = {};
    });
    return s;
  }
  function n(o) { return Object.keys(o || {}).length; }

  W.hwDone = function (h) {
    var s = st(h.id);
    return n(s.found) + n(s.gaps) + n(s.said) + n(s.mine) + n(s.told);
  };
  W.hwTotal = function (h) {
    return (h.find || []).length + (h.gaps || []).length +
      ((h.chunks && h.chunks.items) || []).length +
      ((h.mine && h.mine.items) || []).length +
      ((h.retell && h.retell.items) || []).length;
  };
  W.hwProgress = function (h) {
    var t = W.hwTotal(h);
    return t ? Math.round(W.hwDone(h) * 100 / t) : 0;
  };

  /* ---------- список ---------- */
  W.viewHomework = function () {
    var list = W.homeworks();
    if (!list.length) {
      return '<div class="empty"><b>No homework yet</b>' +
        '<p>Домашка появится здесь после урока.</p></div>';
    }
    return '<div class="h">Homework</div>' +
      list.map(function (h) {
        var p = W.hwProgress(h);
        return '<button class="hcard" data-hw="' + h.id + '">' +
          '<div class="hrow"><div class="he">' + (h.emoji || '📝') + '</div>' +
          '<div style="flex:1;min-width:0">' +
          '<div class="htopic">' + esc(h.topic) + '</div>' +
          '<div class="htitle">' + esc(h.title) + '</div>' +
          '<div class="hsub">' + esc(h.sub || '') + '</div></div>' +
          '<div class="hp">' + p + '%</div></div>' +
          '<div class="bar"><i style="width:' + p + '%"></i></div></button>';
      }).join('');
  };

  /* ---------- текст: слова НЕ подсвечены, ученик ищет сам ----------
     Каждое слово можно нажать. Нужное — засчитывается и зеленеет,
     ненужное — просто вздрагивает, без подсказки. */
  function reEsc(x) { return String(x).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  function wrapPlain(s) {
    return s.replace(/([A-Za-z][A-Za-z’'-]*)|([\s\S][^A-Za-z]*)/g, function (m, w, other) {
      return w ? '<b class="w">' + esc(w) + '</b>' : esc(other || '');
    });
  }

  function markStory(text, targets) {
    var words = (targets || []).map(function (t) { return t.en; })
      .sort(function (a, b) { return b.length - a.length; });
    if (!words.length) return wrapPlain(text);

    var re = new RegExp('(' + words.map(reEsc).join('|') + ')', 'gi');
    var out = '', last = 0, m;
    while ((m = re.exec(text)) !== null) {
      out += wrapPlain(text.slice(last, m.index));
      out += '<b class="w" data-t="' + esc(m[0].toLowerCase()) + '">' + esc(m[0]) + '</b>';
      last = m.index + m[0].length;
    }
    return out + wrapPlain(text.slice(last));
  }

  function ruOf(h, w) {
    var r = '';
    (h.find || []).forEach(function (t) {
      if (!r && t.en.toLowerCase() === String(w).toLowerCase()) r = t.ru;
    });
    return r;
  }

  /* ---------- экран домашки ---------- */
  W.openHomework = function (id) {
    var h = W.homework(id);
    if (!h) return;
    var body = W.open(h.title);
    body.style.justifyContent = 'flex-start';
    var ruOn = false;

    function draw() {
      var s = st(h.id);
      var findN = (h.find || []).length;
      var gapsN = (h.gaps || []).length;
      var ch = (h.chunks && h.chunks.items) || [];
      var mine = (h.mine && h.mine.items) || [];
      var ret = (h.retell && h.retell.items) || [];

      body.innerHTML =
        '<div class="q-label">' + esc(h.topic) + '</div>' +

        /* 1 — найти слова */
        '<div class="h">1 · Reading <b>' + W.hwDone(h) + ' / ' + W.hwTotal(h) + '</b></div>' +
        '<div class="task-note">Прочитай текст целиком. Найди в нём <b>' + findN +
        '</b> слов и выражений по теме «Сборы в поездку и аэропорт». ' +
        'Нажми на каждое найденное слово один раз — оно подсветится и покажет перевод.</div>' +
        '<div class="story">' +
        h.story.map(function (p) {
          return '<p class="sp">' + markStory(p.en, h.find) +
            '<span class="sru' + (ruOn ? '' : ' hidden') + '">' + esc(p.ru) + '</span></p>';
        }).join('') + '</div>' +
        '<div class="counter-line"><b>' + n(s.found) + '</b> / ' + findN + ' found</div>' +
        '<button class="btn btn-g" id="ruBtn">' +
        (ruOn ? 'Спрятать перевод' : 'Показать перевод') + '</button>' +

        /* 2 — фразы целиком */
        (ch.length ? '<div class="h">2 · Useful phrases <b>' + n(s.said) + ' / ' + ch.length + '</b></div>' +
          '<div class="task-note">' + esc(h.chunks.note) + '</div>' +
          '<div class="card">' +
          ch.map(function (c, i) {
            var on = !!s.said['c' + i];
            return '<div class="ch-line' + (on ? ' done' : '') + '">' +
              '<button class="ch-say" data-say="' + i + '">🔊</button>' +
              '<div style="flex:1;min-width:0"><div class="ch-en">' + esc(c.en) + '</div>' +
              '<div class="ch-ru">' + esc(c.ru) + '</div></div>' +
              '<button class="tick' + (on ? ' on' : '') + '" data-c="' + i + '">' +
              (on ? '✓' : '') + '</button></div>';
          }).join('') + '</div>' : '') +

        /* 3 — пропуски */
        (gapsN ? '<div class="h">3 · Fill in the gaps <b>' + n(s.gaps) + ' / ' + gapsN + '</b></div>' +
          '<div class="task-note">Вставь в пропуски слова из текста, которые ты нашёл ' +
          'в первом задании. Подбирай по смыслу. Проверь себя кнопкой <b>Check</b> ' +
          'и переведи каждое предложение на русский вслух.</div>' +
          '<div class="card gapbox">' +
          h.gaps.map(function (g, i) {
            var ok = !!s.gaps['g' + i];
            var parts = esc(g.s).split('___');
            return '<div class="gline' + (ok ? ' ok' : '') + '">' +
              '<span>' + parts[0] + '</span>' +
              (ok ? '<b class="gword">' + esc(g.a) + '</b>'
                  : '<input class="ginp" id="g' + i + '" autocomplete="off" ' +
                    'autocorrect="off" autocapitalize="off">') +
              '<span>' + (parts[1] || '') + '</span></div>';
          }).join('') +
          '<div class="inc" id="inc"></div>' +
          (n(s.gaps) < gapsN ? '<button class="btn btn-o" id="gCheck">Check</button>' : '') +
          '</div>' : '') +

        /* 4 — про себя */
        (mine.length ? '<div class="h">4 · Speaking · about you <b>' + n(s.mine) + ' / ' + mine.length + '</b></div>' +
          '<div class="task-note">' + esc(h.mine.note) + '</div>' +
          '<div class="card">' +
          mine.map(function (q, i) {
            var on = !!s.mine['m' + i];
            return '<div class="ch-line' + (on ? ' done' : '') + '">' +
              '<div style="flex:1">' + esc(q) + '</div>' +
              '<button class="tick' + (on ? ' on' : '') + '" data-m="' + i + '">' +
              (on ? '✓' : '') + '</button></div>';
          }).join('') + '</div>' : '') +

        /* 5 — рассказать три раза */
        (ret.length ? '<div class="h">5 · Speaking · retell the story <b>' + n(s.told) + ' / ' + ret.length + '</b></div>' +
          '<div class="task-note">' + esc(h.retell.note) + '</div>' +
          '<div class="card">' +
          '<div class="chips">' +
          (h.linkers || []).map(function (l, i) {
            return '<button class="chip' + (s.used['u' + i] ? ' in' : '') +
              '" data-u="' + i + '" title="' + esc(l.ru) + '">' + esc(l.en) + '</button>';
          }).join('') + '</div>' +
          '<div class="hintline" style="margin-bottom:12px">' + esc(h.retell.use) + '</div>' +
          ret.map(function (r, i) {
            var on = !!s.told['t' + i];
            return '<div class="ch-line' + (on ? ' done' : '') + '">' +
              '<div style="flex:1">' + esc(r) + '</div>' +
              '<button class="tick' + (on ? ' on' : '') + '" data-r="' + i + '">' +
              (on ? '✓' : '') + '</button></div>';
          }).join('') + '</div>' : '') +

        /* вопросы к уроку */
        '<div class="h">Questions for the lesson</div>' +
        '<div class="card qlist">' +
        (h.questions || []).map(function (q, i) {
          return '<div class="qq"><b>' + (i + 1) + '</b> ' + esc(q) + '</div>';
        }).join('') + '</div>';

      /* --- обработчики --- */
      $('#ruBtn').onclick = function () { ruOn = !ruOn; draw(); };

      Array.prototype.forEach.call(body.querySelectorAll('.w'), function (b) {
        var t = b.dataset.t;
        if (t && s.found[t]) b.classList.add('on');
        b.onclick = function () {
          if (!t) { W.wrongFx(b); return; }          /* не то слово — только вздрогнуло */
          if (!s.found[t]) {
            s.found[t] = 1;
            W.saveNow();
            W.addXP(5);
            W.toast(b.textContent + ' — ' + ruOf(h, t));
            draw();
          } else {
            W.toast(b.textContent + ' — ' + ruOf(h, t));
          }
        };
      });

      Array.prototype.forEach.call(body.querySelectorAll('[data-say]'), function (b) {
        b.onclick = function () { W.speak(ch[+b.dataset.say].en); };
      });

      function toggle(sel, bag, pre) {
        Array.prototype.forEach.call(body.querySelectorAll(sel), function (b) {
          b.onclick = function () {
            var k = pre + b.dataset[sel.replace(/\[data-|\]/g, '')];
            if (bag[k]) delete bag[k]; else bag[k] = 1;
            W.saveNow(); draw();
          };
        });
      }
      toggle('[data-c]', s.said, 'c');
      toggle('[data-m]', s.mine, 'm');
      toggle('[data-r]', s.told, 't');
      toggle('[data-u]', s.used, 'u');

      if ($('#gCheck')) $('#gCheck').onclick = function () {
        var right = 0, wrong = 0;
        h.gaps.forEach(function (g, i) {
          var el = $('#g' + i);
          if (!el) return;
          var v = W.norm(el.value);
          if (!v) return;
          if (v === W.norm(g.a)) { s.gaps['g' + i] = 1; right++; }
          else { wrong++; W.wrongFx(el); }
        });
        if (right) { W.saveNow(); W.addXP(right * 10); draw(); }
        else if (!wrong) W.toast('Впиши хотя бы одно слово');
      };
    }
    draw();
  };
})();
