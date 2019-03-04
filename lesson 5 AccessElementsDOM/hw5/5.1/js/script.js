let menu = document.querySelector('.menu'),
    itemMenu = document.querySelectorAll('.menu-item'),
    body = document.getElementsByTagName('body'),
    text = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    questionHolder = document.getElementById('prompt'),
    question = prompt('Какое у вас отношение к технике Apple?', '');




menu.insertBefore(itemMenu[2], itemMenu[1]);

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

text.textContent = 'Мы продаем только подленную технику Apple';

adv.remove();


questionHolder.innerHTML = `<h2>${question}</h2>`;