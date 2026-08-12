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

`;
