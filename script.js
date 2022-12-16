const openBtnEl = document.querySelector(".menu__open");
const closeBtnEl = document.querySelector(".menu__close");
const frtsTitle = document.querySelector('.banner__title--one');
const scndTitle = document.querySelector('.banner__title--two');
const banner = document.querySelector('.banner');
let currentBanner = 0;

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

var banners = [{
    img: "img/AdobeStock_341409259.jpeg",
    title: "Cortes para churrasco Uruguaios e Argentinos"
},
{
    img: "https://images.pexels.com/photos/2647939/pexels-photo-2647939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Encomendas de ostras vivas de SC"
}
];



const changeBanner = () => {
    currentBanner = (currentBanner + 1) % 2;
    banner.style.backgroundImage = `url(${banners[currentBanner].img})`;
    document.querySelector('.banner__title').innerText = `${banners[currentBanner].title}`;
}

timer = setInterval(changeBanner, 3000);

banner.addEventListener('mouseover', e => {
    if (e) {
        clearInterval(timer);
    }
});

banner.addEventListener('mouseout', e => {
    if (e) {
        timer = setInterval(changeBanner, 3000);
    }
});