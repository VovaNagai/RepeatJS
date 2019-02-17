/*==============================================
*
*               Function
*
* ==============================================*/
let num = 20;

function name(parameterText) {
    console.log(parameterText);
    num = 10;
}

name('Hello!');

console.log(num);

// calc(1000, 1);


let calc = function (a, b) { // function declaration - не можем вызвать до ф-ции
    return console.log(a+b);
};

calc(20, 30);

/*==============================================
*
*              Arrow Function
*
* ==============================================*/

let calcArrow = (a,b) => console.log('Arrow Function: '  + (a + b));
calcArrow(11,22);


/*==============================================
*
*       Методы и свойства у строк и чисел
*
* ==============================================*/
// Методы - это вспомогательные ф-ции
// Свойства - это вспомогательные значения

let str = 'test';

console.log(str.length); // для получения длины
console.log(str.toLowerCase());
console.log(str.toUpperCase());

let  numDots = 12.2;

console.log(Math.round(numDots));

/*==============================================
*
*       Преобразование строки в число
*
* ==============================================*/
// parseInt();
// parseFloat();

let strParse = '12.2px';

console.log(parseInt(strParse));

console.log(parseFloat(strParse));
