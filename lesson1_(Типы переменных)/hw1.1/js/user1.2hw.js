let num = 33721;
// разбиваем строку на массив
num = ('' + num).split('');

let mult = 1;

num.forEach(function (i) {
   mult *= i
});

console.log(`Произведение умножения числа методом ForEach: ${mult}`);

let result = num.reduce(function (a,b) {
    return a*b
}, 1);

console.log(`Произведение умножения числа методом Reduce: ${result}`);

console.log('Возведение в 3 степень: ' + Math.pow(result, 3));