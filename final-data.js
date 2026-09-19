/* ============================================================
   FINAL TEST — контрольная в конце темы. Открывается во вкладке Lesson,
   проходится на уроке вместе с преподавателем, по карточкам.

   Раунд = одно задание: title, note (что делает ученик), items.
   Карточка: { q: 'вопрос', a: 'ответ', w: 'слово из Learn' }
     w — слово вернётся в повторение, если ученик его не вспомнил;
     open: true — ответ показывается как образец, вариантов может быть несколько;
     timer: 60 — на карточке появляется таймер.

   id не менять: к нему привязан результат проверки.
   ============================================================ */

window.FINALS = [
  {
    id: 'final-travel',
    title: 'Final Test',
    sub: 'Travel',
    emoji: '🏁',
    checkTitle: 'Final Test · Travel',

    check: {
      rounds: [
        {
          title: 'What’s the word?',
          note: 'Прочитай описание и назови слово по-английски. Подсказок нет.',
          items: [
            { q: 'You go here first at the airport to give your suitcase.', a: 'check-in desk', w: 'a check-in desk' },
            { q: 'You take your suitcase here after the flight.', a: 'baggage claim', w: 'baggage claim' },
            { q: 'A plastic card that opens your hotel room.', a: 'key card', w: 'a key card' },
            { q: 'You wait here for the bus.', a: 'bus stop', w: 'a bus stop' },
            { q: 'You buy fruit and vegetables here.', a: 'market', w: 'a market' }
          ]
        },
        {
          title: 'Word to picture',
          note: 'Назови слово по картинке. Одно слово или выражение.',
          items: [
            { q: '🧳', a: 'a suitcase', w: 'a suitcase' },
            { q: '🗺️', a: 'a map', w: 'a map' },
            { q: '🏛️', a: 'a museum', w: 'a museum' },
            { q: '💊', a: 'a pharmacy', w: 'a pharmacy' },
            { q: '🎫', a: 'a ticket', w: 'a ticket' }
          ]
        },
        {
          title: 'Say it in English',
          note: 'Скажи предложение по-английски целиком. Не переводи по словам — вспоминай готовую фразу.',
          items: [
            { q: 'У меня бронь на фамилию Ковалёв.', a: 'I have a reservation under Kovalev.', w: 'a reservation' },
            { q: 'Завтрак включён?', a: 'Is breakfast included?', w: 'included' },
            { q: 'Мой номер на третьем этаже.', a: 'My room is on the third floor.', w: 'a floor' },
            { q: 'Извините, как пройти к музею?', a: 'Excuse me, how do I get to the museum?' },
            { q: 'Идите прямо и поверните налево.', a: 'Go straight and turn left.', w: 'to go straight' },
            { q: 'Рейс задержали.', a: 'The flight is delayed.', w: 'delayed' }
          ]
        },
        {
          title: 'Finish the phrase',
          open: true,
          note: 'Я называю начало — договори выражение до конца и скажи с ним предложение.',
          items: [
            { q: 'book a …', a: 'book a hotel · book a room' },
            { q: 'check …', a: 'check in at the hotel · check out at 12' },
            { q: 'go …', a: 'go straight · go on a trip' },
            { q: 'catch …', a: 'catch the bus · catch a taxi' },
            { q: 'get …', a: 'get lost · get to the beach' }
          ]
        },
        {
          title: 'Present Simple',
          note: 'Поставь глагол из скобок в Present Simple и скажи предложение целиком. Помни про -s у he, she, it.',
          items: [
            { q: 'Olga always ___ (check) the passports twice.', a: 'Olga always checks the passports twice.' },
            { q: 'Breakfast ___ (start) at seven in this hotel.', a: 'Breakfast starts at seven in this hotel.' },
            { q: 'We usually ___ (take) a map at reception.', a: 'We usually take a map at reception.' },
            { q: 'The museum ___ (not open) on Monday.', a: 'The museum doesn’t open on Monday.' },
            { q: 'Ivan ___ (speak) English a little.', a: 'Ivan speaks English a little.' }
          ]
        },
        {
          title: 'Past Simple',
          note: 'Поставь глагол в Past Simple. Внутри есть неправильные глаголы.',
          items: [
            { q: 'Last Monday they ___ (fly) to Spain.', a: 'Last Monday they flew to Spain.' },
            { q: 'The plane ___ (land) at eight in the evening.', a: 'The plane landed at eight in the evening.' },
            { q: 'She ___ (ask) a woman at the bus stop.', a: 'She asked a woman at the bus stop.' },
            { q: 'They ___ (not find) the fifth suitcase.', a: 'They didn’t find the fifth suitcase.' },
            { q: 'We ___ (get) lost in the old city.', a: 'We got lost in the old city.' }
          ]
        },
        {
          title: 'Future Simple',
          note: 'Скажи предложение про будущее: will + глагол.',
          items: [
            { q: 'Tomorrow we ___ (visit) the museum.', a: 'Tomorrow we will visit the museum.' },
            { q: 'I ___ (call) the hotel tonight.', a: 'I will call the hotel tonight.' },
            { q: 'They ___ (not go) to the beach tomorrow.', a: 'They won’t go to the beach tomorrow.' },
            { q: 'I think you ___ (like) this city.', a: 'I think you will like this city.' }
          ]
        },
        {
          title: 'Wh- questions',
          note: 'Задай вопрос к этому предложению. Начни с Where, When, What или How.',
          items: [
            { q: 'They flew to Spain.', a: 'Where did they fly?' },
            { q: 'They arrived at eight in the evening.', a: 'When did they arrive?' },
            { q: 'She took a map at reception.', a: 'What did she take at reception?' },
            { q: 'They went to the museum on foot.', a: 'How did they go to the museum?' }
          ]
        },
        {
          title: 'Gerund and Infinitive',
          note: 'Закончи предложение: like, enjoy + глагол с -ing; want, need, plan + to + глагол.',
          items: [
            { q: 'I like ___ (travel) by plane.', a: 'I like travelling by plane.' },
            { q: 'They want ___ (visit) the old city.', a: 'They want to visit the old city.' },
            { q: 'Zhenya enjoys ___ (take) photos.', a: 'Zhenya enjoys taking photos.' },
            { q: 'We need ___ (book) a hotel.', a: 'We need to book a hotel.' }
          ]
        },
        {
          title: 'What is happening now?',
          open: true,
          note: 'Опиши, что происходит прямо сейчас: 3–4 предложения, Present Continuous — is / are + -ing.',
          items: [
            { q: '🏨 Гость стоит у стойки, администратор даёт ему ключ-карту, дети сидят на чемоданах.',
              a: 'A man is standing at reception. The receptionist is giving him a key card. Two children are sitting on the suitcases.' },
            { q: '🏙️ Семья идёт по старому городу, Женя фотографирует рынок, Валентина покупает апельсины.',
              a: 'The family is walking in the old city. Zhenya is taking photos of the market, and Valentina is buying oranges.' }
          ]
        },
        {
          title: 'True or false?',
          note: 'Текст: Last summer Ivan went to Sunny Bay. His hotel was opposite the market. ' +
                'Breakfast was included, but his key card didn’t work. On Sunday he took the bus to the beach ' +
                'and got lost. A woman at the bus stop helped him. — Скажи True или False. Неверное исправь.',
          items: [
            { q: 'Ivan went to Sunny Bay in winter.', a: 'False. He went there last summer.' },
            { q: 'His hotel was opposite the market.', a: 'True.' },
            { q: 'Breakfast was not included.', a: 'False. Breakfast was included.' },
            { q: 'His key card worked well.', a: 'False. His key card didn’t work.' },
            { q: 'A woman at the bus stop helped him.', a: 'True.' }
          ]
        },
        {
          title: 'One minute about you',
          open: true,
          timer: 60,
          note: 'Нажми Start и говори минуту без остановки. Используй не меньше пяти слов из темы.',
          items: [
            { q: 'Your trip: the airport, the hotel and the city. What happened and what will you do next time?' }
          ]
        }
      ]
    }
  }
];
