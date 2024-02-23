// alert("Hola este es mi Javascript");

// let nombre = "Marta"; // se puede modificar 

// var nombre1 = "Marta";

// const nombre2 = "Marta"; // no se le puede asignar otra variable a una constante

// console.log(nombre)
// console.log(nombre1)
// console.log(nombre2)

// SELECCIONAR ELEMENTOS

// let contenidoTitulo = "Nombre";

// let titulo = document.querySelector(".logo. fuente-titulo.innerHTML = conenidoTitulo")

// CONDICIONALES

// let textoTitulo = titulo.innerText;
// console.log(textoTitulo)

// if(textoTitulo == "Nombre") {
//     titulo.innerHTML = "otro";
// } else {
//    console.log = "No se cumple";
// }

// Obtener el elemento del título
// const titulo = document.getElementById('titulo');

// Definir una variable para la condición
// const condicion = true; // Cambiar esto según tu condición

// Verificar la condición y modificar el texto del título
// if (condicion) {
//     titulo.textContent = 'Acerca de mí (Condición cumplida)';
// } else {
//     titulo.textContent = 'Acerca de mí (Condición no cumplida)';
// }

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("nav_visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("nav_visible");
})

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});