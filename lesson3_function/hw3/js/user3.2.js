/*===========================================================================================================================================
*
* 1) У вас есть str = “урок-3-был слишком легким”         Сделать так, чтобы строка начиналась с большой буквы
* 2) Теперь замените все “-” на пробелы         Вывести в консоль
* 3) Из получившейся строки вырезать слово “легким”, заменить 2 последние буквы на “о”         Вывести на экран
* 4) У вас также есть массив arr = [20, 33, 1, “Человек”, 2, 3]         Вывести в консоль квадратный корень из суммы кубов его элементов
* 5) Добавить папку с усложненным заданием в свой репозиторий на GitHub
*
* ===========================================================================================================================================*/

let str = 'урок-3-был слишком легким';
console.log('Task 1: ' + str[0].toUpperCase() + str.slice(1));


console.log('Task 2: ' + str[0].toUpperCase() + str.slice(1).replace(/-/g, ' '));


let newWord = str.indexOf('легким');
console.log('Task 3: ' + str.slice(newWord, 23) + 'oo');

let arr = [20, 33, 1, "Человек", 2, 3];
let res = 0;
arr.forEach(function (i) {
    if (!isNaN(i)) {
        res += (i ** 3);
    }
});
console.log(Math.sqrt(res));

