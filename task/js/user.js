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

function chooseGoods() {

    for (let i = 0; i < 5; i++) {
        let a = prompt('Какой тип товаров будем продавать?');

        if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
            console.log('Good!');
            mainList.shopGoods[i] = a;
        } else {
            i = i - 1;
        }
    }
}
chooseGoods();

function workTime(time) {

    if (time < 0) {
        console.log('Такого не может быть!')
    } else if (time > 8 && time < 20) {
        console.log('Время работать')
    } else if (time < 24) {
        console.log('Уже поздно!')
    } else {
        console.log('В сутках только 24 часа');
    }
}
workTime(18);

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