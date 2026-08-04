/* ============================================================
   ЛЕКСИКА. Один урок = одна тема, внутри две группы:
     words   — NEW WORDS (новые слова, которые вы объяснили)
     phrases — SPEAKING PHRASES (структуры: как это сказать в речи)

   Чтобы добавить урок, скопируйте блок и вставьте в конец window.TOPICS:

   {
     id: 'food',                        // латиницей, уникально, потом не менять
     title: 'Food',                     // как называется тема у ученика
     emoji: '🍕',
     words: [
       { en: 'have breakfast', ru: 'завтракать', icon: '🥞' }
     ],
     phrases: [
       { en: 'I usually have eggs for breakfast', ru: 'обычно я ем яйца на завтрак' }
     ],
     questions: [                       // вопросы для говорения на уроке
       'What do you usually have for breakfast?'
     ]
   }

   Грамматика — отдельно, в window.GRAMMAR внизу файла.
   ============================================================ */

window.TOPICS = [

  {
    id: 'hobbies',
    title: 'Hobbies',
    emoji: '🎧',

    /* ---------- NEW WORDS ---------- */
    words: [
      { en: 'play the guitar', ru: 'играть на гитаре', icon: '🎸' },
      { en: 'play video games', ru: 'играть в видеоигры', icon: '🎮' },
      { en: 'listen to music', ru: 'слушать музыку', icon: '🎧' },
      { en: 'sing songs', ru: 'петь песни', icon: '🎤' },
      { en: 'dance', ru: 'танцевать', icon: '💃' },
      { en: 'draw', ru: 'рисовать', icon: '🎨' },
      { en: 'take photos', ru: 'фотографировать', icon: '📸' },
      { en: 'watch films', ru: 'смотреть фильмы', icon: '🎬' },
      { en: 'read books', ru: 'читать книги', icon: '📚' },
      { en: 'do yoga', ru: 'заниматься йогой', icon: '🧘' },
      { en: 'go swimming', ru: 'ходить плавать', icon: '🏊' },
      { en: 'go shopping', ru: 'ходить по магазинам', icon: '🛍️' },
      { en: 'make videos', ru: 'снимать видео', icon: '📱' },
      { en: 'hang out with friends', ru: 'тусоваться с друзьями', icon: '👯' },
      { en: 'ride a skateboard', ru: 'кататься на скейте', icon: '🛹' },
      { en: 'go to the gym', ru: 'ходить в зал', icon: '🏋️' },
      { en: 'ride a roller coaster', ru: 'кататься на американских горках', icon: '🎢' },
      { en: 'visit a haunted house', ru: 'ходить в дом с привидениями', icon: '👻' },
      { en: 'buy tickets', ru: 'покупать билеты', icon: '🎟️' },
      { en: 'wait in line', ru: 'стоять в очереди', icon: '🧍' },
      { en: 'sing along at a show', ru: 'подпевать на концерте', icon: '🎶' },
      { en: 'write in a diary', ru: 'вести дневник', icon: '📔' },
      { en: 'visit a castle', ru: 'ходить в замок', icon: '🏰' },
      { en: 'cook new recipes', ru: 'готовить новые блюда', icon: '🍳' },
      { en: 'build robots', ru: 'собирать роботов', icon: '🤖' },
      { en: 'clean my room', ru: 'убираться в комнате', icon: '🧹' }
    ],

    /* ---------- SPEAKING PHRASES ---------- */
    phrases: [
      { en: 'I like playing video games', ru: 'я люблю играть в видеоигры' },
      { en: 'I love listening to music', ru: 'я обожаю слушать музыку' },
      { en: 'I enjoy taking photos', ru: 'мне нравится фотографировать' },
      { en: "I don't like waiting in line", ru: 'я не люблю стоять в очереди' },
      { en: 'I hate cleaning my room', ru: 'я ненавижу убираться в комнате' },
      { en: 'I would like to try skateboarding', ru: 'я бы хотел попробовать скейт' },
      { en: 'I would like to visit a castle', ru: 'я бы хотел сходить в замок' },
      { en: "I'm really into gaming", ru: 'я реально увлекаюсь играми' },
      { en: "I'm a big fan of football", ru: 'я большой фанат футбола' },
      { en: 'My hobby is drawing', ru: 'моё хобби — рисование' },
      { en: "I'm good at singing", ru: 'я хорошо пою' },
      { en: "I'm not a fan of yoga", ru: 'я не фанат йоги' },
      { en: 'I do it every day', ru: 'я делаю это каждый день' },
      { en: 'I do it a few times a week', ru: 'я делаю это несколько раз в неделю' },
      { en: 'I usually do it after school', ru: 'обычно я делаю это после школы' },
      { en: 'I never do it', ru: 'я никогда этого не делаю' },
      { en: "I like it because it's fun", ru: 'мне нравится, потому что это весело' },
      { en: "I like it because it's relaxing", ru: 'мне нравится, потому что это расслабляет' },
      { en: 'It helps me relax', ru: 'это помогает мне расслабиться' },
      { en: 'I prefer swimming to running', ru: 'я предпочитаю плавание бегу' },
      { en: 'What do you like doing?', ru: 'что ты любишь делать?' },
      { en: 'What about you?', ru: 'а ты?' },
      { en: 'Same here!', ru: 'я тоже!' },
      { en: 'Not really', ru: 'не особо' },
      { en: 'That sounds fun!', ru: 'звучит весело!' },
      { en: "I'd love to try it", ru: 'я бы с радостью попробовал' }
    ],

    questions: [
      'What do you like doing?',
      "What don't you like doing?",
      'What would you like to try?',
      'Do you like playing video games?',
      'Do you enjoy watching films?',
      'Would you like to visit a castle?',
      'What is your hobby?',
      'How often do you do it?',
      'Why do you like it?',
      'What are you good at?',
      'What do you do after school?',
      'What do you do at the weekend?'
    ]
  },

  {
    id: 'routine',
    title: 'Daily Routine',
    emoji: '⏰',

    /* ---------- NEW WORDS ---------- */
    words: [
      { en: 'wake up', ru: 'просыпаться', icon: '🌅' },
      { en: 'get up early', ru: 'вставать рано', icon: '⏰' },
      { en: 'brush my teeth', ru: 'чистить зубы', icon: '🪥' },
      { en: 'have a shower', ru: 'принимать душ', icon: '🚿' },
      { en: 'eat breakfast', ru: 'завтракать', icon: '🥞' },
      { en: 'get ready', ru: 'собираться', icon: '🎒' },
      { en: 'go to school', ru: 'идти в школу', icon: '🏫' },
      { en: 'study', ru: 'учиться', icon: '📖' },
      { en: 'have lunch', ru: 'обедать', icon: '🥪' },
      { en: 'go home', ru: 'идти домой', icon: '🏠' },
      { en: 'do homework', ru: 'делать домашку', icon: '✏️' },
      { en: 'watch videos', ru: 'смотреть видео', icon: '📱' },
      { en: 'eat dinner', ru: 'ужинать', icon: '🍽️' },
      { en: 'relax', ru: 'отдыхать', icon: '🛋️' },
      { en: 'go to bed late', ru: 'поздно ложиться', icon: '🌙' },
      { en: 'go to sleep', ru: 'ложиться спать', icon: '😴' }
    ],

    /* ---------- SPEAKING PHRASES ---------- */
    phrases: [
      { en: 'In the morning, I wake up early', ru: 'утром я встаю рано' },
      { en: 'After school, I go home and relax', ru: 'после школы я иду домой и отдыхаю' },
      { en: 'In the evening, I watch videos', ru: 'вечером я смотрю видео' },
      { en: 'Every day, I listen to music', ru: 'каждый день я слушаю музыку' },
      { en: 'I usually get up at seven', ru: 'обычно я встаю в семь' },
      { en: 'I always listen to music', ru: 'я всегда слушаю музыку' },
      { en: 'I never go to bed early', ru: 'я никогда не ложусь рано' },
      { en: 'I watch interviews on YouTube', ru: 'я смотрю интервью на ютубе' },
      { en: 'I am watching a video right now', ru: 'я прямо сейчас смотрю видео' },
      { en: 'Yesterday I watched two videos', ru: 'вчера я посмотрел два видео' },
      { en: 'Last night I ate dinner at eight', ru: 'вчера вечером я ужинал в восемь' },
      { en: 'Do you watch videos every day?', ru: 'ты смотришь видео каждый день?' },
      { en: 'Yes, I do', ru: 'да' },
      { en: "No, I don't", ru: 'нет' },
      { en: 'One day I want to travel', ru: 'однажды я хочу путешествовать' },
      { en: 'What about you?', ru: 'а ты?' }
    ],

    questions: [
      'What time do you wake up?',
      'What is the first thing you do?',
      'What do you do every morning?',
      'What do you do every single day?',
      'What are you doing right now?',
      'What did you do yesterday?',
      'Where did you go last weekend?',
      'What music do you listen to?',
      'What did you watch last night?',
      'What do you do after school?',
      'What do you do in the evening?',
      'Do you want to travel? Where?'
    ]
  }

];

