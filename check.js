/* check.js — Lesson check: разминка в начале урока на проверку домашки.
   Задания НОВЫЕ, не повтор домашки: узнать слово по описанию, сказать по-английски,
   применить в ситуации, рассказать новую историю, проговорить минуту о себе.
   Не вспомнил слово — оно уходит обратно в повторение (Learn). */
(function () {
  var W = window.WD;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = W.esc;

  function wordByText(en) {
    var key = W.wkey(en), found = null;
    W.allWords().forEach(function (w) { if (!found && W.wkey(w.en) === key) found = w; });
    return found;
  }

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i];
      a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function st(h) {
    if (!W.s.hw) W.s.hw = {};
    if (!W.s.hw[h.id]) W.s.hw[h.id] = {};
    return W.s.hw[h.id];
  }

  /* подпись на кнопке: когда проверяли и с каким результатом */
  W.checkSub = function (h) {
    var last = st(h).check;
    var total = 0, rounds = (h.check && h.check.rounds || []).length;
    (h.check && h.check.rounds || []).forEach(function (r) { total += (r.pairs || r.items || []).length; });
    if (!last || !last.total) return total + ' tasks · ' + rounds + ' rounds';
    return 'Last check: ' + last.ok + ' / ' + last.total + ' · ' + last.date;
  };

  W.hwCheck = function (h) {
    if (!h.check) return;
    var queue = [], total = 0;
    h.check.rounds.forEach(function (r, ri) {
      /* раунд-сопоставление — один шаг на все пары, а в зачёт идёт каждая пара */
      if (r.pairs) {
        queue.push({ r: r, rn: ri + 1, match: true });
        total += r.pairs.length;
        return;
      }
      r.items.forEach(function (it, ii) {
        queue.push({ r: r, rn: ri + 1, first: ii === 0, it: it });
      });
      total += r.items.length;
    });

    var idx = 0, ok = 0, xp = 0, miss = [];
    var body = W.open(h.checkTitle || 'Lesson check');

    function finish() {
      var s = st(h);
      s.check = {
        ok: ok, total: total,
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }),
        miss: miss
      };
      W.saveNow();
      var msg = miss.length
        ? 'Повторить: ' + miss.join(', ') + '. Эти слова вернулись в Learn.'
        : 'Все слова на месте. Отличная работа!';
      W.result(ok + '/' + total, 'without help', msg, xp, function () { W.hwCheck(h); });
    }

    /* раунд «соедини пары»: слева слово по-русски, справа предложение по-английски.
       Оба столбца перемешаны. Пара без ошибки идёт в зачёт, с ошибкой — слово в повторение. */
    function drawMatch(q) {
      var r = q.r, pairs = r.pairs;
      var L = shuffle(pairs.map(function (p, i) { return i; }));
      var R = shuffle(pairs.map(function (p, i) { return i; }));
      var done = {}, bad = {}, sel = null, left = pairs.length;
      W.count((idx + 1) + '/' + queue.length);
      body.style.justifyContent = 'flex-start';
      body.innerHTML =
        '<div class="ck-round">Round ' + q.rn + ' · ' + esc(r.title) + '</div>' +
        '<div class="task-note">' + esc(r.note) + '</div>' +
        '<div class="mt-grid"><div class="mt-col">' +
        L.map(function (i) {
          return '<button class="mt-item mt-ru" data-side="l" data-i="' + i + '">' + esc(pairs[i].ru) + '</button>';
        }).join('') + '</div><div class="mt-col">' +
        R.map(function (i) {
          return '<button class="mt-item" data-side="r" data-i="' + i + '">' + esc(pairs[i].en) + '</button>';
        }).join('') + '</div></div>' +
        '<div class="mt-foot" id="mtFoot"></div>';

      function finishMatch() {
        var clean = 0;
        pairs.forEach(function (p, i) {
          var good = !bad[i];
          if (good) clean++;
          if (p.w) {
            var w = wordByText(p.w);
            if (w) W.mark(w, good);
            if (!good && miss.indexOf(p.w) === -1) miss.push(p.w);
          }
        });
        ok += clean; xp += clean * 10;
        if (clean) W.addXP(clean * 10);
        $('#mtFoot').innerHTML =
          '<div class="mt-res">' + clean + ' / ' + pairs.length + ' без ошибок</div>' +
          '<button class="btn btn-green" id="mtNext">Next →</button>';
        $('#mtNext').onclick = function () { idx++; draw(); };
      }

      Array.prototype.forEach.call(body.querySelectorAll('.mt-item'), function (b) {
        b.onclick = function () {
          var i = +b.dataset.i, side = b.dataset.side;
          if (done[i]) return;
          /* первый клик или клик в том же столбце — просто выбираем */
          if (!sel || sel.side === side) {
            if (sel) sel.el.classList.remove('sel');
            if (sel && sel.el === b) { sel = null; return; }
            sel = { el: b, i: i, side: side };
            b.classList.add('sel');
            return;
          }
          var other = sel;
          sel = null;
          other.el.classList.remove('sel');
          if (other.i === i) {
            done[i] = 1; left--;
            b.classList.add('ok'); other.el.classList.add('ok');
            if (!left) finishMatch();
          } else {
            bad[side === 'l' ? i : other.i] = 1;
            [b, other.el].forEach(function (x) {
              x.classList.add('no');
              W.wrongFx(x);
              setTimeout(function () { x.classList.remove('no'); }, 600);
            });
          }
        };
      });
    }

    function draw() {
      if (idx >= queue.length) return finish();
      if (queue[idx].match) return drawMatch(queue[idx]);
      var q = queue[idx], it = q.it, r = q.r;
      var shown = false;
      W.count((idx + 1) + '/' + queue.length);
      body.style.justifyContent = 'flex-start';

      body.innerHTML =
        '<div class="ck-round">Round ' + q.rn + ' · ' + esc(r.title) + '</div>' +
        '<div class="task-note">' + esc(r.note) + '</div>' +
        '<div class="card ck-card">' +
        '<div class="ck-q">' + esc(it.q) + '</div>' +
        (it.use ? '<div class="chips ck-use">' + it.use.map(function (u) {
          return '<span class="chip">' + esc(u) + '</span>';
        }).join('') + '</div>' : '') +
        (r.timer ? '<div class="ck-timer" id="ckT">' + r.timer + '</div>' +
          '<button class="btn btn-o" id="ckStart">Start ' + r.timer + ' seconds</button>' : '') +
        '<div class="ck-a hidden" id="ckA">' +
        (it.a ? '<div class="ck-a-l">' + (r.open ? 'Sample answer' : 'Answer') + '</div>' +
          '<div class="ck-a-t">' + esc(it.a) + '</div>' +
          '<button class="ch-say" id="ckSay">🔊</button>' : '') +
        '</div></div>' +
        (it.a ? '<button class="btn btn-g" id="ckShow">Show answer</button>' : '') +
        '<div class="row2" style="margin-top:12px">' +
        '<button class="btn btn-g" id="ckNo">Not yet</button>' +
        '<button class="btn btn-green" id="ckYes">Got it ✓</button></div>';

      if ($('#ckShow')) $('#ckShow').onclick = function () {
        shown = !shown;
        $('#ckA').classList.toggle('hidden', !shown);
        $('#ckShow').textContent = shown ? 'Hide answer' : 'Show answer';
      };
      if ($('#ckSay')) $('#ckSay').onclick = function () { W.speak(it.a); };

      if ($('#ckStart')) $('#ckStart').onclick = function () {
        var left = r.timer, t = $('#ckT');
        $('#ckStart').disabled = true;
        if (W.timerId) clearInterval(W.timerId);
        W.timerId = setInterval(function () {
          left--;
          if (!t.isConnected) { clearInterval(W.timerId); W.timerId = null; return; }
          t.textContent = left > 0 ? left : 'Time!';
          if (left <= 0) { clearInterval(W.timerId); W.timerId = null; t.classList.add('done'); }
        }, 1000);
      };

      function next(good) {
        if (W.timerId) { clearInterval(W.timerId); W.timerId = null; }
        if (it.w) {
          var w = wordByText(it.w);
          if (w) W.mark(w, good);
          if (!good && miss.indexOf(it.w) === -1) miss.push(it.w);
        }
        if (good) { ok++; xp += 10; W.addXP(10); }
        idx++;
        draw();
      }
      $('#ckYes').onclick = function () { next(true); };
      $('#ckNo').onclick = function () { next(false); };
    }
    draw();
  };

  /* ---------- Final Test: контрольная в конце темы, из final-data.js ---------- */
  W.finals = function () { return window.FINALS || []; };
  W.final = function (id) {
    var a = W.finals();
    for (var i = 0; i < a.length; i++) if (!id || a[i].id === id) return a[i];
    return null;
  };
  /* заставка: название, что внутри, прошлый результат и кнопка Start */
  W.finalTest = function (id) {
    var f = W.final(id);
    if (!f) { W.toast('Final test not found'); return; }
    var rounds = f.check.rounds.length, n = 0;
    f.check.rounds.forEach(function (r) { n += (r.pairs || r.items || []).length; });
    var last = st(f).check;
    var body = W.open(f.checkTitle || 'Final Test');
    body.style.justifyContent = 'center';
    body.innerHTML =
      '<div class="ft-hero">' +
      '<div class="ft-flag">' + (f.emoji || '🏁') + '</div>' +
      '<div class="ft-kick">Final Test</div>' +
      '<div class="ft-title">' + esc(f.sub || '') + '</div>' +
      (f.intro ? '<div class="ft-sub">' + esc(f.intro) + '</div>' : '') +
      '<div class="ft-stats">' +
      '<span><b>' + rounds + '</b>rounds</span>' +
      '<span><b>' + n + '</b>tasks</span>' +
      '<span><b>~' + (f.minutes || 30) + '</b>minutes</span></div>' +
      (last && last.total ? '<div class="ft-last">Last time: ' + last.ok + ' / ' + last.total +
        ' · ' + esc(last.date) + '</div>' : '') +
      '<button class="btn btn-green ft-go" id="ftGo">Start</button>' +
      '</div>';
    $('#ftGo').onclick = function () { W.hwCheck(f); };
  };
})();
