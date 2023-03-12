import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

const myCarouselElement = document.querySelector('carousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
    touch: true,
})