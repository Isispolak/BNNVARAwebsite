const carousel = document.querySelector('.carousel');
let slides = document.querySelectorAll('.carousel li');

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

prevButton.addEventListener('click', () => {
  carousel.insertBefore(slides[slides.length - 1], slides[0]);
  slides = document.querySelectorAll('.carousel li');
});

nextButton.addEventListener('click', () => {
  carousel.appendChild(slides[0]);
  slides = document.querySelectorAll('.carousel li');
});
