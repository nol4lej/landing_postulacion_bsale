document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll(".slide");
    let slicks_rounded = document.querySelectorAll("slick_rounded");
    let currentSlide = 0;
    let currentSlick = 0;
    const slideInterval = setInterval(nextSlide, 5000);
  
    function nextSlide() {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");

      slicks_rounded[currentSlick].classList.remove("active");
      currentSlick = (currentSlick + 1) % slicks_rounded.length;
      slicks_rounded[currentSlick].classList.add("active");
    }
});
  