const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

// Move to a specific slide
function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Move to the next slide
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length; // Loop back to start
  updateCarousel();
});

// Move to the previous slide
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length; // Loop to end
  updateCarousel();
});