/* ============================================================
   NEW WORDS — пачки после каждого урока.
   Новый урок = новый блок В НАЧАЛО списка (самый свежий сверху).

   { id:'b-02', title:'Lesson 2', date:'10 Aug',
     items:[ {en:'go on a trip', ru:'поехать в путешествие', icon:'✈️'} ] }
   ============================================================ */

window.BATCHES = [
  {
    id: 'b-02',
    title: 'Daily Routine',
    date: '4 Aug',
    items: [
      { en: 'wake up', ru: 'просыпаться', icon: '🌅' },
      { en: 'eat breakfast', ru: 'завтракать', icon: '🥞' },
      { en: 'get ready', ru: 'собираться', icon: '🎒' },
      { en: 'go to school', ru: 'идти в школу', icon: '🏫' },
      { en: 'study', ru: 'учиться', icon: '📖' },
      { en: 'go home', ru: 'идти домой', icon: '🏠' },
      { en: 'do homework', ru: 'делать домашку', icon: '✏️' },
      { en: 'watch videos', ru: 'смотреть видео', icon: '📱' },
      { en: 'eat dinner', ru: 'ужинать', icon: '🍽️' },
      { en: 'relax', ru: 'отдыхать', icon: '🛋️' },
      { en: 'go to sleep', ru: 'ложиться спать', icon: '😴' }
    ]
  },
  {
    id: 'b-01',
    title: 'Hobbies',
    date: '3 Aug',
    items: [
      { en: 'hang out with friends', ru: 'тусоваться с друзьями', icon: '👯' },
      { en: 'take photos', ru: 'фотографировать', icon: '📸' },
      { en: 'do yoga', ru: 'заниматься йогой', icon: '🧘' },
      { en: 'go shopping', ru: 'ходить по магазинам', icon: '🛍️' },
      { en: 'wait in line', ru: 'стоять в очереди', icon: '🧍' },
      { en: 'build robots', ru: 'собирать роботов', icon: '🤖' },
      { en: 'clean my room', ru: 'убираться в комнате', icon: '🧹' },
      { en: 'cook new recipes', ru: 'готовить новые блюда', icon: '🍳' },
      { en: 'ride a roller coaster', ru: 'кататься на американских горках', icon: '🎢' },
      { en: 'write in a diary', ru: 'вести дневник', icon: '📔' }
    ]
  }
];

