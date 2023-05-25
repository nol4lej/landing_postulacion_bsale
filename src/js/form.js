const inputName = document.getElementById("textName");
const emailInput = document.getElementById("email");
const telInput = document.getElementById("tel");

inputName.addEventListener("input", function(event) {
    let textoEscrito = event.target.value;
    let textoFiltrado = textoEscrito.replace(/[^A-Za-z ]/g, '');
    event.target.value = textoFiltrado;
  });

  emailInput.addEventListener("input", function(event) {
    var textoEscrito = event.target.value;
    var correoExpresionRegular = /^[a-z_\-\.]+@[a-z_\-\.]+\.[a-z]{2,}$/;
    
    if (!correoExpresionRegular.test(textoEscrito)) {
      event.target.classList.add("invalid");
    } else {
      event.target.classList.remove("invalid");
    }
});

telInput.addEventListener("input", function(event) {
    let telEscrito = event.target.value;
    let numerosExpresionRegular = /^[0-9]+$/;
    
    if (!numerosExpresionRegular.test(telEscrito)) {
      event.target.value = telEscrito.replace(/\D/g, '');
    }
});