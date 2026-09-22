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

    /* полки для Sort & Say — с какими фразами живёт эта лексика */
    buckets: [
      { label: 'I love / enjoy', tpl: 'I love', ing: true },
      { label: 'I like', tpl: 'I like', ing: true },
      { label: "I don't like", tpl: "I don't like", ing: true },
      { label: 'I hate', tpl: 'I hate', ing: true },
      { label: 'I would like to', tpl: 'I would like to', ing: false }
    ],

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
      'What do you do at the weekend?',
      'How often do you do your hobby?',
      'Who do you do it with?',
      'Is your hobby expensive?',
      'What hobby is popular at your school?',
      'What hobby would you never try? Why?',
      'Do you prefer sport or games?',
      'What do your friends like doing?',
      'What hobby do you want to start?'
    ]
  },

  {
    id: 'routine',
    title: 'Daily Routine',
    emoji: '⏰',

    buckets: [
      { label: 'In the morning I …', tpl: 'In the morning I', ing: false },
      { label: 'After school I …', tpl: 'After school I', ing: false },
      { label: 'In the evening I …', tpl: 'In the evening I', ing: false },
      { label: 'Every day I …', tpl: 'Every day I', ing: false },
      { label: 'I never …', tpl: 'I never', ing: false }
    ],

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
      { en: 'go to sleep', ru: 'ложиться спать', icon: '😴' },
      { en: 'set an alarm', ru: 'ставить будильник', icon: '⏰' },
      { en: 'turn off the alarm', ru: 'выключать будильник', icon: '🔕' },
      { en: 'get dressed', ru: 'одеваться', icon: '👕' },
      { en: 'make my bed', ru: 'заправлять кровать', icon: '🛏️' },
      { en: 'pack my bag', ru: 'собирать рюкзак', icon: '🎒' },
      { en: 'catch the bus', ru: 'успеть на автобус', icon: '🚌' },
      { en: 'walk to school', ru: 'идти в школу пешком', icon: '🚶' },
      { en: 'have a snack', ru: 'перекусить', icon: '🍎' },
      { en: 'feed my cat', ru: 'кормить кота', icon: '🐱' },
      { en: 'take a nap', ru: 'вздремнуть', icon: '💤' },
      { en: 'help at home', ru: 'помогать по дому', icon: '🧺' },
      { en: 'do the dishes', ru: 'мыть посуду', icon: '🍽️' },
      { en: 'check my phone', ru: 'проверять телефон', icon: '📱' },
      { en: 'charge my phone', ru: 'заряжать телефон', icon: '🔌' },
      { en: 'take out the rubbish', ru: 'выносить мусор', icon: '🗑️' },
      { en: 'meet my friends', ru: 'встречаться с друзьями', icon: '🤝' }
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
      { en: 'What about you?', ru: 'а ты?' },
      { en: 'I get up at seven o clock', ru: 'я встаю в семь часов' },
      { en: 'I have breakfast with my family', ru: 'я завтракаю с семьёй' },
      { en: 'I leave home at eight', ru: 'я выхожу из дома в восемь' },
      { en: 'I get to school by bus', ru: 'я добираюсь до школы на автобусе' },
      { en: 'Lessons start at half past eight', ru: 'уроки начинаются в полдевятого' },
      { en: 'I have lunch at school', ru: 'я обедаю в школе' },
      { en: 'I come home at three', ru: 'я прихожу домой в три' },
      { en: 'I do my homework before dinner', ru: 'я делаю домашку до ужина' },
      { en: 'I help my mum in the evening', ru: 'вечером я помогаю маме' },
      { en: 'I go to bed at eleven', ru: 'я ложусь спать в одиннадцать' },
      { en: 'I am always late in the morning', ru: 'по утрам я вечно опаздываю' },
      { en: 'My day starts early', ru: 'мой день начинается рано' },
      { en: 'My day is quite busy', ru: 'у меня довольно занятой день' },
      { en: 'I have free time after seven', ru: 'после семи у меня свободное время' },
      { en: 'At the weekend I get up late', ru: 'на выходных я встаю поздно' },
      { en: 'I am not a morning person', ru: 'я не жаворонок' }
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
      'Do you want to travel? Where?',
      'What time do you go to bed?',
      'Do you have breakfast every day?',
      'What do you do at the weekend?',
      'Who wakes up first in your family?',
      'Is your morning quiet or busy?',
      'What do you do before school?',
      'How long is your day?',
      'What is the best part of your day?'
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
  'Morning music or quiet morning?',
  'What did you have for breakfast?',
  'Are you tired or full of energy?',
  'What was funny this week?',
  'What did you watch last night?',
  'Who did you talk to today?',
  'Tea or coffee? Why?',
  'What is the weather like today?',
  'What are you doing after our lesson?',
  'What made you smile today?',
  'Did you sleep well?',
  'What is your plan for tonight?',
  'What game are you playing now?',
  'What song is stuck in your head?',
  'Did you go outside today?',
  'What do you want to do this summer?',
  'What is the last photo on your phone?',
  'Best thing about Mondays?',
  'What did you eat for lunch?',
  'Are you busy this week?',
  'What is your favourite day? Why?',
  'One word about today — go!'
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
  'Something you are doing right now.',
  'Something you do after school.',
  'Something you never do.',
  'Something you do with your family.',
  'Something you did last summer.',
  'Something you want to do tomorrow.',
  'Something you do on your phone.',
  'Something you do when you are bored.',
  'Something you do before you sleep.',
  'Something you are good at.',
  'Something you are bad at.',
  'Something you do twice a week.',
  'Something you watched this week.',
  'Something you listened to today.',
  'Something you would like to learn.',
  'Something you hate doing at school.',
  'Something you do at the weekend.',
  'Something your friend likes doing.',
  'Something you did five minutes ago.'
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
  { title: 'Summer plans', you: 'Ask what he would like to try this summer and why.', him: 'Answer with I would like to... and say why.' },
  { title: 'Morning talk', you: 'Ask about his morning: time, breakfast, music, school.', him: 'Answer with In the morning I... and add one detail.' },
  { title: 'After school', you: 'Ask what he does after school every day.', him: 'Answer and ask the same question back.' },
  { title: 'Phone check', you: 'Ask what he watches on YouTube and how often.', him: 'Answer with I usually / I always / I never.' },
  { title: 'Weekend plans', you: 'Ask about his last weekend and the next one.', him: 'Use Past Simple for last weekend and would like to for the next.' },
  { title: 'Two friends', you: 'You both plan a Saturday. Suggest three activities.', him: 'Accept one, refuse two: "Not really, it is not my thing".' },
  { title: 'Swap roles', you: 'He interviews you. Answer shortly and let him ask more.', him: 'Ask at least five questions about the teacher day.' }
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


# NEW WORDS | Lesson 12 Aug | 12 Aug

// --- история про сватовство и ссору ---
a matchmaker - сваха - 💘
to propose to someone - сделать предложение - 💍
he proposed to her - он сделал ей предложение - 💍
he asked her to be his wife - он попросил её стать его женой - 💒
pregnant - беременная - 🤰
a belly - живот - 🫃
a mother - мать - 👩‍🍼
cruel - жестокий - 😈
difficult to manage - трудно справляться - 😮‍💨
ugly - уродливый - 🙈
depressed - подавленный - 😔
to get worse - становиться хуже - 📉
to argue - спорить - 😤
an argument - ссора - 💢
they had an argument - они поссорились - 💢
we had a bad conversation - мы плохо поговорили - 🗯️
what is the reason for this argument? - в чём причина этой ссоры? - ❓
to agree - соглашаться - 👍
to disagree - не соглашаться - 👎
to join someone - присоединиться к кому-то - 🤝
would you like to join her? - хочешь присоединиться к ней? - 🤝

// --- фразы для урока ---
since our last class - с нашего прошлого урока - 📅
nothing special - ничего особенного - 🤷
nothing new - ничего нового - 🤷
got it? - понял? - ✅
did you understand me? - ты меня понял? - ❓
is that clear? - понятно? - 💡
you did not finish - ты не закончил - ✋
feedback - обратная связь - 💬
a break - перерыв - ☕️
an app - приложение - 📱

// --- время и привычки ---
in advance - заранее - ⏳
as usual - как обычно - 🔁
for a long time - долго - ⌛️
one day - когда-нибудь - 🌅
once - один раз - 1️⃣
I would like to try it one day - я бы хотел когда-нибудь попробовать - 🌟
I would like to take photos one day - я бы хотел когда-нибудь фотографировать - 📸
you have no plans today - у тебя сегодня нет планов - 📭
I do not have a lot of free time in the morning - у меня мало свободного времени утром - ⏰
to pack my bag - собрать рюкзак - 🎒

// --- really и very ---
I really like it - мне очень нравится - 💯
it is very interesting - это очень интересно - ✨


# NEW WORDS | Lesson 21 Aug | 21 Aug

// --- 1. Шопинг и уход за собой ---
I went shopping - я ходил по магазинам - 🛍️
a mall - торговый центр - 🏬
soap - мыло - 🧼
liquid - жидкий - 💧
solid - твёрдый - 🧊
liquid soap - жидкое мыло - 🧴
solid soap - твёрдое мыло - 🧼
a skincare set - набор для ухода за кожей - 🧴
stuff for skincare - средства для ухода за кожей - 🧖
medicines - лекарства - 💊
vitamins - витамины - 💊
clothes - одежда - 👕
something to wear - что надеть - 👗
a charger - зарядка - 🔌
to charge my phone - зарядить телефон - 🔋
the rest - остальное - ➕
already - уже - ⏱️
I went to the mall and bought the rest - я сходил в торговый центр и купил остальное - 🏬
I need vitamins not to die - мне нужны витамины чтобы не умереть - 💊
I have already charged my phone - я уже зарядил телефон - 🔋
I have nothing to wear - мне нечего надеть - 👗

// --- 2. Сериалы и слухи ---
a series - сериал - 📺
an episode - серия - 🎬
a season - сезон - 📅
rumours - слухи - 🗣️
to come back - вернуться - 🔙
to cheat on somebody - изменить кому-то - 💔
a wedding - свадьба - 💒
wedding preparation - подготовка к свадьбе - 💐
bright - умный - 💡
I watched the whole season in one day - я посмотрел весь сезон за один день - 📺
there are rumours that he cheated on her - ходят слухи что он ей изменил - 🗯️
the new season comes back in autumn - новый сезон выйдет осенью - 🍂

// --- 3. Опоздания и время ---
to run late - опаздывать - 🏃
I am five minutes late - я опаздываю на пять минут - ⏰
everyone is running late because of him - все опаздывают из-за него - 😤
to forget something all the time - постоянно всё забывать - 🤦
you are bad at timing - ты плохо рассчитываешь время - ⌛️
I am good at waking up early - я хорошо встаю рано - 🌅
it depends - смотря как - 🤷

// --- 4. Чувства и рост ---
anxiety - тревожность - 😰
anxious - тревожный - 😟
chilled - расслабленный - 😎
being chilled - быть расслабленным - 🧘
successful - успешный - 🏆
to succeed - добиться успеха - 🎯
success - успех - 🌟
to develop - развиваться - 📈
to improve - улучшать - 📊
support - поддержка - 🤝
to support somebody - поддерживать кого-то - 🫂
you have your own way - у тебя свой путь - 🛤️
to follow it - идти по нему - 👣
I feel anxious before exams - я тревожусь перед экзаменами - 😰
she is chilled about everything - она ко всему относится спокойно - 😎
I want to develop my English - я хочу развивать свой английский - 📈
you have your own way so follow it - у тебя свой путь так что иди по нему - 🛤️

// --- 5. Поездки ---
a trip - поездка - 🧳
an adventure - приключение - 🗺️
our trip was a real adventure - наша поездка была настоящим приключением - 🗺️

// --- 6. Туалет по-разному ---
a restroom - туалет в общественном месте - 🚻
a toilet - унитаз - 🚽
a bathroom - ванная - 🛁
WC - туалет на табличке - 🚻
where is the restroom? - где здесь туалет? - 🚻

// --- 7. Люди и возраст ---
I am the same age as Zhenya - мы с Женей ровесники - 🎂
a peer - ровесник - 👥
Zhenya is your peer - Женя твой ровесник - 👥
contemporary - современный - 🆕
win-win - выгодно обоим - 🤝
a match - пара - ❤️
we are a good match - мы хорошо подходим друг другу - ❤️
it is a win-win situation - это выгодно обоим - 🤝


# TOPIC | Travel | ✈️ | 🧳🎫🏨
= frames
I always
I never
Before a flight I
When I travel I
I would like to
= words
a check-in desk - стойка регистрации - 🛄
a boarding pass - посадочный талон - 🎫
a gate - выход на посадку - 🚪
a carry-on bag - ручная кладь - 🎒
checked baggage - багаж в багажное отделение - 🧳
baggage claim - выдача багажа - 🛄
security - досмотр - 🛂
a flight - рейс - ✈️
delayed - задержан - ⏰
a delay - задержка - ⌛️
a window seat - место у окна - 🪟
an aisle seat - место у прохода - 💺
a passport - паспорт - 📔
a suitcase - чемодан - 🧳
to land - приземлиться - 🛬
a reservation - бронь - 📖
to check in - заселиться - 🔑
to check out - выселиться - 🚪
a key card - ключ-карта - 💳
included - включено в стоимость - ✅
air conditioning - кондиционер - ❄️
available - свободен - 🆓
a towel - полотенце - 🧻
to go straight - идти прямо - ⬆️
to turn left - повернуть налево - ⬅️
to turn right - повернуть направо - ➡️
next to - рядом с - 📍
opposite - напротив - ↔️
at the corner - на углу - 📐
far from here - далеко отсюда - 🗺️
a menu - меню - 📜
the bill - счёт - 🧾
to recommend - советовать - 👍
to get lost - заблудиться - 😵
= phrases
Where is the check-in desk? - где стойка регистрации?
I would like to check in for this flight - я бы хотел зарегистрироваться на этот рейс
Can I have a window seat? - можно мне место у окна?
Can I take this as carry-on? - можно это в ручную кладь?
I have one bag to check in - у меня одна сумка в багаж
What gate is it? - какой выход на посадку?
Has the gate changed? - выход на посадку поменялся?
How long is the delay? - надолго задержка?
My bag is missing - моя сумка потерялась
Where is baggage claim? - где выдача багажа?
I have a reservation under Kovalev - у меня бронь на фамилию Ковалёв
Is breakfast included? - завтрак включён?
What time is check-out? - во сколько выселение?
My key card is not working - моя ключ-карта не работает
Could I have another towel? - можно ещё одно полотенце?
What is the Wi-Fi password? - какой пароль от вайфая?
Excuse me, how do I get to the station? - извините, как пройти к вокзалу?
Is it far from here? - это далеко отсюда?
Can I walk there? - туда можно дойти пешком?
It is next to the museum - это рядом с музеем
Could we see the menu, please? - можно нам меню?
What do you recommend? - что вы посоветуете?
Does this have meat in it? - здесь есть мясо?
I will have this, please - я буду вот это
Could we have the bill, please? - можно счёт?
Could you help me, please? - вы не могли бы мне помочь?
I do not understand - я не понимаю
Could you say that again, please? - повторите, пожалуйста
Could you speak more slowly? - можно помедленнее?
Is this your first time here? - вы здесь впервые?
How long are you staying? - надолго вы здесь?
We are here for five days - мы здесь на пять дней
= questions
Do you like airports? Why?
What do you always take on a trip?
Window seat or aisle seat?
What can go wrong before a flight?
Hotel or apartment? Why?
What is important in a good hotel?
Have you ever got lost in a new city?
What food do you want to try when you travel?
Where would you like to go one day?
Who do you usually travel with?
How do you get to the airport?
What do you do on a long flight?
Do you pack your bag early or at the last minute?
What was your best trip?
Do you prefer the sea or the mountains?
What do you do when your flight is delayed?
Do you ask people for directions or use a map?
What do you always buy when you travel?
Would you like to travel alone?
What country would you never visit? Why?


# NEW WORDS | Lesson 25 Aug | 25 Aug

// --- 1. Вкус и еда ---
tasty - вкусный - 😋
yummy - вкуснятина - 🤤
delicious - очень вкусный - 🍰
it isn't tasty - это невкусно - 😕
it's delicious - это очень вкусно - 😍
ice - лёд - 🧊
an iced coffee - холодный кофе - 🧋
hot - горячий - ♨️
a Snickers bar - батончик сникерс - 🍫
Do you want ice in your drink? - тебе лёд в напиток? - 🥤
This cake is delicious - этот торт очень вкусный - 🍰

// --- 2. Умения и хобби ---
to knit - вязать - 🧶
knitting - вязание - 🧶
how to knit - как вязать - 🧶
to teach - учить кого-то - 👩‍🏫
to be good at something - хорошо что-то уметь - 🏅
Liza is good at knitting - Лиза хорошо вяжет - 🧶
Can you teach me how to knit? - научишь меня вязать? - 🧶
I'm good at drawing - я хорошо рисую - 🎨

// --- 3. Характер ---
to show off - хвастаться - 😎
a show-off - хвастун - 🙄
responsible - ответственный - ✅
He is really responsible - он очень ответственный - 💪
caring - заботливый - 🤗
to care about somebody - заботиться о ком-то - ❤️
care - забота - 🫶
careful - осторожный - ⚠️
Be careful! - осторожно! - ⚠️
She is a caring person - она заботливый человек - 🤗
He never shows off - он никогда не хвастается - 😌

// --- 4. Вещи ---
a toy - игрушка - 🧸
a coaster - подставка под стакан - 🥤
a glass stand - подставка для стакана - 🥛

// --- 5. Время и планы ---
on Friday - в пятницу - 📅
to book - бронировать - 📝
to book a table - забронировать столик - 🍽️
a shortcut - короткий путь - ✂️
to take a shortcut - срезать путь - 🚶
I'll book a table on Friday - я забронирую столик в пятницу - 📅
Let's take a shortcut - давай срежем - 🚶

# NEW WORDS | Lesson 15 Sep | 15 Sep

// --- 1. Угадай сериал ---
a series - сериал - 📺
to guess - угадывать - 🤔
to describe - описывать - 🗣️
a hint - подсказка - 💡
the main characters - главные герои - 🎭
classmates - одноклассники - 🧑‍🎓
rumours - слухи - 🗯️
chemistry - химия (школьный предмет) - 🧪
they have chemistry - между ними есть химия - 💞
final tests - итоговые контрольные - 📝
too old - слишком старый - 👴
there are - есть (о нескольких) - 👉
Guess the series! - угадай сериал! - 🎬
Can you give me a hint? - дашь подсказку? - 💡
Can you describe the main characters? - можешь описать главных героев? - 🎭
There are five main characters in the series - в сериале пять главных героев - 🎭

// --- 2. Когда это было ---
the 2000s - двухтысячные - 📅
in the mid-2000s - в середине двухтысячных - 📅
autumn - осень - 🍂
fall - осень (в американском) - 🍁
before - до, раньше - ⏪
during - во время - ⏳
for the first time - в первый раз - 1️⃣
The series is set in the mid-2000s - действие сериала происходит в середине двухтысячных - 📺
I watched it for the first time in autumn - я впервые посмотрел его осенью - 🍂
There are rumours about the final tests - про итоговые контрольные ходят слухи - 📝

// --- 3. Цель и причина ---
a purpose - цель - 🎯
a reason - причина - ❓
to prepare - готовиться - 📚
to share - делиться - 🤝
What is the reason? - в чём причина? - ❓
I need to prepare for the final tests - мне надо готовиться к итоговым контрольным - 📚
Can you share your ideas? - поделишься идеями? - 💬

// --- 4. Одежда и шопинг ---
to go shopping - ходить по магазинам - 🛍️
a jacket - куртка - 🧥
a leather jacket - кожаная куртка - 🧥
boots - ботинки - 🥾
I want to go shopping on Friday - я хочу пойти по магазинам в пятницу - 🛍️
I need new boots and a leather jacket - мне нужны новые ботинки и кожаная куртка - 🥾

// --- 5. Отпуск и поездки ---
twins - близнецы - 👯
to spend the vacation - провести отпуск - 🏖️
a road trip - путешествие на машине - 🚗
pen pals - друзья по переписке - ✉️
a honeymoon - медовый месяц - 💍
Moose Island - остров Мус (название) - 🏝️
because of insects - из-за насекомых - 🦟
a good location - удобное расположение - 📍
clean - чистый - 🧼
a kitchen - кухня - 🍳
to get lost - заблудиться - 🧭
The twins spend the vacation on Moose Island - близнецы проводят отпуск на острове Мус - 🏝️
We didn't go camping because of insects - мы не поехали в поход из-за насекомых - 🦟
The house has a good location and a clean kitchen - у дома удобное расположение и чистая кухня - 🏡
We got lost on our road trip - мы заблудились во время поездки на машине - 🗺️

// --- 6. В интернете и в жизни ---
IRL - в реальной жизни (сокращение в переписке) - 💬
in real life - в реальной жизни - 🌍
We are pen pals, but we never met in real life - мы переписываемся, но в жизни не встречались - ✉️

// --- 7. Воображение ---
imagination - воображение - 🌈
to imagine - представлять - 💭
creativity - креативность - 🎨
creative - творческий - ✨
Imagine you are on a road trip - представь, что ты в поездке на машине - 🚗
You have a great imagination - у тебя отличное воображение - 🌈

# NEW WORDS | Lesson 18 Sep | 18 Sep

// --- 1. Школа и выпускной ---
to graduate - окончить школу - 🎓
graduation - выпускной - 🎉
a graduation album - выпускной альбом - 📕
a photoshoot - фотосессия - 📸
remote - дистанционный, удалённый - 💻
remote lessons - уроки онлайн, дистанционно - 🖥️
We graduate next year - мы заканчиваем школу в следующем году - 🎓
We had a photoshoot for our graduation album - у нас была фотосессия для выпускного альбома - 📸
Our lessons were remote - у нас были уроки дистанционно - 💻

// --- 2. Когда? on + день недели ---
on Monday - в понедельник - 📅
on Friday - в пятницу - 📅
on Monday morning - в понедельник утром - 🌅
The photoshoot is on Monday - фотосессия в понедельник - 📸
On Friday I have no plans - в пятницу у меня нет планов - 🗓️

// --- 3. Сон и ночёвки ---
to oversleep - проспать - 😴
I overslept - я проспал - ⏰
a sleepover - ночёвка у друзей - 🛏️
I overslept and was late for school - я проспал и опоздал в школу - ⏰
We had a sleepover at my friend's house - мы ночевали у друга - 🛏️

// --- 4. Что я об этом думаю ---
annoying - раздражающий, бесячий - 😤
It's annoying - это раздражает - 😤
Is it worth it? - оно того стоит? - 🤔
It's worth it - оно того стоит - 👍
It's not worth it - оно того не стоит - 👎
Remote lessons are annoying - уроки онлайн раздражают - 🖥️
A sleepover before school? Is it worth it? - ночёвка перед школой? Оно того стоит? - 🤔

// --- 5. Погода и воздух ---
because of bad weather - из-за плохой погоды - 🌧️
air - воздух - 💨
fresh air - свежий воздух - 🌬️
outside - на улице, снаружи - 🌳
without - без - 🚫
to affect - влиять на - ➡️
We stayed at home because of bad weather - мы остались дома из-за плохой погоды - 🌧️
I want to go outside and get some fresh air - хочу выйти на улицу подышать свежим воздухом - 🌬️
I can't live without my phone - я не могу жить без телефона - 📱
Bad weather affects my mood - плохая погода влияет на моё настроение - 😔

// --- 6. Проблемы и решения ---
a problem - проблема - ⚠️
the biggest problem - самая большая проблема - 🔺
to decide - решать - 🧠
a decision - решение - ✅
to make a decision - принять решение - 🙌
The biggest problem is the weather - самая большая проблема это погода - 🌧️
I decided to stay at home - я решил остаться дома - 🏠
It was a difficult decision - это было трудное решение - 🤯

# NEW WORDS | Lesson 22 Sep | 22 Sep

// --- 1. Погода и самочувствие ---
rainy - дождливый - 🌧️
snowy - снежный - ❄️
sunny - солнечный - ☀️
stormy - штормовой, грозовой - ⛈️
It's rainy outside - на улице дождливо - 🌧️
It was sunny all day - весь день было солнечно - ☀️
It's too stormy to go out - слишком штормит, чтобы выходить - ⛈️
sensitive to the weather - метеозависимый - 🌡️
pressure - давление (атмосферное) - 🌡️
I'm sensitive to the weather - я метеозависимый - 🤕
The pressure is low today, so I have a headache - сегодня низкое давление, поэтому у меня болит голова - 🤕

// --- 2. Моё мнение ---
nothing special - ничего особенного - 😐
It's ridiculous - это нелепо, это абсурд - 🙄
too much - слишком много, перебор - 🤯
the same - то же самое, одинаковый - 🟰
The film was nothing special - фильм был так себе, ничего особенного - 😐
Two hours of homework? It's ridiculous! - два часа домашки? это абсурд! - 🙄
This is too much for me - это для меня слишком - 🤯
We have the same phone - у нас одинаковые телефоны - 📱
It's always the same - всегда одно и то же - 🔁

// --- 3. Когда? during ---
during - во время - ⏳
during the lesson - во время урока - 📚
during the summer - летом, в течение лета - 🏖️
I never use my phone during the lesson - я никогда не сижу в телефоне во время урока - 📵
It rained during the night - ночью шёл дождь - 🌧️

// --- 4. talk, say, tell, speak ---
to talk - разговаривать (с кем-то, обо всём подряд) - 💬
to say - сказать, произнести вслух - 🗣️
to tell - рассказать кому-то, сообщить с целью - 👂
to speak - говорить на языке - 🌍
We talked for two hours - мы проговорили два часа - 💬
She said hello and left - она сказала «привет» и ушла - 🗣️
Tell me about your weekend - расскажи мне про свои выходные - 👂
I speak English and Russian - я говорю по-английски и по-русски - 🌍
Can you speak German? - ты говоришь по-немецки? - 🇩🇪

// --- 5. У меня есть: have got и have ---
I haven't got a bag - у меня нет сумки - 👜
I don't have a bag - у меня нет сумки - 👜
Have you got a bag? - у тебя есть сумка? - ❓
Do you have a bag? - у тебя есть сумка? - ❓
She has got a new phone - у неё новый телефон - 📱
Have you got any plans for the weekend? - у тебя есть планы на выходные? - 🗓️

// --- 6. Будущее: will и won't ---
will - буду, будет (про будущее) - 🔮
won't - не буду, не будет (will + not) - 🚫
I will call you tonight - я позвоню тебе вечером - 📞
It will be sunny tomorrow - завтра будет солнечно - ☀️
I won't be late - я не опоздаю - ⏰
It won't rain today - сегодня не будет дождя - ☂️

# TOPIC | Travel · Hotel & City | 🏨 | 🏨🗺️🚏
= frames
At the hotel I
I would like
My room
= words
a hotel - отель - 🏨
to stay at a hotel - останавливаться в отеле - 🏨
a reservation - бронь - 📖
to book a room - забронировать номер - 📝
reception - стойка администратора - 🛎️
a receptionist - администратор - 🧑‍💼
to check in - заселиться - 🔑
to check out - выселиться - 🚪
check-out time - время выселения - ⏰
a key card - ключ-карта - 💳
a room number - номер комнаты - 🔢
a single room - одноместный номер - 🛏️
a double room - двухместный номер - 🛌
a family room - семейный номер - 👨‍👩‍👧
for two nights - на две ночи - 🌙
included - включено в стоимость - ✅
breakfast - завтрак - 🥐
available - свободен - 🆓
air conditioning - кондиционер - ❄️
a towel - полотенце - 🧻
the Wi-Fi password - пароль от вайфая - 📶
a lift - лифт - 🛗
on the third floor - на третьем этаже - 🏢
a view - вид из окна - 🌅
a balcony - балкон - 🌇
noisy - шумный - 📢
quiet - тихий - 🤫
broken - сломанный - 🔧
it doesn't work - это не работает - ⚙️
a problem with the room - проблема с номером - ⚠️
a floor - этаж - 🏢
a city - город - 🏙️
a street - улица - 🛣️
a square - площадь - ⛲
a map - карта - 🗺️
a bus stop - автобусная остановка - 🚏
a station - вокзал, станция - 🚉
a ticket - билет - 🎫
to take a bus - поехать на автобусе - 🚌
to take a taxi - взять такси - 🚕
on foot - пешком - 🚶
a bank - банк - 🏦
a pharmacy - аптека - 💊
a supermarket - супермаркет - 🛒
a museum - музей - 🏛️
a market - рынок - 🛒
a beach - пляж - 🏖️
a café - кафе - ☕
to go straight - идти прямо - ⬆️
to turn left - повернуть налево - ⬅️
to turn right - повернуть направо - ➡️
to cross the street - перейти улицу - 🚸
crossroads - перекрёсток - 🚦
next to - рядом с - 📍
opposite - напротив - 🔄
between - между - 🔀
behind - за, позади - 🔙
in front of - перед - 👉
near - рядом, недалеко - 📌
far from here - далеко отсюда - 🧭
at the corner - на углу - 📐
to get lost - заблудиться - 😵

= phrases
I have a reservation under Kovalev - у меня бронь на фамилию Ковалёв
I would like to check in, please - я бы хотел заселиться
What time is check-out? - во сколько выселение?
Is breakfast included? - завтрак включён?
Is a family room available tonight? - есть свободный семейный номер на сегодня?
We are staying for two nights - мы остаёмся на две ночи
My key card isn't working - моя ключ-карта не работает
The air conditioning doesn't work - кондиционер не работает
Could I have another towel, please? - можно ещё одно полотенце?
What is the Wi-Fi password? - какой пароль от вайфая?
What is my room number? - какой у меня номер комнаты?
Where is the lift? - где лифт?
My room is on the third floor - мой номер на третьем этаже
Can I have a room with a view? - можно номер с видом?
My room is too noisy - в моём номере слишком шумно
There is a problem with my room - с моим номером проблема
Can I leave my suitcase at reception? - можно оставить чемодан у администратора?
They arrived at the hotel at 8 p.m. - они приехали в отель в 8 вечера
Ivan's key card didn't work - ключ-карта Ивана не сработала
Olga asked the receptionist for help - Ольга попросила администратора о помощи
Zhenya lost her room number - Женя забыла номер своей комнаты
Yuri found the correct room - Юрий нашёл нужный номер
They ordered dinner at 9 p.m. - они заказали ужин в 9 вечера
Excuse me, how do I get to the beach? - извините, как пройти к пляжу?
Is it far from here? - это далеко отсюда?
Can I walk there? - туда можно дойти пешком?
Go straight and turn left at the corner - идите прямо и на углу поверните налево
Cross the street and turn right - перейдите улицу и поверните направо
It's opposite the museum - это напротив музея
The pharmacy is next to the bank - аптека рядом с банком
The café is between the bank and the pharmacy - кафе между банком и аптекой
Which bus goes to the station? - какой автобус идёт до вокзала?
Where can I buy a ticket? - где можно купить билет?
We took a taxi from the station - мы взяли такси от вокзала
We got lost - мы заблудились
What do you recommend? - что вы посоветуете?
Could we have the bill, please? - можно счёт?

= questions
Hotel or apartment? Why?
What is important in a good hotel?
Do you like breakfast in a hotel?
What do you say at reception?
What can go wrong in a hotel?
What do you do if your key card doesn't work?
A room with a view or a quiet room?
Do you prefer a high floor or a low floor?
When did you last stay in a hotel?
What did you do on your first day of the trip?
What was the best hotel you stayed in?
What happened at the hotel in the lesson story?
How do you get to school?
Is there a pharmacy near your home?
What is opposite your school?
In a new city, do you prefer to walk or take a bus?
Have you ever got lost in a city? What happened?
Explain how to get from your home to the nearest shop.


`;
