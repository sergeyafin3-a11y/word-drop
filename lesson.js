/* lesson.js — режимы для урока с преподавателем */
(function () {
  var W = window.WD;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = W.esc;

  function support(n) { return W.pick(W.phrasePool(), n || 8); }
  function questions() { return W.questionPool(); }

  /* ---------- WHEEL ---------- */
  W.actWheel = function () {
    var qs = questions();
    var body = W.open('Question wheel');
    var spinning = false, deg = 0;

    body.innerHTML =
      '<div class="wheel-box"><div class="pointer"></div><div class="wheel" id="wh"><b>?</b></div></div>' +
      '<button class="btn btn-o" id="spin">Spin</button><div id="qzone"></div>';

    $('#spin').onclick = function () {
      if (spinning) return;
      spinning = true;
      $('#spin').textContent = 'Spinning…';
      deg += 1080 + Math.floor(Math.random() * 360);
      $('#wh').style.transform = 'rotate(' + deg + 'deg)';
      setTimeout(function () {
        spinning = false;
        $('#spin').textContent = 'Spin again';
        var q = W.pick(qs, 1)[0];
        var sup = support(8);
        $('#qzone').innerHTML =
          '<div class="big-q" style="margin-top:14px">' + esc(q) + '</div>' +
          '<div class="support"><div class="lbl">Use these phrases — tap when you say one</div>' +
          '<div id="phs" style="text-align:center">' + sup.map(function (p) {
            return '<button class="ph">' + esc(p.en) + '</button>';
          }).join('') + '</div></div>';
        Array.prototype.forEach.call($('#phs').children, function (b) {
          b.onclick = function () {
            b.classList.toggle('used');
            if (b.classList.contains('used')) W.addXP(5);
          };
        });
        W.finishAct();
      }, 2700);
    };
  };

  /* ---------- WARM-UP ----------
     Всё зависит от выбранного набора: вопросы берутся из его темы,
     слова — из его же лексики, обои — из эмодзи этой темы.
     Открыл Hobbies — разогрев про хобби. Открыл Daily Routine — про режим дня. */

  /* пара общих вопросов «как дела» в начало, остальное — по теме */
  W.warmQuestions = function (n) {
    var t = W.warmTopic();
    var own = W.shuffle(((t && t.questions) || []).slice());
    var open = W.pick(window.WARMUP || [], own.length ? 4 : n);
    var qs = open.concat(own).slice(0, n);
    if (qs.length < n) qs = qs.concat(W.pick(window.WARMUP || [], n - qs.length));
    return qs;
  };

  W.actWarmup = function () {
    var t = W.warmTopic();
    var list = W.activeList();
    var full = t ? W.list(t.id, 'words') : list;            /* обои — из слов темы */
    var sticks = W.sel().type === 'irreg'
      ? ['🔁', '⏪', '💪']
      : W.topicStickers(t, full.length ? full : list);

    var qs = W.warmQuestions(15);

    /* 15 слов всегда: маленькую пачку добираем из её же темы, потом из общего словаря */
    var words = W.pick(list, 15);
    if (words.length < 15) {
      var seen = {};
      words.forEach(function (w) { seen[W.wkey(w.en)] = 1; });
      var extra = (t ? W.topicAll(t.id) : []).concat(W.allWords())
        .filter(function (w) {
          var k = W.wkey(w.en);
          if (seen[k]) return false;
          seen[k] = 1;
          return true;
        });
      words = words.concat(W.pick(extra, 15 - words.length));
    }
    var steps = qs.map(function (q) { return { t: 'q', text: q }; })
      .concat(words.map(function (w) { return { t: 'w', w: w }; }));
    var idx = 0;
    var body = W.open('Warm-up' + (t ? ' · ' + t.title : ''));

    function draw() {
      if (idx >= steps.length) {
        return W.result('✓', 'warm-up done', 'Ready for the new words!', 0, function () { W.actWarmup(); });
      }
      var s = steps[idx];
      W.count((idx + 1) + '/' + steps.length);
      if (s.t === 'q') {
        body.innerHTML = W.qCard(s.text, 'Answer in English', sticks) +
          '<button class="btn btn-o" id="nx">Next</button>';
      } else {
        body.innerHTML = '<div class="q-label">Do you remember this word?</div>' +
          '<div class="flash"><div class="big">' + esc(s.w.ru) + '</div>' +
          '<div class="tip" id="rev">tap to check</div></div>' +
          '<button class="btn btn-o" id="nx">Next</button>';
        $('#rev').onclick = function () { $('#rev').textContent = s.w.en; };
      }
      $('#nx').onclick = function () { idx++; draw(); };
    }
    draw();
  };

  /* ---------- SPEED ROUND ---------- */
  W.actSpeed = function () {
    var queue = W.shuffle((window.SPEED || []).slice());
    var idx = 0, said = 0;
    var body = W.open('Speed round');

    function draw() {
      if (idx >= queue.length) {
        return W.result(said, 'quick answers', 'No pauses — that is the goal!',
          said * 5, function () { W.actSpeed(); });
      }
      W.count((idx + 1) + '/' + queue.length);
      body.innerHTML =
        '<div class="q-label">Answer fast: like / love / enjoy / hate + V-ing</div>' +
        '<div class="big-q">' + esc(queue[idx]) + '</div>' +
        '<button class="btn btn-o" id="ok">Said it ✓</button>' +
        '<button class="btn btn-g" id="skip">Skip</button>';
      $('#ok').onclick = function () { said++; W.addXP(5); idx++; draw(); };
      $('#skip').onclick = function () { idx++; draw(); };
    }
    draw();
  };

  /* ---------- REVISION ---------- */
  W.actRevision = function () {
    var weak = W.weak(30);
    if (!weak.length) weak = W.pick(W.allWords(), 30);
    var idx = 0, ok = 0, xp = 0;
    var body = W.open('Revision');

    function draw() {
      if (idx >= weak.length) {
        return W.result(ok + '/' + weak.length, 'said without help',
          'The rest come back in his homework.', xp, function () { W.actRevision(); });
      }
      var w = weak[idx];
      W.count((idx + 1) + '/' + weak.length);
      body.innerHTML =
        '<div class="q-label">Say it in English and make a sentence</div>' +
        '<div class="flash"><div class="big">' + esc(w.ru) + '</div>' +
        '<div class="tip" id="ans">tap to check</div></div>' +
        '<div class="row2" style="margin-top:14px">' +
        '<button class="btn btn-g" id="no">Not yet</button>' +
        '<button class="btn btn-green" id="yes">Said it ✓</button></div>';
      $('#ans').onclick = function () { $('#ans').textContent = w.en; };
      $('#yes').onclick = function () { W.mark(w, true); ok++; xp += 10; W.addXP(10); idx++; draw(); };
      $('#no').onclick = function () { W.mark(w, false); idx++; draw(); };
    }
    draw();
  };

  /* ---------- DIALOGUE ---------- */
  W.actDuel = function () {
    var d = W.pick(window.DUELS || [], 1)[0];
    var sup = support(14);
    var score = 0;
    var body = W.open('Dialogue');

    body.innerHTML =
      '<div class="big-q">' + esc(d.title) + '</div>' +
      '<div class="card" style="margin-top:14px"><div class="support" style="margin:0">' +
      '<div class="lbl">Teacher</div><div style="font-size:16px">' + esc(d.you) + '</div></div>' +
      '<div class="support"><div class="lbl">Student</div>' +
      '<div style="font-size:16px">' + esc(d.him) + '</div></div></div>' +
      '<div class="h">Phrases <b id="sc">0</b></div>' +
      '<div class="support" style="margin-top:0"><div id="phs" style="text-align:center">' +
      sup.map(function (p) { return '<button class="ph">' + esc(p.en) + '</button>'; }).join('') +
      '</div></div>' +
      '<button class="btn btn-o" id="again">Another situation</button>' +
      '<button class="btn btn-g" id="fin">Finish</button>';

    Array.prototype.forEach.call($('#phs').children, function (b) {
      b.onclick = function () {
        b.classList.toggle('used');
        var on = b.classList.contains('used');
        score += on ? 1 : -1;
        if (on) W.addXP(5);
        $('#sc').textContent = score;
      };
    });
    $('#again').onclick = function () { W.actDuel(); };
    $('#fin').onclick = function () {
      W.result(score, 'phrases used', score >= 5 ? 'Great talking!' : 'Next time try 5+.',
        0, function () { W.actDuel(); });
    };
  };
})();
