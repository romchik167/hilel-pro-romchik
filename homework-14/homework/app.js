const images = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg'
];
const sliderList = document.querySelector('.slider-list');

let currentIndex = 0;

const sliderButtons = []

const showSlide = function (index) {
    let slides = document.querySelectorAll('.slide');
    if (index < 0) {
        currentIndex = images.length - 1;
    } else if (index >= images.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    for (let slide of slides) {
        slide
            .classList
            .remove('active')
    }
    sliderButtons.forEach((btn, index) => {
        if (index === currentIndex) {
            btn.classList.add('active-slider-lest-el')
        } else {
            btn.classList.remove('active-slider-lest-el')
        }
       
    })
    slides[currentIndex]
        .classList
        .add('active');
}

showSlide(currentIndex);

document
    .querySelector('.left')
    .addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });
document
    .querySelector('.right')
    .addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });;


const showsliderListElements = () => {
   for(let i = 0; i < images.length; i++){
    const sliderListElWrap = document.createElement('li');
    const sliderListEl = document.createElement('button');
    sliderListEl.title = i + 1
    sliderListEl.classList.add('slider-list-el')    
    sliderListElWrap.appendChild(sliderListEl);
    sliderList.appendChild(sliderListEl);

    sliderButtons.push(sliderListEl)

    sliderListEl.addEventListener('click', () => {
        showSlide(i);
    })
} 
}
showsliderListElements();



