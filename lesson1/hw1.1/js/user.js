// +1) Создать HTML страницу и подключить к ней файл скрипта

// +2) В файле скрипта создать 2 переменные, которые будут получать данные от пользователя:
//     ·        Первая будет спрашивать "Ваш бюджет?"
// ·        Вторая "Название вашего магазина?"
//     var ourBudget = prompt('Ваш бюджет?', '');
//     console.log('Ваш бюджет: ' + ourBudget);
//
//     var nameShop = prompt('Название вашего магазина?', '');
//     console.log('Название вашего магазина: ' + nameShop);


// +3) Создать объект mainList, который будет содержать такие данные:
//     ·        Бюджет
// ·        Имя магазина
// ·        Массив товаров shopGoods
// ·        Объект с сотрудниками employers
// ·        Свойство open

// var mainList = {
//   budget: 4000,
//   nameShop: 'ShopEveryDay',
//   shopGoods: ['banana', 'onion', 'cucumber', 'apple'],
//   employers: {
//       Vova: 21,
//       Roma: 20,
//       Victor: 27
//   },
//   open: true
// };
// +4) Задать пользователю 3 раза вопрос "Какой тип товаров будем продавать?" и записать ответы в массив shopGoods
// var questionAboutSeld1 = prompt('Какой тип товаров будем продавать?', '');
// var questionAboutSeld2 = prompt('Какой тип товаров будем продавать?', '');
// var questionAboutSeld3 = prompt('Какой тип товаров будем продавать?', '');
//
// let arrSeld = [questionAboutSeld1, questionAboutSeld2, questionAboutSeld3];
// console.log('Ваши типы товаров для продаж: ' + arrSeld);

// +5) Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней)
// var myBudget = prompt('Введите сумму вашего бюджета на месяц:', '');
// let mountsDay = 30;
//
// alert('Ваш бюджет на месяц: ' + Math.round(myBudget / mountsDay) + ' грн.');
// +6) Проверить на наличие ошибок
// +7) Создать свой репозиторий на GitHub и поместить туда папку с первым заданием
