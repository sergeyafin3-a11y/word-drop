/* search.js — поиск по всему приложению: темы, слова, грамматика, уроки, домашка */
(function () {
  var W = window.WD;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = W.esc;

  function norm(x) { return String(x || '').toLowerCase().trim(); }

  /* всё, что вообще можно найти */
  function index() {
    var out = [];

    W.homeworks && W.homeworks().forEach(function (h) {
      out.push({ g: 'Homework', e: h.emoji || '📝', t: h.title, s: h.topic,
        find: [h.title, h.topic, h.sub].join(' '),
        open: function () { W.go('hw'); W.openHomework(h.id); } });
    });

    W.lessons && W.lessons().forEach(function (l) {
      out.push({ g: 'Lessons', e: l.emoji || '📘', t: l.title, s: l.sub || '',
        find: [l.title, l.sub].join(' '),
        open: function () { W.go('topics'); W.openLesson(l.id); } });
    });

    W.topics().forEach(function (t) {
      W.KINDS.forEach(function (k) {
        var list = W.list(t.id, k.id);
        if (!list.length) return;
        out.push({ g: 'Topics', e: t.emoji || '📚', t: t.title + ' · ' + k.label,
          s: list.length + ' items',
          find: [t.title, k.label].join(' '),
          open: function () { W.setSel('topic', t.id, k.id); W.go('learn'); } });
      });
    });

    W.batches().forEach(function (b) {
      out.push({ g: 'New words', e: '🆕', t: b.title, s: b.items.length + ' words',
        find: b.title,
        open: function () { W.setSel('batch', b.id, ''); W.go('learn'); } });
    });

    W.rules().forEach(function (r) {
      out.push({ g: 'Grammar', e: '📐', t: r.title, s: r.sub || '',
        find: [r.title, r.sub, r.formula].join(' ').replace(/<[^>]+>/g, ' '),
        open: function () { W.go('gram'); W.openRule(r.id); } });
    });

    return out;
  }

  /* слова ищем отдельно: их тысячи, показываем только совпавшие */
  function words(q) {
    var out = [], seen = {};
    W.allWords().forEach(function (w) {
      if (out.length >= 12) return;
      var k = norm(w.en);
      if (seen[k]) return;
      if (norm(w.en).indexOf(q) === -1 && norm(w.ru).indexOf(q) === -1) return;
      seen[k] = 1;
      out.push(w);
    });
    return out;
  }

  W.searchOpen = function () {
    var body = W.open('Search');
    body.style.justifyContent = 'flex-start';
    body.innerHTML =
      '<input class="type-in sfield" id="sq" placeholder="travel, past simple, чемодан…" ' +
      'autocomplete="off" autocorrect="off" autocapitalize="off">' +
      '<div id="sres"></div>';

    var all = index();

    function draw() {
      var q = norm($('#sq').value);
      var box = $('#sres');
      if (q.length < 2) {
        box.innerHTML = '<div class="hintline">Введите два символа и больше.<br>' +
          'Ищет темы, слова, грамматику, уроки и домашку.</div>';
        return;
      }

      var hits = all.filter(function (x) { return norm(x.find).indexOf(q) !== -1; });
      var ws = words(q);

      if (!hits.length && !ws.length) {
        box.innerHTML = '<div class="hintline">Ничего не нашлось по «' + esc(q) + '»</div>';
        return;
      }

      var groups = {}, order = [];
      hits.forEach(function (x) {
        if (!groups[x.g]) { groups[x.g] = []; order.push(x.g); }
        groups[x.g].push(x);
      });

      var html = order.map(function (g) {
        return '<div class="dd-h">' + esc(g) + '</div>' +
          groups[g].map(function (x, i) {
            return '<button class="mrow" data-hit="' + g + '|' + i + '">' +
              '<div class="me">' + x.e + '</div>' +
              '<div style="flex:1;min-width:0"><div class="mt">' + esc(x.t) + '</div>' +
              '<div class="ms">' + esc(x.s) + '</div></div>' +
              '<div class="mc">›</div></button>';
          }).join('');
      }).join('');

      if (ws.length) {
        html += '<div class="dd-h">Words</div>' +
          ws.map(function (w) {
            return '<div class="mrow flat"><div class="me">' + (w.icon || '📕') + '</div>' +
              '<div style="flex:1;min-width:0"><div class="mt">' + esc(w.en) + '</div>' +
              '<div class="ms">' + esc(w.ru) + '</div></div></div>';
          }).join('');
      }
      box.innerHTML = html;

      Array.prototype.forEach.call(box.querySelectorAll('[data-hit]'), function (b) {
        b.onclick = function () {
          var p = b.dataset.hit.split('|');
          W.close();
          groups[p[0]][+p[1]].open();
        };
      });
    }

    $('#sq').oninput = draw;
    draw();
    /* экран могли закрыть за эти 80 мс — тогда поля уже нет */
    setTimeout(function () { var f = $('#sq'); if (f) f.focus(); }, 80);
  };
})();
