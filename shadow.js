/* shadow.js — Shadowing: короткое видео, за которым ученик говорит вслух.
   Видео открывается прямо внутри приложения, рядом лежат ключевые фразы,
   есть замедление речи и запись голоса, чтобы преподаватель мог послушать. */
(function () {
  var W = window.WD;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = W.esc;

  W.shadows = function () { return window.SHADOW || []; };
  W.shadowOne = function (id) {
    var a = W.shadows();
    for (var i = 0; i < a.length; i++) if (a[i].id === id) return a[i];
    return null;
  };

  /* чтение: список не должен ничего записывать в прогресс */
  function read(id) { return (W.s.shadow || {})[id] || {}; }
  /* запись: только когда ученик реально отметил */
  function st(id) {
    if (!W.s.shadow) W.s.shadow = {};
    return W.s.shadow[id] || (W.s.shadow[id] = {});
  }
  function mmss(s) {
    var m = Math.floor(s / 60), r = s % 60;
    return m + ':' + (r < 10 ? '0' : '') + r;
  }

  /* ---------- блок со списком во вкладке Homework ---------- */
  W.viewShadow = function () {
    var list = W.shadows();
    if (!list.length) return '';
    return '<div class="h">🎧 Shadowing</div>' +
      '<div class="task-note">Listen to a short video and speak at the same time as the speaker. ' +
      'Same words, same speed. Five minutes a day is enough.</div>' +
      list.map(function (v) {
        var s = read(v.id);
        return '<button class="shcard' + (s.done ? ' done' : '') + '" data-shadow="' + esc(v.id) + '">' +
          '<div class="sh-top"><div class="sh-title">' + esc(v.title) + '</div>' +
          '<div class="sh-time">' + mmss(v.secs) + '</div></div>' +
          '<div class="sh-who">' + esc(v.who) + '</div>' +
          '<div class="sh-about">' + esc(v.about) + '</div>' +
          (s.done ? '<div class="sh-done">✓ done · ' + esc(s.done) + '</div>' : '') +
          '</button>';
      }).join('');
  };

  /* ---------- проигрыватель: обычный iframe, скорость через YouTube API ---------- */
  /* Колбэк YouTube может прийти, когда экран уже закрыт или открыт другой ролик.
     Поэтому у каждого открытия свой номер, и чужие колбэки ничего не делают. */
  var apiAdded = false, waiting = [], gen = 0;
  function apiReady() {
    var q = waiting;
    waiting = [];
    q.forEach(function (fn) { try { fn(); } catch (e) {} });
  }
  function needApi(cb) {
    if (window.YT && window.YT.Player) { cb(); return; }
    waiting.push(cb);
    if (apiAdded) return;
    apiAdded = true;
    var prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = function () {
      if (typeof prev === 'function') prev();
      apiReady();
    };
    var t = document.createElement('script');
    t.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(t);
  }

  /* ---------- экран одного видео ---------- */
  W.openShadow = function (id) {
    var v = W.shadowOne(id);
    if (!v) return;
    var mine = ++gen;      /* номер этого открытия */
    var s = read(id);      /* только для показа: отметку ставим ниже, по кнопке */
    var body = W.open('Shadowing');
    body.style.justifyContent = 'flex-start';

    var src = 'https://www.youtube-nocookie.com/embed/' + v.yt +
      '?rel=0&modestbranding=1&playsinline=1&enablejsapi=1' +
      (v.start ? '&start=' + v.start : '') + (v.end ? '&end=' + v.end : '');

    body.innerHTML =
      '<div class="q-label">' + esc(v.who) + '</div>' +
      '<div class="story-title">' + esc(v.title) + '</div>' +

      '<div class="ytbox"><iframe id="shFrame" src="' + src + '" title="' + esc(v.title) + '" ' +
      'frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture" ' +
      'allowfullscreen></iframe></div>' +

      '<div class="sh-speed" id="shSpeed">' +
      '<span>Speed</span>' +
      '<button class="sh-sp" data-sp="0.5">0.5×</button>' +
      '<button class="sh-sp" data-sp="0.75">0.75×</button>' +
      '<button class="sh-sp on" data-sp="1">1×</button>' +
      '</div>' +
      '<a class="sh-yt" href="https://www.youtube.com/watch?v=' + v.yt +
      (v.start ? '&t=' + v.start : '') + '" target="_blank" rel="noopener">Open on YouTube ↗</a>' +

      '<div class="h">What is shadowing?</div>' +
      '<div class="task-note">You speak <b>at the same time</b> as the person in the video. ' +
      'The same words, the same speed, the same music of the voice. You do not translate and you do not ' +
      'stop the video. You are a shadow: the voice goes first, you go right after it.</div>' +

      '<div class="h">How to do it</div>' +
      '<div class="card sh-steps">' +
      '<div class="sh-step"><b>1</b>Play 20 seconds. Only listen. Do not speak.</div>' +
      '<div class="sh-step"><b>2</b>Play the same 20 seconds and read the lines below at the same time.</div>' +
      '<div class="sh-step"><b>3</b>Play again and speak with the video. Speak quietly, like a shadow.</div>' +
      '<div class="sh-step"><b>4</b>Too fast? Put the speed on 0.75× and do it again.</div>' +
      '<div class="sh-step"><b>5</b>Record yourself, listen, and do the same part one more time.</div>' +
      '<div class="sh-step"><b>6</b>Do one part three times. Then take the next 20 seconds.</div>' +
      '</div>' +
      '<div class="task-note">Copy the <b>music</b> of the voice, not only the words: where the voice goes up, ' +
      'where it stops, which word is loud. Twenty seconds done well is better than two minutes done badly.</div>' +

      '<div class="h">Say these first</div>' +
      '<div class="task-note">Short lines on the same topic. Say each one three times before you ' +
      'start the video, so your mouth is ready.</div>' +
      '<div class="card">' +
      (v.phrases || []).map(function (p, i) {
        return '<div class="ch-line"><button class="ch-say" data-say="' + i + '">🔊</button>' +
          '<div style="flex:1;min-width:0"><div class="ch-en">' + esc(p.en) + '</div>' +
          '<div class="ch-ru">' + esc(p.ru) + '</div></div></div>';
      }).join('') + '</div>' +

      '<div class="h">Record yourself</div>' +
      '<div class="task-note">Record 20–30 seconds of your shadowing and listen to it. ' +
      'Then send it to your teacher with the button below.</div>' +
      '<div class="card sh-rec">' +
      '<button class="btn btn-o" id="shRec">● Record</button>' +
      '<div class="sh-rec-note" id="shNote">Ready</div>' +
      '<audio id="shAudio" controls class="hidden"></audio>' +
      '<div class="row2 hidden" id="shSend">' +
      '<button class="btn btn-g" id="shShare">Send to teacher</button>' +
      '<button class="btn btn-g" id="shAgain">Record again</button>' +
      '</div></div>' +

      '<button class="act wide accent" id="shDone" style="margin-top:14px">' +
      '<div class="ico">✓</div><div><div class="nm">' + (s.done ? 'Done again' : 'I did it three times') + '</div>' +
      '<div class="sub">' + (s.done ? 'last time: ' + esc(s.done) : 'tap when you finish') + '</div></div></button>';

    /* --- озвучка ключевых фраз --- */
    Array.prototype.forEach.call(body.querySelectorAll('[data-say]'), function (b) {
      b.onclick = function () { W.speak(v.phrases[+b.dataset.say].en); };
    });

    /* --- скорость речи --- */
    var player = null;
    needApi(function () {
      if (mine !== gen || !document.getElementById('shFrame')) return;   /* экран уже другой */
      try {
        player = new window.YT.Player('shFrame', {});
      } catch (e) { player = null; }
    });
    Array.prototype.forEach.call(body.querySelectorAll('.sh-sp'), function (b) {
      b.onclick = function () {
        var rate = parseFloat(b.dataset.sp);
        if (player && player.setPlaybackRate) {
          player.setPlaybackRate(rate);
          Array.prototype.forEach.call(body.querySelectorAll('.sh-sp'), function (x) {
            x.classList.toggle('on', x === b);
          });
        } else {
          W.toast('Speed is in the video settings ⚙︎');
        }
      };
    });

    /* --- запись голоса --- */
    var rec = null, chunks = [], blob = null, stream = null, starting = false, url = null;
    var recBtn = $('#shRec'), note = $('#shNote'), audio = $('#shAudio'), send = $('#shSend');

    function stopStream() {
      if (stream) { stream.getTracks().forEach(function (t) { t.stop(); }); stream = null; }
    }
    function dropUrl() {
      if (url) { try { URL.revokeObjectURL(url); } catch (e) {} url = null; }
    }
    /* экран закрыли крестиком: отпускаем микрофон, гасим плеер, чистим ссылки */
    W.onClose = function () {
      gen++;
      try { if (rec && rec.state === 'recording') rec.stop(); } catch (e) {}
      rec = null;
      stopStream();
      dropUrl();
      try { if (player && player.destroy) player.destroy(); } catch (e) {}
      player = null;
    };
    function fail(msg) {
      note.textContent = msg;
      recBtn.textContent = '● Record';
      recBtn.classList.remove('rec-on');
    }

    recBtn.onclick = function () {
      if (rec && rec.state === 'recording') { rec.stop(); return; }
      if (starting) return;                 /* второе нажатие, пока включается микрофон */
      if (!navigator.mediaDevices || !window.MediaRecorder) {
        fail('This phone cannot record here. Use the voice recorder app and send the file.');
        return;
      }
      starting = true;
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (st2) {
        starting = false;
        if (!recBtn.isConnected) {          /* экран закрыли, пока включался микрофон */
          st2.getTracks().forEach(function (t) { t.stop(); });
          return;
        }
        stream = st2;
        chunks = [];
        try {
          rec = new MediaRecorder(st2);
        } catch (e) {
          stopStream();
          fail('This phone cannot record here. Use the voice recorder app and send the file.');
          return;
        }
        rec.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
        rec.onstop = function () {
          stopStream();
          blob = new Blob(chunks, { type: (chunks[0] && chunks[0].type) || 'audio/mp4' });
          dropUrl();
          url = URL.createObjectURL(blob);
          audio.src = url;
          audio.classList.remove('hidden');
          send.classList.remove('hidden');
          recBtn.textContent = '● Record';
          recBtn.classList.remove('rec-on');
          note.textContent = 'Listen to yourself. Then say it again, better.';
        };
        rec.start();
        recBtn.textContent = '■ Stop';
        recBtn.classList.add('rec-on');
        note.textContent = 'Recording… speak with the video';
      }).catch(function () {
        starting = false;
        stopStream();
        fail('No microphone. Allow the microphone in your browser settings.');
      });
    };

    $('#shAgain').onclick = function () {
      try { audio.pause(); } catch (e) {}
      audio.removeAttribute('src');
      dropUrl();
      blob = null;
      audio.classList.add('hidden');
      send.classList.add('hidden');
      note.textContent = 'Ready';
    };

    $('#shShare').onclick = function () {
      if (!blob) return;
      var name = 'shadowing-' + v.id + '.' + ((blob.type.indexOf('mp4') !== -1) ? 'm4a' : 'webm');
      var file = null;
      try { file = new File([blob], name, { type: blob.type }); } catch (e) {}
      if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator.share({ files: [file], title: 'Shadowing: ' + v.title }).catch(function () {});
        return;
      }
      var a = document.createElement('a');
      if (!('download' in a)) {
        W.toast('Send the recording from your voice recorder app');
        return;
      }
      var tmp = URL.createObjectURL(blob);
      a.href = tmp;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(function () { try { URL.revokeObjectURL(tmp); } catch (e) {} }, 60000);
      W.toast('Saved as a file');
    };

    /* --- отметка «сделал» --- */
    $('#shDone').onclick = function () {
      var s = st(id);
      var today = W.today();
      var first = s.done !== today;        /* XP только за первый раз в день */
      s.done = today;
      s.times = (s.times || 0) + 1;
      W.saveNow();
      if (first) {
        W.addXP(20);
        if (W.finishAct) W.finishAct();    /* день засчитан, стрик горит */
        W.toast('Nice! +20 XP');
      } else {
        W.toast('Done again — nice');
      }
      W.close();
      W.go('hw');
    };
  };
})();
