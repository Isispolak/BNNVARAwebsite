const carouselSlide = document.querySelector('.carousselslider');
const carouselImages = document.querySelectorAll('.carousselslider article');

//butons 

const terug = document.querySelector('#terug');
const volgende = document.querySelector('#volgende');

//counter 
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button listeners

volgende.addEventListener('click',() => 
{
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    console.log(counter);
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})