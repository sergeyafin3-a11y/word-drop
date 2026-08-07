/* ============================================================
   ГРАММАТИКА. Отдельный файл — лексика живёт в data.js.

   Каждое правило:
     id      — не менять после публикации (к нему привязан прогресс)
     title   — название папки
     table   — табличка вверху: cols (шапка) + rows (строки)
     rule    — одна-две строки объяснения
     bad/ok  — типичная ошибка
     drill   — задания строками: "вопрос | ответ | вариант / вариант / вариант"
               Минимум 30 на правило. За заход даётся 10 случайных,
               100% будет, когда решены все.
     say     — собрать фразу из слов: "по-русски | in English"
   ============================================================ */

window.GRAMMAR = [

  /* ==================== ГЕРУНДИЙ ==================== */
  {
    id: 'g-ger',
    title: 'Gerund',
    sub: 'verb + V-ing',
    formula: 'I like <b>playing</b> football',
    table: {
      cols: ['After these verbs', 'Form', 'Example'],
      rows: [
        ['like · love · enjoy · hate', 'verb + <b>ing</b>', 'I like play<b>ing</b> football'],
        ["don't like · can't stand", 'verb + <b>ing</b>', "I don't like wait<b>ing</b>"],
        ["I'm into · I'm good at", 'verb + <b>ing</b>', "I'm into mak<b>ing</b> videos"],
        ['start · finish · stop', 'verb + <b>ing</b>', 'I started learn<b>ing</b> English']
      ],
      note: 'Spelling: dance → danc<b>ing</b> · run → run<b>ning</b> · study → study<b>ing</b>'
    },
    rule: 'After like, love, enjoy, hate and after I am into the second verb always takes -ing.',
    bad: 'I like play football',
    ok: 'I like playing football',
    examples: [
      { en: 'I like playing video games', ru: 'я люблю играть в видеоигры' },
      { en: 'She enjoys drawing', ru: 'ей нравится рисовать' },
      { en: "I don't like getting up early", ru: 'я не люблю рано вставать' },
      { en: "I'm into making videos", ru: 'я увлекаюсь съёмкой видео' }
    ],
    drill: [
      'I like ___ (play) video games | playing | play / playing / to play',
      'I love ___ (listen) to music | listening | listen / listening / to listen',
      'I enjoy ___ (take) photos | taking | take / taking / to take',
      'I hate ___ (clean) my room | cleaning | clean / cleaning',
      'She likes ___ (dance) | dancing | dance / dancing / danceing',
      'He enjoys ___ (draw) | drawing | draw / drawing',
      'We love ___ (watch) films | watching | watch / watching',
      'They hate ___ (wait) in line | waiting | wait / waiting',
      "I'm into ___ (make) videos | making | make / making / makeing",
      "I don't like ___ (get) up early | getting | get / getting / geting",
      'My friend likes ___ (read) books | reading | read / reading',
      'I enjoy ___ (cook) new recipes | cooking | cook / cooking',
      'Do you like ___ (swim)? | swimming | swim / swiming / swimming',
      'She loves ___ (sing) songs | singing | sing / singing',
      'I hate ___ (do) homework | doing | do / doing',
      'We enjoy ___ (hang) out with friends | hanging | hang / hanging',
      'He is into ___ (ride) a skateboard | riding | ride / rideing / riding',
      'I like ___ (go) shopping | going | go / going',
      'They love ___ (play) football | playing | play / playing',
      "I don't enjoy ___ (study) at night | studying | study / studing / studying",
      'She hates ___ (get) up at six | getting | get / getting',
      'I love ___ (watch) YouTube | watching | watch / watching',
      'Do you enjoy ___ (write) in a diary? | writing | write / writeing / writing',
      'He likes ___ (build) robots | building | build / building',
      "I'm good at ___ (skate) | skating | skate / skating / skateing",
      "We don't like ___ (run) | running | run / runing / running",
      'I enjoy ___ (relax) after school | relaxing | relax / relaxing',
      'She likes ___ (visit) new places | visiting | visit / visiting',
      'I hate ___ (go) to bed late | going | go / going',
      'My brother loves ___ (make) videos | making | make / making',
      'I like ___ (eat) breakfast in bed | eating | eat / eating',
      'They enjoy ___ (travel) | travelling | travel / travelling'
    ],
    say: [
      { ru: 'я люблю играть на гитаре', en: 'I like playing the guitar' },
      { ru: 'мне нравится фотографировать', en: 'I enjoy taking photos' },
      { ru: 'я ненавижу убираться в комнате', en: 'I hate cleaning my room' },
      { ru: 'я не люблю рано вставать', en: "I don't like getting up early" },
      { ru: 'я увлекаюсь съёмкой видео', en: "I'm into making videos" },
      { ru: 'она обожает петь песни', en: 'She loves singing songs' }
    ]
  },

  /* ==================== ИНФИНИТИВ ==================== */
  {
    id: 'g-inf',
    title: 'Infinitive',
    sub: 'verb + to + verb',
    formula: 'I would like <b>to try</b> skating',
    table: {
      cols: ['After these verbs', 'Form', 'Example'],
      rows: [
        ['would like', '<b>to</b> + verb', 'I would like <b>to try</b> boxing'],
        ['want', '<b>to</b> + verb', 'I want <b>to go</b> home'],
        ['need', '<b>to</b> + verb', 'I need <b>to do</b> my homework'],
        ['try · plan · decide', '<b>to</b> + verb', 'I try <b>to speak</b> English']
      ],
      note: "I'd like = I would like. The verb after <b>to</b> never takes -ing and never -s."
    },
    rule: 'After would like, want, need and try we use to + verb. The verb stays in its base form.',
    bad: 'I would like to trying boxing',
    ok: 'I would like to try boxing',
    examples: [
      { en: 'I would like to try skating', ru: 'я бы хотел попробовать скейт' },
      { en: 'I want to go to a concert', ru: 'я хочу сходить на концерт' },
      { en: 'I need to do my homework', ru: 'мне нужно сделать домашку' },
      { en: 'What would you like to do?', ru: 'что бы ты хотел делать?' }
    ],
    drill: [
      'I would like ___ try boxing | to | to / for / —',
      'I would like to ___ (learn) the guitar | learn | learn / learning / to learn',
      'I want ___ (go) to a concert | to go | go / to go / going',
      'I need ___ (do) my homework | to do | do / to do / doing',
      'Would you like ___ (visit) a castle? | to visit | visit / to visit / visiting',
      'I would like ___ (make) videos | to make | make / to make / making',
      'She wants ___ (travel) | to travel | travel / to travel / travelling',
      'We would like ___ (try) yoga | to try | try / to try / trying',
      'He needs ___ (get up) early | to get up | get up / to get up / getting up',
      'I try ___ (speak) English every day | to speak | speak / to speak / speaking',
      'What ___ you like to try? | would | would / do / are',
      'I would like to ___ (go) swimming | go | go / to go / going',
      'They want ___ (watch) a film | to watch | watch / to watch / watching',
      'I plan ___ (study) tonight | to study | study / to study / studying',
      'She would like ___ (sing) on stage | to sing | sing / to sing / singing',
      'Do you want ___ (play) football? | to play | play / to play / playing',
      'I need ___ (buy) tickets | to buy | buy / to buy / buying',
      'We decided ___ (go) home | to go | go / to go / going',
      'He would like ___ (be) a blogger | to be | be / to be / being',
      'I want ___ (eat) something | to eat | eat / to eat / eating',
      'She needs ___ (relax) | to relax | relax / to relax / relaxing',
      'I would like ___ (meet) my friends | to meet | meet / to meet / meeting',
      'They plan ___ (visit) Italy | to visit | visit / to visit / visiting',
      'I try ___ (do) sport twice a week | to do | do / to do / doing',
      'Would you like ___ (come) with me? | to come | come / to come / coming',
      'He wants ___ (build) a robot | to build | build / to build / building',
      'I would like ___ (take) a photo | to take | take / to take / taking',
      'We need ___ (finish) this | to finish | finish / to finish / finishing',
      'She wants ___ (learn) Spanish | to learn | learn / to learn / learning',
      'I would like ___ (go) off the grid | to go | go / to go / going',
      'I want ___ (be) better at English | to be | be / to be / being',
      'They would like ___ (try) something new | to try | try / to try / trying'
    ],
    say: [
      { ru: 'я бы хотел попробовать скейт', en: 'I would like to try skating' },
      { ru: 'я хочу сходить на концерт', en: 'I want to go to a concert' },
      { ru: 'мне нужно сделать домашку', en: 'I need to do my homework' },
      { ru: 'что бы ты хотел попробовать?', en: 'What would you like to try?' },
      { ru: 'она хочет путешествовать', en: 'She wants to travel' },
      { ru: 'я стараюсь говорить по-английски', en: 'I try to speak English' }
    ]
  },

  /* ==================== PRESENT SIMPLE ==================== */
  {
    id: 'g-ps',
    title: 'Present Simple',
    sub: 'what I do usually',
    formula: 'I <b>play</b> · He <b>plays</b>',
    table: {
      cols: ['', '+ Affirmative', '− Negative', '? Question'],
      rows: [
        ['I / you / we / they', 'I <b>play</b> football', "I <b>don't</b> play football", '<b>Do</b> you play football?'],
        ['he / she / it', 'He <b>plays</b> football', "He <b>doesn't</b> play football", '<b>Does</b> he play football?']
      ],
      note: 'Helper: <b>do / does</b>. After don\'t and doesn\'t the verb loses -s. Short answers: Yes, I do. / No, I don\'t.'
    },
    rule: 'We use it for usual things: every day, always, on Mondays. For he, she, it the verb gets -s.',
    bad: 'He play football · Does he plays?',
    ok: 'He plays football · Does he play?',
    examples: [
      { en: 'I play video games every day', ru: 'я играю в видеоигры каждый день' },
      { en: 'She watches films at the weekend', ru: 'она смотрит фильмы на выходных' },
      { en: "He doesn't like yoga", ru: 'он не любит йогу' },
      { en: 'Do you listen to music? Yes, I do', ru: 'ты слушаешь музыку? да' }
    ],
    drill: [
      'He ___ (play) football | plays | play / plays',
      'I ___ (play) football | play | play / plays',
      'She ___ (watch) films | watches | watch / watches',
      'We ___ (go) to school | go | go / goes',
      'My brother ___ (go) swimming | goes | go / goes',
      '___ you play video games? | Do | Do / Does / Are',
      '___ he like music? | Does | Do / Does',
      "I ___ like running | don't | don't / doesn't / not",
      "She ___ like yoga | doesn't | don't / doesn't",
      'They ___ (study) every day | study | study / studies',
      'My mum ___ (cook) very well | cooks | cook / cooks',
      'I ___ (wake up) at seven | wake up | wake up / wakes up',
      'He ___ (do) his homework after school | does | do / does',
      'Do you ___ (like) football? | like | like / likes',
      'Does she ___ (play) the guitar? | play | play / plays',
      "We ___ watch TV in the morning | don't | don't / doesn't",
      "He ___ eat breakfast | doesn't | don't / doesn't",
      'She ___ (have) lunch at school | has | have / has',
      'They ___ (hang) out on Fridays | hang | hang / hangs',
      'My friend ___ (make) videos | makes | make / makes',
      '___ your brother play football? | Does | Do / Does',
      'I ___ (relax) in the evening | relax | relax / relaxes',
      'It ___ (start) at eight | starts | start / starts',
      'You ___ (read) a lot | read | read / reads',
      'He ___ (study) English | studies | study / studys / studies',
      'She ___ (go) to bed late | goes | go / goes',
      "I ___ do sport | don't | don't / doesn't",
      'Do they ___ (live) here? | live | live / lives',
      'My dad ___ (drive) to work | drives | drive / drives',
      'We ___ (eat) dinner at eight | eat | eat / eats',
      'Does he ___ (want) to come? | want | want / wants',
      'She ___ (brush) her teeth twice a day | brushes | brush / brushes'
    ],
    say: [
      { ru: 'я играю в видеоигры каждый день', en: 'I play video games every day' },
      { ru: 'он слушает музыку', en: 'He listens to music' },
      { ru: 'она не любит йогу', en: "She doesn't like yoga" },
      { ru: 'ты смотришь видео каждый день?', en: 'Do you watch videos every day?' },
      { ru: 'мой брат ходит плавать', en: 'My brother goes swimming' },
      { ru: 'я не люблю рано вставать', en: "I don't like getting up early" }
    ]
  },

  /* ==================== PRESENT CONTINUOUS ==================== */
  {
    id: 'g-pc',
    title: 'Present Continuous',
    sub: 'what I am doing now',
    formula: 'I <b>am watching</b> a video now',
    table: {
      cols: ['', '+ Affirmative', '− Negative', '? Question'],
      rows: [
        ['I', 'I <b>am</b> watching', "I <b>am not</b> watching", '<b>Am</b> I watching?'],
        ['he / she / it', 'He <b>is</b> watching', "He <b>isn't</b> watching", '<b>Is</b> he watching?'],
        ['you / we / they', 'We <b>are</b> watching', "We <b>aren't</b> watching", '<b>Are</b> we watching?']
      ],
      note: 'Helper: <b>am / is / are</b> + verb-<b>ing</b>. Signal words: now, right now, at the moment, Look!'
    },
    rule: 'Use it for what is happening right now. Always two parts: am / is / are + verb-ing.',
    bad: 'I watching now · She is watch',
    ok: 'I am watching now · She is watching',
    examples: [
      { en: 'I am doing my homework now', ru: 'я сейчас делаю домашку' },
      { en: 'She is listening to music', ru: 'она слушает музыку' },
      { en: "They aren't playing football", ru: 'они не играют в футбол' },
      { en: 'What are you doing?', ru: 'что ты делаешь?' }
    ],
    drill: [
      'Listen! She ___ (listen) to music now | is listening | listens / is listening',
      'Look — he ___ (do) his homework | is doing | does / is doing',
      'I ___ (watch) a video right now | am watching | watch / am watching',
      'We ___ (eat) dinner now | are eating | eat / are eating',
      'What ___ you doing right now? | are | do / are / is',
      'They ___ (play) football at the moment | are playing | play / are playing',
      'She ___ (not / sleep) now | is not sleeping | not sleeping / is not sleeping',
      '___ he watching YouTube? | Is | Is / Does / Are',
      'I ___ (study) English right now | am studying | study / am studying',
      'My mum ___ (cook) dinner | is cooking | cooks / is cooking',
      'Look! The dog ___ (run) | is running | runs / is running',
      'We ___ (not / watch) TV | are not watching | not watch / are not watching',
      '___ you listening to me? | Are | Do / Are / Is',
      'He ___ (take) photos now | is taking | takes / is taking',
      'They ___ (hang) out at the moment | are hanging | hang / are hanging',
      'I ___ (not / do) anything now | am not doing | not do / am not doing',
      'She ___ (dance) right now | is dancing | dances / is dancing',
      'What ___ she doing? | is | is / are / does',
      'The boys ___ (make) a video | are making | make / are making',
      'I ___ (get) ready now | am getting | get / am getting',
      '___ they studying? | Are | Are / Do / Is',
      'He ___ (sing) in the shower | is singing | sings / is singing',
      'We ___ (go) home now | are going | go / are going',
      'It ___ (rain) at the moment | is raining | rains / is raining',
      'You ___ (read) a book now | are reading | read / are reading',
      'She ___ (not / play) games | is not playing | not playing / is not playing',
      'I ___ (relax) right now | am relaxing | relax / am relaxing',
      '___ he doing homework? | Is | Is / Does',
      'My friends ___ (swim) now | are swimming | swim / are swimming',
      'I ___ (write) in my diary | am writing | write / am writing',
      'The film ___ (start) now | is starting | starts / is starting',
      'We ___ (wait) in line | are waiting | wait / are waiting'
    ],
    say: [
      { ru: 'я сейчас смотрю видео', en: 'I am watching a video' },
      { ru: 'она сейчас слушает музыку', en: 'She is listening to music' },
      { ru: 'что ты сейчас делаешь?', en: 'What are you doing now?' },
      { ru: 'мы сейчас ужинаем', en: 'We are eating dinner now' },
      { ru: 'он не спит', en: 'He is not sleeping' },
      { ru: 'я делаю домашку прямо сейчас', en: 'I am doing my homework right now' }
    ]
  },

  /* ==================== PAST SIMPLE ==================== */
  {
    id: 'g-past',
    title: 'Past Simple',
    sub: 'what I did yesterday',
    formula: 'Yesterday I <b>watched</b> two videos',
    table: {
      cols: ['', '+ Affirmative', '− Negative', '? Question'],
      rows: [
        ['I / you / he / she / we / they', 'I <b>watched</b> a film', "I <b>didn't</b> watch a film", '<b>Did</b> you watch a film?'],
        ['irregular verbs', 'I <b>went</b> · I <b>ate</b> · I <b>woke up</b>', "I <b>didn't</b> go", '<b>Did</b> you go?']
      ],
      note: 'Helper: <b>did</b>. Same form for everybody. After <b>didn\'t</b> and <b>did</b> the verb goes back to its base form.'
    },
    rule: 'Use it for finished things: yesterday, last night, two weeks ago. Regular verbs take -ed, irregular ones change.',
    bad: "Yesterday I watch a film · Did you watched?",
    ok: 'Yesterday I watched a film · Did you watch?',
    examples: [
      { en: 'Yesterday I watched two videos', ru: 'вчера я посмотрел два видео' },
      { en: 'We went to Italy two weeks ago', ru: 'две недели назад мы ездили в Италию' },
      { en: "I didn't do my homework", ru: 'я не сделал домашку' },
      { en: 'Did you sleep well?', ru: 'ты хорошо спал?' }
    ],
    drill: [
      'Yesterday I ___ (watch) two videos | watched | watch / watched',
      'Two weeks ago we ___ (go) to Italy | went | go / goed / went',
      'Last night I ___ (eat) dinner at eight | ate | eat / ate / eated',
      'Yesterday I ___ (wake up) late | woke up | wake up / woke up',
      'Last weekend she ___ (relax) at home | relaxed | relax / relaxed',
      'He ___ (play) football yesterday | played | play / played',
      'I ___ (not / do) my homework | did not do | not did / did not do',
      '___ you watch the film? | Did | Did / Do / Was',
      'She ___ (listen) to music all day | listened | listen / listened',
      'We ___ (have) a great time | had | have / haved / had',
      'They ___ (study) for the test | studied | study / studyed / studied',
      'I ___ (see) a good film | saw | see / saw / seed',
      'My friend ___ (make) a video | made | make / maked / made',
      'Did he ___ (go) to school? | go | go / went',
      'I ___ (not / like) the film | did not like | not liked / did not like',
      'She ___ (get) up at six | got | get / got',
      'We ___ (walk) to school | walked | walk / walked',
      '___ they play video games? | Did | Did / Do',
      'He ___ (take) a lot of photos | took | take / took / taked',
      'I ___ (do) my homework last night | did | do / did / done',
      'She ___ (not / watch) TV | did not watch | not watched / did not watch',
      'We ___ (visit) a castle | visited | visit / visited',
      'Did you ___ (have) breakfast? | have | have / had',
      'He ___ (write) in his diary | wrote | write / wrote / writed',
      'They ___ (dance) all night | danced | dance / danced',
      'I ___ (be) at home yesterday | was | was / were',
      'They ___ (be) at school | were | was / were',
      'She ___ (buy) new sneakers | bought | buy / buyed / bought',
      'I ___ (not / go) out | did not go | not went / did not go',
      'What ___ you do yesterday? | did | did / do / was',
      'He ___ (swim) in the sea | swam | swim / swimmed / swam',
      'We ___ (cook) dinner together | cooked | cook / cooked'
    ],
    say: [
      { ru: 'вчера я посмотрел два видео', en: 'Yesterday I watched two videos' },
      { ru: 'вчера вечером я поужинал в восемь', en: 'Last night I ate dinner at eight' },
      { ru: 'мы ездили в Италию', en: 'We went to Italy' },
      { ru: 'я не сделал домашку', en: "I didn't do my homework" },
      { ru: 'что ты делал вчера?', en: 'What did you do yesterday?' },
      { ru: 'вчера я проснулся поздно', en: 'Yesterday I woke up late' }
    ]
  },

  /* ==================== HOW OFTEN ==================== */
  {
    id: 'g-often',
    title: 'How often',
    sub: 'how often I do it',
    formula: 'I <b>always</b> listen to music',
    table: {
      cols: ['Word', 'How much', 'Where it goes'],
      rows: [
        ['always', '100%', '<b>before</b> the verb: I <b>always</b> read'],
        ['usually', '80%', '<b>before</b> the verb: I <b>usually</b> walk'],
        ['often', '60%', '<b>before</b> the verb: I <b>often</b> cook'],
        ['sometimes', '40%', '<b>before</b> the verb: I <b>sometimes</b> draw'],
        ['never', '0%', '<b>before</b> the verb: I <b>never</b> dance'],
        ['every day · twice a week · at the weekend', '—', '<b>at the end</b>: I read <b>every day</b>']
      ],
      note: 'Question: <b>How often</b> do you play? — Twice a week. With <b>never</b> the sentence is already negative: I never dance (not: I don\'t never dance).'
    },
    rule: 'Short words (always, usually, often, sometimes, never) stand before the verb. Long expressions (every day, twice a week) go at the end.',
    bad: 'I dance never · I go every day to school',
    ok: 'I never dance · I go to school every day',
    examples: [
      { en: 'I always listen to music', ru: 'я всегда слушаю музыку' },
      { en: 'I go swimming twice a week', ru: 'я хожу плавать два раза в неделю' },
      { en: 'She never plays video games', ru: 'она никогда не играет в видеоигры' },
      { en: 'How often do you do sport?', ru: 'как часто ты занимаешься спортом?' }
    ],
    drill: [
      'I ___ dance | never | never / not never',
      'I play football twice ___ week | a | a / in / on',
      'I read books ___ day | every | every / all / each',
      'We meet ___ the weekend | at | at / in / on',
      'How ___ do you play? | often | often / many / much',
      'She ___ watches TV in the morning | never | never / not',
      'I ___ (usually) get up at seven | usually get up | get usually up / usually get up',
      'He goes to the gym three times ___ week | a | a / the / in',
      'I ___ (always) listen to music | always listen | listen always / always listen',
      'They ___ (sometimes) go swimming | sometimes go | go sometimes / sometimes go',
      'I do my homework ___ day | every | every / all',
      'She is ___ late | always | always / all time',
      'We ___ (never) eat fast food | never eat | eat never / never eat',
      'I see my friends ___ Fridays | on | on / at / in',
      'How often ___ you watch films? | do | do / are / did',
      'He ___ (often) plays the guitar | often plays | plays often / often plays',
      'I go to school ___ Monday to Friday | from | from / in / at',
      'They travel ___ a year | once | once / one / first',
      'I ___ (usually) do sport after school | usually do | do usually / usually do',
      'She goes shopping ___ month | every | every / all',
      'We ___ (always) have dinner together | always have | have always / always have',
      'I watch videos ___ the evening | in | in / at / on',
      'He ___ (never) gets up early | never gets up | gets never up / never gets up',
      'I play video games ___ day | all | all / every',
      '___ often do you read? | How | How / What / When',
      'She ___ (sometimes) helps me | sometimes helps | helps sometimes / sometimes helps',
      'We go to the cinema twice ___ month | a | a / in / the',
      'I ___ (often) listen to podcasts | often listen | listen often / often listen',
      'They meet ___ Saturdays | on | on / in / at',
      'I ___ (never) go to bed before eleven | never go | go never / never go',
      'He does sport ___ times a week | three | three / third',
      'I ___ (usually) relax in the evening | usually relax | relax usually / usually relax'
    ],
    say: [
      { ru: 'я всегда слушаю музыку', en: 'I always listen to music' },
      { ru: 'я хожу в зал два раза в неделю', en: 'I go to the gym twice a week' },
      { ru: 'я никогда не пою', en: 'I never sing' },
      { ru: 'как часто ты играешь в футбол?', en: 'How often do you play football?' },
      { ru: 'она иногда рисует', en: 'She sometimes draws' },
      { ru: 'обычно я встаю в семь', en: 'I usually get up at seven' }
    ]
  },

  /* ==================== СПЕЦИАЛЬНЫЕ ВОПРОСЫ ==================== */
  {
    id: 'g-wh',
    title: 'Wh- questions',
    sub: 'what · where · when · why · how',
    formula: '<b>Where</b> do you live?',
    table: {
      cols: ['Word', 'Что спрашиваем', 'Пример'],
      rows: [
        ['What', 'что', '<b>What</b> do you do?'],
        ['Where', 'где, куда', '<b>Where</b> do you live?'],
        ['When', 'когда', '<b>When</b> do you get up?'],
        ['Who', 'кто', '<b>Who</b> is your best friend?'],
        ['Why', 'почему', '<b>Why</b> do you like it?'],
        ['How', 'как', '<b>How</b> do you go to school?'],
        ['How often', 'как часто', '<b>How often</b> do you play?'],
        ['How many', 'сколько (можно сосчитать)', '<b>How many</b> books do you read?'],
        ['How much', 'сколько (нельзя сосчитать)', '<b>How much</b> time do you have?']
      ],
      note: 'Порядок всегда один: <b>вопросительное слово → помощник → кто → глагол</b>.'
    },
    table2: {
      cols: ['Время', 'Схема', 'Пример'],
      rows: [
        ['Present Simple', 'Wh + <b>do/does</b> + кто + глагол', '<b>Where do</b> you live?'],
        ['Present Continuous', 'Wh + <b>am/is/are</b> + кто + V-ing', '<b>What are</b> you doing?'],
        ['Past Simple', 'Wh + <b>did</b> + кто + глагол', '<b>Where did</b> you go?'],
        ['to be', 'Wh + <b>am/is/are</b> + кто', '<b>Where is</b> your bag?']
      ],
      note: 'После <b>do / does / did</b> глагол всегда в начальной форме: Where <b>did</b> you <b>go</b>? (не went). Если <b>Who</b> — это сам подлежащее, помощник не нужен: <b>Who lives</b> here?'
    },
    rule: 'Wh-слово ставим первым, дальше обычный вопрос: помощник, кто, глагол.',
    bad: 'Where you live? · Where did you went?',
    ok: 'Where do you live? · Where did you go?',
    examples: [
      { en: 'What do you do at the weekend?', ru: 'что ты делаешь на выходных?' },
      { en: 'Where are you now?', ru: 'где ты сейчас?' },
      { en: 'When did you get home?', ru: 'когда ты пришёл домой?' },
      { en: 'How often do you play football?', ru: 'как часто ты играешь в футбол?' }
    ],
    drill: [
      '___ do you live? | Where | Where / What / When',
      '___ is your name? | What | What / Who / How',
      '___ do you get up? | When | When / Where / Why',
      '___ do you like this song? | Why | Why / What / How',
      '___ do you go to school? | How | How / What / Where',
      '___ often do you play football? | How | How / What / When',
      '___ many brothers do you have? | How | How / What / Who',
      '___ is your best friend? | Who | Who / What / Where',
      'Where ___ you live? | do | do / are / did',
      'What ___ you doing now? | are | do / are / did',
      'Where ___ you go yesterday? | did | do / did / were',
      'Where ___ your bag? | is | is / does / do',
      'What ___ he do every day? | does | do / does / is',
      'Where did you ___ last summer? | go | go / went / gone',
      'What did you ___ yesterday? | do | do / did / done',
      'When ___ the lesson start? | does | does / is / do',
      'Who ___ here? | lives | lives / does live / do live',
      'How much time ___ you have? | do | do / are / does',
      'What ___ your favourite film? | is | is / does / do',
      'Why ___ she late? | is | is / does / do',
      'How ___ are you? | old | old / much / many',
      'Where ___ they going? | are | are / do / is',
      'What music ___ you listen to? | do | do / are / does',
      'When ___ you born? | were | were / did / was',
      'How many videos ___ you watch yesterday? | did | did / do / were',
      'Why ___ you like getting up early? | don\'t | don\'t / doesn\'t / not',
      'Where ___ your brother study? | does | does / do / is',
      'What ___ happening? | is | is / does / are',
      'How often ___ he go to the gym? | does | does / do / is',
      'Who ___ you talking to? | are | are / do / does',
      'What time ___ you finish school? | do | do / are / did',
      'Where ___ you at six yesterday? | were | were / did / are'
    ],
    say: [
      { ru: 'где ты живёшь?', en: 'Where do you live?' },
      { ru: 'что ты делаешь сейчас?', en: 'What are you doing now?' },
      { ru: 'когда ты встаёшь?', en: 'When do you get up?' },
      { ru: 'почему тебе это нравится?', en: 'Why do you like it?' },
      { ru: 'куда ты ходил вчера?', en: 'Where did you go yesterday?' },
      { ru: 'как часто ты играешь в футбол?', en: 'How often do you play football?' }
    ]
  },

  /* ==================== АРТИКЛИ ==================== */
  {
    id: 'g-art',
    title: 'Articles: a · an · the',
    sub: 'три вопроса — и артикль найден',
    formula: 'She is <b>a</b> singer · <b>The</b> song is new · I love <b>music</b>',
    table: {
      cols: ['Спроси себя', 'Если да', 'Артикль'],
      w: ['40%', '40%', '20%'],
      rows: [
        ['1. Можно посчитать?', 'нет: music, money, love', '<b>—</b>'],
        ['2. Знает, какой именно?', 'да: уже говорили', '<b>the</b>'],
        ['3. Один из многих?', 'да: называем впервые', '<b>a / an</b>']
      ],
      note: 'Идём сверху вниз и останавливаемся на первом «да». <b>the</b> — если уже говорили, если единственный (the sun) или если уточнили какой (the song <b>you sent me</b>). <b>an</b> — перед звуком гласного: an actor, an hour. <b>a</b> — перед согласным: a university (звучит «ю»).'
    },
    table2: {
      cols: ['Тема', 'a / an', 'the', '—'],
      w: ['28%', '24%', '26%', '22%'],
      rows: [
        ['Музыка', '<b>a</b> singer', '<b>the</b> new album', 'music'],
        ['Мода', '<b>a</b> hoodie', '<b>the</b> black jacket', 'clothes'],
        ['Шоу-биз', '<b>an</b> actor', '<b>the</b> Grammys', 'Netflix'],
        ['Люди', '<b>a</b> fan', '<b>The</b> Beatles', 'Billie Eilish']
      ],
      note: 'Одно и то же слово меняет артикль: <b>a</b> song (какая-то песня) → <b>the</b> song (та самая) → <b>—</b> songs (песни вообще).'
    },
    table3: {
      cols: ['Всегда <b>the</b>', 'Всегда без артикля'],
      w: ['50%', '50%'],
      rows: [
        ['<b>the</b> best song, <b>the</b> first video', 'имена: Zara, Spotify, Milan'],
        ['<b>the</b> guitar, <b>the</b> piano', 'спорт: football, tennis'],
        ['<b>the</b> internet, <b>the</b> sun', 'еда: breakfast, pizza'],
        ['<b>the</b> Beatles, <b>the</b> Rolling Stones', 'языки: English, maths'],
        ['<b>the</b> same, <b>the</b> only', 'go to school, go home, in bed']
      ],
      note: 'Группы во множественном числе — с <b>the</b>: the Beatles. Один человек — без: Billie Eilish, Zendaya.'
    },
    rule: 'Три вопроса по порядку. Нельзя посчитать — ничего. Он знает, какой именно — the. Просто один из многих — a/an. Останавливайся на первом «да».',
    bad: 'I want to be actor. I love the music.',
    ok: 'I want to be an actor. I love music.',
    examples: [
      { en: 'She is a singer', ru: 'она певица — одна из многих' },
      { en: 'The singer we saw was amazing', ru: 'та самая певица, которую видели' },
      { en: 'I love music', ru: 'музыку вообще — не посчитать' },
      { en: 'He plays the guitar', ru: 'инструменты всегда с the' }
    ],
    drill: [
      'She is ___ singer. | a | a / an / the',
      'I want to be ___ actor. | an | a / an / the',
      'I love ___ music. | — | a / the / —',
      'He plays ___ guitar every day. | the | a / the / —',
      '___ Beatles are a famous band. | The | A / The / —',
      'Billie Eilish is ___ pop star. | a | a / an / the',
      'This is ___ best song on the album. | the | a / the / —',
      'She wears ___ vintage clothes. | — | a / the / —',
      'I bought ___ hoodie yesterday. | a | a / an / the',
      '___ hoodie you gave me is my favourite. | The | A / The / —',
      'He is ___ influencer from Milan. | an | a / an / the',
      'I watch ___ Netflix every evening. | — | a / the / —',
      '___ Grammys are on TV tonight. | The | A / The / —',
      'My sister wants to be ___ designer. | a | a / an / the',
      'Do you like ___ fashion? | — | a / the / —',
      'This is ___ first video on her channel. | the | a / the / —',
      'I saw ___ concert last week. | a | a / an / the',
      '___ concert was amazing! | The | A / The / —',
      'She speaks ___ English very well. | — | a / the / —',
      'He plays ___ football after school. | — | a / the / —',
      'I found this on ___ internet. | the | a / the / —',
      'Zendaya is ___ actress. | an | a / an / the',
      'We had ___ breakfast at eight. | — | a / the / —',
      'Can I have ___ apple, please? | an | a / an / the',
      'She is ___ only girl in the band. | the | a / the / —',
      'My brother goes to ___ school by bus. | — | a / the / —',
      'This is ___ hour of good music. | an | a / an / the',
      'He studies at ___ university in London. | a | a / an / the',
      'I am ___ big fan of The Weeknd. | a | a / an / the',
      'Turn on ___ radio, please. | the | a / the / —',
      'She bought ___ new phone and ___ case. | a | a / an / the',
      'I love ___ songs from the nineties. | the | a / the / —',
      'He wants ___ job in showbiz. | a | a / an / the',
      'Look at ___ sun — it is so bright today. | the | a / the / —',
      '___ Rolling Stones are still on tour. | The | A / The / —',
      'Do you play ___ piano? | the | a / the / —'
    ],
    say: [
      { ru: 'она певица', en: 'She is a singer' },
      { ru: 'я люблю музыку', en: 'I love music' },
      { ru: 'он играет на гитаре', en: 'He plays the guitar' },
      { ru: 'я хочу быть актёром', en: 'I want to be an actor' },
      { ru: 'это лучшая песня на альбоме', en: 'This is the best song on the album' },
      { ru: 'я большой фанат The Weeknd', en: 'I am a big fan of The Weeknd' }
    ]
  }

];
