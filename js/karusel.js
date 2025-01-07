const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");

// Arrange the slides next to each other
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove("current");
  targetSlide.classList.add("current");
};

// Click next button
nextButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current");
  const nextSlide = currentSlide.nextElementSibling;

  if (nextSlide) {
    moveToSlide(track, currentSlide, nextSlide);
  }
});

// Click prev button
prevButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current");
  const prevSlide = currentSlide.previousElementSibling;

  if (prevSlide) {
    moveToSlide(track, currentSlide, prevSlide);
  }
});
