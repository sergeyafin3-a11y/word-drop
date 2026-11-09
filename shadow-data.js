/* ============================================================
   SHADOWING — короткие видео, за которыми ученик говорит вслух.
   Открывается во вкладке Homework, отдельным блоком.

   Поле за полем:
     id      — свой, потом не менять: к нему привязана отметка «сделал»
     yt      — идентификатор видео на YouTube (то, что после v=)
     start   — с какой секунды начинать (0 — с начала)
     end     — на какой секунде остановиться (0 — до конца ролика)
     secs    — длина выбранного куска, она видна на карточке
     who     — кто говорит
     about   — о чём ролик, простым английским
     phrases — короткие строчки по теме ролика: ученик проговаривает их
               до видео, чтобы рот уже был в этих словах. Это не цитаты.
     dictation — ЗАДАНИЕ «слушай и печатай». Поле необязательное: если его нет,
               задание на карточке просто не появится. Каждая строчка — это
               кусок видео и то, что в нём на самом деле сказано:

                 dictation: [
                   { start: 12, end: 17, text: 'I always start with my eyes.' },
                   { start: 18, end: 24, text: 'You don\'t need a lot of it.' }
                 ]

               start и end — секунды от начала ролика (не от start самого ролика).
               text — дословно то, что слышно. Приложение сверяет только слова:
               регистр, запятые и лишние пробелы не важны. Пока ученик не
               напечатает строчку верно, следующая не открывается.
               Строчки должны лежать внутри куска ролика, то есть между start
               и end самого ролика, — дальше плеер всё равно остановится.

   Все ролики проверены: встраивание разрешено, длинные порезаны
   на кусок полторы минуты — приложение само остановит видео.
   ============================================================ */

window.SHADOW_FOLDERS = [
  { id: 'talk',   title: 'Interviews & stars',      emoji: '🎤',
    about: 'Real interviews and tutorials, 90 seconds each. Longer and faster — this is where you work now.' },
  { id: 'carpet', title: 'Red carpet · short clips', emoji: '✨',
    about: 'The first, easy ones: 30 to 90 seconds. Come back here any time to warm up.' }
];

