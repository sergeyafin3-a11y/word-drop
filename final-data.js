/* ============================================================
   FINAL TEST — контрольная в конце темы. Открывается во вкладке Lesson,
   проходится на уроке вместе с преподавателем, по карточкам.

   Раунд = одно задание: title, note (что делает ученик), items.
   Раунд-сопоставление вместо items: pairs: [{ ru: 'слово', en: 'предложение', w: 'слово из Learn' }] —
     два перемешанных столбца, ученик соединяет русское слово с английским предложением.
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
    intro: 'Airport, hotel and city — everything from the Travel lesson.',
    minutes: 30,

    check: {
      rounds: [
        {
          title: 'Match the words',
          note: 'Слева — слово по-русски, справа — предложения по-английски. Нажми на слово, ' +
                'потом на предложение, в котором оно есть. Соедини все пары.',
          pairs: [
            { ru: 'стойка регистрации', en: 'Where is the check-in desk?', w: 'a check-in desk' },
            { ru: 'выход на посадку', en: 'Our gate is number twelve.', w: 'a gate' },
            { ru: 'выдача багажа', en: 'We waited for our bags at baggage claim.', w: 'baggage claim' },
            { ru: 'ключ-карта', en: 'My key card doesn’t work.', w: 'a key card' },
            { ru: 'автобусная остановка', en: 'She is waiting at the bus stop.', w: 'a bus stop' },
            { ru: 'рынок', en: 'We bought fruit at the market.', w: 'a market' }
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
          title: 'Put the words in order',
          note: 'Слова перемешаны. Поставь их в правильном порядке и скажи предложение целиком. ' +
                'Порядок в английском: кто → что делает → что → где → когда.',
          items: [
            { q: 'is · the check-in desk · where ?', a: 'Where is the check-in desk?' },
            { q: 'we · to the museum · how · get · do ?', a: 'How do we get to the museum?' },
            { q: 'on the third floor · are · our rooms', a: 'Our rooms are on the third floor.' },
            { q: 'flew · last Monday · they · to Spain', a: 'They flew to Spain last Monday.' },
            { q: 'the beach · tomorrow · visit · we · will', a: 'We will visit the beach tomorrow.' }
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
          title: 'Role-play: at the hotel',
          open: true,
          note: 'Разыгрываем диалог: преподаватель — администратор, ты — гость. ' +
                'Отвечай полными фразами, не одним словом.',
          items: [
            { q: 'Ты приехал в отель. Заселись: назови бронь, спроси про завтрак и про этаж.',
              a: 'Good evening. I have a reservation under Ivanov. · Is breakfast included? · What floor is my room on?' },
            { q: 'В номере не работает ключ-карта, и нет полотенец. Реши вопрос на ресепшене.',
              a: 'Excuse me, my key card doesn’t work. · There are no towels in my room. · Could you help me, please?' }
          ]
        },
        {
          title: 'Explain the way',
          open: true,
          note: 'Объясни дорогу вслух. Нужны go straight, turn left / right, opposite, next to, ' +
                'it’s ten minutes on foot.',
          items: [
            { q: 'От отеля до музея: прямо, потом налево, музей напротив рынка.',
              a: 'Go straight, then turn left. The museum is opposite the market. It’s ten minutes on foot.' },
            { q: 'Объясни дорогу от своего дома до ближайшего магазина.',
              a: 'Go out and turn right. Go straight to the bus stop. The shop is next to the pharmacy.' }
          ]
        },
        {
          title: 'Ask me questions',
          open: true,
          note: 'Теперь вопросы задаёшь ты, я отвечаю. Спрашивай полными вопросами, ' +
                'начинай с Where, When, What, How.',
          items: [
            { q: 'Задай мне четыре вопроса о моей последней поездке.',
              a: 'Where did you go? · When did you arrive? · What did you see in the city? · How did you get to the hotel?' },
            { q: 'Задай мне три вопроса о моих планах на лето.',
              a: 'Where will you go? · Who will you go with? · What will you do there?' }
          ]
        },
        {
          title: 'Tell the story',
          open: true,
          note: 'Расскажи поездку Ковалёвых целиком: аэропорт → отель → город. ' +
                'Минимум шесть предложений в Past Simple, используй слова с карточки.',
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
          note: 'Нажми Start и говори минуту без остановки. Используй не меньше пяти слов из темы.',
          items: [
            { q: 'Your trip: the airport, the hotel and the city. What happened and what will you do next time?' }
          ]
        }
      ]
    }
  }
];
