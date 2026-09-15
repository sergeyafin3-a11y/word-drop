/* ============================================================
   ДОМАШКА. Одна домашка = одна тема. Без деления по дням.

   Блоки на экране, все необязательные:
     story    — текст абзацами с переводом
     find     — слова, которые ученик ищет прямо в тексте
     gaps     — предложения с пропуском: { s:'... ___ ...', a:'ответ' }
     linkers  — связки для рассказа
     chunks   — готовые фразы с озвучкой
     mine     — вопросы про себя
     retell   — пересказ три раза
     questions— вопросы для обсуждения на уроке

   set — какой набор открывать по стрелке. Ищется ПО НАЗВАНИЮ темы:
   у тем из текстового блока id генерируется сам и вписать его нельзя.
   ============================================================ */

window.HOMEWORK = [
  /* ============================================================
     Домашка-задание по уроку: current: true — яркая карточка «задано сейчас».
     tasks — список заданий; go открывает нужное место:
       { lesson: 'travel', part: 'заголовок раздела' } — раздел урока во вкладке Topics
       { topic: 'название темы', act: 'flash' }       — активность в Learn
       { rule: 'g-past' }                             — правило в Grammar
     ============================================================ */
  {
    id: 'hw-travel-hotel',
    topic: 'Travel · Hotel',
    title: 'Hotel English and Past Simple',
    sub: 'Урок Travel · глава 2 · Hotel & City',
    emoji: '🏨',
    current: true,
    tasks: [
      { title: 'Vocabulary · Hotel English',
        t: 'Открой урок Travel, главу 2 «Hotel & City», раздел Hotel English. ' +
           'Выучи 6 слов и выражений: reservation, check in / check out, key card, included, ' +
           'air conditioning, available. Нажми 🔊 у каждой фразы и повтори её вслух.',
        btn: 'Open the lesson', go: { lesson: 'travel', part: 'Hotel English' } },
      { title: 'Vocabulary · practice',
        t: 'Открой в разделе Learn тему Travel · Hotel. Пройди Cards, затем Match. ' +
           'Слова, которые ты не вспомнил, приложение покажет ещё раз.',
        btn: 'Open Cards', go: { topic: 'Travel · Hotel', act: 'flash' } },
      { title: 'Grammar · What happened yesterday?',
        t: 'Открой урок Travel, главу 2, раздел Grammar: What happened yesterday? ' +
           'Вставь в шесть предложений глаголы в Past Simple и нажми Check. ' +
           'Затем перескажи эти предложения вслух как одну короткую историю и добавь две свои детали.',
        btn: 'Open the lesson', go: { lesson: 'travel', part: 'Grammar: What happened yesterday' } },
      { title: 'Grammar · Past Simple rule',
        t: 'Открой в разделе Grammar правило Past Simple. Посмотри таблицу и реши тест из 10 вопросов.',
        btn: 'Open the rule', go: { rule: 'g-past' } }
    ]
  },

  {
    id: 'hw-travel-airport',
    topic: 'Travel · Airport',
    title: 'Five Suitcases and One Gate',
    sub: 'Matchmakers at the airport · A1–A2',
    emoji: '✈️',
    due: '4 days',
    set: { type: 'topic', title: 'Travel', kind: 'words' },

    story: [
      { en: 'The Kovalev family is at the airport. Their flight to Rome is at three o’clock.',
        ru: 'Семья Ковалёвых в аэропорту. Их рейс в Рим в три часа.' },
      { en: 'Ivan is looking for the check-in desk. He has a big suitcase and a small carry-on bag.',
        ru: 'Иван ищет стойку регистрации. У него большой чемодан и маленькая ручная кладь.' },
      { en: 'Olga has her passport in her hand. She always checks every document twice.',
        ru: 'Ольга держит паспорт в руке. Она всегда проверяет каждый документ дважды.' },
      { en: '“Where is the check-in desk?” Ivan asks. “Right here,” Olga says. “I told you.”',
        ru: '«Где стойка регистрации?» — спрашивает Иван. «Вот здесь, — говорит Ольга. — Я же тебе говорила».' },
      { en: 'At security Yuri takes out his laptop. Valentina takes out her phone, her keys and a big box of cookies.',
        ru: 'На досмотре Юрий достаёт ноутбук. Валентина достаёт телефон, ключи и большую коробку печенья.' },
      { en: '“It is for the plane,” she says. Everybody is waiting.',
        ru: '«Это в самолёт», — говорит она. Все ждут.' },
      { en: 'Now they are at gate 12. Zhenya is texting her friends and she is not listening.',
        ru: 'Теперь они у выхода 12. Женя пишет друзьям и никого не слушает.' },
      { en: 'The screen says: DELAYED. “How long is the delay?” Ivan asks. “Two hours,” Olga says.',
        ru: 'На табло написано: ЗАДЕРЖАН. «Надолго задержка?» — спрашивает Иван. «На два часа», — говорит Ольга.' },
      { en: 'Valentina wants a window seat. Yuri wants an aisle seat. They are talking about it very loudly.',
        ru: 'Валентина хочет место у окна. Юрий хочет место у прохода. Они очень громко это обсуждают.' },
      { en: 'Finally the plane lands in Rome. At baggage claim the family waits and waits.',
        ru: 'Наконец самолёт приземляется в Риме. У выдачи багажа семья ждёт и ждёт.' },
      { en: 'Four suitcases arrive. Where is the fifth one?',
        ru: 'Приезжают четыре чемодана. А где пятый?' },
      { en: 'Ivan is looking at Valentina and her big box of cookies. “Valya,” he says slowly. “Where is your boarding pass?”',
        ru: 'Иван смотрит на Валентину и её большую коробку печенья. «Валя, — медленно говорит он. — А где твой посадочный талон?»' }
    ],

    /* 1. NOTICING — ученик сам находит слова в тексте, подсказок нет */
    find: [
      { en: 'check-in desk', ru: 'стойка регистрации' },
      { en: 'suitcase', ru: 'чемодан' },
      { en: 'carry-on bag', ru: 'ручная кладь' },
      { en: 'passport', ru: 'паспорт' },
      { en: 'security', ru: 'досмотр' },
      { en: 'gate', ru: 'выход на посадку' },
      { en: 'delayed', ru: 'задержан' },
      { en: 'delay', ru: 'задержка' },
      { en: 'window seat', ru: 'место у окна' },
      { en: 'aisle seat', ru: 'место у прохода' },
      { en: 'baggage claim', ru: 'выдача багажа' },
      { en: 'boarding pass', ru: 'посадочный талон' }
    ],

    /* 2. CHUNKS — учим не слова, а готовые фразы, которые он скажет в аэропорту */
    chunks: {
      note: 'Это готовые фразы, которые понадобятся в аэропорту. ' +
            'Нажми 🔊, послушай и повтори вслух три раза. ' +
            'Отметь фразу галочкой, когда сможешь сказать её не подглядывая.',
      items: [
        { en: 'Where is the check-in desk?', ru: 'где стойка регистрации?' },
        { en: 'Can I have a window seat, please?', ru: 'можно мне место у окна?' },
        { en: 'How long is the delay?', ru: 'надолго задержка?' },
        { en: 'I am looking for gate 12.', ru: 'я ищу выход 12' },
        { en: 'My bag is missing.', ru: 'моя сумка потерялась' },
        { en: 'Could you help me, please?', ru: 'вы не могли бы мне помочь?' }
      ]
    },

    /* 3. ТОЧНОСТЬ — вписал и сразу сказал предложение целиком вслух */
    gaps: [
      { s: 'Ivan is looking for the ___ desk.', a: 'check-in' },
      { s: 'Olga has her ___ in her hand.', a: 'passport' },
      { s: 'At ___ Yuri takes out his laptop.', a: 'security' },
      { s: 'The screen says: ___.', a: 'delayed' },
      { s: 'How long is the ___?', a: 'delay' },
      { s: 'Valentina wants a ___ seat.', a: 'window' },
      { s: 'The plane ___ in Rome.', a: 'lands' },
      { s: 'At ___ claim they wait and wait.', a: 'baggage' },
      { s: 'Where is your ___ pass?', a: 'boarding' },
      { s: 'He has a big ___ and a small carry-on bag.', a: 'suitcase' }
    ],

    /* 4. ПЕРСОНАЛИЗАЦИЯ — слово живёт, только когда сказано про себя */
    mine: {
      note: 'Ответь на вопросы о себе вслух, полными предложениями. ' +
            'Отвечай так, как получается: сейчас важнее сказать, чем сказать без ошибок.',
      items: [
        'Do you like airports? Say two sentences.',
        'Window seat or aisle seat? I prefer … because …',
        'What do you always take in your carry-on bag? Name three things.',
        'Your flight is delayed for three hours. What do you do?',
        'You are Ivan. Your suitcase is missing. Say three sentences to the airport worker.'
      ]
    },

    /* 5. БЕГЛОСТЬ — один и тот же рассказ три раза, каждый раз быстрее */
    linkers: [
      { en: 'First', ru: 'сначала' },
      { en: 'Then', ru: 'потом' },
      { en: 'After that', ru: 'после этого' },
      { en: 'At the same time', ru: 'в это же время' },
      { en: 'Finally', ru: 'наконец' },
      { en: 'but', ru: 'но' },
      { en: 'so', ru: 'поэтому' },
      { en: 'because', ru: 'потому что' }
    ],

    retell: {
      note: 'Перескажи историю три раза так, как указано ниже.',
      items: [
        'Первый раз: перескажи текст в 8 предложениях. Можно подглядывать.',
        'Второй раз: перескажи то же самое, не глядя в текст.',
        'Третий раз: перескажи коротко, в 5 предложениях.'
      ],
      use: 'Используй связки из списка выше. Нажимай на связку, когда употребишь её в рассказе.'
    },

    questions: [
      'Where is the Kovalev family?',
      'What time is their flight?',
      'What does Ivan have?',
      'What does Olga always do?',
      'What does Valentina take out at security?',
      'Why is everybody waiting at gate 12?',
      'How long is the delay?',
      'Who wants a window seat?',
      'How many suitcases arrive in Rome?',
      'What do you think happened to the fifth suitcase?'
    ],

    /* ============================================================
       LESSON CHECK — разминка в начале урока на проверку домашки.
       Задания новые, не повтор домашки. w — какое слово проверяет карточка:
       если ученик не вспомнил, слово вернётся в повторение (Learn).
       ============================================================ */
    check: {
      rounds: [
        {
          title: 'What’s the word?',
          note: 'Прочитай описание и назови слово по-английски. Подсказок нет.',
          items: [
            { q: 'You show your passport here and get your boarding pass.', a: 'check-in desk', w: 'a check-in desk' },
            { q: 'A small bag you take with you into the plane.', a: 'carry-on bag', w: 'a carry-on bag' },
            { q: 'They check your bag, and you walk through a scanner.', a: 'security', w: 'security' },
            { q: 'You wait here before you get on the plane.', a: 'gate', w: 'a gate' },
            { q: 'The flight leaves later than the plan.', a: 'delayed', w: 'delayed' },
            { q: 'After landing, you collect your suitcase here.', a: 'baggage claim', w: 'baggage claim' },
            { q: 'It has your name, your seat and your gate on it.', a: 'boarding pass', w: 'a boarding pass' },
            { q: 'A seat where you can stand up easily.', a: 'aisle seat', w: 'an aisle seat' }
          ]
        },
        {
          title: 'Say it in English',
          note: 'Скажи предложение по-английски. Этих предложений не было в тексте — собери их из выученных слов.',
          items: [
            { q: 'Мой рейс задержан.', a: 'My flight is delayed.', w: 'delayed' },
            { q: 'Где выход на посадку номер пять?', a: 'Where is gate five?', w: 'a gate' },
            { q: 'У меня только ручная кладь.', a: 'I only have a carry-on bag.', w: 'a carry-on bag' },
            { q: 'Можно мне место у прохода?', a: 'Can I have an aisle seat, please?', w: 'an aisle seat' },
            { q: 'Я не могу найти свой посадочный талон.', a: 'I can’t find my boarding pass.', w: 'a boarding pass' },
            { q: 'Мой чемодан не приехал.', a: 'My suitcase is missing.', w: 'a suitcase' }
          ]
        },
        {
          title: 'What do you say?',
          open: true,
          note: 'Представь, что ты в аэропорту. Что ты скажешь? Правильных вариантов может быть несколько.',
          items: [
            { q: 'You are at the check-in desk. You want to look out of the window during the flight.', a: 'Can I have a window seat, please?' },
            { q: 'The screen says DELAYED. You want to know how long you have to wait.', a: 'Excuse me, how long is the delay?' },
            { q: 'You are lost in the airport. You need gate 7.', a: 'Excuse me, could you help me, please? Where is gate 7?' },
            { q: 'Your suitcase is not at baggage claim.', a: 'My suitcase is missing. Could you help me, please?' },
            { q: 'The worker at security looks at your bag. You have a laptop inside.', a: 'I have a laptop in my bag. Do I need to take it out?' }
          ]
        },
        {
          title: 'Tell the story',
          open: true,
          note: 'Это новая история про Сватов. Расскажи, что было дальше. Используй слова на карточке — минимум 5 предложений.',
          items: [
            { q: 'Valentina is at security. Her carry-on bag is very heavy: there are three jars of jam inside. What happens next?',
              use: ['security', 'carry-on bag', 'delay', 'gate'],
              a: 'Valentina is at security. Her carry-on bag is very heavy. The worker opens the bag and finds three jars of jam. Valentina is not happy. There is a delay, and the family runs to the gate.' },
            { q: 'Zhenya is sleeping at gate 12. Everybody is on the plane — but not Zhenya. What happens?',
              use: ['gate', 'boarding pass', 'flight', 'finally'],
              a: 'Zhenya is sleeping at gate 12. Olga cannot find her. Ivan goes back to the gate. Zhenya has her boarding pass in her hand. Finally they get on the flight.' }
          ]
        },
        {
          title: 'One minute about you',
          open: true,
          timer: 60,
          note: 'Нажми Start и говори одну минуту без остановки. Используй не меньше пяти слов из темы.',
          items: [
            { q: 'Your last trip or your dream trip: where, how, with whom, what happened at the airport?' }
          ]
        }
      ]
    }
  }
];
