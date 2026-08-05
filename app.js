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
  W.menuOpen = false;

  function menuRow(active, emoji, title, sub, data) {
    return '<button class="mrow' + (active ? ' on' : '') + '" ' + data + '>' +
      '<div class="me">' + emoji + '</div>' +
      '<div style="flex:1"><div class="mt">' + esc(title) + '</div>' +
      '<div class="ms">' + esc(sub) + '</div></div>' +
      (active ? '<div class="mc">✓</div>' : '') + '</button>';
  }

  function menuHtml() {
    var sel = W.sel();
    return '<div class="dd">' +
      '<div class="dd-h">New words after the lesson</div>' +
      W.batches().map(function (b) {
        var l = W.batchLic(b.id);
        return menuRow(sel.type === 'batch' && sel.id === b.id, '🆕', b.title,
          b.items.length + ' words · ' + W.progress(l) + '%',
          'data-set="batch" data-id="' + b.id + '"');
      }).join('') +
      '<div class="dd-h">Verbs</div>' +
      (function () {
        var l = W.irregList ? W.irregList() : [];
        if (!l.length) return '';
        return menuRow(sel.type === 'irreg', '🔁', 'Irregular verbs',
          l.length + ' verbs · ' + W.progress(l) + '%', 'data-set="irreg" data-id="all"');
      })() +
      '<div class="dd-h">Topics</div>' +
      W.topics().map(function (t) {
        return '<div class="dd-topic">' + (t.emoji || '📚') + ' ' + esc(t.title) + '</div>' +
          W.KINDS.map(function (k) {
            var l = W.list(t.id, k.id);
            var on = sel.type === 'topic' && sel.id === t.id && sel.kind === k.id;
            return menuRow(on, k.id === 'phrases' ? '💬' : '📕', k.label,
              l.length + ' items · ' + W.progress(l) + '%',
              'data-set="topic" data-id="' + t.id + '" data-kind="' + k.id + '"');
          }).join('');
      }).join('') +
      '</div>';
  }

  /* кнопка выбора набора — одинаковая на Learn и Lesson */
  function setbarHtml() {
    var list = W.activeList();
    var p = W.progress(list), due = W.due(list).length;
    return '<button class="setbar' + (W.menuOpen ? ' open' : '') + '" id="openMenu2">' +
      '<div class="sm">☰ Menu · tap to change</div>' +
      '<div class="srow"><div class="se">' + W.selEmoji() + '</div>' +
      '<div class="si"><div class="sn">' + esc(W.selTitle()) + '</div>' +
      '<div class="ss">' + p + '% learned · ' + due + ' to review</div></div>' +
      '<div class="sv">' + (W.menuOpen ? '▴' : '▾') + '</div></div>' +
      '<div class="bar light"><i style="width:' + p + '%"></i></div>' +
      '</button>' +
      (W.menuOpen ? menuHtml() : '');
  }

  /* ================= LEARN ================= */
  function viewLearn() {
    if (!W.activeList().length) {
      return '<div class="empty"><b>No words yet</b><p>Open the menu and pick a set.</p></div>';
    }
    if (W.sel().type === 'irreg') {
      return setbarHtml() +
        '<div class="h">Practice</div>' +
        '<div class="acts">' +
        act('vtable', '📋', 'Verb table', 'all forms in one place') +
        act('vcards', '🃏', 'Cards', 'go → went · gone') +
        act('vmatch', '🔀', 'Match', 'verb → past form') +
        act('vpast', '⌨️', 'Type the past', 'go → ?') +
        act('vpart', '⌨️', 'Type the 3rd form', 'go → gone') +
        act('vsprint', '⚡', 'Verb sprint', '60 seconds · best ' + (W.s.records.verbSprint || 0), 'accent') +
        '</div>';
    }
    return setbarHtml() +
      '<div class="h">Practice</div>' +
      '<div class="acts">' +
      act('flash', '🃏', 'Cards', 'word → translation') +
      act('match', '🔀', 'Match', 'find the pairs') +
      act('build', '🧩', 'Build it', 'words in order') +
      act('type', '⌨️', 'Type it', 'write from memory') +
      act('sprint', '⚡', 'Sprint', '60 seconds · best ' + (W.s.records.sprint || 0), 'accent') +
      '</div>';
  }

  function act(id, ico, nm, sub, mode) {
    var cls = mode === 'accent' ? ' wide accent' : (mode === 'full' ? ' wide' : '');
    return '<button class="act' + cls + '" data-act="' + id + '">' +
      '<div class="ico">' + ico + '</div>' +
      '<div><div class="nm">' + nm + '</div><div class="sub">' + esc(sub) + '</div></div></button>';
  }

  /* ================= LESSON ================= */
  function viewLesson() {
    return setbarHtml() +
      '<div class="h">With the teacher</div>' +
      '<div class="acts">' +
      act('warmup', '🔥', 'Warm-up', '5 questions + 5 old words') +
      act('wheel', '🎡', 'Wheel', 'spin and speak') +
      act('speed', '⏱', 'Speed round', 'answer fast, no pauses') +
      act('revision', '🔁', 'Revision', 'words he keeps forgetting') +
      act('duel', '🎤', 'Dialogue', 'roles and counter') +
      act('sort', '🗂', 'Sort & Say', 'sort and say sentences') +
      '</div>';
  }

  /* ================= GRAMMAR ================= */
  function viewGram() {
    return '' +
      '<div class="h">Grammar <b>' + W.rules().length + '</b></div>' +
      '<button class="act wide accent" id="mixBtn" style="margin-bottom:14px">' +
      '<div class="ico">🎲</div><div><div class="nm">Mix test</div>' +
      '<div class="sub">30 questions from the rules you tick</div></div></button>' +
      W.rules().map(function (r) {
        var p = W.ruleProgress(r);
        return '<button class="card" style="display:block;width:100%;text-align:left" data-rule="' + r.id + '">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px">' +
          '<div style="font-weight:700;font-size:19px">' + esc(r.title) + '</div>' +
          '<div class="muted" style="font-size:13px">' + W.ruleSolved(r) + ' / ' + W.ruleTotal(r) + '</div></div>' +
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
      sets.push({ n: t.title, p: W.progress(W.topicAll(t.id)) });
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
      }).join('') +
      '<button class="btn btn-g" id="resetAll" style="margin-top:26px;opacity:.7;font-size:15px">' +
      'Start from zero</button>';
  }

  /* ================= обработчики ================= */
  function wire() {
    if ($('#openMenu2')) $('#openMenu2').onclick = function () {
      W.menuOpen = !W.menuOpen;
      W.render();
    };

    Array.prototype.forEach.call(document.querySelectorAll('[data-set]'), function (b) {
      b.onclick = function () {
        W.setSel(b.dataset.set, b.dataset.id, b.dataset.kind);
        W.menuOpen = false;
        W.render();
      };
    });

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
        if (a === 'vtable') return W.verbTable();
        if (a === 'vcards') return W.verbCards();
        if (a === 'vmatch') return W.verbMatch();
        if (a === 'vpast') return W.verbType(2);
        if (a === 'vpart') return W.verbType(3);
        if (a === 'vsprint') return W.verbSprint();
        ({ flash: W.actFlash, match: W.actMatch, build: W.actBuild, type: W.actType, sprint: W.actSprint }[a])(list);
      };
    });

    if ($('#resetAll')) $('#resetAll').onclick = function () {
      if (!confirm('Start from zero?\n\nXP, streak and all learned words will be cleared.')) return;
      W.reset();
      location.reload();
    };

    if ($('#mixBtn')) $('#mixBtn').onclick = W.mixOpen;

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
  W.migrate();
  W.sel();
  W.saveNow();

  Array.prototype.forEach.call(document.querySelectorAll('.tab'), function (b) {
    b.onclick = function () { W.go(b.dataset.t); };
  });
  W.go('learn');
})();
