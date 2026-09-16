/* homework.js — домашка: заметить → выучить фразой → сказать про себя → рассказать бегло.
   Домашка может состоять из частей: часть 1 — поля самой домашки (story, find…),
   следующие части — в массиве more. У каждой части свой ключ прогресса:
   у части 1 это id домашки, у остальных — поле key.

   Отметки привязаны к ТЕКСТУ задания, а не к его номеру, поэтому задания можно
   сокращать и переставлять. Старые отметки по номерам один раз переносятся
   на новые места по полю was. */
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

  function st(id) {
    if (!W.s.hw) W.s.hw = {};
    var s = W.s.hw[id] || (W.s.hw[id] = {});
    ['found', 'gaps', 'said', 'mine', 'told', 'used', 'tasks'].forEach(function (k) {
      if (!s[k] || typeof s[k] !== 'object') s[k] = {};
    });
    return s;
  }

  /* ---------- задания и ключи отметок ---------- */
  function txt(item) {
    if (typeof item === 'string') return item;
    return item.en || item.t || ((item.s || '') + '|' + (item.a || ''));
  }
  function ik(pre, item) {
    return pre + ':' + String(txt(item)).toLowerCase().replace(/\s+/g, ' ').trim();
  }
  function TK(p) { return p.tasks || []; }
  function LT(p) { return (p.lessonTasks && p.lessonTasks.items) || []; }
  function CH(p) { return (p.chunks && p.chunks.items) || []; }
  function GP(p) { return p.gaps || []; }
  function MN(p) { return (p.mine && p.mine.items) || []; }
  function RT(p) { return (p.retell && p.retell.items) || []; }
  function LK(p) { return p.linkers || []; }

  /* однократный перенос отметок «по номеру» (c3, g7…) на отметки «по тексту» */
  function migrate(p, s) {
    if (s.keys2) return;
    [
      ['tasks', 'k', TK(p).concat(LT(p))],
      ['said', 'c', CH(p)],
      ['gaps', 'g', GP(p)],
      ['mine', 'm', MN(p)],
      ['told', 't', RT(p)],
      ['used', 'u', LK(p)]
    ].forEach(function (b) {
      var bag = s[b[0]], old = {};
      Object.keys(bag).forEach(function (k) {
        if (/^[a-z]\d+$/.test(k)) { old[k] = 1; delete bag[k]; }
      });
      b[2].forEach(function (item) {
        if (item && typeof item === 'object' && item.was != null && old[b[1] + item.was]) {
          bag[ik(b[1], item)] = 1;
        }
      });
    });
    s.keys2 = 1;
    W.saveNow();
  }

  function cnt(bag, pre, items) {
    var c = 0;
    items.forEach(function (it) { if (bag[ik(pre, it)]) c++; });
    return c;
  }

  /* ---------- части и прогресс ---------- */
  W.hwParts = function (h) { return [h].concat(h.more || []); };
  function keyOf(h, p) { return p === h ? h.id : (p.key || h.id); }
  function stP(h, p) { var s = st(keyOf(h, p)); migrate(p, s); return s; }

  function partDone(h, p) {
    var s = stP(h, p), f = 0;
    (p.find || []).forEach(function (w) { if (s.found[w.en.toLowerCase()]) f++; });
    return f + cnt(s.tasks, 'k', TK(p).concat(LT(p))) + cnt(s.said, 'c', CH(p)) +
      cnt(s.gaps, 'g', GP(p)) + cnt(s.mine, 'm', MN(p)) + cnt(s.told, 't', RT(p));
  }
  function partTotal(p) {
    return TK(p).length + LT(p).length + (p.find || []).length + GP(p).length +
      CH(p).length + MN(p).length + RT(p).length;
  }
  /* часть, заданная сейчас (среди частей после первой) */
  function currentPart(h) {
    var cur = -1;
    W.hwParts(h).forEach(function (p, i) { if (i > 0 && p.current) cur = i; });
    return cur;
  }

  W.hwDone = function (h) {
    var d = 0;
    W.hwParts(h).forEach(function (p) { d += partDone(h, p); });
    return d;
  };
  W.hwTotal = function (h) {
    var t = 0;
    W.hwParts(h).forEach(function (p) { t += partTotal(p); });
    return t;
  };
  W.hwProgress = function (h) {
    var t = W.hwTotal(h);
    return t ? Math.round(W.hwDone(h) * 100 / t) : 0;
  };

  /* ---------- список ---------- */
  /* тема домашки: поле group, иначе то, что стоит до « · » в topic */
  function hwGroup(h) { return h.group || String(h.topic || 'Other').split(' · ')[0]; }

  /* карточка одной домашки внутри темы */
  function hwCard(h) {
    var p = W.hwProgress(h);
    var ci = currentPart(h);
    var label = ci > 0
      ? 'Now: ' + (W.hwParts(h)[ci].partTitle || ('Part ' + (ci + 1)))
      : (String(h.topic || '').split(' · ').slice(1).join(' · ') || h.topic);
    return '<button class="hcard' + (h.current ? ' now' : '') + '" data-hw="' + h.id + '">' +
      '<div class="hrow"><div class="he">' + (h.emoji || '📝') + '</div>' +
      '<div style="flex:1;min-width:0">' +
      (h.current ? '<div class="hnow">📌 Homework now</div>' : '') +
      '<div class="htopic">' + esc(label) + '</div>' +
      '<div class="htitle">' + esc(h.title) + '</div>' +
      '<div class="hsub">' + esc(h.sub || '') + '</div></div>' +
      '<div class="hp">' + p + '%</div></div>' +
      '<div class="bar"><i style="width:' + p + '%"></i></div></button>';
  }

  W.viewHomework = function () {
    var list = W.homeworks();
    if (!list.length) {
      return '<div class="empty"><b>No homework yet</b>' +
        '<p>Домашка появится здесь после урока.</p></div>';
    }

    /* Домашки разложены по темам. Тема, в которой есть заданная сейчас домашка,
       открыта сразу и обведена. */
    var groups = [], by = {};
    list.forEach(function (h) {
      var g = hwGroup(h);
      if (!by[g]) { by[g] = []; groups.push(g); }
      by[g].push(h);
    });
    if (!W.hwOpenGroups) {
      W.hwOpenGroups = {};
      groups.forEach(function (g) {
        if (by[g].some(function (h) { return h.current; })) W.hwOpenGroups[g] = 1;
      });
    }

    return '<div class="h">Homework by topic</div>' +
      groups.map(function (g) {
        var hs = by[g].slice().sort(function (a, b) { return (b.current ? 1 : 0) - (a.current ? 1 : 0); });
        var open = !!W.hwOpenGroups[g];
        var nowN = hs.filter(function (h) { return h.current; }).length;
        var done = 0, total = 0;
        hs.forEach(function (h) { done += W.hwDone(h); total += W.hwTotal(h); });
        var p = total ? Math.round(done * 100 / total) : 0;
        var t = null;
        W.topics().forEach(function (x) { if (!t && x.title === g) t = x; });

        return '<div class="hgroup' + (nowN ? ' has-now' : '') + (open ? ' open' : '') + '">' +
          '<button class="hg-head" data-hg="' + esc(g) + '">' +
          '<div class="he">' + ((t && t.emoji) || hs[0].emoji || '📚') + '</div>' +
          '<div style="flex:1;min-width:0"><div class="hg-title">' + esc(g) + '</div>' +
          '<div class="hsub">' + hs.length + (hs.length === 1 ? ' homework' : ' homeworks') +
          (nowN ? ' · 📌 ' + nowN + ' now' : '') + '</div></div>' +
          '<div class="hp">' + p + '%</div>' +
          '<div class="hg-arrow">' + (open ? '▴' : '▾') + '</div></button>' +
          (open ? '<div class="hg-body">' + hs.map(hwCard).join('') + '</div>' : '') +
          '</div>';
      }).join('');
  };

  /* ---------- текст: слова НЕ подсвечены, ученик ищет сам ----------
     Каждое слово можно нажать. Нужное — засчитывается и зеленеет,
     ненужное — просто вздрагивает, без подсказки. */
  function reEsc(x) { return String(x).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  function wrapPlain(s) {
    return s.replace(/([A-Za-z][A-Za-z’'-]*)|([\s\S][^A-Za-z]*)/g, function (m, w, other) {
      return w ? '<b class="w">' + esc(w) + '</b>' : esc(other || '');
    });
  }

  function markStory(text, targets) {
    var words = (targets || []).map(function (t) { return t.en; })
      .sort(function (a, b) { return b.length - a.length; });
    if (!words.length) return wrapPlain(text);

    var re = new RegExp('(' + words.map(reEsc).join('|') + ')', 'gi');
    var out = '', last = 0, m;
    while ((m = re.exec(text)) !== null) {
      out += wrapPlain(text.slice(last, m.index));
      out += '<b class="w" data-t="' + esc(m[0].toLowerCase()) + '">' + esc(m[0]) + '</b>';
      last = m.index + m[0].length;
    }
    return out + wrapPlain(text.slice(last));
  }

  function ruOf(p, w) {
    var r = '';
    (p.find || []).forEach(function (t) {
      if (!r && t.en.toLowerCase() === String(w).toLowerCase()) r = t.ru;
    });
    return r;
  }

  /* ---------- домашка-задание по уроку: список заданий с кнопками перехода ---------- */
  function openAssign(h) {
    var body = W.open(h.title);
    body.style.justifyContent = 'flex-start';

    function draw() {
      var s = stP(h, h);
      body.innerHTML =
        '<div class="q-label">' + esc(h.topic) + '</div>' +
        '<div class="as-banner">📌 Homework · ' + W.hwDone(h) + ' / ' + W.hwTotal(h) + ' done</div>' +
        h.tasks.map(function (t, i) {
          var on = !!s.tasks[ik('k', t)];
          return '<div class="as-task' + (on ? ' done' : '') + '">' +
            '<div class="as-top"><div class="as-n">' + (i + 1) + '</div>' +
            '<div class="as-title">' + esc(t.title) + '</div>' +
            '<button class="tick' + (on ? ' on' : '') + '" data-k="' + i + '">' + (on ? '✓' : '') + '</button></div>' +
            '<div class="as-text">' + esc(t.t) + '</div>' +
            (t.go ? '<button class="btn btn-o" data-go="' + i + '">' + esc(t.btn || 'Open') + '</button>' : '') +
            '</div>';
        }).join('');

      Array.prototype.forEach.call(body.querySelectorAll('[data-k]'), function (b) {
        b.onclick = function () {
          var k = ik('k', h.tasks[+b.dataset.k]);
          if (s.tasks[k]) delete s.tasks[k]; else s.tasks[k] = 1;
          W.saveNow(); draw();
        };
      });
      Array.prototype.forEach.call(body.querySelectorAll('[data-go]'), function (b) {
        b.onclick = function () { W.hwGoto(h.tasks[+b.dataset.go].go); };
      });
    }
    draw();
  }

  /* переход из задания: раздел урока, активность в Learn или правило в Grammar */
  W.hwGoto = function (go) {
    if (!go) return;
    if (go.lesson) { W.go('topics'); W.openLesson(go.lesson, go.part || ''); return; }
    if (go.rule) { W.close(); W.go('gram'); W.openRule(go.rule); return; }
    if (go.topic) {
      var want = String(go.topic).toLowerCase(), t = null;
      W.topics().forEach(function (x) { if (!t && String(x.title).toLowerCase() === want) t = x; });
      if (!t) { W.toast('Topic not found'); return; }
      W.close();
      W.setSel('topic', t.id, go.kind || 'words');
      W.go('learn');
      var map = { flash: W.actFlash, match: W.actMatch, build: W.actBuild, type: W.actType, sprint: W.actSprint };
      if (map[go.act]) map[go.act](W.activeList());
    }
  };

  /* ---------- экран домашки ---------- */
  W.hwPartSel = W.hwPartSel || {};

  W.openHomework = function (id, partIdx) {
    var h = W.homework(id);
    if (!h) return;
    if (h.tasks) return openAssign(h);

    var parts = W.hwParts(h);
    if (typeof partIdx === 'number') W.hwPartSel[id] = partIdx;
    if (W.hwPartSel[id] == null) {
      var ci = currentPart(h);
      W.hwPartSel[id] = ci > 0 ? ci : 0;
    }

    var body = W.open(h.title);
    body.style.justifyContent = 'flex-start';
    var ruOn = false;

    function draw() {
      var pi = Math.min(W.hwPartSel[id] || 0, parts.length - 1);
      var P = parts[pi], KEY = keyOf(h, P);
      var s = stP(h, P);
      var findN = (P.find || []).length;
      var gaps = GP(P), lt = LT(P), ch = CH(P), mine = MN(P), ret = RT(P), lk = LK(P);
      var checkObj = P.check ? { id: KEY, check: P.check } : null;

      body.innerHTML =
        '<div class="q-label">' + esc(h.topic) + '</div>' +

        /* переключатель частей: заданная сейчас часть яркая */
        (parts.length > 1 ? '<div class="hw-parts">' +
          parts.map(function (p, i) {
            var now = i > 0 && !!p.current;
            return '<button class="hw-part' + (i === pi ? ' on' : '') + (now ? ' now' : '') +
              '" data-part="' + i + '">' +
              '<small>' + (now ? '📌 HOMEWORK NOW' : partDone(h, p) + ' / ' + partTotal(p)) + '</small>' +
              esc(p.partTitle || ('Part ' + (i + 1))) + '</button>';
          }).join('') + '</div>' : '') +

        (P.storyTitle ? '<div class="story-title">' + esc(P.storyTitle) + '</div>' : '') +

        /* задания в самом уроке — кнопка открывает нужную главу урока */
        (lt.length ? '<div class="h">In the lesson <b>' + cnt(s.tasks, 'k', lt) + ' / ' + lt.length + '</b></div>' +
          '<div class="task-note">' + esc(P.lessonTasks.note) + '</div>' +
          lt.map(function (t, i) {
            var on = !!s.tasks[ik('k', t)];
            return '<div class="as-task' + (on ? ' done' : '') + '">' +
              '<div class="as-top"><div class="as-n">' + (i + 1) + '</div>' +
              '<div class="as-text" style="flex:1;margin:0">' + esc(t.t) + '</div>' +
              '<button class="tick' + (on ? ' on' : '') + '" data-k="' + i + '">' + (on ? '✓' : '') + '</button></div>' +
              (t.go ? '<button class="btn btn-o" data-go="' + i + '">' + esc(t.btn || 'Open') + '</button>' : '') +
              '</div>';
          }).join('') : '') +

        /* 1 — найти слова */
        '<div class="h">1 · Reading <b>' + partDone(h, P) + ' / ' + partTotal(P) + '</b></div>' +
        '<div class="task-note">Прочитай текст целиком. Найди в нём <b>' + findN +
        '</b> слов и выражений по теме «' + esc(P.findTopic || 'Сборы в поездку и аэропорт') + '». ' +
        'Нажми на каждое найденное слово один раз — оно подсветится и покажет перевод.</div>' +
        '<div class="story">' +
        (P.story || []).map(function (p) {
          return '<p class="sp">' + markStory(p.en, P.find) +
            '<span class="sru' + (ruOn ? '' : ' hidden') + '">' + esc(p.ru) + '</span></p>';
        }).join('') + '</div>' +
        '<div class="counter-line"><b>' +
        (P.find || []).filter(function (w) { return s.found[w.en.toLowerCase()]; }).length +
        '</b> / ' + findN + ' found</div>' +
        '<button class="btn btn-g" id="ruBtn">' +
        (ruOn ? 'Спрятать перевод' : 'Показать перевод') + '</button>' +

        /* 2 — фразы целиком */
        (ch.length ? '<div class="h">2 · Useful phrases <b>' + cnt(s.said, 'c', ch) + ' / ' + ch.length + '</b></div>' +
          '<div class="task-note">' + esc(P.chunks.note) + '</div>' +
          '<div class="card">' +
          ch.map(function (c, i) {
            var on = !!s.said[ik('c', c)];
            return '<div class="ch-line' + (on ? ' done' : '') + '">' +
              '<button class="ch-say" data-say="' + i + '">🔊</button>' +
              '<div style="flex:1;min-width:0"><div class="ch-en">' + esc(c.en) + '</div>' +
              '<div class="ch-ru">' + esc(c.ru) + '</div></div>' +
              '<button class="tick' + (on ? ' on' : '') + '" data-c="' + i + '">' +
              (on ? '✓' : '') + '</button></div>';
          }).join('') + '</div>' : '') +

        /* 3 — пропуски */
        (gaps.length ? '<div class="h">3 · Fill in the gaps <b>' + cnt(s.gaps, 'g', gaps) + ' / ' + gaps.length + '</b></div>' +
          '<div class="task-note">Вставь в пропуски слова из текста, которые ты нашёл ' +
          'в первом задании. Подбирай по смыслу. Проверь себя кнопкой <b>Check</b> ' +
          'и переведи каждое предложение на русский вслух.</div>' +
          '<div class="card gapbox">' +
          gaps.map(function (g, i) {
            var ok = !!s.gaps[ik('g', g)];
            var bits = esc(g.s).split('___');
            return '<div class="gline' + (ok ? ' ok' : '') + '">' +
              '<span>' + bits[0] + '</span>' +
              (ok ? '<b class="gword">' + esc(g.a) + '</b>'
                  : '<input class="ginp" id="g' + i + '" autocomplete="off" ' +
                    'autocorrect="off" autocapitalize="off">') +
              '<span>' + (bits[1] || '') + '</span></div>';
          }).join('') +
          '<div class="inc" id="inc"></div>' +
          (cnt(s.gaps, 'g', gaps) < gaps.length ? '<button class="btn btn-o" id="gCheck">Check</button>' : '') +
          '</div>' : '') +

        /* 4 — про себя */
        (mine.length ? '<div class="h">4 · Speaking · about you <b>' + cnt(s.mine, 'm', mine) + ' / ' + mine.length + '</b></div>' +
          '<div class="task-note">' + esc(P.mine.note) + '</div>' +
          '<div class="card">' +
          mine.map(function (q, i) {
            var on = !!s.mine[ik('m', q)];
            return '<div class="ch-line' + (on ? ' done' : '') + '">' +
              '<div style="flex:1">' + esc(txt(q)) + '</div>' +
              '<button class="tick' + (on ? ' on' : '') + '" data-m="' + i + '">' +
              (on ? '✓' : '') + '</button></div>';
          }).join('') + '</div>' : '') +

        /* 5 — пересказ */
        (ret.length ? '<div class="h">5 · Speaking · retell the story <b>' + cnt(s.told, 't', ret) + ' / ' + ret.length + '</b></div>' +
          '<div class="task-note">' + esc(P.retell.note) + '</div>' +
          '<div class="card">' +
          '<div class="chips">' +
          lk.map(function (l, i) {
            return '<button class="chip' + (s.used[ik('u', l)] ? ' in' : '') +
              '" data-u="' + i + '" title="' + esc(l.ru) + '">' + esc(l.en) + '</button>';
          }).join('') + '</div>' +
          '<div class="hintline" style="margin-bottom:12px">' + esc(P.retell.use) + '</div>' +
          ret.map(function (r, i) {
            var on = !!s.told[ik('t', r)];
            return '<div class="ch-line' + (on ? ' done' : '') + '">' +
              '<div style="flex:1">' + esc(txt(r)) + '</div>' +
              '<button class="tick' + (on ? ' on' : '') + '" data-r="' + i + '">' +
              (on ? '✓' : '') + '</button></div>';
          }).join('') + '</div>' : '') +

        /* проверка на уроке */
        (checkObj ? '<div class="h">Lesson check</div>' +
          '<div class="task-note">Это задание выполняется на уроке вместе с преподавателем: ' +
          'проверим, как ты выучил слова и можешь ли использовать их в речи.</div>' +
          '<button class="act wide accent" id="chkBtn" style="margin-bottom:6px">' +
          '<div class="ico">🎯</div><div><div class="nm">Start the check</div>' +
          '<div class="sub">' + esc(W.checkSub(checkObj)) + '</div></div></button>' : '') +

        /* вопросы к уроку */
        ((P.questions || []).length ? '<div class="h">Questions for the lesson</div>' +
          '<div class="card qlist">' +
          P.questions.map(function (q, i) {
            return '<div class="qq"><b>' + (i + 1) + '</b> ' + esc(q) + '</div>';
          }).join('') + '</div>' : '');

      /* --- обработчики --- */
      Array.prototype.forEach.call(body.querySelectorAll('[data-part]'), function (b) {
        b.onclick = function () {
          W.hwPartSel[id] = +b.dataset.part;
          ruOn = false;
          draw();
          var sc = body.closest('.screen');
          if (sc) sc.scrollTop = 0;
          body.scrollTop = 0;
        };
      });

      if ($('#ruBtn')) $('#ruBtn').onclick = function () { ruOn = !ruOn; draw(); };
      if ($('#chkBtn')) $('#chkBtn').onclick = function () { W.hwCheck(checkObj); };

      Array.prototype.forEach.call(body.querySelectorAll('.w'), function (b) {
        var t = b.dataset.t;
        if (t && s.found[t]) b.classList.add('on');
        b.onclick = function () {
          if (!t) { W.wrongFx(b); return; }          /* не то слово — только вздрогнуло */
          if (!s.found[t]) {
            s.found[t] = 1;
            W.saveNow();
            W.addXP(5);
            W.toast(b.textContent + ' — ' + ruOf(P, t));
            draw();
          } else {
            W.toast(b.textContent + ' — ' + ruOf(P, t));
          }
        };
      });

      Array.prototype.forEach.call(body.querySelectorAll('[data-say]'), function (b) {
        b.onclick = function () { W.speak(ch[+b.dataset.say].en); };
      });

      Array.prototype.forEach.call(body.querySelectorAll('[data-go]'), function (b) {
        b.onclick = function () { W.hwGoto(lt[+b.dataset.go].go); };
      });

      function toggle(sel, bag, pre, items) {
        var attr = sel.replace(/\[data-|\]/g, '');
        Array.prototype.forEach.call(body.querySelectorAll(sel), function (b) {
          b.onclick = function () {
            var k = ik(pre, items[+b.dataset[attr]]);
            if (bag[k]) delete bag[k]; else bag[k] = 1;
            W.saveNow(); draw();
          };
        });
      }
      toggle('[data-k]', s.tasks, 'k', lt);
      toggle('[data-c]', s.said, 'c', ch);
      toggle('[data-m]', s.mine, 'm', mine);
      toggle('[data-r]', s.told, 't', ret);
      toggle('[data-u]', s.used, 'u', lk);

      if ($('#gCheck')) $('#gCheck').onclick = function () {
        var right = 0, wrong = 0;
        gaps.forEach(function (g, i) {
          var el = $('#g' + i);
          if (!el) return;
          var v = W.norm(el.value);
          if (!v) return;
          if (v === W.norm(g.a)) { s.gaps[ik('g', g)] = 1; right++; }
          else { wrong++; W.wrongFx(el); }
        });
        if (right) { W.saveNow(); W.addXP(right * 10); draw(); }
        else if (!wrong) W.toast('Впиши хотя бы одно слово');
      };
    }
    draw();
  };
})();
