/* ============================================================
   ДОМАШКА. Одна домашка = одна тема. Блоки внутри — все необязательные:

     story    — короткий текст абзацами с переводом
     find     — слова, которые ученик ищет в тексте сам; cat — тема слова
     facts    — вопросы на понимание текста, ответ открывается по галочке
     chunks   — готовые фразы с озвучкой
     tenses   — табличка-подсказка перед упражнением на грамматику
     gaps     — пропуски: { s:'... ___ ...', a:'ответ' }
     mine     — вопросы про себя вслух
     linkers  — связки для пересказа
     retell   — пересказ
     questions— вопросы для обсуждения на уроке
     check    — Lesson check, разминка в начале урока
     mergeFrom— ключ старой части: её отметки один раз переносятся сюда

   Отметки ученика привязаны к ТЕКСТУ задания, а не к номеру: задания можно
   сокращать и переставлять, отметки не съезжают.
   ============================================================ */

window.HOMEWORK = [
  {
    id: 'hw-travel-airport',          // id не менять: к нему привязан прогресс
    topic: 'Travel',
    group: 'Travel',
    title: 'Travel: the whole trip',
    sub: 'Аэропорт → отель → дорога → город · 25 минут',
    emoji: '✈️',
    current: true,
    mergeFrom: 'hw-travel-city',      // отметки прежней части 2 переносятся сюда

    storyTitle: 'From the Airport to Sunny Bay',
    findTopic: 'Аэропорт, отель, город и дорога',

    story: [
      { en: 'Last Monday the Kovalev family flew to Spain. At the airport Ivan looked for the check-in desk, and Olga held five passports in her hand.',
        ru: 'В прошлый понедельник семья Ковалёвых полетела в Испанию. В аэропорту Иван искал стойку регистрации, а Ольга держала в руке пять паспортов.' },
      { en: 'At the gate the screen said DELAYED. “How long is the delay?” Ivan asked. They waited two hours, and Valentina ate all her cookies.',
        ru: 'У выхода на посадку на табло было написано «ЗАДЕРЖАН». «Надолго задержка?» — спросил Иван. Они ждали два часа, и Валентина съела всё своё печенье.' },
      { en: 'The plane landed at eight in the evening. At baggage claim four suitcases arrived, but the fifth one was still in Moscow.',
        ru: 'Самолёт приземлился в восемь вечера. На выдаче багажа приехали четыре чемодана, а пятый остался в Москве.' },
      { en: 'At the hotel Olga said at reception: “Good evening. I have a reservation under Kovalev.” The receptionist gave her three key cards.',
        ru: 'В отеле Ольга сказала на ресепшене: «Добрый вечер. У меня бронь на фамилию Ковалёв». Администратор дал ей три ключ-карты.' },
      { en: '“Your rooms are on the third floor. Breakfast is included,” he said. Ivan’s key card didn’t work, and he came back to reception two times.',
        ru: '«Ваши номера на третьем этаже. Завтрак включён», — сказал он. Ключ-карта Ивана не сработала, и он дважды возвращался на ресепшен.' },
      { en: 'The next morning the family wanted to see the city. Zhenya took a map at reception, but the map was in Spanish.',
        ru: 'На следующее утро семья захотела посмотреть город. Женя взяла карту на ресепшене, но карта была на испанском.' },
      { en: 'Olga asked a woman at the bus stop: “Excuse me, how do we get to the museum?”',
        ru: 'Ольга спросила женщину на автобусной остановке: «Извините, как нам пройти к музею?»' },
      { en: '“Go straight, then turn left. The museum is opposite the market,” the woman said. “It is ten minutes on foot.”',
        ru: '«Идите прямо, потом поверните налево. Музей напротив рынка», — сказала женщина. — «Это десять минут пешком».' },
      { en: 'Now the family is walking in the old city. Zhenya is taking photos of the market, and Valentina is buying oranges. Tomorrow they will visit the beach.',
        ru: 'Сейчас семья гуляет по старому городу. Женя фотографирует рынок, а Валентина покупает апельсины. Завтра они поедут на пляж.' }
    ],

    /* cat — тема, по которой слово ищется: под текстом видно, сколько найдено в каждой */
    find: [
      { en: 'check-in desk', ru: 'стойка регистрации', cat: 'Airport' },
      { en: 'gate', ru: 'выход на посадку', cat: 'Airport' },
      { en: 'baggage claim', ru: 'выдача багажа', cat: 'Airport' },

      { en: 'reservation', ru: 'бронь', cat: 'Hotel' },
      { en: 'key card', ru: 'ключ-карта', cat: 'Hotel' },
      { en: 'floor', ru: 'этаж', cat: 'Hotel' },

      { en: 'bus stop', ru: 'автобусная остановка', cat: 'City' },
      { en: 'museum', ru: 'музей', cat: 'City' },
      { en: 'market', ru: 'рынок', cat: 'City' },

      { en: 'go straight', ru: 'идти прямо', cat: 'Directions' },
      { en: 'turn left', ru: 'повернуть налево', cat: 'Directions' },
      { en: 'opposite', ru: 'напротив', cat: 'Directions' }
    ],

    facts: {
      note: 'Ответь на вопросы по тексту вслух полным предложением. Потом нажми галочку — ' +
            'появится правильный ответ, сравни со своим.',
      items: [
        { q: 'Where did the family fly, and when?', a: 'They flew to Spain last Monday.' },
        { q: 'What happened to the fifth suitcase?', a: 'It was still in Moscow.' },
        { q: 'Which floor are their rooms on?', a: 'They are on the third floor.' },
        { q: 'Where is the museum?', a: 'It is opposite the market. Go straight, then turn left.' },
        { q: 'What will the family do tomorrow?', a: 'They will visit the beach.' }
      ]
    },

    chunks: {
      note: 'Это готовые фразы для отеля и города. Нажми 🔊, послушай и повтори вслух три раза. ' +
            'Отметь фразу галочкой, когда сможешь сказать её не подглядывая.',
      items: [
        { en: 'I have a reservation under Kovalev.', ru: 'у меня бронь на фамилию Ковалёв' },
        { en: 'Is breakfast included?', ru: 'завтрак включён?' },
        { en: 'My key card doesn’t work.', ru: 'моя ключ-карта не работает' },
        { en: 'Excuse me, how do I get to the beach?', ru: 'извините, как пройти к пляжу?' },
        { en: 'Go straight and turn left at the corner.', ru: 'идите прямо и на углу поверните налево' },
        { en: 'What do you recommend?', ru: 'что вы посоветуете?' }
      ]
    },

    tenses: {
      note: 'Четыре времени, которые нужны в этой истории. Посмотри табличку, ' +
            'а потом выполняй упражнение под ней.',
      rows: [
        { t: 'Present Simple', form: 'V / V-s', when: 'всегда, обычно, каждый день',
          ex: 'Olga always checks the passports.' },
        { t: 'Present Continuous', form: 'am / is / are + V-ing', when: 'прямо сейчас, в эту минуту',
          ex: 'Zhenya is taking photos now.' },
        { t: 'Past Simple', form: 'V2 (flew, landed)', when: 'вчера, в прошлый понедельник',
          ex: 'They flew to Spain last Monday.' },
        { t: 'Future Simple', form: 'will + V', when: 'завтра, планы на будущее',
          ex: 'Tomorrow they will visit the beach.' }
      ]
    },

    gapsNote: 'Поставь глагол из скобок в нужное время. Ориентируйся на слова-подсказки ' +
              'в предложении: always, now, last Monday, tomorrow. Нажми Check и переведи ' +
              'каждое предложение вслух.',

    gaps: [
      { s: 'Last Monday the family ___ (fly) to Spain.', a: 'flew' },
      { s: 'The plane ___ (land) at eight in the evening.', a: 'landed' },
      { s: 'Olga always ___ (check) the passports twice.', a: 'checks' },
      { s: 'Look! Zhenya ___ (take) photos of the market.', a: 'is taking' },
      { s: 'The fifth suitcase ___ (be) still in Moscow.', a: 'was' },
      { s: 'Tomorrow they ___ (visit) the beach.', a: 'will visit' }
    ],

    questions: [
      'Where did the Kovalevs fly, and when?',
      'What happened at the airport?',
      'What was the problem with the fifth suitcase?',
      'How did they find the museum?',
      'What will the family do tomorrow?'
    ],

    check: {
      rounds: [
        {
          title: 'What’s the word?',
          note: 'Прочитай описание и назови слово по-английски. Подсказок нет.',
          items: [
            { q: 'You go here first at the airport to give your suitcase.', a: 'check-in desk', w: 'a check-in desk' },
            { q: 'You take your suitcase here after the flight.', a: 'baggage claim', w: 'baggage claim' },
            { q: 'A plastic card that opens your hotel room.', a: 'key card', w: 'a key card' },
            { q: 'You wait here for the bus.', a: 'bus stop', w: 'a bus stop' }
          ]
        },
        {
          title: 'Say it in English',
          note: 'Скажи предложение по-английски. Этих предложений не было в тексте — собери их из выученных слов.',
          items: [
            { q: 'У меня бронь на фамилию Ковалёв.', a: 'I have a reservation under Kovalev.', w: 'a reservation' },
            { q: 'Наши номера на третьем этаже.', a: 'Our rooms are on the third floor.', w: 'a floor' },
            { q: 'Идите прямо и поверните налево. Музей напротив рынка.', a: 'Go straight and turn left. The museum is opposite the market.', w: 'opposite' }
          ]
        },
        {
          title: 'What do you say?',
          open: true,
          note: 'Представь, что ты в этой ситуации. Что ты скажешь? Правильных вариантов может быть несколько.',
          items: [
            { q: 'Your flight is delayed and you do not know for how long.', a: 'Excuse me, how long is the delay?' },
            { q: 'You are in the city centre and you need the museum.', a: 'Excuse me, how do I get to the museum? Is it far from here?' }
          ]
        },
        {
          title: 'Tell the story',
          open: true,
          note: 'Расскажи историю целиком: аэропорт → отель → город. Минимум 6 предложений, ' +
                'используй слова с карточки.',
          items: [
            { q: 'From the airport to the museum: what happened to the Kovalevs?',
              use: ['check-in desk', 'delayed', 'baggage claim', 'reservation', 'floor', 'turn left'],
              a: 'Last Monday the Kovalevs flew to Spain. At the airport they looked for the check-in desk. The plane was delayed, and they waited two hours at the gate. At baggage claim one suitcase didn’t arrive. At the hotel Olga had a reservation, and their rooms were on the third floor. The next morning they went straight and turned left, and they found the museum opposite the market.' }
          ]
        },
        {
          title: 'One minute about you',
          open: true,
          timer: 60,
          note: 'Нажми Start и говори одну минуту без остановки. Используй не меньше пяти слов из темы.',
          items: [
            { q: 'Your last trip: the airport, the hotel and the city. What do you remember?' }
          ]
        }
      ]
    }
  }
];
