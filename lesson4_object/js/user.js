let options = {
    name: 'test',
    width: 1024,
    height: 1024
};

options.boll = false;

options.colors = {
    border: 'black',
    background: 'red'
};

delete options.boll;

/*==============================================
*
*   Цикл для переборки объекта
*
* ==============================================*/

for(let key in options) {
    console.log('Свойство: ' + key + ' значение: ' + options[key]);
}

/*==============================================
*
*   Кол-во свойств в объекте
*
* ==============================================*/

console.log(Object.keys(options).length);


/*==============================================
*
*           Arrays
*
* ==============================================*/


let first = [1, 2, 'second', 'sdfsdf', 3, 4, 5];
first.pop(); // удаляет последний элемент
first.push(6); // добавляет вконец элемент
first.shift(); // удаляет первый элемент
first.unshift(); // добавляет в начало элемент

console.log(first);

for(let i = 0; i < first.length; i++) {
    console.log(first[i])
}
first[99] = 99;

/*==============================================
*
*           ForEach
*
* ==============================================*/

first.forEach(function (item, i, arr) {
    console.log(i + ': ' + item + `(массив: ${arr})`)
});

/*==============================================
*
*           split
*
* ==============================================*/

// let second = [];
// let i = prompt('','');
// second = i.split(',');
// console.log(second);

/*==============================================
*
*           join
*
* ==============================================*/

// let second = ["dfd", "sdfg", "dsf", " sdf", " ewr", "sdf"];
// let i = second.join(',');
// console.log(i);

/*==============================================
*
*           sort
*
* ==============================================*/

let second = ["dfd", "sdfg", "dsf", " sdf", " ewr", "sdf"];
let i = second.sort();
console.log(i);


function sortNum(a,b) {
    return a - b;
}
let num = [1, 3, 2, 6, 7, 15, 16, 22, 33, 66];
let numC = num.sort(sortNum);
console.log(numC);

/*==============================================
*
*                   OOП
*
* ==============================================*/

// делаем наследование объектов

let solider = {
    health: 400,
    armor: 100
};

let john = {
  health: 222
};

john.__proto__ = solider;

console.log(john);
console.log(john.armor);
/*================================================================================================
*
*   Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:
*   Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
*   Метод sum() возвращает сумму запомненных свойств.
*   Метод mul() возвращает произведение запомненных свойств.
*
* =================================================================================================*/

function Calculator() {
    this.read = function () {
       this.a = +prompt(`Введите число 'а'`,'');
       this.b = +prompt(`Введите число 'b'`,'');
    };
    this.sum = function () {
        return this.a + this.b;
    };
    this.mul = () => this.a * this.b;
}
let calc = new Calculator();
calc.read();

console.log('Сумма=' + calc.sum());
console.log('Произведение=' + calc.mul());
/*
    Напишите функцию-конструктор Accumulator(startingValue). Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.
    Более формально, объект должен:
    Хранить текущее значение в своём свойстве value. Начальное значение свойства value ставится конструктором равным startingValue.
    Метод read() вызывает prompt, принимает число и прибавляет его к свойству value.
    Таким образом, свойство value является текущей суммой всего, что ввел посетитель при вызовах метода read(), с учетом начального значения startingValue.
*/

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
      this.value += +prompt(`Сколько добавим?`, 0);
    };

}

let accum = new Accumulator(33);
accum.read();
accum.read();
console.log(accum.value);


