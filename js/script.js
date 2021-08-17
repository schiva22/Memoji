// сортировка массива
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; 
    }
}

function addCard(arr) {
    const gameElement = document.getElementById('game');

    for (let el = 0; el < arr.length; el++) {
        let div = document.createElement('div');
        div.className = 'game__card';

        div.innerHTML = 
            '<div class="game__card__shirt"></div>\
            <div class="game__card__front_side">&#' + arr[el] + ';</div>';

        gameElement.appendChild(div);
    }
}

function removeCard(arr) {
    for (let el = arr.length - 1; el >= 0; el--) {
            arr[el].remove();
    }
}

function closeCard() {
    const cards = document.querySelectorAll('.opened');
    cards.forEach((el) => {
        el.classList.toggle('selected');
        el.classList.toggle('opened');
    })
}

let animals = [128053, 128054, 128049, 128055, 128057, 128059, 128053, 128054, 128049, 128055, 128057, 128059];

shuffle(animals);
addCard(animals);

let isfirstCard = false;
let greenCard = 0;
const cards = document.querySelectorAll('.game__card');

cards.forEach((el) => el.addEventListener('click', function () {
    el.classList.toggle('opened');
    el.classList.toggle('selected');

    let openCards = document.querySelectorAll('.selected');
    let redCards = document.querySelectorAll('.red');
    
    if (openCards.length === 2) {
        if (openCards[0].innerText === openCards[1].innerText) {
            openCards.forEach((el) => {
                el.classList.add('blocked');
                el.classList.add('green');
                el.classList.remove('selected');
                greenCard++;
            })
        } else {
            setTimeout(1000, openCards.forEach((el) => {
                el.classList.add('red');
            }))
        }
    } else {
        redCards.forEach((el) => {
            el.classList.remove('red');
            el.classList.remove('selected');
            el.classList.remove('opened');
        })
    }
// таймер
    if (!isfirstCard) {
        isfirstCard = true;
        let timeSecond = 60;
        let timer = setInterval(function () {
            let second = timeSecond % 60;
            if (second < 10) {
                second = `0${second}`;
            }

            if (timeSecond < 0 || greenCard === cards.length) {     //отключаем таймер
                clearInterval(timer);
            } else {
                document.getElementById('timer').innerHTML = `0${Math.trunc(timeSecond / 60 % 60)}:${second}`;
            }
            timeSecond--;
        }, 1000)
    }
}));