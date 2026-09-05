/* ============================================================
   ДОМАШКА. Одна домашка = одна тема, разбитая на дни.

   {
     id:    'hw-travel-airport',      // латиницей, потом не менять
     topic: 'Travel · Airport',       // по какой теме — видно на карточке
     title: 'Five Suitcases and One Gate',
     sub:   'Matchmakers at the airport',
     emoji: '✈️',
     due:   '4 days',
     set:   { type:'topic', title:'Travel', kind:'words' },  // какой набор открывать
                                                            // ищется по названию темы
     story: [ { en:'...', ru:'...' } ],                    // текст с переводом
     days:  [ { n:1, title:'...', tasks:[ {t:'...', go:{act:'flash'}} ] } ]
   }

   В задании можно поставить go: приложение само откроет нужную активность.
   act: flash · match · build · type · sprint · warmup · wheel · speed · revision · duel
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

    days: [
      {
        n: 1,
        title: 'Read and meet the words',
        tasks: [
          { t: 'Read the story twice. The second time read it out loud.' },
          { t: 'Tap the translation only for the words you really do not know.' },
          { t: 'Cards: 15 travel words', go: { act: 'flash' } },
          { t: 'Write down 5 words that were new for you.' }
        ]
      },
      {
        n: 2,
        title: 'Make the words yours',
        tasks: [
          { t: 'Match: travel words', go: { act: 'match' } },
          { t: 'Type it: write 10 words from memory', go: { act: 'type' } },
          { t: 'Answer the 10 questions about the story out loud.' },
          { t: 'Send the teacher a voice message with answers 1–5.' }
        ]
      },
      {
        n: 3,
        title: 'Say it in sentences',
        tasks: [
          { t: 'Build it: put the phrases in order', go: { act: 'build' } },
          { t: 'Speaking phrases: Cards', go: { kind: 'phrases', act: 'flash' } },
          { t: 'Retell the story in 8 sentences. Start: The Kovalevs are at the airport…' },
          { t: 'Use at least 6 travel words in your retelling.' }
        ]
      },
      {
        n: 4,
        title: 'You are at the airport',
        tasks: [
          { t: 'Sprint: beat your record', go: { act: 'sprint' } },
          { t: 'You are Zhenya. Your flight is delayed. Ask the airport 5 questions.' },
          { t: 'You lost your suitcase. Explain the problem in 4 sentences.' },
          { t: 'Send the teacher a voice message: your own airport story, 6–8 sentences.' }
        ]
      }
    ]
  }
];
