/* homework.js — вкладка Homework: домашка по темам */
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

  /* ---------- галочки ---------- */
  function st(id) {
    if (!W.s.hw) W.s.hw = {};
    if (!W.s.hw[id]) W.s.hw[id] = {};
    return W.s.hw[id];
  }
  function key(d, i) { return 'd' + d + 't' + i; }
  W.hwDone = function (h) {
    var s = st(h.id), n = 0;
    h.days.forEach(function (d, di) {
      d.tasks.forEach(function (t, ti) { if (s[key(d.n || di + 1, ti)]) n++; });
    });
    return n;
  };
  W.hwTotal = function (h) {
    var n = 0;
    h.days.forEach(function (d) { n += d.tasks.length; });
    return n;
  };
  W.hwProgress = function (h) {
    var tot = W.hwTotal(h);
    return tot ? Math.round(W.hwDone(h) * 100 / tot) : 0;
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
          '<div class="hsub">' + esc(h.sub || '') + ' · ' + esc(h.due || '') + '</div></div>' +
          '<div class="hp">' + p + '%</div></div>' +
          '<div class="bar"><i style="width:' + p + '%"></i></div>' +
          '</button>';
      }).join('');
  };

  /* ---------- открыть домашку ---------- */
  W.openHomework = function (id) {
    var h = W.homework(id);
    if (!h) return;
    var body = W.open(h.title);
    body.style.justifyContent = 'flex-start';
    var ruOn = false;

    function draw() {
      var s = st(h.id);
      body.innerHTML =
        '<div class="q-label">' + esc(h.topic) + '</div>' +

        '<div class="h">The story <b>' + W.hwDone(h) + ' / ' + W.hwTotal(h) + '</b></div>' +
        '<div class="story">' +
        h.story.map(function (p, i) {
          return '<p class="sp" data-p="' + i + '">' + esc(p.en) +
            '<span class="sru' + (ruOn ? '' : ' hidden') + '">' + esc(p.ru) + '</span></p>';
        }).join('') + '</div>' +
        '<button class="btn btn-g" id="ruBtn">' +
        (ruOn ? 'Спрятать перевод' : 'Показать перевод') + '</button>' +

        '<div class="h">Questions</div>' +
        '<div class="card qlist">' +
        h.questions.map(function (q, i) {
          return '<div class="qq"><b>' + (i + 1) + '</b> ' + esc(q) + '</div>';
        }).join('') + '</div>' +

        h.days.map(function (d, di) {
          var n = d.n || di + 1;
          return '<div class="h">Day ' + n + ' · ' + esc(d.title) + '</div>' +
            '<div class="card daycard">' +
            d.tasks.map(function (t, ti) {
              var k = key(n, ti), on = !!s[k];
              return '<div class="tline">' +
                '<button class="tick' + (on ? ' on' : '') + '" data-k="' + k + '">' +
                (on ? '✓' : '') + '</button>' +
                '<div class="ttext' + (on ? ' done' : '') + '">' + esc(t.t) + '</div>' +
                (t.go ? '<button class="tgo" data-go="' + n + '-' + ti + '">›</button>' : '') +
                '</div>';
            }).join('') + '</div>';
        }).join('');

      $('#ruBtn').onclick = function () { ruOn = !ruOn; draw(); };

      Array.prototype.forEach.call(body.querySelectorAll('[data-k]'), function (b) {
        b.onclick = function () {
          var k = b.dataset.k;
          if (s[k]) delete s[k]; else s[k] = 1;
          W.saveNow();
          draw();
        };
      });

      Array.prototype.forEach.call(body.querySelectorAll('[data-go]'), function (b) {
        b.onclick = function () {
          var p = b.dataset.go.split('-');
          var day = null;
          h.days.forEach(function (d, di) { if ((d.n || di + 1) === +p[0]) day = d; });
          var task = day && day.tasks[+p[1]];
          if (task && task.go) W.hwGo(h, task.go);
        };
      });
    }
    draw();
  };

  /* Набор ищем по названию, а не по id: у тем, добавленных текстовым блоком,
     id генерируется автоматически и жёстко прописать его нельзя. */
  function findSet(set) {
    if (!set) return null;
    var want = String(set.title || set.id || '').toLowerCase();
    if (set.type === 'batch') {
      var b = null;
      W.batches().forEach(function (x) {
        if (!b && (x.id === set.id || String(x.title).toLowerCase() === want)) b = x;
      });
      return b ? { type: 'batch', id: b.id } : null;
    }
    var t = null;
    W.topics().forEach(function (x) {
      if (!t && (x.id === set.id || String(x.title).toLowerCase() === want)) t = x;
    });
    return t ? { type: 'topic', id: t.id } : null;
  }

  /* открыть активность, которую просит задание */
  W.hwGo = function (h, go) {
    var set = h.set || {};
    var kind = go.kind || set.kind || 'words';
    var found = findSet(set);
    if (!found) { W.toast('Набор не найден'); return; }
    if (found.type === 'topic') W.setSel('topic', found.id, kind);
    else W.setSel('batch', found.id, '');

    var list = W.activeList();
    var map = {
      flash: W.actFlash, match: W.actMatch, build: W.actBuild,
      type: W.actType, sprint: W.actSprint
    };
    if (map[go.act]) { W.close(); map[go.act](list); return; }
    var lesson = { warmup: W.actWarmup, wheel: W.actWheel, speed: W.actSpeed,
                   revision: W.actRevision, duel: W.actDuel };
    if (lesson[go.act]) { W.close(); lesson[go.act](); }
  };
})();
