const cards = document.querySelectorAll('.game__card');

cards.forEach((el) => {
    el.addEventListener('click', function () {
        this.classList.toggle('open-card');
        return;
    })
});