/* grammar.js — раздел Grammar: правило + две практики */
(function () {
  var W = window.WD;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = W.esc;

  W.rules = function () { return window.GRAMMAR || []; };
  W.ruleById = function (id) {
    var a = W.rules();
    for (var i = 0; i < a.length; i++) if (a[i].id === id) return a[i];
    return null;
  };

  W.ruleProgress = function (r) {
    var st = W.s.rules && W.s.rules[r.id];
    if (!st) return 0;
    return Math.min(100, Math.round((st.done || 0) * 100 / Math.max(1, r.drill.length + r.say.length)));
  };
  W.ruleDone = function (id, n) {
    if (!W.s.rules[id]) W.s.rules[id] = { done: 0, seen: false };
    W.s.rules[id].done = Math.max(W.s.rules[id].done, n);
    W.save();
  };
  W.ruleSeen = function (id) {
    if (!W.s.rules[id]) W.s.rules[id] = { done: 0, seen: false };
    W.s.rules[id].seen = true;
    W.save();
  };

  /* ---------- карточка правила ---------- */
  W.openRule = function (id) {
    var r = W.ruleById(id);
    if (!r) return;
    W.ruleSeen(id);
    var body = W.open(r.title);
    body.innerHTML =
      '<div class="q-label">' + esc(r.sub) + '</div>' +
      '<div class="big-q">' + r.formula + '</div>' +
      '<div class="card" style="margin-top:14px;font-size:17px;line-height:1.45">' + esc(r.rule) + '</div>' +
      '<div class="card" style="font-size:19px;line-height:1.8;text-align:center">' +
      '<div style="color:var(--bad)">❌ ' + esc(r.bad) + '</div>' +
      '<div style="color:var(--ok)">✅ ' + esc(r.ok) + '</div></div>' +
      '<div class="h">Examples</div>' +
      r.examples.map(function (e) {
        return '<div class="word"><div style="flex:1"><div class="en">' + esc(e.en) + '</div>' +
          '<div class="ru">' + esc(e.ru) + '</div></div></div>';
      }).join('') +
      '<button class="btn btn-o" id="gDrill">Choose the form</button>' +
      '<button class="btn btn-g" id="gSay">Say it in English</button>';

    $('#gDrill').onclick = function () { W.ruleDrill(r); };
    $('#gSay').onclick = function () { W.ruleSay(r); };
  };

  /* ---------- выбрать форму ---------- */
  W.ruleDrill = function (r) {
    var queue = W.shuffle(r.drill.slice());
    var idx = 0, right = 0, xp = 0, lock = false;
    var body = W.open(r.title);

    function draw() {
      if (idx >= queue.length) {
        W.ruleDone(r.id, right);
        return W.result(right + '/' + queue.length, 'correct',
          right === queue.length ? 'You got the rule!' : 'Check ❌ / ✅ again.',
          xp, function () { W.ruleDrill(r); });
      }
      var t = queue[idx], missed = false;
      W.count((idx + 1) + '/' + queue.length);
      body.innerHTML = '<div class="sprint-q">' + esc(t.q) + '</div>' +
        '<div class="inc" id="inc"></div><div id="opts"></div>';
      var box = $('#opts');
      W.shuffle(t.opts).forEach(function (o) {
        var b = document.createElement('button');
        b.className = 'opt'; b.textContent = o;
        b.onclick = function () {
          if (lock) return;
          if (o === t.a) {
            lock = true;
            b.classList.add('ok');
            if (!missed) right++;
            xp += W.XP.rule; W.addXP(W.XP.rule);
            setTimeout(function () { lock = false; idx++; draw(); }, 420);
          } else {
            missed = true;
            b.classList.add('bad', 'dead');
            W.wrongFx(b);
          }
        };
        box.appendChild(b);
      });
    }
    draw();
  };

  /* ---------- собрать фразу ---------- */
  W.ruleSay = function (r) {
    var queue = W.shuffle(r.say.slice());
    var idx = 0, right = 0, xp = 0;
    var body = W.open(r.title);

    function draw() {
      if (idx >= queue.length) {
        W.ruleDone(r.id, r.drill.length + right);
        return W.result(right + '/' + queue.length, 'correct', 'Now say each one twice.',
          xp, function () { W.ruleSay(r); });
      }
      var t = queue[idx];
      var words = t.en.trim().split(/\s+/);
      var pool = W.shuffle(words.map(function (x, i) { return { t: x, i: i }; }));
      var placed = [], tries = 0;
      W.count((idx + 1) + '/' + queue.length);

      body.innerHTML =
        '<div class="ru-hint">' + esc(t.ru) + '</div>' +
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
        pool.forEach(function (item) {
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
        if (W.norm(got) === W.norm(t.en)) {
          if (tries === 0) right++;
          xp += W.XP.build; W.addXP(W.XP.build);
          W.toast('Correct! Say it out loud');
          idx++;
          setTimeout(draw, 800);
        } else {
          tries++;
          W.wrongFx($('#tgt'));
          if (tries >= 3) $('#hint').textContent = 'starts with: ' + words.slice(0, 2).join(' ') + ' …';
        }
      };
    }
    draw();
  };
})();
