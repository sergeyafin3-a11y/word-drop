/* home.js — активности, которые ученик делает сам */
(function () {
  var W = window.WD;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = W.esc;

  /* ---------- каркас экрана: крупно и по центру ---------- */
  var scr = null;
  W.open = function (title) {
    W.close();
    scr = document.createElement('div');
    scr.className = 'screen';
    scr.innerHTML =
      '<div class="sc-top"><button class="x" id="scX">×</button>' +
      '<div class="sc-title">' + esc(title) + '</div>' +
      '<div class="counter" id="scCount"></div></div>' +
      '<div class="sc-in" id="scBody"></div>';
    document.body.appendChild(scr);
    document.body.style.overflow = 'hidden';
    $('#scX').onclick = function () { W.close(); W.render(); };
    return $('#scBody');
  };
  W.close = function () {
    if (W.timerId) { clearInterval(W.timerId); W.timerId = null; }
    if (scr) { scr.remove(); scr = null; }
    document.body.style.overflow = '';
  };
  W.count = function (txt) { var c = $('#scCount'); if (c) c.textContent = txt; };

  W.result = function (num, cap, msg, xp, again) {
    var b = $('#scBody');
    if (!b) return;
    b.innerHTML =
      '<div class="result"><div class="num">' + esc(num) + '</div>' +
      '<div class="cap">' + esc(cap) + '</div>' +
      (xp ? '<div class="xp">+' + xp + ' XP</div>' : '') +
      '<div class="msg">' + esc(msg) + '</div></div>' +
      '<button class="btn btn-o" id="rAgain">Play again</button>' +
      '<button class="btn btn-g" id="rBack">Done</button>';
    W.count('');
    $('#rAgain').onclick = again;
    $('#rBack').onclick = function () { W.close(); W.render(); };
    W.finishAct();
  };

  /* красная вспышка + «Incorrect», правильный ответ НЕ показываем */
  W.wrongFx = function (el, msg) {
    if (el) {
      el.classList.remove('shake');
      void el.offsetWidth;
      el.classList.add('shake', 'wrong-flash');
      setTimeout(function () { el.classList.remove('wrong-flash', 'shake'); }, 700);
    }
    var inc = document.getElementById('inc');
    if (inc) {
      inc.textContent = msg || 'Incorrect — try again';
      setTimeout(function () { if (inc) inc.textContent = ''; }, 1400);
    } else {
      W.toast(msg || 'Incorrect — try again');
    }
  };

  var toastT = null;
  W.toast = function (m) {
    var old = $('.toast'); if (old) old.remove();
    var t = document.createElement('div');
    t.className = 'toast'; t.textContent = m;
    document.body.appendChild(t);
    clearTimeout(toastT);
    toastT = setTimeout(function () { t.remove(); }, 1600);
  };

  /* ---------- 1. CARDS ---------- */
  W.actFlash = function (list) {
    var queue = W.due(list);
    if (!queue.length) queue = list;
    queue = W.shuffle(queue).slice(0, 40);
    var idx = 0, shown = false, right = 0, xp = 0;
    var body = W.open('Cards');

    function draw() {
      if (idx >= queue.length) {
        return W.result(right + '/' + queue.length, 'you knew', 'Nice! Words you missed come back tomorrow.',
          xp, function () { W.actFlash(list); });
      }
      var w = queue[idx];
      W.count((idx + 1) + '/' + queue.length);
      body.innerHTML =
        '<div class="flash" id="fl">' +
        (W.canSpeak() ? '<button class="say" id="say" aria-label="Listen">🔊</button>' : '') +
        (w.icon ? '<div class="emoji">' + w.icon + '</div>' : '') +
        '<div class="big">' + esc(w.en) + '</div>' +
        (shown ? '<div class="tr">' + esc(w.ru) + '</div>'
          : '<div class="tip">Tap the card to check</div>') +
        '</div>' +
        (shown
          ? '<div class="row2" style="margin-top:14px">' +
          '<button class="btn btn-g" id="bAgain">Again</button>' +
          '<button class="btn btn-green" id="bKnow">I know it</button></div>'
          : '<button class="btn btn-o" id="bShow">Show translation</button>');

      if ($('#say')) {
        $('#say').onclick = function (e) { e.stopPropagation(); W.speak(w.en); };
      }
      W.speak(w.en);                       // произносим сразу, как показали карточку
      $('#fl').onclick = function () { if (!shown) { shown = true; draw(); } };
      if ($('#bShow')) $('#bShow').onclick = function () { shown = true; draw(); };
      if ($('#bKnow')) $('#bKnow').onclick = function () {
        W.mark(w, true); right++; xp += W.XP.card; W.addXP(W.XP.card);
        idx++; shown = false; setTimeout(draw, 260);
      };
      if ($('#bAgain')) $('#bAgain').onclick = function () {
        W.mark(w, false); idx++; shown = false; draw();
      };
    }
    draw();
  };

  /* ---------- 2. MATCH ---------- */
  W.actMatch = function (list) {
    var round = 0, mistakes = 0, xp = 0, t0 = Date.now();
    var body = W.open('Match');

    function draw() {
      var six = W.pick(list, 6);
      if (six.length < 4) {
        body.innerHTML = '<div class="empty"><b>Not enough words here yet</b></div>';
        return;
      }
      var left = W.shuffle(six), rightArr = W.shuffle(six);
      var sel = null, done = 0;
      W.count('round ' + (round + 1) + '/6');

      body.innerHTML =
        '<div class="q-label">Match the pairs</div>' +
        '<div class="match-grid"><div id="colA"></div><div id="colB"></div></div>';
      var colA = $('#colA'), colB = $('#colB');
      colA.style.display = colB.style.display = 'grid';
      colA.style.gap = colB.style.gap = '10px';

      function cell(text, w, side, col) {
        var c = document.createElement('button');
        c.className = 'mcell'; c.textContent = text;
        c.dataset.key = w.tid + '|' + w.kind + '|' + w.i;
        c.onclick = function () { hit(c, side, w); };
        col.appendChild(c);
      }
      left.forEach(function (w) { cell(w.en, w, 'a', colA); });
      rightArr.forEach(function (w) { cell(w.ru, w, 'b', colB); });

      function hit(c, side, w) {
        if (c.classList.contains('ok')) return;
        if (!sel) { sel = { c: c, side: side, w: w }; c.classList.add('sel'); return; }
        if (sel.c === c) { c.classList.remove('sel'); sel = null; return; }
        if (sel.side === side) { sel.c.classList.remove('sel'); sel = { c: c, side: side, w: w }; c.classList.add('sel'); return; }

        if (sel.c.dataset.key === c.dataset.key) {
          sel.c.classList.remove('sel'); sel.c.classList.add('ok'); c.classList.add('ok');
          W.mark(w, true); xp += W.XP.match; W.addXP(W.XP.match);
          done++; sel = null;
          if (done === left.length) {
            round++;
            if (round >= 6) {
              var sec = Math.round((Date.now() - t0) / 1000);
              return W.result(sec + 's', 'for 6 rounds',
                mistakes === 0 ? 'Perfect — no mistakes!' : 'Mistakes: ' + mistakes,
                xp, function () { W.actMatch(list); });
            }
            setTimeout(draw, 350);
          }
        } else {
          mistakes++; W.mark(w, false);
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

  /* ---------- 3. BUILD IT ---------- */
  W.actBuild = function (list) {
    function long(arr) { return arr.filter(function (w) { return w.en.trim().split(/\s+/).length >= 3; }); }
    var pool = long(list);
    /* коротких фраз в наборе мало — добираем из той же темы, потом отовсюду */
    if (pool.length < 30) {
      var sel = W.sel(), extra = [];
      if (sel.type === 'topic') {
        extra = long(W.topicAll(sel.id));
      } else {
        var t2 = W.topics()[0];
        if (t2) extra = long(W.topicAll(t2.id));
      }
      extra.concat(long(W.allWords())).forEach(function (w) {
        if (pool.length >= 30) return;
        var dup = pool.some(function (x) { return x.en === w.en; });
        if (!dup) pool.push(w);
      });
    }
    if (!pool.length) {
      W.open('Build it').innerHTML = '<div class="empty"><b>Add longer phrases first</b></div>';
      return;
    }
    var queue = W.pick(pool, Math.min(30, pool.length));
    var idx = 0, right = 0, xp = 0;
    var body = W.open('Build it');

    function draw() {
      if (idx >= queue.length) {
        return W.result(right + '/' + queue.length, 'correct', 'Now say them out loud!',
          xp, function () { W.actBuild(list); });
      }
      var w = queue[idx];
      var words = w.en.trim().split(/\s+/);
      var pool2 = W.shuffle(words.map(function (x, i) { return { t: x, i: i }; }));
      var placed = [], tries = 0;
      W.count((idx + 1) + '/' + queue.length);

      body.innerHTML =
        '<div class="ru-hint">' + esc(w.ru) + '</div>' +
        '<div class="build-target" id="tgt"></div>' +
        '<div class="inc" id="inc"></div>' +
        '<div class="build-pool" id="pool"></div>' +
        '<div class="hintline" id="hint"></div>' +
        '<button class="btn btn-o" id="chk">Check</button>' +
        '<button class="btn btn-g" id="clr">Clear</button>';

      function paint() {
        var tg = $('#tgt'), p = $('#pool');
        tg.innerHTML = ''; p.innerHTML = '';
        placed.forEach(function (item, k) {
          var c = document.createElement('button');
          c.className = 'chip in'; c.textContent = item.t;
          c.onclick = function () { placed.splice(k, 1); paint(); };
          tg.appendChild(c);
        });
        pool2.forEach(function (item) {
          var used = placed.indexOf(item) !== -1;
          var c = document.createElement('button');
          c.className = 'chip' + (used ? ' ghost' : '');
          c.textContent = item.t;
          c.onclick = function () { if (!used) { placed.push(item); paint(); } };
          p.appendChild(c);
        });
      }
      paint();

      $('#clr').onclick = function () { placed = []; paint(); };
      $('#chk').onclick = function () {
        var got = placed.map(function (x) { return x.t; }).join(' ');
        if (W.norm(got) === W.norm(w.en)) {
          W.mark(w, tries === 0); if (tries === 0) right++;
          xp += W.XP.build; W.addXP(W.XP.build);
          W.toast('Correct!');
          idx++;
          setTimeout(draw, 700);
        } else {
          tries++;
          W.wrongFx($('#tgt'));
          if (tries >= 3) $('#hint').textContent = 'starts with: ' + words.slice(0, 2).join(' ') + ' …';
        }
      };
    }
    draw();
  };

  /* ---------- 4. TYPE IT ---------- */
  W.actType = function (list) {
    var queue = W.pick(list, Math.min(30, list.length));
    var idx = 0, right = 0, xp = 0;
    var body = W.open('Type it');

    function task(w) {
      var words = w.en.trim().split(/\s+/);
      if (words.length < 3) return { prompt: null, answer: w.en };
      var longest = 0;
      words.forEach(function (x, i) {
        if (x.replace(/[^A-Za-z']/g, '').length > words[longest].length) longest = i;
      });
      var shown = words.slice();
      shown[longest] = '_____';
      return { prompt: shown.join(' '), answer: words[longest] };
    }

    function draw() {
      if (idx >= queue.length) {
        return W.result(right + '/' + queue.length, 'correct', 'Well done!',
          xp, function () { W.actType(list); });
      }
      var w = queue[idx], t = task(w);
      W.count((idx + 1) + '/' + queue.length);
      var tries = 0;
      body.innerHTML =
        '<div class="ru-hint">' + esc(w.ru) + '</div>' +
        (t.prompt ? '<div class="sprint-q" style="font-size:26px">' + esc(t.prompt) + '</div>'
          : '<div class="q-label">Write it in English</div>') +
        '<input class="type-in" id="inp" autocomplete="off" autocorrect="off" autocapitalize="off" ' +
        'spellcheck="false" placeholder="' + esc(t.answer.charAt(0)) + '…">' +
        '<div class="inc" id="inc"></div>' +
        '<div class="hintline" id="hint"></div>' +
        '<button class="btn btn-o" id="ok">Check</button>';

      var inp = $('#inp');
      inp.focus();
      function check() {
        if (W.norm(inp.value) === W.norm(t.answer)) {
          inp.classList.add('ok');
          if (tries === 0) right++;
          xp += W.XP.type; W.addXP(W.XP.type); W.mark(w, tries === 0);
          W.toast('Correct!');
          idx++;
          setTimeout(draw, 550);
        } else {
          tries++;
          W.wrongFx(inp);
          if (tries >= 3) {
            var open2 = Math.min(t.answer.length, tries - 1);
            $('#hint').textContent = 'starts with: ' + t.answer.slice(0, open2) + '…';
          }
          inp.focus();
        }
      }
      $('#ok').onclick = check;
      inp.onkeydown = function (e) { if (e.key === 'Enter') check(); };
    }
    draw();
  };

  /* ---------- 5. SPRINT ---------- */
  W.actSprint = function (list) {
    var pool = list.length >= 4 ? list : W.allWords();
    var score = 0, combo = 0, best = 0, left = 60, lock = false, xp = 0;
    var body = W.open('Sprint');

    W.timerId = setInterval(function () {
      left--;
      var el = $('#tmr');
      if (el) el.textContent = left + 's';
      if (left <= 0) finish();
    }, 1000);

    function finish() {
      clearInterval(W.timerId); W.timerId = null;
      var isRec = W.record('sprint', score);
      W.result(score, 'points',
        (isRec ? 'New record! ' : 'Record: ' + (W.s.records.sprint || 0) + '. ') + 'Best combo: ' + best,
        xp, function () { W.actSprint(list); });
    }

    function draw() {
      if (left <= 0) return;
      var w = W.pick(pool, 1)[0];
      var others = W.shuffle(pool.filter(function (x) { return x.ru !== w.ru; })).slice(0, 3);
      var opts = W.shuffle([w].concat(others));
      var missed = false;
      body.innerHTML =
        '<div class="hud"><div class="t" id="tmr">' + left + 's</div>' +
        '<div class="t">' + score + '</div></div>' +
        '<div class="combo">' + (combo > 1 ? 'combo ×' + combo : '') + '</div>' +
        '<div class="sprint-q">' + esc(w.en) + '</div>' +
        '<div class="inc" id="inc"></div><div id="opts"></div>';

      var box = $('#opts');
      opts.forEach(function (o) {
        var b = document.createElement('button');
        b.className = 'opt'; b.textContent = o.ru;
        b.onclick = function () {
          if (lock) return;
          if (o.ru === w.ru) {
            lock = true;
            if (!missed) { combo++; if (combo > best) best = combo; }
            var add = W.XP.sprint + (missed ? 0 : Math.min(combo, 5) * 2);
            score += add; xp += add; W.addXP(add);
            W.mark(w, !missed); b.classList.add('ok');
            setTimeout(function () { lock = false; draw(); }, 320);
          } else {
            missed = true; combo = 0; W.mark(w, false);
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