/* Быстрые вопросы для разминки в начале урока */
window.WARMUP = [
  'Hi! How are you today?',
  'What did you do yesterday?',
  'What music did you listen to today?',
  'How was school today?',
  'What are your plans for the weekend?',
  'What is one good thing about today?',
  'What time did you wake up today?',
  'What is the first thing you do in the morning?',
  'Morning music or quiet morning?'
];

/* Спид-раунд: отвечать сразу, без пауз */
window.SPEED = [
  'Something you love doing at the weekend.',
  'Something you hate doing at home.',
  'A hobby you enjoy doing alone.',
  'Something you and your friend both like doing.',
  'Something you never enjoyed doing.',
  'Something you love but have no time for.',
  'A hobby your family enjoys doing together.',
  'Something you hate doing before school.',
  'A hobby you would like to try.',
  'Something you are really good at.',
  'Something you do every morning.',
  'Something you did yesterday evening.',
  'Something you are doing right now.'
];

/* Детали, которые можно добавить к предложению */
window.DETAILS = [
  { en: 'because it is fun', ru: 'потому что это весело' },
  { en: 'because it is funny', ru: 'потому что это смешно' },
  { en: 'because it is scary', ru: 'потому что это страшно' },
  { en: 'because it is relaxing', ru: 'потому что это расслабляет' },
  { en: 'because it is creative', ru: 'потому что это творческое' },
  { en: 'because it is active', ru: 'потому что это активное' },
  { en: 'every day', ru: 'каждый день' },
  { en: 'every week', ru: 'каждую неделю' },
  { en: 'after school', ru: 'после школы' },
  { en: 'at the weekend', ru: 'на выходных' },
  { en: 'alone', ru: 'один' },
  { en: 'with my friends', ru: 'с друзьями' },
  { en: 'with my family', ru: 'с семьёй' }
];

