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

   Все ролики проверены: встраивание разрешено, длинные порезаны
   на кусок полторы минуты — приложение само остановит видео.
   ============================================================ */

window.SHADOW = [
  {
    id: 'sh-redcarpet',
    yt: 'uG08L1dh2QU',
    start: 0, end: 0, secs: 34,
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
