let slicks_rounded = document.querySelectorAll(".slick_rounded");
let slides = document.querySelectorAll(".slide");
let arrow_back = document.getElementById("arrow_back");
let arrow_forward = document.getElementById("arrow_forward");
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
  reinicioIntervalo()
}

slicks_rounded.onclick = selectSlick;

arrow_back.addEventListener("click", () => {
  slides[currentSlide].classList.remove("active")
  if(currentSlide === 0){
    currentSlide = 2;
    slides[currentSlide].classList.add("active")
  } else {
    currentSlide = currentSlide - 1;
    slides[currentSlide].classList.add("active")
  }
  reinicioIntervalo()
  console.log(currentSlide)
})

arrow_forward.addEventListener("click", () => {
  slides[currentSlide].classList.remove("active")
  if(currentSlide === 2){
    currentSlide = 0;
    slides[currentSlide].classList.add("active")
  } else {
    currentSlide = currentSlide + 1;
    slides[currentSlide].classList.add("active")
  }
  reinicioIntervalo()
  console.log(currentSlide)
})

function reinicioIntervalo(){
  // reinciamos el intervalo de tiempo para evitar que al cambiar el slider, este cambie rapidamente por el tiempo de intervalo que ya venia del slider anterior.
  clearInterval(slideInterval); 
  slideInterval = setInterval(nextSlide, 5000);
}