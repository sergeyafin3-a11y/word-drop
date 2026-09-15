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

  function st(h) {
    if (!W.s.hw) W.s.hw = {};
    if (!W.s.hw[h.id]) W.s.hw[h.id] = {};
    return W.s.hw[h.id];
  }

  /* подпись на кнопке: когда проверяли и с каким результатом */
  W.checkSub = function (h) {
    var last = st(h).check;
    var total = 0;
    (h.check && h.check.rounds || []).forEach(function (r) { total += r.items.length; });
    if (!last || !last.total) return total + ' tasks · 5 rounds';
    return 'Last check: ' + last.ok + ' / ' + last.total + ' · ' + last.date;
  };

  W.hwCheck = function (h) {
    if (!h.check) return;
    var queue = [];
    h.check.rounds.forEach(function (r, ri) {
      r.items.forEach(function (it, ii) {
        queue.push({ r: r, rn: ri + 1, first: ii === 0, it: it });
      });
    });

    var idx = 0, ok = 0, xp = 0, miss = [];
    var body = W.open('Lesson check');

    function finish() {
      var s = st(h);
      s.check = {
        ok: ok, total: queue.length,
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }),
        miss: miss
      };
      W.saveNow();
      var msg = miss.length
        ? 'Повторить: ' + miss.join(', ') + '. Эти слова вернулись в Learn.'
        : 'Все слова на месте. Отличная работа!';
      W.result(ok + '/' + queue.length, 'without help', msg, xp, function () { W.hwCheck(h); });
    }

    function draw() {
      if (idx >= queue.length) return finish();
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
})();
