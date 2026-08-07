/* irreg.js — набор «Irregular verbs» и активности на формы глагола */
(function () {
  var W = window.WD;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = W.esc;

  W.irregular = function () { return window.IRREGULAR || []; };

  /* глаголы в общем формате: en = начальная форма, прогресс по ней же */
  W.irregList = function () {
    return W.irregular().map(function (v, i) {
      return {
        tid: 'irreg', kind: 'verb', i: i,
        en: v.v1, ru: v.ru, icon: '',
        v1: v.v1, v2: v.v2, v3: v.v3, group: v.group,
        st: W.wordState(v.v1)
      };
    });
  };

  W.GROUPS = {
    same: { label: 'All three the same', hint: 'put — put — put' },
    v2v3: { label: 'Past = Participle', hint: 'buy — bought — bought' },
    all3: { label: 'All three different', hint: 'go — went — gone' }
  };

  /* ---------- 1. таблица всех форм ---------- */
  W.verbTable = function () {
    var body = W.open('Verb table');
    body.style.justifyContent = 'flex-start';
    var list = W.irregList();
    var html = '';
    ['same', 'v2v3', 'all3'].forEach(function (g) {
      var part = list.filter(function (v) { return v.group === g; });
      if (!part.length) return;
      html += '<div class="h">' + W.GROUPS[g].label + ' <b>' + part.length + '</b></div>' +
        '<div class="gnote">' + W.GROUPS[g].hint + '</div>' +
        '<div class="gtable-wrap"><table class="gtable">' +
        '<tr><th>Verb</th><th>Past</th><th>Participle</th><th>Перевод</th></tr>' +
        part.map(function (v) {
          return '<tr><td class="k">' + esc(v.v1) + '</td><td>' + esc(v.v2) + '</td>' +
            '<td>' + esc(v.v3) + '</td><td class="ru-cell">' + esc(v.ru) + '</td></tr>';
        }).join('') + '</table></div>';
    });
    body.innerHTML = html;
  };

  /* ---------- 2. карточки: go → went · gone ---------- */
  W.verbCards = function () {
    var queue = W.shuffle(W.due(W.irregList()));
    if (!queue.length) queue = W.shuffle(W.irregList());
    var idx = 0, shown = false, right = 0, xp = 0;
    var body = W.open('Verb cards');

    function draw() {
      if (idx >= queue.length) {
        return W.result(right + '/' + queue.length, 'you knew', 'The rest come back tomorrow.',
          xp, function () { W.verbCards(); });
      }
      var v = queue[idx];
      W.count((idx + 1) + '/' + queue.length);
      body.innerHTML =
        '<div class="flash" id="fl">' +
        (W.canSpeak() ? '<button class="say" id="say" aria-label="Listen">🔊</button>' : '') +
        '<div class="big">' + esc(v.v1) + '</div>' +
        (shown
          ? '<div class="forms">' + esc(v.v2) + ' · ' + esc(v.v3) + '</div>' +
          '<div class="tr">' + esc(v.ru) + '</div>'
          : '<div class="tip">past and participle?</div>') +
        '</div>' +
        (shown
          ? '<div class="row2" style="margin-top:14px">' +
          '<button class="btn btn-g" id="bAgain">Again</button>' +
          '<button class="btn btn-green" id="bKnow">I know it</button></div>'
          : '<button class="btn btn-o" id="bShow">Show the forms</button>');

      function say() { W.speak(v.v1 + ', ' + v.v2.replace('/', 'or') + ', ' + v.v3); }
      if ($('#say')) $('#say').onclick = function (e) { e.stopPropagation(); say(); };
      say();
      $('#fl').onclick = function () { if (!shown) { shown = true; draw(); } };
      if ($('#bShow')) $('#bShow').onclick = function () { shown = true; draw(); };
      if ($('#bKnow')) $('#bKnow').onclick = function () {
        W.mark(v, true); right++; xp += W.XP.card; W.addXP(W.XP.card);
        idx++; shown = false; W.later(body, draw, 260);
      };
      if ($('#bAgain')) $('#bAgain').onclick = function () {
        W.mark(v, false); idx++; shown = false; draw();
      };
    }
    draw();
  };

  /* ---------- 3. впиши форму (Past или Participle) ---------- */
  W.verbType = function (which) {
    var queue = W.pick(W.irregList(), Math.min(30, W.irregular().length));
    var idx = 0, right = 0, xp = 0;
    var title = which === 3 ? 'Type the participle' : 'Type the past';
    var body = W.open(title);

    function draw() {
      if (idx >= queue.length) {
        return W.result(right + '/' + queue.length, 'right the first time', 'Say them out loud too.',
          xp, function () { W.verbType(which); });
      }
      var v = queue[idx];
      var answer = which === 3 ? v.v3 : v.v2;
      var tries = 0;
      W.count((idx + 1) + '/' + queue.length);
      body.innerHTML =
        '<div class="q-label">' + (which === 3 ? 'participle (3rd form)' : 'past (2nd form)') + '</div>' +
        '<div class="sprint-q">' + esc(v.v1) +
        '<span class="v-ru">' + esc(v.ru) + '</span></div>' +
        '<input class="type-in" id="inp" autocomplete="off" autocorrect="off" autocapitalize="off" ' +
        'spellcheck="false" placeholder="' + esc(answer.charAt(0)) + '…">' +
        '<div class="inc" id="inc"></div><div class="hintline" id="hint"></div>' +
        '<button class="btn btn-o" id="ok">Check</button>';

      var inp = $('#inp');
      inp.focus();
      function check() {
        if (W.norm(inp.value) === W.norm(answer)) {
          inp.classList.add('ok');
          if (tries === 0) right++;
          xp += W.XP.type; W.addXP(W.XP.type); W.mark(v, tries === 0);
          W.speak(v.v1 + ', ' + answer);
          idx++;
          W.later(body, draw, 620);
        } else {
          tries++;
          W.wrongFx(inp);
          if (tries >= 3) $('#hint').textContent = 'starts with: ' + answer.slice(0, tries - 1) + '…';
          inp.focus();
        }
      }
      $('#ok').onclick = check;
      inp.onkeydown = function (e) { if (e.key === 'Enter') check(); };
    }
    draw();
  };

  /* ---------- 4. соедини начальную форму с прошедшей ---------- */
  W.verbMatch = function () {
    var round = 0, mistakes = 0, xp = 0, t0 = Date.now();
    var body = W.open('Match the forms');

    function draw() {
      var six = W.pick(W.irregList(), 6);
      var left = W.shuffle(six), rightArr = W.shuffle(six);
      var sel = null, done = 0;
      W.count('round ' + (round + 1) + '/5');
      body.innerHTML =
        '<div class="q-label">verb → past form</div>' +
        '<div class="match-grid"><div id="colA"></div><div id="colB"></div></div>';
      var colA = $('#colA'), colB = $('#colB');
      colA.style.display = colB.style.display = 'grid';
      colA.style.gap = colB.style.gap = '10px';

      function cell(text, v, side, col) {
        var c = document.createElement('button');
        c.className = 'mcell'; c.textContent = text; c.dataset.key = v.v1;
        c.onclick = function () { hit(c, side, v); };
        col.appendChild(c);
      }
      left.forEach(function (v) { cell(v.v1, v, 'a', colA); });
      rightArr.forEach(function (v) { cell(v.v2, v, 'b', colB); });

      function hit(c, side, v) {
        if (c.classList.contains('ok')) return;
        if (!sel) { sel = { c: c, side: side, v: v }; c.classList.add('sel'); return; }
        if (sel.c === c) { c.classList.remove('sel'); sel = null; return; }
        if (sel.side === side) { sel.c.classList.remove('sel'); sel = { c: c, side: side, v: v }; c.classList.add('sel'); return; }
        if (sel.c.dataset.key === c.dataset.key) {
          sel.c.classList.remove('sel'); sel.c.classList.add('ok'); c.classList.add('ok');
          W.mark(v, true); xp += W.XP.match; W.addXP(W.XP.match);
          done++; sel = null;
          if (done === left.length) {
            round++;
            if (round >= 5) {
              var sec = Math.round((Date.now() - t0) / 1000);
              return W.result(sec + 's', 'for 5 rounds',
                mistakes === 0 ? 'No mistakes at all!' : 'Mistakes: ' + mistakes,
                xp, function () { W.verbMatch(); });
            }
            W.later(body, draw, 350);
          }
        } else {
          mistakes++; W.mark(v, false);
          var a = sel.c, b = c;
          a.classList.remove('sel'); a.classList.add('bad'); b.classList.add('bad');
          W.wrongFx(b, 'Incorrect');
          sel = null;
          setTimeout(function () { a.classList.remove('bad'); b.classList.remove('bad'); }, 500);
        }
      }
    }
    draw();
  };

  /* ---------- 5. спринт: выбрать верную вторую форму ---------- */
  W.verbSprint = function () {
    var pool = W.irregList();
    var score = 0, combo = 0, best = 0, left = 60, lock = false, xp = 0;
    var body = W.open('Verb sprint');

    W.timerId = setInterval(function () {
      left--;
      var el = $('#tmr');
      if (el) el.textContent = left + 's';
      if (left <= 0) finish();
    }, 1000);

    function finish() {
      clearInterval(W.timerId); W.timerId = null;
      var rec = W.record('verbSprint', score);
      W.result(score, 'points',
        (rec ? 'New record! ' : 'Record: ' + (W.s.records.verbSprint || 0) + '. ') + 'Best combo: ' + best,
        xp, function () { W.verbSprint(); });
    }

    function draw() {
      if (left <= 0) return;
      var v = W.pick(pool, 1)[0], missed = false;
      var others = W.shuffle(pool.filter(function (x) { return x.v2 !== v.v2; })).slice(0, 3);
      var opts = W.shuffle([v].concat(others));
      body.innerHTML =
        '<div class="hud"><div class="t" id="tmr">' + left + 's</div><div class="t">' + score + '</div></div>' +
        '<div class="combo">' + (combo > 1 ? 'combo ×' + combo : '') + '</div>' +
        '<div class="sprint-q">' + esc(v.v1) + '<span class="v-ru">' + esc(v.ru) + '</span></div>' +
        '<div class="inc" id="inc"></div><div id="opts"></div>';
      var box = $('#opts');
      opts.forEach(function (o) {
        var b = document.createElement('button');
        b.className = 'opt'; b.textContent = o.v2;
        b.onclick = function () {
          if (lock) return;
          if (o.v2 === v.v2) {
            lock = true;
            if (!missed) { combo++; if (combo > best) best = combo; }
            var add = W.XP.sprint + (missed ? 0 : Math.min(combo, 5) * 2);
            score += add; xp += add; W.addXP(add);
            W.mark(v, !missed); b.classList.add('ok');
            W.later(body, function () { lock = false; draw(); }, 320);
          } else {
            missed = true; combo = 0; W.mark(v, false);
            b.classList.add('bad', 'dead');
            W.wrongFx(b);
          }
        };
        box.appendChild(b);
      });
    }
    draw();
  };
})();
