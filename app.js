/* app.js — вкладки, меню наборов и главные экраны */
(function () {
  var W = window.WD;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = W.esc;

  W.tab = 'learn';

  W.go = function (t) {
    W.tab = t;
    Array.prototype.forEach.call(document.querySelectorAll('.tab'), function (b) {
      b.classList.toggle('on', b.dataset.t === t);
    });
    window.scrollTo(0, 0);
    W.render();
  };

  W.render = function () {
    var st = W.streak();
    $('#streak').textContent = st > 0 ? st + ' 🔥' : '0 🔥';
    $('#streak').classList.toggle('on', st > 0);
    $('#xp').textContent = (W.s.xp || 0) + ' XP';

    var v = $('#view');
    if (W.tab === 'learn') v.innerHTML = viewLearn();
    if (W.tab === 'lesson') v.innerHTML = viewLesson();
    if (W.tab === 'gram') v.innerHTML = viewGram();
    if (W.tab === 'me') v.innerHTML = viewMe();
    wire();
  };

  /* ================= МЕНЮ НАБОРОВ ================= */
  W.menu = function () {
    var sel = W.sel();
    var el = document.createElement('div');
    el.className = 'sheet';

    function row(active, emoji, title, sub, data) {
      return '<button class="mrow' + (active ? ' on' : '') + '" ' + data + '>' +
        '<div class="me">' + emoji + '</div>' +
        '<div style="flex:1"><div class="mt">' + esc(title) + '</div>' +
        '<div class="ms">' + esc(sub) + '</div></div>' +
        (active ? '<div class="mc">✓</div>' : '') + '</button>';
    }

    el.innerHTML =
      '<div class="back"></div><div class="body">' +
      '<div class="sheet-title">Choose what to study</div>' +

      '<div class="sheet-h">New words</div>' +
      (W.batches().length
        ? W.batches().map(function (b) {
          var l = W.batchLic(b.id);
          return row(sel.type === 'batch' && sel.id === b.id, '🆕', b.title,
            b.items.length + ' words · ' + b.date + ' · ' + W.progress(l) + '%',
            'data-set="batch" data-id="' + b.id + '"');
        }).join('')
        : '<div class="muted" style="padding:6px 4px">Пока пусто</div>') +

      '<div class="sheet-h">Topics</div>' +
      W.topics().map(function (t) {
        return W.KINDS.map(function (k) {
          var l = W.list(t.id, k.id);
          var on = sel.type === 'topic' && sel.id === t.id && sel.kind === k.id;
          return row(on, t.emoji || '📚', t.title + ' · ' + k.label,
            l.length + ' items · ' + W.progress(l) + '%',
            'data-set="topic" data-id="' + t.id + '" data-kind="' + k.id + '"');
        }).join('');
      }).join('') +
      '</div>';

    document.body.appendChild(el);
    el.querySelector('.back').onclick = function () { el.remove(); };
    Array.prototype.forEach.call(el.querySelectorAll('[data-set]'), function (b) {
      b.onclick = function () {
        W.setSel(b.dataset.set, b.dataset.id, b.dataset.kind);
        el.remove();
        W.go('learn');
      };
    });
  };

  /* ================= LEARN ================= */
  function viewLearn() {
    var list = W.activeList();
    if (!list.length) {
      return '<div class="empty"><b>No words yet</b><p>Open the menu and pick a set.</p></div>';
    }
    var p = W.progress(list), due = W.due(list).length;

    return '' +
      '<button class="setbar" id="openMenu2">' +
      '<div class="sm">☰ Menu · tap to change</div>' +
      '<div class="srow"><div class="se">' + W.selEmoji() + '</div>' +
      '<div class="si"><div class="sn">' + esc(W.selTitle()) + '</div>' +
      '<div class="ss">' + p + '% learned · ' + due + ' to review</div></div>' +
      '<div class="sv">▾</div></div>' +
      '<div class="bar light"><i style="width:' + p + '%"></i></div>' +
      '</button>' +

      '<div class="h">Practice</div>' +
      '<div class="acts">' +
      act('sort', '🗂', 'Sort & Say', 'say a full sentence', 'accent') +
      act('flash', '🃏', 'Cards', 'word → translation') +
      act('match', '🔀', 'Match', 'find the pairs') +
      act('build', '🧩', 'Build it', 'words in the right order') +
      act('type', '⌨️', 'Type it', 'write from memory') +
      act('sprint', '⚡', 'Sprint', '60 seconds · best ' + (W.s.records.sprint || 0), 'full') +
      '</div>' +
      '<button class="btn btn-g" id="showList">See all words (' + list.length + ')</button>';
  }

  function act(id, ico, nm, sub, mode) {
    var cls = mode === 'accent' ? ' wide accent' : (mode === 'full' ? ' wide' : '');
    return '<button class="act' + cls + '" data-act="' + id + '">' +
      '<div class="ico">' + ico + '</div>' +
      '<div><div class="nm">' + nm + '</div><div class="sub">' + esc(sub) + '</div></div></button>';
  }

  /* полный список слов — отдельным экраном */
  W.wordList = function () {
    var list = W.activeList();
    var body = W.open(W.selTitle());
    body.style.justifyContent = 'flex-start';
    body.innerHTML = list.map(function (w) {
      return '<div class="word' + (W.isKnown(w.st) ? ' known' : '') + '">' +
        (w.icon ? '<div style="font-size:22px">' + w.icon + '</div>' : '') +
        '<div style="flex:1"><div class="en">' + esc(w.en) + '</div>' +
        '<div class="ru">' + esc(w.ru) + '</div></div>' +
        '<div class="st">' + (W.isKnown(w.st) ? '✓' : (w.st.box || 0) + '/5') + '</div></div>';
    }).join('');
  };

  /* ================= LESSON ================= */
  function viewLesson() {
    return '' +
      '<div class="h">With the teacher</div>' +
      '<div class="acts">' +
      act('warmup', '🔥', 'Warm-up', '5 questions + 5 old words') +
      act('wheel', '🎡', 'Wheel', 'spin and speak') +
      act('speed', '⏱', 'Speed round', 'answer fast, no pauses') +
      act('revision', '🔁', 'Revision', 'words he keeps forgetting') +
      act('duel', '🎤', 'Dialogue', 'roles and phrase counter') +
      act('sort', '🗂', 'Sort & Say', 'sort activities and say sentences', 'full') +
      '</div>';
  }

  /* ================= GRAMMAR ================= */
  function viewGram() {
    return '' +
      '<div class="h">Grammar <b>' + W.rules().length + '</b></div>' +
      W.rules().map(function (r) {
        var p = W.ruleProgress(r);
        var seen = W.s.rules[r.id] && W.s.rules[r.id].seen;
        return '<button class="card" style="display:block;width:100%;text-align:left" data-rule="' + r.id + '">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px">' +
          '<div style="font-weight:700;font-size:19px">' + esc(r.title) + '</div>' +
          '<div class="muted" style="font-size:13px">' + (p >= 80 ? 'done' : seen ? 'in progress' : 'new') + '</div></div>' +
          '<div class="muted" style="font-size:14px;margin-top:4px">' + esc(r.sub) + '</div>' +
          '<div class="bar"><i style="width:' + p + '%"></i></div></button>';
      }).join('');
  }

  /* ================= ME ================= */
  function viewMe() {
    var known = W.totalKnown(), total = W.allWords().length;
    var sets = [];
    W.batches().forEach(function (b) {
      sets.push({ n: 'New words · ' + b.title, p: W.progress(W.batchLic(b.id)) });
    });
    W.topics().forEach(function (t) {
      W.KINDS.forEach(function (k) {
        sets.push({ n: t.title + ' · ' + k.label, p: W.progress(W.list(t.id, k.id)) });
      });
    });

    return '' +
      '<div class="h">My progress</div>' +
      '<div class="stat-grid">' +
      '<div class="stat"><b>' + (W.s.xp || 0) + '</b><span>total XP</span></div>' +
      '<div class="stat"><b>' + W.streak() + '</b><span>day streak</span></div>' +
      '<div class="stat"><b>' + known + '</b><span>words I know</span></div>' +
      '<div class="stat"><b>' + (W.s.records.sprint || 0) + '</b><span>sprint record</span></div>' +
      '</div>' +
      '<div class="h">Last 7 days</div>' +
      '<div class="days">' + W.week().map(function (d) {
        return '<div class="day' + (d.on ? ' on' : '') + '">' + d.label + '</div>';
      }).join('') + '</div>' +
      '<div class="h">Sets <b>' + known + ' / ' + total + '</b></div>' +
      sets.map(function (s) {
        return '<div class="card" style="padding:14px">' +
          '<div style="display:flex;justify-content:space-between;font-weight:700;gap:8px">' +
          '<span>' + esc(s.n) + '</span><span class="muted">' + s.p + '%</span></div>' +
          '<div class="bar"><i style="width:' + s.p + '%"></i></div></div>';
      }).join('') +
      '<div class="h">Grammar</div>' +
      W.rules().map(function (r) {
        var p = W.ruleProgress(r);
        return '<div class="card" style="padding:14px">' +
          '<div style="display:flex;justify-content:space-between;font-weight:700">' +
          '<span>' + esc(r.title) + '</span><span class="muted">' + p + '%</span></div>' +
          '<div class="bar"><i style="width:' + p + '%"></i></div></div>';
      }).join('');
  }

  /* ================= обработчики ================= */
  function wire() {
    if ($('#openMenu2')) $('#openMenu2').onclick = W.menu;
    if ($('#showList')) $('#showList').onclick = W.wordList;

    Array.prototype.forEach.call(document.querySelectorAll('[data-act]'), function (b) {
      b.onclick = function () {
        var list = W.activeList();
        var a = b.dataset.act;
        if (a === 'sort') return W.actSort();
        if (a === 'warmup') return W.actWarmup();
        if (a === 'wheel') return W.actWheel();
        if (a === 'speed') return W.actSpeed();
        if (a === 'revision') return W.actRevision();
        if (a === 'duel') return W.actDuel();
        ({ flash: W.actFlash, match: W.actMatch, build: W.actBuild, type: W.actType, sprint: W.actSprint }[a])(list);
      };
    });

    Array.prototype.forEach.call(document.querySelectorAll('[data-rule]'), function (b) {
      b.onclick = function () { W.openRule(b.dataset.rule); };
    });
  }

  /* ================= старт ================= */
  if (!window.TOPICS || !window.TOPICS.length) {
    document.getElementById('view').innerHTML =
      '<div class="empty"><b>Не читается js/data.js</b>' +
      '<p>Скорее всего в файле пропала запятая, кавычка или скобка. ' +
      'Проверьте последнее, что добавляли — остальное приложение не трогает.</p></div>';
    return;
  }
  W.load();
  if (!W.s.rules) W.s.rules = {};
  W.sel();
  W.saveNow();

  Array.prototype.forEach.call(document.querySelectorAll('.tab'), function (b) {
    b.onclick = function () { W.go(b.dataset.t); };
  });
  W.go('learn');
})();
