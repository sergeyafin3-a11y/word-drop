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
    title: 'Lesson 2 · Daily routine',
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
    title: 'Lesson 1',
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

/* ============================================================
   ГРАММАТИКА
   ============================================================ */

window.GRAMMAR = [

  {
    id: 'g-01',
    title: 'like + V-ing',
    sub: 'say what you like',
    formula: 'I like <b>playing</b> football',
    rule: 'After like, love, enjoy and hate the second verb gets -ing.',
    bad: 'I like play football',
    ok: 'I like playing football',
    examples: [
      { en: 'I like swimming', ru: 'я люблю плавать' },
      { en: 'I love dancing', ru: 'я обожаю танцевать' },
      { en: 'I enjoy drawing', ru: 'мне нравится рисовать' },
      { en: 'I hate cleaning', ru: 'я ненавижу убираться' }
    ],
    drill: [
      { q: 'I love ___ (dance) at parties', a: 'dancing', opts: ['dance', 'dancing', 'to dance'] },
      { q: 'She enjoys ___ (draw) comics', a: 'drawing', opts: ['draw', 'drawing'] },
      { q: 'He likes ___ (skate) after school', a: 'skating', opts: ['skate', 'skating'] },
      { q: 'We hate ___ (clean) our rooms', a: 'cleaning', opts: ['clean', 'cleaning'] },
      { q: 'He enjoys ___ (build) robots', a: 'building', opts: ['build', 'building'] },
      { q: 'I like ___ (play) video games', a: 'playing', opts: ['play', 'playing'] },
      { q: 'She loves ___ (sing) in the shower', a: 'singing', opts: ['sing', 'singing'] },
      { q: 'Do you enjoy ___ (cook) new recipes?', a: 'cooking', opts: ['cook', 'cooking'] }
    ],
    say: [
      { ru: 'я люблю играть на гитаре', en: 'I like playing the guitar' },
      { ru: 'я обожаю танцевать', en: 'I love dancing' },
      { ru: 'мне нравится читать книги', en: 'I enjoy reading books' },
      { ru: 'я ненавижу стоять в очереди', en: 'I hate waiting in line' }
    ]
  },

  {
    id: 'g-02',
    title: "don't like",
    sub: 'say what you do not like',
    formula: "I <b>don't</b> like running",
    rule: "Put don't before the verb. For he and she use doesn't.",
    bad: 'I not like running',
    ok: "I don't like running",
    examples: [
      { en: "I don't like running", ru: 'я не люблю бегать' },
      { en: "I don't play video games", ru: 'я не играю в видеоигры' },
      { en: "He doesn't like yoga", ru: 'он не любит йогу' },
      { en: "I'm not a fan of shopping", ru: 'я не фанат шопинга' }
    ],
    drill: [
      { q: 'I ___ like running', a: "don't", opts: ['not', "don't", "doesn't"] },
      { q: 'He ___ like yoga', a: "doesn't", opts: ["don't", "doesn't"] },
      { q: "I don't ___ shopping", a: 'like', opts: ['like', 'likes', 'liking'] },
      { q: 'My friend ___ play the guitar', a: "doesn't", opts: ["don't", "doesn't"] },
      { q: "I'm ___ a fan of sport", a: 'not', opts: ['no', 'not', "don't"] }
    ],
    say: [
      { ru: 'я не люблю рано вставать', en: "I don't like getting up early" },
      { ru: 'я не смотрю фильмы', en: "I don't watch films" },
      { ru: 'он не любит танцевать', en: "He doesn't like dancing" },
      { ru: 'я не фанат йоги', en: "I'm not a fan of yoga" }
    ]
  },

  {
    id: 'g-03',
    title: "I'm into",
    sub: 'how people really say it',
    formula: "I'm into <b>music</b>",
    rule: "I'm into = I like it a lot. After into use a noun or a verb with -ing.",
    bad: "I'm into to play football",
    ok: "I'm into playing football",
    examples: [
      { en: "I'm into music", ru: 'я увлекаюсь музыкой' },
      { en: "I'm into making videos", ru: 'я увлекаюсь съёмкой видео' },
      { en: "I'm really into it", ru: 'мне это реально нравится' },
      { en: "I'm not into sport", ru: 'я не увлекаюсь спортом' }
    ],
    drill: [
      { q: "I'm into ___", a: 'music', opts: ['music', 'to music'] },
      { q: "I'm into ___ videos", a: 'making', opts: ['make', 'making'] },
      { q: "I'm a big ___ of football", a: 'fan', opts: ['fan', 'friend'] },
      { q: "I'm ___ into sport", a: 'not', opts: ['not', "don't"] },
      { q: 'What are you ___?', a: 'into', opts: ['into', 'in', 'on'] }
    ],
    say: [
      { ru: 'я увлекаюсь музыкой', en: "I'm into music" },
      { ru: 'я увлекаюсь скейтом', en: "I'm into skateboarding" },
      { ru: 'я большой фанат футбола', en: "I'm a big fan of football" },
      { ru: 'чем ты увлекаешься?', en: 'What are you into?' }
    ]
  },

  {
    id: 'g-04',
    title: 'I would like to',
    sub: 'what you want to try',
    formula: 'I would like to <b>try</b> skateboarding',
    rule: 'After would like to the verb has no -ing. I would like = I want (but nicer).',
    bad: 'I would like to trying it',
    ok: 'I would like to try it',
    examples: [
      { en: 'I would like to try boxing', ru: 'я бы хотел попробовать бокс' },
      { en: 'I would like to make videos', ru: 'я бы хотел снимать видео' },
      { en: 'I would like to visit a castle', ru: 'я бы хотел сходить в замок' },
      { en: 'What would you like to do?', ru: 'что бы ты хотел делать?' }
    ],
    drill: [
      { q: 'I would like ___ try boxing', a: 'to', opts: ['to', 'for'] },
      { q: 'I would like to ___ the guitar', a: 'learn', opts: ['learn', 'learning'] },
      { q: 'I would like to ___ videos', a: 'make', opts: ['make', 'making'] },
      { q: 'What ___ you like to try?', a: 'would', opts: ['would', 'do', 'are'] },
      { q: 'I would like to ___ to a concert', a: 'go', opts: ['go', 'going'] }
    ],
    say: [
      { ru: 'я бы хотел попробовать йогу', en: 'I would like to try yoga' },
      { ru: 'я бы хотел снимать видео', en: 'I would like to make videos' },
      { ru: 'я бы хотел сходить в замок', en: 'I would like to visit a castle' },
      { ru: 'что бы ты хотел попробовать?', en: 'What would you like to try?' }
    ]
  },

  {
    id: 'g-05',
    title: 'Present Simple',
    sub: 'what you do usually',
    formula: 'I <b>play</b> football · He <b>plays</b> football',
    rule: 'For he, she and it add -s to the verb. For I, you, we, they add nothing.',
    bad: 'He play football',
    ok: 'He plays football',
    examples: [
      { en: 'I play football every day', ru: 'я играю в футбол каждый день' },
      { en: 'He plays video games', ru: 'он играет в видеоигры' },
      { en: 'My friend draws very well', ru: 'мой друг очень хорошо рисует' },
      { en: 'We hang out at the weekend', ru: 'мы тусуемся на выходных' }
    ],
    drill: [
      { q: 'He ___ the guitar', a: 'plays', opts: ['play', 'plays'] },
      { q: 'I ___ music every day', a: 'listen to', opts: ['listen to', 'listens to'] },
      { q: 'She ___ photos', a: 'takes', opts: ['take', 'takes'] },
      { q: 'We ___ films at the weekend', a: 'watch', opts: ['watch', 'watches'] },
      { q: 'My brother ___ swimming', a: 'goes', opts: ['go', 'goes'] }
    ],
    say: [
      { ru: 'я играю в видеоигры каждый день', en: 'I play video games every day' },
      { ru: 'он слушает музыку', en: 'He listens to music' },
      { ru: 'мы тусуемся с друзьями', en: 'We hang out with friends' },
      { ru: 'она снимает видео', en: 'She makes videos' }
    ]
  },

  {
    id: 'g-06',
    title: 'How often',
    sub: 'how often you do it',
    formula: 'I play football <b>twice a week</b>',
    rule: 'every day · twice a week · at the weekend · sometimes · never. Never goes before the verb.',
    bad: 'I dance never',
    ok: 'I never dance',
    examples: [
      { en: 'I listen to music every day', ru: 'я слушаю музыку каждый день' },
      { en: 'I go swimming twice a week', ru: 'я хожу плавать два раза в неделю' },
      { en: 'I sometimes draw', ru: 'я иногда рисую' },
      { en: 'I never do yoga', ru: 'я никогда не занимаюсь йогой' }
    ],
    drill: [
      { q: 'I ___ dance', a: 'never', opts: ['never', 'not never'] },
      { q: 'I play football twice ___ week', a: 'a', opts: ['a', 'in', 'on'] },
      { q: 'I read books ___ day', a: 'every', opts: ['every', 'all'] },
      { q: 'We meet ___ the weekend', a: 'at', opts: ['at', 'in', 'on'] },
      { q: 'How ___ do you play?', a: 'often', opts: ['often', 'many', 'much'] }
    ],
    say: [
      { ru: 'я слушаю музыку каждый день', en: 'I listen to music every day' },
      { ru: 'я хожу в зал два раза в неделю', en: 'I go to the gym twice a week' },
      { ru: 'я никогда не пою', en: 'I never sing' },
      { ru: 'я иногда снимаю видео', en: 'I sometimes make videos' }
    ]
  },

  {
    id: 'g-07',
    title: 'Present Continuous',
    sub: 'what you are doing now',
    formula: 'I <b>am watching</b> a video now',
    rule: 'Now, right now, Look! — use am / is / are + verb-ing.',
    bad: 'I watching now',
    ok: 'I am watching now',
    examples: [
      { en: 'I am waking up', ru: 'я просыпаюсь' },
      { en: 'She is watching videos', ru: 'она смотрит видео' },
      { en: 'Look! He is doing his homework', ru: 'смотри! он делает домашку' },
      { en: 'We are eating dinner now', ru: 'мы сейчас ужинаем' }
    ],
    drill: [
      { q: 'Listen! She ___ (listen) to music now', a: 'is listening', opts: ['listens', 'is listening'] },
      { q: 'Look — he ___ (do) his homework now', a: 'is doing', opts: ['does', 'is doing'] },
      { q: 'I ___ (watch) a video right now', a: 'am watching', opts: ['watch', 'am watching'] },
      { q: 'We ___ (eat) dinner now', a: 'are eating', opts: ['eat', 'are eating'] },
      { q: 'What ___ you doing right now?', a: 'are', opts: ['do', 'are'] }
    ],
    say: [
      { ru: 'я сейчас смотрю видео', en: 'I am watching a video' },
      { ru: 'она сейчас слушает музыку', en: 'She is listening to music' },
      { ru: 'я делаю домашку прямо сейчас', en: 'I am doing my homework right now' },
      { ru: 'что ты сейчас делаешь?', en: 'What are you doing now?' }
    ]
  },

  {
    id: 'g-08',
    title: 'Past Simple',
    sub: 'what you did yesterday',
    formula: 'Yesterday I <b>watched</b> two videos',
    rule: 'Yesterday, last night, two weeks ago — use the past form. Most verbs take -ed, but some change: go went, eat ate, wake up woke up.',
    bad: 'Yesterday I watch two videos',
    ok: 'Yesterday I watched two videos',
    examples: [
      { en: 'I woke up at seven', ru: 'я проснулся в семь' },
      { en: 'She watched videos', ru: 'она смотрела видео' },
      { en: 'We went to Italy', ru: 'мы ездили в Италию' },
      { en: 'I ate dinner at eight', ru: 'я поужинал в восемь' }
    ],
    drill: [
      { q: 'Yesterday, I ___ (watch) two videos', a: 'watched', opts: ['watch', 'watched'] },
      { q: 'Two weeks ago, we ___ (go) to Italy', a: 'went', opts: ['go', 'goed', 'went'] },
      { q: 'Last night, I ___ (eat) dinner at eight', a: 'ate', opts: ['eat', 'ate'] },
      { q: 'Yesterday I ___ (wake up) late', a: 'woke up', opts: ['wake up', 'woke up'] },
      { q: 'Last weekend she ___ (relax) at home', a: 'relaxed', opts: ['relax', 'relaxed'] }
    ],
    say: [
      { ru: 'вчера я посмотрел два видео', en: 'Yesterday I watched two videos' },
      { ru: 'вчера вечером я поужинал в восемь', en: 'Last night I ate dinner at eight' },
      { ru: 'на прошлых выходных мы ездили в Италию', en: 'Last weekend we went to Italy' },
      { ru: 'вчера я проснулся поздно', en: 'Yesterday I woke up late' }
    ]
  },

  {
    id: 'g-09',
    title: 'Do you ...?',
    sub: 'ask your friend back',
    formula: '<b>Do</b> you watch videos?',
    rule: 'To ask about a usual thing: Do you + verb? Short answers: Yes, I do / No, I do not. For he and she: Does he ...?',
    bad: 'You watch videos?',
    ok: 'Do you watch videos?',
    examples: [
      { en: 'Do you watch videos every day?', ru: 'ты смотришь видео каждый день?' },
      { en: 'Yes, I do', ru: 'да' },
      { en: "No, I don't", ru: 'нет' },
      { en: 'Does he play football?', ru: 'он играет в футбол?' }
    ],
    drill: [
      { q: '___ you watch videos?', a: 'Do', opts: ['Do', 'Are', 'Is'] },
      { q: 'Do you like music? Yes, I ___', a: 'do', opts: ['do', 'am', 'like'] },
      { q: "Do you play football? No, I ___", a: "don't", opts: ["don't", "doesn't", 'not'] },
      { q: '___ he play football?', a: 'Does', opts: ['Do', 'Does'] },
      { q: 'What ___ you do in the evening?', a: 'do', opts: ['do', 'are', 'does'] }
    ],
    say: [
      { ru: 'ты смотришь видео каждый день?', en: 'Do you watch videos every day?' },
      { ru: 'ты слушаешь музыку?', en: 'Do you listen to music?' },
      { ru: 'что ты делаешь по утрам?', en: 'What do you do in the morning?' },
      { ru: 'а ты?', en: 'What about you?' }
    ]
  }

];
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
