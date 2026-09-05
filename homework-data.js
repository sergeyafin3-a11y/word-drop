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
      { en: 'Now they are at gate 12. Zhenya is texting his friends and he is not listening.',
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
      note: 'Не учи слова по отдельности — учи фразы целиком. ' +
            'Нажми 🔊 и скажи каждую три раза: медленно, обычно, быстро. ' +
            'Так фраза ложится на язык и вылетает сама.',
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
      note: 'Теперь про себя. Отвечай вслух полными предложениями. ' +
            'Ошибки не важны — важно не молчать.',
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
      note: 'Один и тот же рассказ три раза. С каждым разом слов меньше, ' +
            'а говоришь быстрее — так появляется беглость. Никто не слушает, говори стене.',
      items: [
        'Раз. Смотри в текст. Расскажи историю в 8 предложениях.',
        'Два. Закрой текст. Расскажи ещё раз, чуть быстрее.',
        'Три. Только 5 предложений, без текста, как можно быстрее.'
      ],
      use: 'Используй связки и нажимай на них, когда сказал.'
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
    ]
  }
];
