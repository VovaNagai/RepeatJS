"use strict";
// const string = 'some string';
// const iAmString = "second string";
// const es6String = `hello world`;
//
// console.log(string, iAmString, es6String);
//
// const helloWord = `hello ${iAmString}`;
// -------------------------------------------------------------------------------------------------
// var myString = 'vova';
// console.log(myString[0].toUpperCase(), myString[0]);
// -----------------------------------------------------------------------------------------------
// var user = {
//     cars: {
//         name: ['honda' + ' lada' + ' nisan' + "."],
//         your: 'Vova'
//     }
// };
// console.log('У пользователя ' + user.cars.your + ' есть машина ' + user.cars.name);
// -----------------------------------------------------------------------------------------
// var user = {
//     cars: {
//         name: ['honda' + ' lada' + ' nisan' + "."],
//         your: 'Vova'
//     }
// };
// console.log(`У пользователя ${user.cars.your}` + ` есть машина ${user.cars.name}`);
//
//

// let myName = 'vOVA';-------------------------------------------------------------------------
// console.log(myName[0].toUpperCase() + myName.toLocaleLowerCase().slice(1));
// console.log(myName.toLocaleLowerCase() + myName.slice(3));

// // SPLIT (разделитель) - превращает строку в массив-----------------------------------------------
// let myName = 'Vova';
// let arrray = myName.split('');
// console.log(arrray);

// REPLACE ()-------------------------------------------------------------------------
// const hi = 'privet kak dela';
// let array = hi.replace('dela', 'ti');
// console.log(array);

// INDEX OF -----------------------------------------------------------------------------
// var hi = 'privet kak dela';
// var array = hi.replace('dela', 'ti');
// console.log(hi.indexOf(','));
//----------------------------------------------------------------------------------------------------

// == || ===

// var number = '50';
// console.log(number == 50);
// var number2 = '50';
// console.log(number2 === 50);
//-----------------------------------------------------------------------------------------------------
// var number =  'year2017';
// console.log(number.slice(6)); //one method
// console.log(2017%2000);  //two method
//--------------------------------------------------------------------------------------------------------
// var number =  'year2017';
// console.log(!true); // window false
//----------------------------------------------------------------------------------------------------
// var someArray = [100, 200, 300, 400];
// console.log(Math.max(someArray));

// ЗАДАЧИ JAVASCRIPT НА ЦИКЛЫ
// Задание 1
// Вывести числа от 4 до 400 на экран.
// for (var i = 4; i <= 400; i++) {
//     console.log(i);
// }
//     Задание 2
// Вывести числа в последовательности: 4 7 10 13 с помощью цикла.
// for (var a = 4; a <= 13; a += 3) {
//     console.log(a)
// }
//     Задание 3
// Вывести числа 654 653 652 до нуля.
// for (var zero = 654; zero >= 0; zero) {
//     console.log(zero)
// }
//     Задание 4
// Вывести все годы с 1983 до 2017.
// for (var years = 1983; years <= 2017; years++) console.log(years)
// Задание 5
// Вывести числа -4 -2 0 2 4 6 ...100.
// for(var num = -4; num <= 100; num +=2) console.log(num);
// Задание 6
// С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.
// for (var table = 1; table <= 10; table++){
//     var seven = 7;
//     var sum = seven * table;
//     console.log(seven + "*" + table + " = " + sum)
// }
// Задание 7
// Выведите с помощью цикла коды спецсимволов от 1000 до 2000.
// Напомню, что спецсимвол получается комбинацией &#число; Например &#1222;
// var out = document.getElementById('tt');
// var sum = '';
//
// for (var sub = 1000; sub <=2000; sub = sub + 1) {
//     sum = sum + '&#' + sub + ''
// }
// out.innerHTML = sum;
// ЗАДАЧИ НА НАХОЖДЕНИЕ СУММЫ И ПРОИЗВЕДЕНИЯ ЧИСЕЛ
// Задание 8
// Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5).


// var sum = 0;
// for(var i = 1; i < 101; i++) {
//      sum = sum + i;
// }
// console.log(sum);
//     Задание 9
// С помощью цикла вывести произведение чисел от 1 до 50.
// var sum = 1;
//
// for (var i = 1; i <= 50; i++) {
//     sum = sum * i;
// }
// console.log(sum);

/*
*
* РАБОТА С ЧИСЛАМИ
*
* */


