let cards = document.querySelectorAll('.game__card');
const animals = [128053, 128054, 128049, 128055, 128057, 128059, 128053, 128054, 128049, 128055, 128057, 128059];

// Открываем карточки по клику
cards.forEach((el) => clickCards(el));

function clickCards(el) {
    el.addEventListener('click', function () {
    this.classList.toggle('open-card');
        return;
    })
}

// перемешивание карточек
function shuffle (arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        el = arr[i];
        [arr[i], arr[j]] = [arr[j], arr[i]]; 
    }
//    console.log(arr);
}

// удаление потомка
function removeBlock(arr) {
    for (let el = arr.length - 1; el >= 0; el--) {
            arr[el].remove();
    }
}

// добавление карточки в game
function addBlock (arr) {
    for (let el = 0; el < arr.length; el++) {
        let div = document.createElement('div')
        div.className = 'game__card';

        div.innerHTML = 
            '<div class="game__card__shirt"></div>\
            <div class="game__card__front_side">&#' + arr[el] + ';</div>'

        document.getElementById('game').appendChild(div);
    }
}

function mixingCards () {
    shuffle(animals);
    removeBlock(cards);
    addBlock(animals);
    cards = document.querySelectorAll('.game__card');
    cards.forEach((el) => clickCards(el));
}

mixingCards();