let slides_about = document.querySelectorAll(".about_card");
let currentAbout = 0;
let arrow_back_about = document.getElementById("arrow_back_about");
let arrow_forward_about = document.getElementById("arrow_forward_about");

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
})

function reinicioIntervalo(){
  // reinciamos el intervalo de tiempo para evitar que al cambiar el slider, este cambie rapidamente por el tiempo de intervalo que ya venia del slider anterior.
  clearInterval(slideInterval); 
  slideInterval = setInterval(nextSlide, 5000);
}

arrow_forward_about.addEventListener("click", () => {
  slides_about[currentAbout].classList.remove("active")
  if(currentAbout === 2){
    currentAbout = 0;
    slides_about[currentAbout].classList.add("active", )
  } else {
    currentAbout = currentAbout + 1;
    slides_about[currentAbout].classList.add("active")
  }
})

arrow_back_about.addEventListener("click", () => {
  slides_about[currentAbout].classList.remove("active")
  if(currentAbout === 0){
    currentAbout = 2;
    slides_about[currentAbout].classList.add("active")
  } else {
    currentAbout = currentAbout - 1;
    slides_about[currentAbout].classList.add("active")
  }
  reinicioIntervalo()
})