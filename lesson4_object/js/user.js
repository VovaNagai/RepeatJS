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