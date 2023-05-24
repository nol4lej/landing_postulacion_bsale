let slicks_rounded = document.querySelectorAll(".slick_rounded");
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  slicks_rounded[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
  slicks_rounded[currentSlide].classList.add("active");
}

function selectSlick(target){
  for(let i = 0; i < slicks_rounded.length; i++){
    if(slicks_rounded[i].classList.contains("active") && slides[i].classList.contains("active")){
      slicks_rounded[i].classList.remove("active");
      slides[i].classList.remove("active")
    }
  }
  slicks_rounded[target].classList.add("active");
  slides[target].classList.add("active");
  currentSlide = parseInt(target); // actualizamos al target actual 
  console.log(target)
}

slicks_rounded.onclick = selectSlick;