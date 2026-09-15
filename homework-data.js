/* ============================================================
   ДОМАШКА. Одна домашка = одна тема, внутри части.
   Часть 1 — поля самой домашки, следующие части — в массиве more.

   Блоки части (все необязательные):
     lessonTasks — задания в самом уроке (разделы там выделены цветом)
     story       — короткий текст абзацами с переводом
     find        — слова, которые ученик ищет в тексте сам
     chunks      — готовые фразы с озвучкой
     gaps        — пропуски: { s:'... ___ ...', a:'ответ' }
     mine        — вопросы про себя, отвечать вслух
     linkers     — связки для пересказа
     retell      — пересказ
     questions   — вопросы для обсуждения на уроке
     check       — Lesson check, разминка на проверку в начале урока

   Отметки ученика привязаны к ТЕКСТУ задания, а не к номеру: задания можно
   сокращать и переставлять. Поле was — номер, под которым задание стояло
   до сокращения; по нему старые отметки один раз переносятся на новое место.
   ============================================================ */

window.HOMEWORK = [
  {
    id: 'hw-travel-airport',          // id не менять: к нему привязан прогресс части 1
    topic: 'Travel',
    group: 'Travel',
    title: 'Travel: Airport, Hotel & City',
    sub: 'Part 1 · Airport · Part 2 · Hotel & City',
    emoji: '✈️',
    current: true,

    /* ======================= PART 1 · AIRPORT ======================= */
    partTitle: 'Part 1 · Airport',
    storyTitle: 'Five Suitcases and One Gate',
    findTopic: 'Сборы в поездку и аэропорт',

    story: [
      { en: 'The Kovalev family is at the airport. Ivan is looking for the check-in desk. He has a big suitcase.',
        ru: 'Семья Ковалёвых в аэропорту. Иван ищет стойку регистрации. У него большой чемодан.' },
      { en: 'Olga has her passport in her hand. She always checks every document twice.',
        ru: 'Ольга держит паспорт в руке. Она всегда проверяет каждый документ дважды.' },
      { en: 'At security Valentina takes out a big box of cookies. “It is for the plane,” she says.',
        ru: 'На досмотре Валентина достаёт большую коробку печенья. «Это в самолёт», — говорит она.' },
      { en: 'Now they are at the gate. The screen says: DELAYED. “How long is the delay?” Ivan asks.',
        ru: 'Теперь они у выхода на посадку. На табло написано: ЗАДЕРЖАН. «Надолго задержка?» — спрашивает Иван.' },
      { en: 'Valentina wants a window seat, but Yuri wants it too. Zhenya is texting her friends.',
        ru: 'Валентина хочет место у окна, но Юрий тоже его хочет. Женя переписывается с друзьями.' },
      { en: 'Finally the plane lands. At baggage claim four suitcases arrive. Where is the fifth one?',
        ru: 'Наконец самолёт приземляется. На выдаче багажа приезжают четыре чемодана. А где пятый?' }
    ],

    find: [
      { en: 'check-in desk', ru: 'стойка регистрации' },
      { en: 'suitcase', ru: 'чемодан' },
      { en: 'passport', ru: 'паспорт' },
      { en: 'gate', ru: 'выход на посадку' },
      { en: 'delayed', ru: 'задержан' },
      { en: 'baggage claim', ru: 'выдача багажа' }
    ],

    chunks: {
      note: 'Это готовые фразы, которые понадобятся в аэропорту. Нажми 🔊, послушай и повтори вслух три раза. ' +
            'Отметь фразу галочкой, когда сможешь сказать её не подглядывая.',
      items: [
        { en: 'Where is the check-in desk?', ru: 'где стойка регистрации?', was: 0 },
        { en: 'How long is the delay?', ru: 'надолго задержка?', was: 2 },
        { en: 'Could you help me, please?', ru: 'вы не могли бы мне помочь?', was: 5 }
      ]
    },

    gaps: [
      { s: 'Ivan is looking for the ___ desk.', a: 'check-in', was: 0 },
      { s: 'Olga has her ___ in her hand.', a: 'passport', was: 1 },
      { s: 'The screen says: ___.', a: 'delayed', was: 3 },
      { s: 'Zhenya is ___ her friends.', a: 'texting' },
      { s: 'Finally the plane ___.', a: 'lands', was: 6 }
    ],

    mine: {
      note: 'Ответь на вопросы о себе вслух, полными предложениями. ' +
            'Отвечай так, как получается: сейчас важнее сказать, чем сказать без ошибок.',
      items: [
        { t: 'Window seat or aisle seat? I prefer … because …', was: 1 },
        { t: 'Your flight is delayed for three hours. What do you do?', was: 3 },
        { t: 'You are Ivan. Your suitcase is missing. Say three sentences to the airport worker.', was: 4 }
      ]
    },

    linkers: [
      { en: 'First', ru: 'сначала', was: 0 },
      { en: 'Then', ru: 'потом', was: 1 },
      { en: 'Finally', ru: 'наконец', was: 4 },
      { en: 'because', ru: 'потому что', was: 7 }
    ],

    retell: {
      note: 'Перескажи историю два раза так, как указано ниже.',
      items: [
        { t: 'Первый раз: перескажи текст в 6 предложениях. Можно подглядывать.', was: 0 },
        { t: 'Второй раз: перескажи то же самое, не глядя в текст.', was: 1 }
      ],
      use: 'Используй связки из списка выше. Нажимай на связку, когда употребишь её в рассказе.'
    },

    questions: [
      'Where is the Kovalev family?',
      'What does Olga always do?',
      'What does Valentina take out at security?',
      'Why is everybody waiting at the gate?',
      'What do you think happened to the fifth suitcase?'
    ],

    check: {
      rounds: [
        {
          title: 'What’s the word?',
          note: 'Прочитай описание и назови слово по-английски. Подсказок нет.',
          items: [
            { q: 'You show your passport here and get your boarding pass.', a: 'check-in desk', w: 'a check-in desk' },
            { q: 'You wait here before you get on the plane.', a: 'gate', w: 'a gate' },
            { q: 'The flight leaves later than the plan.', a: 'delayed', w: 'delayed' },
            { q: 'After landing, you collect your suitcase here.', a: 'baggage claim', w: 'baggage claim' }
          ]
        },
        {
          title: 'Say it in English',
          note: 'Скажи предложение по-английски. Этих предложений не было в тексте — собери их из выученных слов.',
          items: [
            { q: 'Мой рейс задержан.', a: 'My flight is delayed.', w: 'delayed' },
            { q: 'Где выход на посадку номер пять?', a: 'Where is gate five?', w: 'a gate' },
            { q: 'Мой чемодан не приехал.', a: 'My suitcase is missing.', w: 'a suitcase' }
          ]
        },
        {
          title: 'What do you say?',
          open: true,
          note: 'Представь, что ты в аэропорту. Что ты скажешь? Правильных вариантов может быть несколько.',
          items: [
            { q: 'The screen says DELAYED. You want to know how long you have to wait.', a: 'Excuse me, how long is the delay?' },
            { q: 'Your suitcase is not at baggage claim.', a: 'My suitcase is missing. Could you help me, please?' }
          ]
        },
        {
          title: 'Tell the story',
          open: true,
          note: 'Это новая история про Сватов. Расскажи, что было дальше. Используй слова на карточке — минимум 5 предложений.',
          items: [
            { q: 'Valentina is at security. Her carry-on bag is very heavy: there are three jars of jam inside. What happens next?',
              use: ['security', 'carry-on bag', 'delay', 'gate'],
              a: 'Valentina is at security. Her carry-on bag is very heavy. The worker opens the bag and finds three jars of jam. Valentina is not happy. There is a delay, and the family runs to the gate.' }
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
    },

    more: [
      /* ======================= PART 2 · HOTEL & CITY =======================
         key — отдельный ключ прогресса части 2, прогресс части 1 не трогается. */
      {
        key: 'hw-travel-city',
        partTitle: 'Part 2 · Hotel & City',
        storyTitle: 'The Key Card Mystery',
        findTopic: 'Отель и город',
        current: true,

        lessonTasks: {
          note: 'Открой урок Travel, главу 2 «Hotel & City». Разделы Hotel English и ' +
                'Grammar: What happened yesterday? выделены цветом. Выполни их первыми.',
          items: [
            { t: 'Hotel English: выучи 6 слов и выражений, у каждой фразы нажми 🔊 и повтори вслух.',
              btn: 'Open Hotel English', go: { lesson: 'travel', part: 'Hotel English' }, was: 0 },
            { t: 'Grammar: What happened yesterday? Вставь глаголы в Past Simple и нажми Check.',
              btn: 'Open Grammar', go: { lesson: 'travel', part: 'Grammar: What happened yesterday' }, was: 1 }
          ]
        },

        story: [
          { en: 'Yesterday the Kovalev family arrived at Hotel Lemon at 8 p.m. Olga went to reception: “Good evening. I have a reservation under Kovalev.”',
            ru: 'Вчера семья Ковалёвых приехала в отель «Лимон» в 8 вечера. Ольга подошла к стойке администратора: «Добрый вечер. У меня бронь на фамилию Ковалёв».' },
          { en: 'The receptionist gave her the key cards. “Your rooms are on the third floor. Breakfast is included.”',
            ru: 'Администратор дал ей ключ-карты. «Ваши номера на третьем этаже. Завтрак включён».' },
          { en: 'But Ivan’s key card didn’t work, and in the room there was only one towel. Valentina was not happy.',
            ru: 'Но ключ-карта Ивана не сработала, а в номере было только одно полотенце. Валентина была недовольна.' },
          { en: 'The next morning the family went into the city. Olga had a map, but she couldn’t find the beach.',
            ru: 'На следующее утро семья пошла в город. У Ольги была карта, но она не могла найти пляж.' },
          { en: 'She asked a man at the bus stop: “Excuse me, how do I get to the beach?”',
            ru: 'Она спросила мужчину на автобусной остановке: «Извините, как пройти к пляжу?»' },
          { en: '“Go straight and turn left. The beach is opposite the museum,” he said. But they got lost, of course.',
            ru: '«Идите прямо и поверните налево. Пляж напротив музея», — сказал он. Но они, конечно, заблудились.' },
          { en: 'They found a small café next to the pharmacy. “What do you recommend?” Ivan asked. Then he ordered pancakes.',
            ru: 'Они нашли маленькое кафе рядом с аптекой. «Что вы посоветуете?» — спросил Иван. А потом заказал блинчики.' }
        ],

        find: [
          { en: 'reservation', ru: 'бронь' },
          { en: 'key card', ru: 'ключ-карта' },
          { en: 'floor', ru: 'этаж' },
          { en: 'included', ru: 'включено в стоимость' },
          { en: 'map', ru: 'карта' },
          { en: 'bus stop', ru: 'автобусная остановка' },
          { en: 'turn left', ru: 'повернуть налево' },
          { en: 'next to', ru: 'рядом с' }
        ],

        chunks: {
          note: 'Это готовые фразы для отеля и города. Нажми 🔊, послушай и повтори вслух три раза. ' +
                'Отметь фразу галочкой, когда сможешь сказать её не подглядывая.',
          items: [
            { en: 'I have a reservation under Kovalev.', ru: 'у меня бронь на фамилию Ковалёв', was: 0 },
            { en: 'Is breakfast included?', ru: 'завтрак включён?', was: 1 },
            { en: 'My key card doesn’t work.', ru: 'моя ключ-карта не работает', was: 3 },
            { en: 'Excuse me, how do I get to the beach?', ru: 'извините, как пройти к пляжу?', was: 6 },
            { en: 'Go straight and turn left at the corner.', ru: 'идите прямо и на углу поверните налево', was: 8 },
            { en: 'What do you recommend?', ru: 'что вы посоветуете?', was: 11 }
          ]
        },

        gaps: [
          { s: 'The family ___ at Hotel Lemon at 8 p.m.', a: 'arrived', was: 0 },
          { s: 'Their rooms were on the third ___.', a: 'floor', was: 3 },
          { s: 'Ivan’s key card ___ work.', a: 'didn’t', was: 4 },
          { s: 'She asked a man at the bus ___.', a: 'stop', was: 7 },
          { s: 'But they ___ lost, of course.', a: 'got' }
        ],

        mine: {
          note: 'Ответь на вопросы о себе вслух, полными предложениями. ' +
                'Отвечай так, как получается: сейчас важнее сказать, чем сказать без ошибок.',
          items: [
            { t: 'Something doesn’t work in your hotel room. What do you say at reception?', was: 2 },
            { t: 'Explain how to get from your home to the nearest shop. Use go straight, turn left / right, next to, opposite.', was: 3 },
            { t: 'What did you do on the first day of your last trip? Say four sentences in Past Simple.', was: 5 }
          ]
        },

        linkers: [
          { en: 'First', ru: 'сначала', was: 0 },
          { en: 'Then', ru: 'потом', was: 1 },
          { en: 'The next morning', ru: 'на следующее утро', was: 3 },
          { en: 'but', ru: 'но', was: 5 }
        ],

        retell: {
          note: 'Перескажи историю два раза так, как указано ниже.',
          items: [
            { t: 'Первый раз: перескажи историю в 7 предложениях. Можно подглядывать.', was: 0 },
            { t: 'Второй раз: расскажи историю от лица Ивана, не глядя в текст. Начни так: Yesterday we arrived at Hotel Lemon…', was: 2 }
          ],
          use: 'Используй связки из списка выше. Нажимай на связку, когда употребишь её в рассказе.'
        },

        questions: [
          'What problems did they have in the hotel?',
          'Who did Olga ask for directions?',
          'Where is the beach?',
          'Where was the café?',
          'What did Ivan order? Why do you think so?'
        ],

        check: {
          rounds: [
            {
              title: 'What’s the word?',
              note: 'Прочитай описание и назови слово по-английски. Подсказок нет.',
              items: [
                { q: 'You booked the room before you arrived.', a: 'reservation', w: 'a reservation' },
                { q: 'A plastic card that opens your hotel room.', a: 'key card', w: 'a key card' },
                { q: 'You do not pay extra for it.', a: 'included', w: 'included' },
                { q: 'You wait here for the bus.', a: 'bus stop', w: 'a bus stop' }
              ]
            },
            {
              title: 'Say it in English',
              note: 'Скажи предложение по-английски. Этих предложений не было в тексте — собери их из выученных слов.',
              items: [
                { q: 'Мой номер на втором этаже.', a: 'My room is on the second floor.', w: 'a floor' },
                { q: 'Аптека рядом с банком.', a: 'The pharmacy is next to the bank.', w: 'next to' },
                { q: 'Идите прямо и поверните направо.', a: 'Go straight and turn right.', w: 'to go straight' }
              ]
            },
            {
              title: 'What do you say?',
              open: true,
              note: 'Представь, что ты в отеле или на улице незнакомого города. Что ты скажешь? Правильных вариантов может быть несколько.',
              items: [
                { q: 'There is only one towel in your room.', a: 'Could I have another towel, please?' },
                { q: 'You need the beach, but you do not know the way.', a: 'Excuse me, how do I get to the beach? Is it far from here?' }
              ]
            },
            {
              title: 'Tell the story',
              open: true,
              note: 'Это новая история про Сватов. Расскажи, что было дальше. Используй слова на карточке — минимум 5 предложений в Past Simple.',
              items: [
                { q: 'At night Ivan’s key card didn’t work again. What did he do?',
                  use: ['reception', 'receptionist', 'lift', 'floor'],
                  a: 'At night Ivan’s key card didn’t work again. He took the lift to reception. The receptionist was asleep. Ivan waited ten minutes. Then the receptionist gave him a new key card, and Ivan went back to the third floor.' }
              ]
            },
            {
              title: 'One minute about you',
              open: true,
              timer: 60,
              note: 'Нажми Start и говори одну минуту без остановки. Используй не меньше пяти слов из темы.',
              items: [
                { q: 'Your perfect hotel and the city around it: what is in the room, and what is near the hotel?' }
              ]
            }
          ]
        }
      }
    ]
  }
];
