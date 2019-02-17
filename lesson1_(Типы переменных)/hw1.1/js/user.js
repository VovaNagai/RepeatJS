<<<<<<< HEAD
// +1) Создать HTML страницу и подключить к ней файл скрипта
//
// +2) В файле скрипта создать 2 переменные, которые будут получать данные от пользователя:
//     ·        Первая будет спрашивать "Ваш бюджет?"
// ·        Вторая "Название вашего магазина?"
var money = prompt('Ваш бюджет?', '');
// console.log('Ваш бюджет: ' + ourBudget);

var name = prompt('Название вашего магазина?', '');
// console.log('Название вашего магазина: ' + nameShop);
let time = 19;

// +3) Создать объект mainList, который будет содержать такие данные:
//     ·        Бюджет
// ·        Имя магазина
// ·        Массив товаров shopGoods
// ·        Объект с сотрудниками employers
// ·        Свойство open

let mainList = {
    budget: money,
    nameShop: name,
    shopGoods: [],
    employers: {},
    open: true
};

// +4) Задать пользователю 3 раза вопрос "Какой тип товаров будем продавать?" и записать ответы в массив shopGoods
for(let i = 0; i < 5; i++) {
    let a = prompt('Какой тип товаров будем продавать?');

    if((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
        console.log('Good!');
        mainList.shopGoods[i] = a;
    } else {
        console.log('Error')
    }
}

if(time < 0) {
    console.log('Такого не может быть!')
} else if(time > 8 && time < 20) {
    console.log('Время работать')
} else if(time < 24) {
    console.log('Уже поздно!')
} else {
    console.log('В сутках только 24 часа');
}

// +5) Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней)

let mountsDay = 30;

alert('Ваш бюджет на месяц: ' + Math.round(mainList.budget / mountsDay) + ' грн.');
// +6) Проверить на наличие ошибок
// +7) Создать свой репозиторий на GitHub и поместить туда папку с первым заданием
=======
// +1) Создать HTML страницу и подключить к ней файл скрипта
//
// +2) В файле скрипта создать 2 переменные, которые будут получать данные от пользователя:
//     ·        Первая будет спрашивать "Ваш бюджет?"
// ·        Вторая "Название вашего магазина?"
var money = prompt('Ваш бюджет?', '');
// console.log('Ваш бюджет: ' + ourBudget);

var name = prompt('Название вашего магазина?', '');
// console.log('Название вашего магазина: ' + nameShop);
let time = 19;

// +3) Создать объект mainList, который будет содержать такие данные:
//     ·        Бюджет
// ·        Имя магазина
// ·        Массив товаров shopGoods
// ·        Объект с сотрудниками employers
// ·        Свойство open

let mainList = {
    budget: money,
    nameShop: name,
    shopGoods: [],
    employers: {},
    open: true
};

// +4) Задать пользователю 3 раза вопрос "Какой тип товаров будем продавать?" и записать ответы в массив shopGoods
for(let i = 0; i < 5; i++) {
    let a = prompt('Какой тип товаров будем продавать?');

    if((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
        console.log('Good!');
        mainList.shopGoods[i] = a;
    } else {
        console.log('Error')
    }
}

if(time < 0) {
    console.log('Такого не может быть!')
} else if(time > 8 && time < 20) {
    console.log('Время работать')
} else if(time < 24) {
    console.log('Уже поздно!')
} else {
    console.log('В сутках только 24 часа');
}

// +5) Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней)

let mountsDay = 30;

alert('Ваш бюджет на месяц: ' + Math.round(mainList.budget / mountsDay) + ' грн.');
// +6) Проверить на наличие ошибок
// +7) Создать свой репозиторий на GitHub и поместить туда папку с первым заданием
>>>>>>> e7ce6a0ed24abb30455e6db3dbc247fdef9e69a0
console.log(mainList);