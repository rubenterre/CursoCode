//Validar correo electrónico

// Identificamos o formulario na árbore do DOM (index.html)
const registrationForm = document.getElementById("formulario");

// Engadimos un escoitador ao botón de enviar
registrationForm.addEventListener("submit", function(event) {
  // Prevenimos a accíon default do formulario
  event.preventDefault();

  // Tomamos o valor do input do email
  const emailInput = document.getElementById("email");
  const userEmail = emailInput.value;

  // Validamos a dirección de email
  if (isValidEmail(userEmail)) {
    // Se é valida se envía o formulario
    registrationForm.submit();
  } else {
    // Se é inválida da un erro
    const errorElement = document.getElementById("email-error");
    errorElement.textContent = "Por favor, introduce un email válido";
  }
});

// Función para validar o email cunha expresión regular
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}