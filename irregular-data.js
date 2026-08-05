/* ============================================================
   НЕПРАВИЛЬНЫЕ ГЛАГОЛЫ. Отдельный файл — можно добавлять пачками.

   Формат строки:
     v1 — начальная форма, v2 — прошедшее, v3 — причастие, ru — перевод
     group — по какому образцу меняется (для сортировки и подсказок)

   Группы:
     same   — все три формы одинаковые (put — put — put)
     v2v3   — вторая и третья совпадают (buy — bought — bought)
     all3   — все три разные (go — went — gone)

   Новую пачку просто дописываете в конец массива.
   ============================================================ */

window.IRREGULAR = [

  /* ---- всё одинаковое: выучил одну форму — знаешь все ---- */
  { v1: 'put', v2: 'put', v3: 'put', ru: 'класть, положить', group: 'same' },
  { v1: 'cut', v2: 'cut', v3: 'cut', ru: 'резать', group: 'same' },
  { v1: 'let', v2: 'let', v3: 'let', ru: 'разрешать', group: 'same' },
  { v1: 'read', v2: 'read', v3: 'read', ru: 'читать (2 и 3 звучат «рэд»)', group: 'same' },

  /* ---- вторая и третья совпадают ---- */
  { v1: 'have', v2: 'had', v3: 'had', ru: 'иметь', group: 'v2v3' },
  { v1: 'say', v2: 'said', v3: 'said', ru: 'сказать', group: 'v2v3' },
  { v1: 'make', v2: 'made', v3: 'made', ru: 'делать, создавать', group: 'v2v3' },
  { v1: 'get', v2: 'got', v3: 'got', ru: 'получать, становиться', group: 'v2v3' },
  { v1: 'find', v2: 'found', v3: 'found', ru: 'находить', group: 'v2v3' },
  { v1: 'think', v2: 'thought', v3: 'thought', ru: 'думать', group: 'v2v3' },
  { v1: 'buy', v2: 'bought', v3: 'bought', ru: 'покупать', group: 'v2v3' },
  { v1: 'bring', v2: 'brought', v3: 'brought', ru: 'приносить', group: 'v2v3' },
  { v1: 'teach', v2: 'taught', v3: 'taught', ru: 'учить кого-то', group: 'v2v3' },
  { v1: 'catch', v2: 'caught', v3: 'caught', ru: 'ловить, успевать', group: 'v2v3' },
  { v1: 'tell', v2: 'told', v3: 'told', ru: 'рассказать', group: 'v2v3' },
  { v1: 'sell', v2: 'sold', v3: 'sold', ru: 'продавать', group: 'v2v3' },
  { v1: 'feel', v2: 'felt', v3: 'felt', ru: 'чувствовать', group: 'v2v3' },
  { v1: 'keep', v2: 'kept', v3: 'kept', ru: 'хранить, держать', group: 'v2v3' },
  { v1: 'sleep', v2: 'slept', v3: 'slept', ru: 'спать', group: 'v2v3' },
  { v1: 'meet', v2: 'met', v3: 'met', ru: 'встречать', group: 'v2v3' },
  { v1: 'leave', v2: 'left', v3: 'left', ru: 'уходить, оставлять', group: 'v2v3' },
  { v1: 'lose', v2: 'lost', v3: 'lost', ru: 'терять, проигрывать', group: 'v2v3' },
  { v1: 'send', v2: 'sent', v3: 'sent', ru: 'отправлять', group: 'v2v3' },
  { v1: 'spend', v2: 'spent', v3: 'spent', ru: 'тратить, проводить время', group: 'v2v3' },
  { v1: 'sit', v2: 'sat', v3: 'sat', ru: 'сидеть', group: 'v2v3' },
  { v1: 'stand', v2: 'stood', v3: 'stood', ru: 'стоять', group: 'v2v3' },
  { v1: 'understand', v2: 'understood', v3: 'understood', ru: 'понимать', group: 'v2v3' },
  { v1: 'win', v2: 'won', v3: 'won', ru: 'побеждать', group: 'v2v3' },
  { v1: 'hear', v2: 'heard', v3: 'heard', ru: 'слышать', group: 'v2v3' },
  { v1: 'pay', v2: 'paid', v3: 'paid', ru: 'платить', group: 'v2v3' },
  { v1: 'build', v2: 'built', v3: 'built', ru: 'строить', group: 'v2v3' },

  /* ---- все три разные: их учим отдельно ---- */
  { v1: 'be', v2: 'was / were', v3: 'been', ru: 'быть', group: 'all3' },
  { v1: 'do', v2: 'did', v3: 'done', ru: 'делать', group: 'all3' },
  { v1: 'go', v2: 'went', v3: 'gone', ru: 'идти, ехать', group: 'all3' },
  { v1: 'see', v2: 'saw', v3: 'seen', ru: 'видеть', group: 'all3' },
  { v1: 'come', v2: 'came', v3: 'come', ru: 'приходить', group: 'all3' },
  { v1: 'take', v2: 'took', v3: 'taken', ru: 'брать', group: 'all3' },
  { v1: 'know', v2: 'knew', v3: 'known', ru: 'знать', group: 'all3' },
  { v1: 'give', v2: 'gave', v3: 'given', ru: 'давать', group: 'all3' },
  { v1: 'write', v2: 'wrote', v3: 'written', ru: 'писать', group: 'all3' },
  { v1: 'speak', v2: 'spoke', v3: 'spoken', ru: 'говорить', group: 'all3' },
  { v1: 'eat', v2: 'ate', v3: 'eaten', ru: 'есть, кушать', group: 'all3' },
  { v1: 'drink', v2: 'drank', v3: 'drunk', ru: 'пить', group: 'all3' },
  { v1: 'swim', v2: 'swam', v3: 'swum', ru: 'плавать', group: 'all3' },
  { v1: 'sing', v2: 'sang', v3: 'sung', ru: 'петь', group: 'all3' },
  { v1: 'run', v2: 'ran', v3: 'run', ru: 'бегать', group: 'all3' },
  { v1: 'drive', v2: 'drove', v3: 'driven', ru: 'водить машину', group: 'all3' },
  { v1: 'ride', v2: 'rode', v3: 'ridden', ru: 'кататься', group: 'all3' },
  { v1: 'wear', v2: 'wore', v3: 'worn', ru: 'носить одежду', group: 'all3' },
  { v1: 'break', v2: 'broke', v3: 'broken', ru: 'ломать', group: 'all3' },
  { v1: 'choose', v2: 'chose', v3: 'chosen', ru: 'выбирать', group: 'all3' },
  { v1: 'forget', v2: 'forgot', v3: 'forgotten', ru: 'забывать', group: 'all3' },
  { v1: 'begin', v2: 'began', v3: 'begun', ru: 'начинать', group: 'all3' },
  { v1: 'grow', v2: 'grew', v3: 'grown', ru: 'расти', group: 'all3' },
  { v1: 'draw', v2: 'drew', v3: 'drawn', ru: 'рисовать', group: 'all3' },
  { v1: 'fall', v2: 'fell', v3: 'fallen', ru: 'падать', group: 'all3' },
  { v1: 'wake up', v2: 'woke up', v3: 'woken up', ru: 'просыпаться', group: 'all3' }

];
