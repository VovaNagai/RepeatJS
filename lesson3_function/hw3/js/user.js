// 1) Оформить расчет дневного бюджета как функцию
// 2) Создать функцию дисконтной системы         Если у нас параметр discount = true, то от значения переменной price необходимо оставить 80%
// 3) Создать функцию найма сотрудников (employers)
// 4) Необходимо 4 раза спросить у пользователя имя сотрудника и записать в объект employers в формате Номер - Имя         Вызывать функции не обязательно
// 5) Проверить на наличие ошибок
// 6) Добавить папку с третьим уроком на GitHub

let money,
    name,
    time,
    price,
    mountsDay = 30;

function start() {
    money = prompt('Ваш бюджет?');
    while(isNaN(money) || money == '' || money == null) {
        money = prompt('Ваш бюджет?');
    }
    name = prompt('Название вашего магазина?').toUpperCase();
    time = 18;
}
start();

let mainList = {
    budget: money,
    nameShop: name,
    shopGoods: [],
    employers: {},
    open: true,
    discount: true
};

function budget() {
    return console.log('Ваш бюджет на месяц: ' + Math.round(mainList.budget / mountsDay) + ' грн.');
}
budget();

function discont(price) {
    if (mainList.discount === true) {
        console.log('Ваш прайс цена' + Math.round(price * 0.8));
    } else {
        console.log('Ваш прайс цена' + price);
    }

}
discont(mainList.budget);

function nameAsk(name) {
    for(let i = 0; i < 4; i++) {
        let ask = prompt('Введите имя сотрудника');
        if ((typeof(ask)) === 'string' && (typeof(ask)) != null && ask != '' && ask.length < 17) {
            console.log('Good Name!');
            mainList.employers[i] = ask;
        } else {
            i = i - 1;
        }
    }
}
nameAsk();

console.log(mainList);