/* Пять полок для сортировки */
window.BUCKETS = [
  { id: 'love', label: 'I love / enjoy', tpl: 'I love', ing: true },
  { id: 'like', label: 'I like', tpl: 'I like', ing: true },
  { id: 'dont', label: "I don't like", tpl: "I don't like", ing: true },
  { id: 'hate', label: 'I hate', tpl: 'I hate', ing: true },
  { id: 'would', label: 'I would like to', tpl: 'I would like to', ing: false }
];

/* Ситуации для диалога на уроке */
window.DUELS = [
  { title: 'New classmate', you: 'You are a new student. Ask him 3 questions about his hobbies.', him: 'Answer and ask: "What about you?"' },
  { title: 'Free time', you: 'Ask what he does after school and at the weekend.', him: 'Answer with I like / I love / I enjoy + V-ing.' },
  { title: 'Invite a friend', you: 'Invite him out on Saturday. Offer two activities.', him: 'Say yes to one and no to the other: "Not really".' },
  { title: 'Interview', you: 'You write for the school blog. Interview him about his hobby.', him: "Answer in full sentences: I'm into..., I'm good at..." },
  { title: 'New friend abroad', you: 'Ask: What do you do in the morning? What do you do after school? Do you watch interviews?', him: 'Answer and ask back: "What about you?"' },
  { title: 'YouTube interview', you: 'You run a YouTube channel. Interview him about his daily routine — at least 4 questions.', him: 'Answer in full sentences, add one detail, finish with "What about you?"' },
  { title: 'Summer plans', you: 'Ask what he would like to try this summer and why.', him: 'Answer with I would like to... and say why.' }
];

/* Грамматика лежит в отдельном файле grammar-data.js */

/* ============================================================
   ★ САМОЕ ПРОСТОЕ МЕСТО ДЛЯ ДОБАВЛЕНИЯ ЛЕКСИКИ ★

   Пишите обычными строками между кавычками ` ` ниже.
   Никаких скобок, запятых и кавычек внутри — сломать нельзя.

   Правила:
     # NEW WORDS | Lesson 2 | 10 Aug   — новая пачка после урока
     # TOPIC | Travel | ✈️             — новая тема (или дописать в старую,
                                         если название совпадает)
     = words / = phrases / = questions — раздел внутри темы
     слово - перевод - эмодзи          — сама строка (эмодзи не обязателен)
     // в начале строки                — заметка для себя, не попадёт в приложение
   ============================================================ */

window.QUICK = `

// ---- ПРИМЕР. Уберите // в начале строк, чтобы он заработал ----
//
// # NEW WORDS | Lesson 2 | 10 Aug
// go on a trip - поехать в путешествие - ✈️
// book a hotel - забронировать отель - 🏨
// miss a flight - опоздать на самолёт - 🛫
//
// # TOPIC | Travel | ✈️
// = words
// a suitcase - чемодан - 🧳
// a boarding pass - посадочный талон - 🎫
// = phrases
// I would like to travel alone - я бы хотел путешествовать один
// I'm really into road trips - я очень люблю поездки на машине
// = questions
// Where would you like to go?
// Do you like travelling with your family?

`;
