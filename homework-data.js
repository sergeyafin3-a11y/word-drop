/* ============================================================
   ДОМАШКА. Одна домашка = одна тема. Без деления по дням.

   Блоки на экране, все необязательные:
     story    — текст абзацами с переводом
     find     — слова, которые ученик ищет прямо в тексте
     gaps     — предложения с пропуском: { s:'... ___ ...', a:'ответ' }
     linkers  — связки для рассказа
     speaking — устное задание в конце
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

    speaking: {
      title: 'Retell the story out loud',
      text: 'Tell the story in 8 sentences. Nobody is listening — say it to the wall. ' +
            'Use every linker at least once and tap it when you have used it. ' +
            'Start like this: First, the Kovalev family is at the airport…'
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
