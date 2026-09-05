/* homework.js — вкладка Homework: одна домашка = одна тема, без деления по дням */
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

  /* ---------- что сделано ---------- */
  function st(id) {
    if (!W.s.hw) W.s.hw = {};
    var s = W.s.hw[id];
    if (!s) s = W.s.hw[id] = {};
    if (!s.found) s.found = {};
    if (!s.gaps) s.gaps = {};
    if (!s.used) s.used = {};
    return s;
  }
  function n(o) { return Object.keys(o || {}).length; }

  W.hwDone = function (h) {
    var s = st(h.id);
    return n(s.found) + n(s.gaps) + (s.linkers ? 1 : 0) + (s.speak ? 1 : 0);
  };
  W.hwTotal = function (h) {
    return (h.find || []).length + (h.gaps || []).length +
      (h.linkers ? 1 : 0) + (h.speaking ? 1 : 0);
  };
  W.hwProgress = function (h) {
    var t = W.hwTotal(h);
    return t ? Math.round(W.hwDone(h) * 100 / t) : 0;
  };

  /* ---------- список домашек ---------- */
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
          '<div class="bar"><i style="width:' + p + '%"></i></div>' +
          '</button>';
      }).join('');
  };

  /* ---------- подсветка слов прямо в тексте ---------- */
  function reEsc(x) { return String(x).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  function markStory(text, targets) {
    var out = esc(text);
    if (!targets || !targets.length) return out;
    /* длинные раньше коротких: delayed не должен ловиться как delay */
    var words = targets.map(function (t) { return t.en; })
      .sort(function (a, b) { return b.length - a.length; });
    var re = new RegExp('(' + words.map(reEsc).join('|') + ')', 'gi');
    return out.replace(re, function (m) {
      return '<b class="tw" data-w="' + m.toLowerCase() + '">' + m + '</b>';
    });
  }

  function ruOf(h, w) {
    var found = null;
    (h.find || []).forEach(function (t) {
      if (!found && t.en.toLowerCase() === String(w).toLowerCase()) found = t.ru;
    });
    return found || '';
  }

  /* ---------- сама домашка ---------- */
  W.openHomework = function (id) {
    var h = W.homework(id);
    if (!h) return;
    var body = W.open(h.title);
    body.style.justifyContent = 'flex-start';
    var ruOn = false;

    function draw() {
      var s = st(h.id);
      var foundN = n(s.found), findN = (h.find || []).length;
      var gapN = n(s.gaps), gapsN = (h.gaps || []).length;

      body.innerHTML =
        '<div class="q-label">' + esc(h.topic) + '</div>' +

        /* ---- текст ---- */
        '<div class="h">The story <b>' + W.hwDone(h) + ' / ' + W.hwTotal(h) + '</b></div>' +
        '<div class="task-note">Найди в тексте <b>' + findN + '</b> слов темы. ' +
        'Нажми на слово — оно подсветится и покажет перевод.</div>' +
        '<div class="story">' +
        h.story.map(function (p) {
          return '<p class="sp">' + markStory(p.en, h.find) +
            '<span class="sru' + (ruOn ? '' : ' hidden') + '">' + esc(p.ru) + '</span></p>';
        }).join('') + '</div>' +
        '<div class="counter-line"><b>' + foundN + '</b> / ' + findN + ' words found</div>' +
        '<button class="btn btn-g" id="ruBtn">' +
        (ruOn ? 'Спрятать перевод' : 'Показать перевод') + '</button>' +

        /* ---- пропуски ---- */
        (gapsN ? '<div class="h">Fill the gaps <b>' + gapN + ' / ' + gapsN + '</b></div>' +
          '<div class="card gapbox">' +
          h.gaps.map(function (g, i) {
            var ok = !!s.gaps['g' + i];
            var parts = esc(g.s).split('___');
            return '<div class="gline' + (ok ? ' ok' : '') + '">' +
              '<span>' + parts[0] + '</span>' +
              (ok ? '<b class="gword">' + esc(g.a) + '</b>'
                  : '<input class="ginp" id="g' + i + '" data-g="' + i + '" ' +
                    'autocomplete="off" autocorrect="off" autocapitalize="off">') +
              '<span>' + (parts[1] || '') + '</span></div>';
          }).join('') +
          '<div class="inc" id="inc"></div>' +
          (gapN < gapsN ? '<button class="btn btn-o" id="gCheck">Check</button>' : '') +
          '</div>' : '') +

        /* ---- связки ---- */
        (h.linkers ? '<div class="h">Linkers · связки для рассказа</div>' +
          '<div class="task-note">Без них получится список предложений, а не рассказ.</div>' +
          '<div class="card linkbox">' +
          h.linkers.map(function (l) {
            return '<div class="lk"><b>' + esc(l.en) + '</b><span>' + esc(l.ru) + '</span></div>';
          }).join('') +
          '<button class="btn ' + (s.linkers ? 'btn-green' : 'btn-o') + '" id="lkBtn">' +
          (s.linkers ? 'Learned ✓' : 'I know these') + '</button></div>' : '') +

        /* ---- устное ---- */
        (h.speaking ? '<div class="h">Speaking</div>' +
          '<div class="card speakbox">' +
          '<div class="spk-t">' + esc(h.speaking.title) + '</div>' +
          '<div class="spk-x">' + esc(h.speaking.text) + '</div>' +
          '<div class="chips">' +
          (h.linkers || []).map(function (l, i) {
            return '<button class="chip' + (s.used['u' + i] ? ' in' : '') +
              '" data-u="' + i + '">' + esc(l.en) + '</button>';
          }).join('') + '</div>' +
          '<button class="btn ' + (s.speak ? 'btn-green' : 'btn-o') + '" id="spBtn">' +
          (s.speak ? 'Done ✓' : 'I said it out loud') + '</button></div>' : '') +

        /* ---- вопросы к уроку ---- */
        '<div class="h">Questions for the lesson</div>' +
        '<div class="card qlist">' +
        (h.questions || []).map(function (q, i) {
          return '<div class="qq"><b>' + (i + 1) + '</b> ' + esc(q) + '</div>';
        }).join('') + '</div>';

      /* --- обработчики --- */
      $('#ruBtn').onclick = function () { ruOn = !ruOn; draw(); };

      Array.prototype.forEach.call(body.querySelectorAll('.tw'), function (b) {
        if (s.found[b.dataset.w]) b.classList.add('on');
        b.onclick = function () {
          var w = b.dataset.w;
          if (!s.found[w]) {
            s.found[w] = 1;
            W.saveNow();
            W.addXP(5);
            W.toast(b.textContent + ' — ' + ruOf(h, w));
            draw();
          } else {
            W.toast(b.textContent + ' — ' + ruOf(h, w));
          }
        };
      });

      if ($('#gCheck')) $('#gCheck').onclick = function () {
        var wrong = 0, right = 0;
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

      if ($('#lkBtn')) $('#lkBtn').onclick = function () {
        s.linkers = s.linkers ? 0 : 1;
        if (!s.linkers) delete s.linkers;
        W.saveNow(); draw();
      };

      Array.prototype.forEach.call(body.querySelectorAll('[data-u]'), function (b) {
        b.onclick = function () {
          var k = 'u' + b.dataset.u;
          if (s.used[k]) delete s.used[k]; else s.used[k] = 1;
          W.saveNow(); draw();
        };
      });

      if ($('#spBtn')) $('#spBtn').onclick = function () {
        s.speak = s.speak ? 0 : 1;
        if (!s.speak) delete s.speak;
        W.saveNow(); draw();
      };
    }
    draw();
  };
})();
