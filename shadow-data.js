/* ============================================================
   SHADOWING — короткие видео, за которыми ученик повторяет вслух.
   Открывается во вкладке Homework, отдельным блоком.

   Поле за полем:
     id      — свой, потом не менять: к нему привязана отметка «сделал»
     yt      — идентификатор видео на YouTube (то, что после v=)
     start   — с какой секунды начинать (0 — с начала)
     end     — на какой секунде остановиться (0 — до конца ролика)
     secs    — сколько секунд в выбранном куске, видно на карточке
     who     — кто говорит, одной строкой
     about   — о чём ролик, простым английским
     phrases — 3–4 строки оттуда: ученик слушает их отдельно по 🔊

   Все ролики проверены: короткие, с живой речью и разрешённым
   встраиванием, то есть открываются прямо внутри приложения.
   ============================================================ */

window.SHADOW = [
  {
    id: 'sh-redcarpet',
    yt: 'uG08L1dh2QU',
    start: 0, end: 0, secs: 34,
    title: 'Hello from the red carpet',
    who: 'Sabrina Carpenter · Vogue',
    about: 'A very short clip. She says hello and shows her dress.',
    phrases: [
      { en: 'Hi, how are you?', ru: 'привет, как дела?' },
      { en: 'Thank you so much!', ru: 'большое спасибо!' },
      { en: 'I love this dress.', ru: 'мне очень нравится это платье' }
    ]
  },
  {
    id: 'sh-nopants',
    yt: 'voXJfimvGp8',
    start: 0, end: 0, secs: 72,
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
    id: 'sh-healthtips',
    yt: 'KB36X56b9Fs',
    start: 0, end: 0, secs: 98,
    title: 'Funny questions and answers',
    who: 'Sabrina Carpenter & Emma Chamberlain · Vogue',
    about: 'Two people, short questions, short answers. Easy to copy.',
    phrases: [
      { en: 'What do you do before a big night?', ru: 'что ты делаешь перед важным вечером?' },
      { en: 'I drink a lot of water.', ru: 'я пью много воды' },
      { en: 'I try to sleep, but I never do.', ru: 'я стараюсь поспать, но никогда не сплю' }
    ]
  },
  {
    id: 'sh-hometour',
    yt: 'AwhBTrzzqeg',
    start: 0, end: 95, secs: 95,
    title: 'Welcome to my home',
    who: 'Dakota Johnson · Architectural Digest',
    about: 'She opens the door and shows the first rooms of her house.',
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
    title: '73 questions at home',
    who: 'Lady Gaga · Vogue',
    about: 'Short questions and short answers while she walks around her house.',
    phrases: [
      { en: 'Come on in.', ru: 'заходи' },
      { en: 'What are you working on?', ru: 'над чем ты сейчас работаешь?' },
      { en: 'That is my favourite room.', ru: 'это моя любимая комната' }
    ]
  }
];
