/* sort.js — Sort & Say: разложить занятия по полкам и сказать предложение */
(function () {
  var W = window.WD;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = W.esc;

  /* play → playing, dance → dancing, spin → spinning */
  W.ing = function (phrase) {
    var parts = String(phrase).trim().split(/\s+/);
    var v = parts[0].toLowerCase(), form;
    if (/ing$/.test(v)) form = v;
    else if (/[^aeiou]e$/.test(v)) form = v.slice(0, -1) + 'ing';
    else if (/^[a-z]{2,4}$/.test(v) && /[^aeiou][aeiou][^aeiouwxy]$/.test(v)) form = v + v.slice(-1) + 'ing';
    else if (/ie$/.test(v)) form = v.slice(0, -2) + 'ying';
    else form = v + 'ing';
    parts[0] = form;
    return parts.join(' ');
  };

  W.sentence = function (bucket, phrase) {
    return bucket.tpl + ' ' + (bucket.ing ? W.ing(phrase) : phrase);
  };

  W.actSort = function () {
    var sel0 = W.sel();
    var tid = sel0.type === 'topic' ? sel0.id : (W.topics()[0] || {}).id;
    var pool = W.list(tid, 'words').filter(function (w) { return w.en.split(/\s+/).length <= 5; });
    if (pool.length < 4) pool = W.allWords().filter(function (w) { return w.en.split(/\s+/).length <= 5; });
    var queue = W.pick(pool, Math.min(30, pool.length));
    var idx = 0, said = 0, xp = 0;
    var sel = W.sel();
    var topic = W.topic(sel.type === 'topic' ? sel.id : (W.topics()[0] || {}).id);
    var buckets = (topic && topic.buckets) || window.BUCKETS || [];
    var body = W.open('Sort & Say');

    function draw() {
      if (idx >= queue.length) {
        return W.result(said, 'sentences said', 'Say them again tomorrow — out loud!',
          xp, function () { W.actSort(); });
      }
      var item = queue[idx];
      W.count((idx + 1) + '/' + queue.length);
      body.innerHTML =
        '<div class="q-label">Where does it go?</div>' +
        '<div class="flash" style="min-height:160px">' +
        (item.icon ? '<div class="emoji">' + item.icon + '</div>' : '') +
        '<div class="big">' + esc(item.en) + '</div>' +
        '<div class="tip">' + esc(item.ru) + '</div></div>' +
        '<div id="bks"></div>';

      var box = $('#bks');
      buckets.forEach(function (b) {
        var btn = document.createElement('button');
        btn.className = 'btn btn-g';
        btn.textContent = b.label;
        btn.onclick = function () { say(b, item); };
        box.appendChild(btn);
      });
    }

    function say(bucket, item) {
      var base = W.sentence(bucket, item.en);
      var details = W.pick(window.DETAILS || [], 6);
      var chosen = null;
      var body2 = $('#scBody');

      function full() { return base + (chosen ? ' ' + chosen.en : '') + '.'; }

      function paint() {
        body2.innerHTML =
          '<div class="q-label">Say it out loud</div>' +
          '<div class="big-q" id="sent">' + esc(full()) + '</div>' +
          '<div class="support"><div class="lbl">Add one detail</div>' +
          '<div id="dts" style="text-align:center">' + details.map(function (d, i) {
            return '<button class="ph' + (chosen === d ? ' pick' : '') + '" data-i="' + i + '">' +
              esc(d.en) + '</button>';
          }).join('') + '</div></div>' +
          '<button class="btn btn-o" id="ok">I said it ✓</button>' +
          '<button class="btn btn-g" id="back">Change shelf</button>';

        Array.prototype.forEach.call($('#dts').children, function (b) {
          b.onclick = function () {
            var d = details[+b.dataset.i];
            chosen = (chosen === d) ? null : d;
            paint();
          };
        });
        $('#ok').onclick = function () {
          said++; xp += W.XP.say; W.addXP(W.XP.say);
          W.mark(item, true);
          idx++; setTimeout(draw, 300);
        };
        $('#back').onclick = draw;
      }
      paint();
    }

    draw();
  };
})();
