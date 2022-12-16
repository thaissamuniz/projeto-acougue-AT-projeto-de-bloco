const openBtnEl = document.querySelector(".menu__open");
const closeBtnEl = document.querySelector(".menu__close");
const frtsTitle = document.querySelector('.banner__title--one');
const scndTitle = document.querySelector('.banner__title--two');


openBtnEl.addEventListener('click', () => {
    document.documentElement.classList.add('menu__active');
});

closeBtnEl.addEventListener('click', () => {
    document.documentElement.classList.remove('menu__active');
});

document.documentElement.addEventListener('click', (e) => {
    if (e.target === document.documentElement) {
        document.documentElement.classList.remove('menu__active');
    }
});

const changeTitle = () => {
    frtsTitle.classList.add('hidden-title');
    scndTitle.classList.remove('hidden-title');
}

setTimeout(changeTitle, 5000);