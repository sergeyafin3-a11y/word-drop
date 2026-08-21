/* lessons.js — вкладка Topics: полноценные уроки в HTML */
(function () {
  var W = window.WD;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = W.esc;

  W.lessons = function () { return window.LESSONS || []; };
  W.lesson = function (id) {
    var a = W.lessons();
    for (var i = 0; i < a.length; i++) if (a[i].id === id) return a[i];
    return null;
  };

  /* какие уроки ученик уже открывал */
  function seen(id) {
    if (!W.s.lessons) W.s.lessons = {};
    return W.s.lessons[id];
  }
  function markSeen(id) {
    if (!W.s.lessons) W.s.lessons = {};
    W.s.lessons[id] = W.today();
    W.save();
  }

  /* ---------- экран со списком уроков ---------- */
  W.viewTopics = function () {
    var list = W.lessons();
    if (!list.length) {
      return '<div class="empty"><b>Уроков пока нет</b>' +
        '<p>Положите HTML-файл урока рядом с index.html и допишите строку ' +
        'в lessons-data.js.</p></div>';
    }
    return '<div class="h">Lessons</div>' +
      list.map(function (l) {
        var was = seen(l.id);
        return '<div class="lcard">' +
          '<button class="lmain" data-lesson="' + l.id + '">' +
          '<div class="le">' + (l.emoji || '📘') + '</div>' +
          '<div style="flex:1;min-width:0">' +
          '<div class="lt">' + esc(l.title) + '</div>' +
          '<div class="ls">' + esc(l.sub || '') + '</div>' +
          '<div class="ld">' + esc(l.date || '') +
          (was ? ' · opened ' + esc(was) : ' · new') + '</div></div>' +
          '<div class="lgo">›</div></button>' +
          ((l.hw && l.hw.length)
            ? '<div class="lhw"><div class="lhw-h">Homework</div>' +
              l.hw.map(function (h) {
                return '<button class="hwb" data-lesson="' + l.id +
                  '" data-part="' + esc(h) + '">📌 ' + esc(h) + '</button>';
              }).join('') + '</div>'
            : '') +
          '</div>';
      }).join('');
  };

  /* ---------- сам урок во весь экран ---------- */
  W.openLesson = function (id, part) {
    var l = W.lesson(id);
    if (!l) return;
    markSeen(id);

    W.close();
    var scr = document.createElement('div');
    scr.className = 'screen lesson-screen';
    scr.innerHTML =
      '<div class="sc-top">' +
      '<button class="x" id="lx">×</button>' +
      '<div class="sc-title">' + esc(l.title) + '</div>' +
      '<button class="jump" id="ljump">☰</button>' +
      '</div>' +
      '<div class="lframe-wrap"><iframe class="lframe" id="lframe" ' +
      'src="' + l.file + '" title="' + esc(l.title) + '"></iframe></div>' +
      '<div class="jumplist hidden" id="ljlist"></div>';
    document.body.appendChild(scr);
    document.body.style.overflow = 'hidden';

    function close() {
      scr.remove();
      document.body.style.overflow = '';
      W.render();
    }
    $('#lx').onclick = close;

    var frame = $('#lframe');
    var wrap = $('.lframe-wrap', scr);

    /* iframe изнутри не прокручивается (на айфоне это штатное поведение),
       поэтому растягиваем его на всю высоту урока и листаем обёртку. */
    /* Пока грузятся картинки, урок «растёт» и нужное упражнение уезжает вниз.
       Поэтому держим цель и подкручиваем к ней, пока страница не устаканится. */
    var pending = null, pendingUntil = 0;

    /* Важно: координаты внутри урока и снаружи — разные системы отсчёта.
       Сам iframe не прокручивается и стоит в начале обёртки, поэтому
       положение заголовка внутри урока и есть нужный scrollTop обёртки. */
    function align() {
      if (!pending || !pending.getClientRects().length) return;
      var y = pending.getBoundingClientRect().top + frame.offsetTop - 8;
      wrap.scrollTop = Math.max(0, y);
      if (Date.now() > pendingUntil) pending = null;
    }

    function fit() {
      try {
        var d = frame.contentDocument;
        if (!d) return;
        var h = Math.max(d.documentElement.scrollHeight, d.body.scrollHeight);
        if (h && Math.abs(parseInt(frame.style.height || 0, 10) - h) > 4) {
          frame.style.height = h + 'px';
          align();
        }
      } catch (e) {}
    }

    /* заголовки внутри урока — собираем сами, ничего размечать не надо */
    function headings() {
      try {
        var d = frame.contentDocument;
        if (!d) return [];
        return Array.prototype.slice.call(d.querySelectorAll('h2'));
      } catch (e) { return []; }
    }

    /* Упражнение может лежать в скрытой главе — уроки показывают их по одной.
       Сначала открываем главу: ищем родную кнопку урока и нажимаем её,
       чтобы отработал ваш собственный код. Не нашли — показываем сами. */
    function reveal(el) {
      var d = frame.contentDocument;
      if (!d || el.getClientRects().length) return;

      var host = el;
      while (host && host !== d.body) {
        if (d.defaultView.getComputedStyle(host).display === 'none') break;
        host = host.parentElement;
      }
      if (!host || host === d.body) return;

      var n = ((host.id || '').match(/(\d+)/) || [])[1];
      var clicked = false;
      if (n) {
        Array.prototype.forEach.call(d.querySelectorAll('button, a'), function (b) {
          if (clicked) return;
          var on = b.getAttribute('onclick') || '';
          if (on.indexOf('(' + n) !== -1 && /lesson|chapter|part|tab|show|go/i.test(on)) {
            b.click();
            clicked = true;
          }
        });
      }
      if (!clicked) host.style.display = 'block';
    }

    /* Внутри урока крупные картинки догружаются и всё съезжает —
       поэтому доводим прокрутку несколько раз. */
    function goTo(el) {
      reveal(el);
      pending = el;
      pendingUntil = Date.now() + 4000;
      fit();
      align();
      [150, 450, 950, 1800, 3000, 4100].forEach(function (ms) {
        setTimeout(function () { fit(); align(); }, ms);
      });
    }

    function scrollTo(name) {
      var hs = headings(), target = null;
      var want = String(name).toLowerCase().trim();
      hs.forEach(function (h) {
        if (!target && h.textContent.toLowerCase().indexOf(want) !== -1) target = h;
      });
      if (!target) { W.toast('Exercise not found'); return false; }
      goTo(target);
      return true;
    }

    frame.onload = function () {
      var hs = headings();
      if (!hs.length) { $('#ljump').style.display = 'none'; return; }

      var box = $('#ljlist');
      box.innerHTML = '<div class="dd-h">Jump to</div>' +
        hs.map(function (h, i) {
          return '<button class="jrow" data-i="' + i + '">' +
            esc(h.textContent.trim()) + '</button>';
        }).join('');

      Array.prototype.forEach.call(box.querySelectorAll('[data-i]'), function (b) {
        b.onclick = function () {
          goTo(hs[+b.dataset.i]);
          box.classList.add('hidden');
        };
      });

      $('#ljump').onclick = function () { box.classList.toggle('hidden'); };

      fit();
      /* ученик тронул экран сам — больше никуда его не тащим */
      ['touchstart', 'wheel', 'mousedown'].forEach(function (ev) {
        wrap.addEventListener(ev, function () { pending = null; }, { passive: true });
      });

      try {
        var d = frame.contentDocument;
        if (window.ResizeObserver) {
          var ro = new ResizeObserver(fit);
          ro.observe(d.body);
        } else {
          setInterval(fit, 700);
        }
        /* после любого клика внутри урока глава может смениться */
        d.addEventListener('click', function () { setTimeout(fit, 60); }, true);
      } catch (e) {}

      if (part) setTimeout(function () { scrollTo(part); }, 120);
    };
  };
})();
