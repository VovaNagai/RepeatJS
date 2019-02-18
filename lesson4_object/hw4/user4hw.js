let money,
    name,
    time,
    price,
    mountsDay = 30;

function start() {
    money = prompt('Ваш бюджет?', '');
    while(isNaN(money) || money == '' || money == null) {
        money = prompt('Ваш бюджет?', '');
    }
    name = prompt('Название вашего магазина?', '').toUpperCase();
    time = 18;
}
// start();

let mainList = {
    budget: money,
    nameShop: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: true,
    shopItems: [],
    chooseGoods: function chooseGoods() {
        for (let i = 0; i < 5; i++) {
            let a = prompt('Какой тип товаров будем продавать?', '');

            if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
                console.log('Good!');
                mainList.shopGoods[i] = a;
            } else {
                i = i - 1;
            }
        }
    },
    workTime: function workTime(time) {
        if (time < 0) {
            console.log('Такого не может быть!')
        } else if (time > 8 && time < 20) {
            console.log('Время работать');
            mainList.open = true;
        } else if (time < 24) {
            console.log('Уже поздно!')
        } else {
            console.log('В сутках только 24 часа');
        }
    },
    budget: function budget() {
        return console.log('Ваш бюджет на месяц: ' + Math.round(mainList.budget / mountsDay) + ' грн.');
    },
    discont: function discont() {
        if(mainList.discount == true) {
            price = (price * 0.8)
        }
    },
    nameAsk: function nameAsk(name) {
        for(let i = 0; i < 4; i++) {
            let ask = prompt('Введите имя сотрудника');
            if ((typeof(ask)) === 'string' && (typeof(ask)) != null && ask != '' && ask.length < 17) {
                console.log('Good Name!');
                mainList.employers[i] = ask;
            } else {
                i = i - 1;
            }
        }
    },
    chooseShopItems: function chooseShopItems() {
        for (let i = 0; i < 1; i++) {
            let items = prompt('Перечислите через запятую товары', '');

            if ((typeof(items)) === 'string' && items != '' && (typeof(items)) != null && isNaN(items)) {
                mainList.shopItems = items.split(', ');
                mainList.shopItems.push(prompt('Что-то может еще: '));
                mainList.shopItems.sort();
            } else {
                i--;
            }
        }
    },
    canBuy: function canBuy() {
        mainList.shopItems.forEach(function (item, i, arr) {
            let n = i + 1;
            console.log(`У нас вы можете купить: ${n} - ${item}`);
        });
    }

};
for(let key in mainList) {
    console.log('Наш магазин включает в себя: ');
    console.log('Свойство: ' + key + ' значение: ' + mainList[key]);
}

console.log(mainList);