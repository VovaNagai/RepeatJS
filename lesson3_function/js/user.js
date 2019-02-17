// function checkAge(age) {
//     return age > 18 ? true : confirm('Родители разрешили?')
// }
// function checkAge2(age) {
//     return (age > 18) || confirm('2: ' + 'Родители разрешили?')
// }

// Функция min
// Задача «Hello World» для функций :)
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.

// function min(a, b) {
//     return a > b ? b : a < b ? a : `${a} = ${b}`;
// }
//
// console.log(min(22,231));

// var multX = prompt('Введите число','');
// var multN = prompt('Введите степень числа','');
//
// function mult(multX, multN) {
//     var result = multX;
//
//     for(var i = 0; i < multN; i++) {
//         result *= multX
//     }
// return result;
// }
// if (multN <= 1) {
//     alert('Степень ' + multN +
//         'не поддерживается, введите целую степень, большую 1'
//     );
// } else {
//     alert( mult(multX, multN) );
// }

//--------------------------------ARRAY + OBJECT--------------------------------------
var arr = ['Hi ', 'world', '!'];
console.log('1: ' + arr[0] + arr[1] + arr[2]);

var text =  arr[0] + arr[1] + arr[2];
console.log('2: ' + text);

arr[0] = 'Bye ';
console.log('3: ' + arr[0] + arr[1] + arr[2]);

var obj = {
    Vova: '1000$',
    Fedor: '333$',
    Valintin: '555$'
};
console.log('4: ' + 'Vova get:' + obj.Vova);
console.log('4: ' + 'Fedor get:' + obj.Fedor);
console.log('4: ' + 'Valintin get:' + obj.Valintin);

var arrNum1 = [1,2,3,4,5];
var arrNum2 = new Array();

arrNum2[0] = 1;
arrNum2[1] = 2;
arrNum2[2] = 3;
arrNum2[3] = 4;
arrNum2[4] = 5;

console.log('5: ' + arrNum1);
console.log('5: ' + arrNum2);

var arr2 = {
    'ru':['голубой', 'красный', 'зеленый'],
    'en':['blue', 'red', 'green'],
};

console.log('6: ' + arr2.ru[0]);

var arr3 = [2,5,3,9];
function multArr (nameArr) {
    if(nameArr.length > 3) {
      var res = nameArr[0] * nameArr[1];
        var res2 = nameArr[2] * nameArr[3];
        var result = res + res2;
        console.log('7: ' + result)
    } else {
        console.log('7: ' + 'Our array not long enough')
    }

}
multArr(arr3);

var obj2 = {a: 1, b: 2, c: 3};
console.log('8 ' + obj2.c);
console.log('8 ' + obj2['c']);

var arr5 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
console.log('9: ' + arr5[1][0]);

var obj10 = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
console.log('10: ' + obj10.js[0]);

var arr11 = {
    'ru': ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
    'en': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
};
console.log('11: ' + arr11.ru[0]);
console.log('11: '+ arr11.en[2]);

var day = 2;
var lang = 'ru';
console.log(arr11[lang][day]);

// var i = 1;
// while (i <= 50) {
//     document.write(i + '<br>');
//     i++;
// }

//------------------------------------------FOR-------------------------------------

// for(let i = 1; i <= 100; i++) document.write(i + '<br>');

// for(let i = 11; i <=33; i++) document.write(i + '<br>');

// for(let i = 0; i <= 100; i += 2) document.write(i + '<br>');

// var result = 0;
// // for(let i = 0; i <= 100; i++) {
// //      result = result + i;
// // }
// // document.write(result);

// var i = 1;
// var sum = 0;
// while (i <= 100) {
//     sum += i;
//     i++;
// }
// alert(sum);

// var arr1 = [1, 2, 3, 4, 5];
//
// // for (let i = 0; i <= arr1.length; i++) document.write(arr1[i] + '<br>');
//
// var sum = 0;
// for (let i = 0; i < arr1.length; i++) {
//     sum += arr1[i];
// }
// document.write(sum);


// var obj15 = {green: 'зеленый', red: 'красный', blue: 'голубой'};
//
// for(var key in obj15) {
//     document.write(key + ': ' + obj15[key] + '<br>');
// }

// var obj16 = {
//     'Коля': 200,
//     'Вася': 300,
//     'Петя': 400,
// };
//
// for(var key in obj16) {
//     document.write(key + ' - зарплата ' + obj16[key] + ' долларов.' + '<br>');
// }

// var arr17 = [2, 5, 9, 15, 0, 4];
//
// for(let i = 0; i < arr17.length; i++) {
//     if (arr17[i] >= 3 && arr17[i] <= 10) {
//         document.write(arr17[i] + '<br>')
//     }
// }

// var arr18 = [2,3,-3, 0, 0, 1];
// var sum18 = 0;
// for(var i = 0; i < arr18.length; i++) {
//     if (arr18[i] > 0) {
//         sum18 += arr18[i];
//     }
// }
// document.write(sum18);

// var arr19 = [1, 2, 5, 9, 4, 13, 4, 10];
//
// for(let i = 0; i < arr19.length; i++) {
//     if (arr19[i] == 4) {
//         alert('Have it number');
//         break;
//     }
// }

// var arr20 = ['10', '20', '30', '50', '235', '3100'];
//
// for(let i = 0; i < arr20.length; i++) {
//     if(arr20[i][1] == '1' || arr20[i][0] == '2' || arr20[i][0] == '5') {
//         document.write(arr20[i] + '<br>');
//     }
// }

// var arr21 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// for(let i = 0; i < arr21.length; i++) {
//     arr21[i] *= -1;
//     document.write(arr21[i]);
// }

var arr22 = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday',
    'saturday', 'sunday'];

// for (let i = 0; i < arr22.length; i++) {
//     if (i == 5 || i == 6) {
//         document.write('<b>' + arr22[i] + '</b>' + '<br>')
//     } else {
//         document.write(arr22[i] + '<br>')
//     }
//
// }

// var dayNow = 'tuesday';
//
// for(let i = 0; i < arr22.length; i++){
//    if(arr22[i] == dayNow) {
//     document.write('<i>' + arr22[i] + '</i><br>')
//    } else {
//        document.write(arr22[i] + '<br>')
//    }
// }

// for(var n = 1000, num = 0; n > 50; n /= 2, num++)
// document.write(n + '<br>');
// document.write(num);


//---------------------------------------Работа с %----------------------------------



// function multOs(a, b) {
//     if(a % b == 0) {
//         document.write('Делится' + '<br>')
//     } else {
//         document.write('Не делится'+ '<br>')
//     }
// }
//
// multOs(2, 2);
// multOs(2, 3);


//-----------------------------Работа со строками-------------------------------------

// var str = 'aaa@bbb@ccc';
// function gg(a){
//     return document.write(a.replace(/@/g, '!'));
// }
//
// gg(str);

/* global require describe it */


        var string = "1 + 4";
        var result = "result is ";


        function parseInt(a) {
            for (var i = 0; i < a.length; i++) {
                var m;
                var n = m.charAt(i)
            }
        }
