const carousel = document.querySelector(".carousel");
let slides = Array.from(carousel.children);

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

prevButton.addEventListener("click", () => {
  carousel.style.setProperty('--slideX', '50%');
  carousel.classList.add('animate');

  carousel.ontransitionend = () => {
    carousel.classList.remove('animate');
    carousel.insertBefore(slides[slides.length - 1], slides[0]);
    slides = document.querySelectorAll(".carousel li");
  }
});

nextButton.addEventListener("click", () => {
  carousel.style.setProperty('--slideX', '-50%');
  carousel.classList.add('animate');

  carousel.ontransitionend = () => {
    carousel.classList.remove('animate');
    carousel.appendChild(slides[0]);
    slides = document.querySelectorAll(".carousel li");
  }
});