window.SHADOW = [
  {
    id: 'sh-rihanna-makeup',
    yt: 'KONe4SNFA64',
    start: 5, end: 95, secs: 90,
    folder: 'talk',
    title: 'Getting ready to go out',
    who: 'Rihanna · Vogue',
    about: 'She does her makeup and names every step. Calm and clear — start the new folder here.',
    phrases: [
      { en: 'First I wash my face.', ru: 'сначала я умываюсь' },
      { en: 'I always start with this one.', ru: 'я всегда начинаю с этого' },
      { en: 'You don’t need a lot of it.', ru: 'много не нужно' }
    ]
  },
  {
    id: 'sh-doja-beauty',
    yt: 'tsk9c7KF76E',
    start: 10, end: 100, secs: 90,
    dictation: [
      { start: 10, end: 14.4, text: "I'm about to show you a look that I do pretty often." },
      { start: 41, end: 44.8, text: "My hands are a little wet, so it kind of turns it into a paste." },
      { start: 50.7, end: 52.3, text: "I do this like twice a day." },
      { start: 56.2, end: 60, text: "I dry my face off and I make sure it's super dry." },
      { start: 70.6, end: 74.8, text: "And then I start to go in circles around my nose first." }
    ],
    folder: 'talk',
    title: 'My makeup routine',
    who: 'Doja Cat · Vogue',
    about: 'A tutorial, step by step. She explains what she uses and why.',
    phrases: [
      { en: 'This is my favourite part.', ru: 'это моя любимая часть' },
      { en: 'I put a little bit here.', ru: 'я наношу немного вот сюда' },
      { en: 'It takes me about ten minutes.', ru: 'у меня это занимает минут десять' }
    ]
  },
  {
    id: 'sh-courtreezy',
    yt: '2Un3fn67hMo',
    start: 5, end: 95, secs: 90,
    folder: 'talk',
    title: 'I have something to say',
    who: 'courtreezy · YouTube',
    about: 'A blogger talks straight to the camera about her own project. Normal, everyday English.',
    phrases: [
      { en: 'I have something to tell you.', ru: 'мне нужно вам кое-что сказать' },
      { en: 'I have been working on this for a long time.', ru: 'я работала над этим долго' },
      { en: 'I am so excited about it.', ru: 'я так этому рада' }
    ]
  },
  {
    id: 'sh-cardi-fallon',
    yt: '8LPVjHxXvJM',
    start: 10, end: 100, secs: 90,
    dictation: [
      { start: 27.2, end: 30.1, text: "So everybody used to call me Bacardi." },
      { start: 30.2, end: 31.3, text: "So I always called myself Bacardi, right?" },
      { start: 46.2, end: 48.5, text: "So Cardi B is the jam. And I love that." },
      { start: 51.8, end: 54, text: "You are from the Bronx?" },
      { start: 67.8, end: 69.5, text: "Are you going home for the holidays, to the Bronx?" }
    ],
    folder: 'talk',
    title: 'Where my name comes from',
    who: 'Cardi B & Jimmy Fallon · The Tonight Show',
    about: 'A talk show: two people, questions and answers, a lot of laughing.',
    phrases: [
      { en: 'So where does the name come from?', ru: 'так откуда это имя?' },
      { en: 'My sister gave me that name.', ru: 'это имя мне дала сестра' },
      { en: 'That is such a good story.', ru: 'какая классная история' }
    ]
  },
  {
    id: 'sh-cardi-words',
    yt: 'YplKPH_qcRw',
    start: 15, end: 105, secs: 90,
    dictation: [
      { start: 19.6, end: 21.4, text: "I didn't even know this was going to be a look." },
      { start: 67.7, end: 71.1, text: "I was just scared of what people would think and say." },
      { start: 98.6, end: 101.9, text: "Now, this record is certified gold already." }
    ],
    folder: 'talk',
    title: 'Say it like me',
    who: 'Cardi B & Jimmy Fallon · The Tonight Show',
    about: 'She teaches the host her own words and how to say them. Perfect for the music of the voice.',
    phrases: [
      { en: 'You have to say it like this.', ru: 'надо говорить вот так' },
      { en: 'No, no, you are doing it wrong.', ru: 'нет-нет, ты делаешь неправильно' },
      { en: 'Now you try.', ru: 'теперь попробуй ты' }
    ]
  },
  {
    id: 'sh-nicki-colbert',
    yt: '8s9joL_AGfo',
    start: 20, end: 110, secs: 90,
    folder: 'talk',
    title: 'A real interview',
    who: 'Nicki Minaj & Stephen Colbert · The Late Show',
    about: 'Nobody slows down for you here. Do this one on 0.75× the first time.',
    phrases: [
      { en: 'Thank you for having me.', ru: 'спасибо, что пригласили' },
      { en: 'Let me tell you something.', ru: 'давай я тебе кое-что расскажу' },
      { en: 'That is a good question.', ru: 'хороший вопрос' }
    ]
  },
  {
    id: 'sh-taylor-73',
    yt: 'XnbCSboujF4',
    start: 8, end: 98, secs: 90,
    folder: 'talk',
    title: '73 questions, very fast',
    who: 'Taylor Swift · Vogue',
    about: 'Short questions, short answers, no stopping. The fastest one here.',
    phrases: [
      { en: 'What are you working on right now?', ru: 'над чем ты сейчас работаешь?' },
      { en: 'This is where I write my songs.', ru: 'вот здесь я пишу песни' },
      { en: 'I would say this one is my favourite.', ru: 'я бы сказала, вот этот мой любимый' }
    ]
  },
  {
    id: 'sh-taylor-songs',
    yt: '5B8-TJ8vsKY',
    start: 45, end: 135, secs: 90,
    folder: 'talk',
    title: 'The story behind the song',
    who: 'Taylor Swift · Popcast',
    about: 'She tells how she wrote her songs. Long sentences — the hardest one. Take 20 seconds at a time.',
    phrases: [
      { en: 'I wrote this song when I was nineteen.', ru: 'я написала эту песню в девятнадцать' },
      { en: 'It started with one line.', ru: 'всё началось с одной строчки' },
      { en: 'I remember that day very well.', ru: 'я очень хорошо помню тот день' }
    ]
  },
  {
    id: 'sh-redcarpet',
    yt: 'uG08L1dh2QU',
    start: 0, end: 0, secs: 34,
    folder: 'carpet',
    title: 'Hello from the red carpet',
    who: 'Sabrina Carpenter · Vogue',
    about: 'The shortest one. She says hello and shows her dress. Start here.',
    phrases: [
      { en: 'Hi, how are you?', ru: 'привет, как дела?' },
      { en: 'Thank you so much!', ru: 'большое спасибо!' },
      { en: 'I love this dress.', ru: 'мне очень нравится это платье' }
    ]
  },
  {
    id: 'sh-jackharlow',
    yt: '8uWSFTqns0U',
    start: 0, end: 0, secs: 47,
    folder: 'carpet',
    title: 'Two friends meet again',
    who: 'Jack Harlow & Emma Chamberlain · Vogue',
    about: 'A man and a woman say hello at a party. Very short, very normal English.',
    phrases: [
      { en: 'Hey, good to see you!', ru: 'привет, рад тебя видеть!' },
      { en: 'How have you been?', ru: 'как ты вообще?' },
      { en: 'You look great.', ru: 'отлично выглядишь' }
    ]
  },
  {
    id: 'sh-nopants',
    yt: 'voXJfimvGp8',
    start: 0, end: 0, secs: 72,
    folder: 'carpet',
    title: 'Talking about a dress',
    who: 'Sabrina Carpenter · Vogue',
    about: 'She talks about her look and the person who made it.',
    phrases: [
      { en: 'It was a dream.', ru: 'это была мечта' },
      { en: 'We worked on it together.', ru: 'мы работали над этим вместе' },
      { en: 'I feel really good in it.', ru: 'мне в нём очень хорошо' }
    ]
  },
  {
    id: 'sh-billie-layers',
    yt: 'bm5G9ijts-Q',
    start: 0, end: 0, secs: 92,
    folder: 'carpet',
    title: 'My look tonight',
    who: 'Billie Eilish · Vogue',
    about: 'Billie talks about her clothes: colours, layers, what she likes.',
    phrases: [
      { en: 'I really like this colour.', ru: 'мне очень нравится этот цвет' },
      { en: 'It took a long time.', ru: 'это заняло много времени' },
      { en: 'I am so happy to be here.', ru: 'я очень рада быть здесь' }
    ]
  },
  {
    id: 'sh-healthtips',
    yt: 'KB36X56b9Fs',
    start: 0, end: 0, secs: 98,
    folder: 'carpet',
    title: 'Funny questions and answers',
    who: 'Sabrina Carpenter & Emma Chamberlain · Vogue',
    about: 'Short questions, short answers. The easiest video to copy.',
    phrases: [
      { en: 'What do you do before a big night?', ru: 'что ты делаешь перед важным вечером?' },
      { en: 'I drink a lot of water.', ru: 'я пью много воды' },
      { en: 'I try to sleep, but I never do.', ru: 'я стараюсь поспать, но никогда не сплю' }
    ]
  },
  {
    id: 'sh-billie-emma',
    yt: 'ItZ4SlxpOiI',
    start: 0, end: 0, secs: 105,
    folder: 'carpet',
    title: 'Hanging out with a friend',
    who: 'Billie Eilish & Emma Chamberlain · Vogue',
    about: 'Two friends talk about the evening and about each other.',
    phrases: [
      { en: 'We always have fun together.', ru: 'нам всегда весело вместе' },
      { en: 'This is my favourite part.', ru: 'это моя любимая часть' },
      { en: 'I am a little nervous.', ru: 'я немного волнуюсь' }
    ]
  },
  {
    id: 'sh-olivia-things',
    yt: 'ZnXfhveyxj8',
    start: 0, end: 100, secs: 100,
    folder: 'carpet',
    title: 'Things I always carry',
    who: 'Olivia Rodrigo · GQ',
    about: 'She shows the things in her bag and says what she uses them for.',
    phrases: [
      { en: 'This is the first thing.', ru: 'это первая вещь' },
      { en: 'I take it everywhere.', ru: 'я беру это везде с собой' },
      { en: 'I use it every day.', ru: 'я пользуюсь этим каждый день' }
    ]
  },
  {
    id: 'sh-olivia-73',
    yt: 'G1FLUuDKRYI',
    start: 0, end: 90, secs: 90,
    folder: 'carpet',
    title: '73 questions at home',
    who: 'Olivia Rodrigo · Vogue',
    about: 'Quick questions and quick answers while she walks around her house.',
    phrases: [
      { en: 'Come on in!', ru: 'заходи!' },
      { en: 'This is where I write my songs.', ru: 'здесь я пишу свои песни' },
      { en: 'That is a hard question.', ru: 'это сложный вопрос' }
    ]
  },
  {
    id: 'sh-hometour',
    yt: 'AwhBTrzzqeg',
    start: 0, end: 95, secs: 95,
    folder: 'carpet',
    title: 'Welcome to my home',
    who: 'Dakota Johnson · Architectural Digest',
    about: 'She opens the door and shows the first rooms of her house. Slow and clear.',
    phrases: [
      { en: 'Welcome to my home.', ru: 'добро пожаловать в мой дом' },
      { en: 'This is the living room.', ru: 'это гостиная' },
      { en: 'I love this place.', ru: 'я люблю это место' },
      { en: 'Come with me.', ru: 'пойдём со мной' }
    ]
  },
  {
    id: 'sh-73questions',
    yt: 'q9qZveIjXp4',
    start: 0, end: 90, secs: 90,
    folder: 'carpet',
    title: '73 questions with Lady Gaga',
    who: 'Lady Gaga · Vogue',
    about: 'The same game: short questions, short answers, a walk around the house.',
    phrases: [
      { en: 'Come on in.', ru: 'заходи' },
      { en: 'What are you working on?', ru: 'над чем ты сейчас работаешь?' },
      { en: 'That is my favourite room.', ru: 'это моя любимая комната' }
    ]
  }
];
