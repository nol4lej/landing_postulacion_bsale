let slicks_rounded = document.querySelectorAll(".slick_rounded");
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);

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

  // reinciamos el intervalo de tiempo para evitar que al cambiar el slider, este cambie rapidamente por el tiempo de intervalo que ya venia del slider anterior.
  clearInterval(slideInterval); 
  slideInterval = setInterval(nextSlide, 5000);
}

slicks_rounded.onclick = selectSlick;