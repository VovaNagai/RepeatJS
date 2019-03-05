let btn = document.getElementsByTagName('button');

btn[0].addEventListener('click', function (event) {
    console.log('Произошло событие: ' + event.type + " на элемент " + event.target)
});
btn[1].addEventListener('mouseenter', function (event) {
    console.log('Произошло событие: ' + event.type + " на элемент " + event.target)
});
