const button = document.getElementById("nav_hamburger_button");
const menu = document.getElementById("nav_cont_menu");

button.addEventListener("click", () => {
    // menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    menu.classList.toggle('active');
})