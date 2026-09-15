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
    id: 'hw-travel-airport',          // id не менять: к нему привязан прогресс части 1
    topic: 'Travel',
    group: 'Travel',
    title: 'Travel: Airport, Hotel & City',
    sub: 'Part 1 · Airport · Part 2 · Hotel & City',
    emoji: '✈️',
    current: true,

    /* Домашка из нескольких частей. Часть 1 — поля прямо здесь (story, find и т.д.),
       следующие части — в массиве more, у каждой свой key для прогресса. */
    partTitle: 'Part 1 · Airport',
    storyTitle: 'Five Suitcases and One Gate',
    findTopic: 'Сборы в поездку и аэропорт',
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

        /* разделы урока, которые выделены цветом внутри урока */
        lessonTasks: {
          note: 'Открой урок Travel, главу 2 «Hotel & City». Разделы Hotel English и ' +
                'Grammar: What happened yesterday? выделены цветом. Выполни их первыми.',
          items: [
            { t: 'Hotel English: выучи 6 слов и выражений, у каждой фразы нажми 🔊 и повтори вслух.',
              btn: 'Open Hotel English', go: { lesson: 'travel', part: 'Hotel English' } },
            { t: 'Grammar: What happened yesterday? Вставь глаголы в Past Simple и нажми Check.',
              btn: 'Open Grammar', go: { lesson: 'travel', part: 'Grammar: What happened yesterday' } }
          ]
        },

        story: [
          { en: 'Yesterday the Kovalev family arrived at Hotel Lemon in Sunny Bay at 8 p.m. They took a taxi from the station.',
            ru: 'Вчера семья Ковалёвых приехала в отель «Лимон» в Санни-Бэй в 8 вечера. От вокзала они взяли такси.' },
          { en: 'Olga went to reception. “Good evening. I have a reservation under Kovalev,” she said.',
            ru: 'Ольга подошла к стойке администратора. «Добрый вечер. У меня бронь на фамилию Ковалёв», — сказала она.' },
          { en: 'The receptionist gave her two key cards. “Your rooms are on the third floor. The lift is on the left.”',
            ru: 'Администратор дал ей две ключ-карты. «Ваши номера на третьем этаже. Лифт слева».' },
          { en: '“Is breakfast included?” Ivan asked. “Yes, breakfast is from 7 to 10,” the receptionist answered.',
            ru: '«Завтрак включён?» — спросил Иван. «Да, завтрак с 7 до 10», — ответил администратор.' },
          { en: 'But Ivan’s key card didn’t work. He tried three times. Nothing happened.',
            ru: 'Но ключ-карта Ивана не сработала. Он попробовал три раза. Ничего не произошло.' },
          { en: 'Zhenya lost her room number, so she asked the receptionist again.',
            ru: 'Женя забыла номер своей комнаты, поэтому снова спросила администратора.' },
          { en: 'In the room the air conditioning didn’t work, and there was only one towel. Valentina was not happy.',
            ru: 'В номере не работал кондиционер, и было только одно полотенце. Валентина была недовольна.' },
          { en: 'Yuri found the Wi-Fi password on the table and started a video call.',
            ru: 'Юрий нашёл на столе пароль от вайфая и начал видеозвонок.' },
          { en: 'The next morning the family went into the city. Olga had a map, but she couldn’t find the beach.',
            ru: 'На следующее утро семья пошла в город. У Ольги была карта, но она не могла найти пляж.' },
          { en: 'She asked a man at the bus stop: “Excuse me, how do I get to the beach? Is it far from here?”',
            ru: 'Она спросила мужчину на автобусной остановке: «Извините, как пройти к пляжу? Это далеко отсюда?»' },
          { en: '“It’s not far. Go straight, cross the street and turn left at the corner. The beach is opposite the museum,” he said.',
            ru: '«Недалеко. Идите прямо, перейдите улицу и на углу поверните налево. Пляж напротив музея», — сказал он.' },
          { en: 'Ivan wanted to take the bus. Valentina wanted to walk. They walked — and they got lost, of course.',
            ru: 'Иван хотел поехать на автобусе. Валентина хотела пешком. Они пошли пешком — и, конечно, заблудились.' },
          { en: 'They found a small café between the bank and the pharmacy. Yuri bought water at the supermarket next to it.',
            ru: 'Они нашли маленькое кафе между банком и аптекой. Юрий купил воду в супермаркете рядом.' },
          { en: '“What do you recommend?” Ivan asked the waiter. “The fish,” said the waiter. Ivan ordered pancakes again.',
            ru: '«Что вы посоветуете?» — спросил Иван официанта. «Рыбу», — сказал официант. Иван снова заказал блинчики.' }
        ],

        find: [
          { en: 'reception', ru: 'стойка администратора' },
          { en: 'receptionist', ru: 'администратор' },
          { en: 'reservation', ru: 'бронь' },
          { en: 'key card', ru: 'ключ-карта' },
          { en: 'floor', ru: 'этаж' },
          { en: 'lift', ru: 'лифт' },
          { en: 'included', ru: 'включено в стоимость' },
          { en: 'air conditioning', ru: 'кондиционер' },
          { en: 'towel', ru: 'полотенце' },
          { en: 'map', ru: 'карта' },
          { en: 'bus stop', ru: 'автобусная остановка' },
          { en: 'go straight', ru: 'идти прямо' },
          { en: 'turn left', ru: 'повернуть налево' },
          { en: 'opposite', ru: 'напротив' },
          { en: 'between', ru: 'между' },
          { en: 'next to', ru: 'рядом с' }
        ],

        chunks: {
          note: 'Это готовые фразы для отеля и города. Нажми 🔊, послушай и повтори вслух три раза. ' +
                'Отметь фразу галочкой, когда сможешь сказать её не подглядывая.',
          items: [
            { en: 'I have a reservation under Kovalev.', ru: 'у меня бронь на фамилию Ковалёв' },
            { en: 'Is breakfast included?', ru: 'завтрак включён?' },
            { en: 'What floor is my room on?', ru: 'на каком этаже мой номер?' },
            { en: 'My key card doesn’t work.', ru: 'моя ключ-карта не работает' },
            { en: 'Could I have another towel, please?', ru: 'можно ещё одно полотенце?' },
            { en: 'What is the Wi-Fi password?', ru: 'какой пароль от вайфая?' },
            { en: 'Excuse me, how do I get to the beach?', ru: 'извините, как пройти к пляжу?' },
            { en: 'Is it far from here?', ru: 'это далеко отсюда?' },
            { en: 'Go straight and turn left at the corner.', ru: 'идите прямо и на углу поверните налево' },
            { en: 'Which bus goes to the station?', ru: 'какой автобус идёт до вокзала?' },
            { en: 'Where can I buy a ticket?', ru: 'где можно купить билет?' },
            { en: 'What do you recommend?', ru: 'что вы посоветуете?' }
          ]
        },

        gaps: [
          { s: 'The family ___ at Hotel Lemon at 8 p.m.', a: 'arrived' },
          { s: 'They took a ___ from the station.', a: 'taxi' },
          { s: 'Olga went to ___ and said her name.', a: 'reception' },
          { s: 'Their rooms were on the third ___.', a: 'floor' },
          { s: 'Ivan’s key card ___ work.', a: 'didn’t' },
          { s: 'Zhenya ___ her room number.', a: 'lost' },
          { s: 'Olga had a ___, but she couldn’t find the beach.', a: 'map' },
          { s: 'She asked a man at the bus ___.', a: 'stop' },
          { s: 'The beach is ___ the museum.', a: 'opposite' },
          { s: 'The café was ___ the bank and the pharmacy.', a: 'between' }
        ],

        mine: {
          note: 'Ответь на вопросы о себе вслух, полными предложениями. ' +
                'Отвечай так, как получается: сейчас важнее сказать, чем сказать без ошибок.',
          items: [
            'Hotel or apartment? I prefer … because …',
            'What is important for you in a hotel room? Name three things.',
            'Something doesn’t work in your hotel room. What do you say at reception?',
            'Explain how to get from your home to the nearest shop. Use go straight, turn left / right, next to, opposite.',
            'How do you get to school: by bus, by metro, by taxi or on foot? Say three sentences.',
            'What did you do on the first day of your last trip? Say four sentences in Past Simple.'
          ]
        },

        linkers: [
          { en: 'First', ru: 'сначала' },
          { en: 'Then', ru: 'потом' },
          { en: 'After that', ru: 'после этого' },
          { en: 'The next morning', ru: 'на следующее утро' },
          { en: 'Finally', ru: 'наконец' },
          { en: 'but', ru: 'но' },
          { en: 'so', ru: 'поэтому' },
          { en: 'because', ru: 'потому что' }
        ],

        retell: {
          note: 'Перескажи историю три раза так, как указано ниже.',
          items: [
            'Первый раз: перескажи историю в 8 предложениях. Можно подглядывать.',
            'Второй раз: перескажи то же самое, не глядя в текст.',
            'Третий раз: расскажи историю от лица Ивана. Начни так: Yesterday we arrived at Hotel Lemon…'
          ],
          use: 'Используй связки из списка выше. Нажимай на связку, когда употребишь её в рассказе.'
        },

        questions: [
          'Where did the Kovalev family stay?',
          'How did they get from the station to the hotel?',
          'What floor were their rooms on?',
          'What problems did they have in the hotel?',
          'What did Yuri find on the table?',
          'Who did Olga ask for directions?',
          'Where is the beach?',
          'Why did they get lost?',
          'Where was the café?',
          'What did Ivan order? Why do you think so?'
        ],

        check: {
          rounds: [
            {
              title: 'What’s the word?',
              note: 'Прочитай описание и назови слово по-английски. Подсказок нет.',
              items: [
                { q: 'You go here when you arrive at a hotel and say your name.', a: 'reception', w: 'reception' },
                { q: 'The person who works at reception.', a: 'receptionist', w: 'a receptionist' },
                { q: 'You booked the room before you arrived.', a: 'reservation', w: 'a reservation' },
                { q: 'A plastic card that opens your hotel room.', a: 'key card', w: 'a key card' },
                { q: 'You take it when you do not want to use the stairs.', a: 'lift', w: 'a lift' },
                { q: 'You do not pay extra for it.', a: 'included', w: 'included' },
                { q: 'It shows the streets of a city.', a: 'map', w: 'a map' },
                { q: 'You wait here for the bus.', a: 'bus stop', w: 'a bus stop' }
              ]
            },
            {
              title: 'Say it in English',
              note: 'Скажи предложение по-английски. Этих предложений не было в тексте — собери их из выученных слов.',
              items: [
                { q: 'Мой номер на втором этаже.', a: 'My room is on the second floor.', w: 'a floor' },
                { q: 'Кондиционер не работает.', a: 'The air conditioning doesn’t work.', w: 'air conditioning' },
                { q: 'Как пройти к вокзалу?', a: 'How do I get to the station?', w: 'a station' },
                { q: 'Аптека рядом с банком.', a: 'The pharmacy is next to the bank.', w: 'next to' },
                { q: 'Идите прямо и поверните направо.', a: 'Go straight and turn right.', w: 'to go straight' },
                { q: 'Где можно купить билет на автобус?', a: 'Where can I buy a bus ticket?', w: 'a ticket' }
              ]
            },
            {
              title: 'What do you say?',
              open: true,
              note: 'Представь, что ты в отеле или на улице незнакомого города. Что ты скажешь? Правильных вариантов может быть несколько.',
              items: [
                { q: 'You arrive at the hotel. Your room is booked.', a: 'Good evening. I have a reservation under …' },
                { q: 'There is only one towel in your room.', a: 'Could I have another towel, please?' },
                { q: 'You need the beach, but you do not know the way.', a: 'Excuse me, how do I get to the beach? Is it far from here?' },
                { q: 'A tourist asks you where the pharmacy is. It is next to the bank.', a: 'Go straight and turn left. The pharmacy is next to the bank.' },
                { q: 'You are in a café and you do not know what to order.', a: 'What do you recommend?' }
              ]
            },
            {
              title: 'Tell the story',
              open: true,
              note: 'Это новая история про Сватов. Расскажи, что было дальше. Используй слова на карточке — минимум 5 предложений в Past Simple.',
              items: [
                { q: 'Valentina went to the supermarket alone and got lost. What happened next?',
                  use: ['map', 'bus stop', 'turn left', 'opposite'],
                  a: 'Valentina went to the supermarket alone. She didn’t have a map, so she got lost. She asked a man at the bus stop. He said: turn left, the hotel is opposite the museum. Finally she found the hotel.' },
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
