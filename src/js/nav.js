const button = document.getElementById("nav_hamburger_button");
const menu = document.getElementById("nav_cont_menu");

button.addEventListener("click", () => {
    menu.style.transition = "height 0.3s ease, opacity 0.3s ease";
    // menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    menu.classList.toggle('active');
})

window.addEventListener("resize", () => {
    if(innerWidth > 768){
        menu.style.transition = "none";
    }
    if(menu.classList.contains = "active"){
        menu.classList.remove("active");
    }
})