
var money = prompt('Ваш бюджет?', '');

var name = prompt('Название вашего магазина?', '');

let time = 19;


let mainList = {
    budget: money,
    nameShop: name,
    shopGoods: [],
    employers: {},
    open: true
};


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



let mountsDay = 30;

alert('Ваш бюджет на месяц: ' + Math.round(mainList.budget / mountsDay) + ' грн.');

console.log(mainList);