// 1 Интерфейс суммы
// важность: 5
// Создайте страницу, которая предлагает ввести два числа и выводит их сумму.
// let oneNum = prompt('Enter number', '');
// let twoNum = prompt('Enter number yet', '');
// let sum = +oneNum + +twoNum;
//
// alert('You entered numbers: ' + Math.round(sum));

// 2 Сложение цен
// Представьте себе электронный магазин. Цены даны с точностью до копейки(цента,
// евроцента и т.п.).
// Вы пишете интерфейс для него. Основная работа происходит на сервере, но и на клиенте
// все должно быть хорошо. Сложение цен на купленные товары и умножение их на количество
// является обычной операцией.
// Получится глупо, если при заказе двух товаров с ценами 0.10$ и 0.20$
// человек получит общую стоимость 0.30000000000000004$:
// let num = 0.1 + 0.2;
// alert(num.toFixed(1));


/*
Работа с объектами
*/

// Task 1
// Мини-задача на синтаксис объектов. Напишите код, по строке на каждое действие.
//
//     Создайте пустой объект user.
//     Добавьте свойство name со значением Вася.
//     Добавьте свойство surname со значением Петров.
//     Поменяйте значение name на Сергей.
//     Удалите свойство name из объекта.

// var user = new Object();
// user.name = 'Вася';
// user.surname = 'Петров';
// user.name = 'Сергей';
// delete user.name;

// Task 2
// var user = {
//     name: 'vova',
//     cars: ['opel', 'bmw', 'vaz', 'honda'],
//     carHave: true
// };
// let liter;
//
//
// // for(var i = 0; i <= user.cars.length - 1; i++)
// if (user.carHave == true || user.carHave == 'есть' && user.carHave.length > 1) {
//     user.carHave = 'есть';
//     liter = 'и';
//     console.log(`У пользователя ${user.name.toLocaleUpperCase(1)} ${user.carHave} автомобил${liter}, а именно: ${user.cars}.`);
// } else if (user.carHave == true && user.carHave.length == 1) {
//     liter = 'ь';
//     console.log(`У пользователя ${user.name.toLocaleUpperCase(1)} ${user.carHave} автомобил${liter}, а именно: ${user.cars}.`);
// } else if (user.carHave == false || user.carHave == 'нету') {
//     user.carHave = 'нету';
//     liter = 'я';
//     console.log(`У пользователя ${user.name.toLocaleUpperCase(1)} ${user.carHave} автомобил${liter}.`);
// } else {
//     console.log('sfdasdf')
// }

// Task 3
// Сумма свойств
// Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
// Если объект пустой, то результат должен быть 0.


// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };
// var max = 0;
// var maxName = '';
//     for (var key in salaries) {
//          if(max < salaries[key]) {
//              max = salaries[key];
//              maxName = key;
//          }
// }
//
// alert(maxName || 'Нет сотрудников');

// Определите, пуст ли объект
//
// Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.
//
//     Работать должно так:
//
//     function isEmpty(obj) {
//         /* ваш код */
//     }
//
// var schedule = {};
// function isEmpty(obj) {
//        for (var key in obj) {
//            return false;
//        }
//        return true;
//      }
// alert( isEmpty(schedule) ); // true
//
// schedule["8:30"] = "подъём";
//
// alert( isEmpty(schedule) ); // false

// Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
//
//     Если объект пустой, то результат должен быть 0.


// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };
// var sum = 0;
// function salarPay(obj) {
//     for (var key in obj){
//         sum += obj[key];
//     }
//     return sum;
// }
//
// alert(salarPay(salaries));

// Свойство с наибольшим значением
// важность: 5
// Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
//
//     Если объект пустой, то пусть он выводит «нет сотрудников».
//
//
//
// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };
// var sum = 0;
// var bg = '';
//
//     for (var key in salaries) {
//         if (sum < salaries[key]) {
//             sum = salaries[key];
//             bg = key;
//         }
//
//
// }
// alert(bg || 'Нету сотрудников');


// Умножьте численные свойства на 2
// Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. Например:

// до вызова
//     var menu = {
//         width: 200,
//         height: 300,
//         title: "My menu"
//     };
// function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n)
// }
//
// function multiplyNumeric(obj) {
//     for (var key in obj) {
//         if (isNumeric(obj[key])) {
//             obj[key] *= 2;
//         }
//     }
// }
//
// multiplyNumeric(menu);

// alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );
// console.log(menu);
// // после вызова
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };



