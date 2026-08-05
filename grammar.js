/* grammar.js — правила с табличками, тесты по 10 из 30+, режим Mix */
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

  /* ---------- задания: "вопрос | ответ | вариант / вариант" ---------- */
  function parseTask(line, rule) {
    var p = String(line).split('|').map(function (x) { return x.trim(); });
    return {
      q: p[0],
      a: p[1],
      opts: (p[2] || '').split('/').map(function (x) { return x.trim(); }).filter(Boolean),
      rule: rule
    };
  }
  W.tasks = function (rule) {
    return (rule.drill || []).map(function (l) { return parseTask(l, rule); })
      .filter(function (t) { return t.q && t.a && t.opts.length >= 2; });
  };

  function qkey(t) { return t.q.toLowerCase().replace(/\s+/g, ' ').trim(); }

  /* ---------- прогресс: считаем РЕШЁННЫЕ задания ---------- */
  function st(id) {
    if (!W.s.rules[id]) W.s.rules[id] = { ok: {}, seen: false };
    if (!W.s.rules[id].ok) W.s.rules[id].ok = {};
    return W.s.rules[id];
  }
  W.ruleSolved = function (rule) { return Object.keys(st(rule.id).ok).length; };
  W.ruleTotal = function (rule) { return W.tasks(rule).length; };
  W.ruleProgress = function (rule) {
    var tot = W.ruleTotal(rule);
    return tot ? Math.round(W.ruleSolved(rule) * 100 / tot) : 0;
  };
  W.ruleSeen = function (id) { st(id).seen = true; W.save(); };
  function markSolved(t) {
    if (!t.rule) return;
    st(t.rule.id).ok[qkey(t)] = 1;
    W.save();
  }

  /* сначала нерешённые, потом уже решённые — каждый заход перемешивается */
  function pickTasks(rule, n) {
    var done = st(rule.id).ok;
    var all = W.tasks(rule);
    var fresh = W.shuffle(all.filter(function (t) { return !done[qkey(t)]; }));
    var old = W.shuffle(all.filter(function (t) { return done[qkey(t)]; }));
    return fresh.concat(old).slice(0, n);
  }

  /* ---------- табличка ---------- */
  function tableHtml(t) {
    if (!t) return '';
    return '<div class="gtable-wrap"><table class="gtable">' +
      '<tr>' + t.cols.map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr>' +
      t.rows.map(function (r) {
        return '<tr>' + r.map(function (c, i) {
          return i === 0 ? '<td class="k">' + c + '</td>' : '<td>' + c + '</td>';
        }).join('') + '</tr>';
      }).join('') +
      '</table></div>' +
      (t.note ? '<div class="gnote">' + t.note + '</div>' : '');
  }

  /* ---------- карточка правила ---------- */
  W.openRule = function (id) {
    var r = W.ruleById(id);
    if (!r) return;
    W.ruleSeen(id);
    var solved = W.ruleSolved(r), total = W.ruleTotal(r);
    var body = W.open(r.title);
    body.style.justifyContent = 'flex-start';
    body.innerHTML =
      '<div class="q-label">' + esc(r.sub) + '</div>' +
      '<div class="big-q">' + r.formula + '</div>' +
      tableHtml(r.table) +
      tableHtml(r.table2) +
      '<div class="card" style="font-size:16px;line-height:1.45">' + esc(r.rule) + '</div>' +
      '<div class="card" style="font-size:18px;line-height:1.9;text-align:center">' +
      '<div style="color:var(--bad)">❌ ' + esc(r.bad) + '</div>' +
      '<div style="color:var(--ok)">✅ ' + esc(r.ok) + '</div></div>' +
      '<div class="h">Examples</div>' +
      r.examples.map(function (e) {
        return '<div class="word"><div style="flex:1"><div class="en">' + esc(e.en) + '</div>' +
          '<div class="ru">' + esc(e.ru) + '</div></div></div>';
      }).join('') +
      '<div class="h">Test <b>' + solved + ' / ' + total + '</b></div>' +
      '<div class="bar"><i style="width:' + W.ruleProgress(r) + '%"></i></div>' +
      '<button class="btn btn-o" id="gDrill">Test · 10 questions</button>' +
      '<button class="btn btn-g" id="gSay">Say it in English</button>';

    $('#gDrill').onclick = function () {
      W.runTest(pickTasks(r, 10), r.title, function () { W.openRule(id); });
    };
    $('#gSay').onclick = function () { W.ruleSay(r); };
  };

  /* ---------- сам тест ---------- */
  W.runTest = function (queue, title, again) {
    var idx = 0, first = 0, xp = 0, lock = false;
    var body = W.open(title);

    function draw() {
      if (idx >= queue.length) {
        return W.result(first + '/' + queue.length, 'right the first time',
          first === queue.length ? 'Perfect!' : 'The ones you missed will come back.',
          xp, function () { if (again) again(); });
      }
      var t = queue[idx], missed = false;
      W.count((idx + 1) + '/' + queue.length);
      body.style.justifyContent = 'center';
      body.innerHTML =
        (t.rule ? '<div class="q-label">' + esc(t.rule.title) + '</div>' : '') +
        '<div class="sprint-q">' + esc(t.q) + '</div>' +
        '<div class="inc" id="inc"></div><div id="opts"></div>';
      var box = $('#opts');
      W.shuffle(t.opts).forEach(function (o) {
        var b = document.createElement('button');
        b.className = 'opt';
        b.textContent = o;
        b.onclick = function () {
          if (lock) return;
          if (o === t.a) {
            lock = true;
            b.classList.add('ok');
            if (!missed) { first++; markSolved(t); }
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

  /* ---------- MIX ---------- */
  W.mixOpen = function () {
    if (!W.s.mix) W.s.mix = W.rules().map(function (r) { return r.id; });
    var body = W.open('Mix test');
    body.style.justifyContent = 'flex-start';

    function draw() {
      var chosen = W.s.mix, pool = 0;
      W.rules().forEach(function (r) { if (chosen.indexOf(r.id) !== -1) pool += W.ruleTotal(r); });
      body.innerHTML =
        '<div class="q-label">Tick the rules you want in the test</div>' +
        W.rules().map(function (r) {
          var on = chosen.indexOf(r.id) !== -1;
          return '<button class="mrow' + (on ? ' on' : '') + '" data-mix="' + r.id + '">' +
            '<div class="me">' + (on ? '☑️' : '⬜️') + '</div>' +
            '<div style="flex:1"><div class="mt">' + esc(r.title) + '</div>' +
            '<div class="ms">' + W.ruleSolved(r) + ' / ' + W.ruleTotal(r) + ' done</div></div></button>';
        }).join('') +
        '<div class="hintline">' + pool + ' questions in the pool</div>' +
        '<button class="btn btn-o" id="mixGo">Start · 30 questions</button>';

      Array.prototype.forEach.call(body.querySelectorAll('[data-mix]'), function (b) {
        b.onclick = function () {
          var id = b.dataset.mix, i = W.s.mix.indexOf(id);
          if (i === -1) W.s.mix.push(id); else W.s.mix.splice(i, 1);
          W.save();
          draw();
        };
      });
      $('#mixGo').onclick = function () {
        var rules = W.rules().filter(function (r) { return W.s.mix.indexOf(r.id) !== -1; });
        if (!rules.length) { W.toast('Tick at least one rule'); return; }
        var per = Math.ceil(30 / rules.length), queue = [];
        rules.forEach(function (r) { queue = queue.concat(pickTasks(r, per)); });
        queue = W.shuffle(queue).slice(0, 30);
        W.runTest(queue, 'Mix test', W.mixOpen);
      };
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
        return W.result(right + '/' + queue.length, 'correct', 'Now say each one twice.',
          xp, function () { W.ruleSay(r); });
      }
      var t = queue[idx];
      var words = t.en.trim().split(/\s+/);
      var pool = W.shuffle(words.map(function (x, i) { return { t: x, i: i }; }));
      var placed = [], tries = 0;
      W.count((idx + 1) + '/' + queue.length);
      body.style.justifyContent = 'center';

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
