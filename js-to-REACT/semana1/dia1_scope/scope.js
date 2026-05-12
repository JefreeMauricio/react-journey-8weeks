// DÍA 2 - SCOPE APROBADO
// Fecha: 13/05/2026

// Ejercicio 1: Diferencia var vs let
function demostrarVar() {
  if (true) {
    var conVar = "soy var";
  }
  console.log(conVar); // "soy var" (sale del if)
}

function demostrarLet() {
  if (true) {
    let conLet = "soy let";
  }
  // console.log(conLet); // Error (descomentar da ReferenceError)
}

// Ejercicio 2: Variable en for
function bucleCorrecto() {
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
  // i no existe aquí (correcto)
}

// Ejercicio 3: Código corregido del día
const nombre = "Ana";

function mostrarMensaje(activo) {
  let mensaje;
  let resultado;

  if (activo) {
    mensaje = "Hola " + nombre;
    resultado = mensaje;
  }
  
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
  
  console.log(mensaje);
  console.log(resultado);
  return resultado;
}

mostrarMensaje(true);

console.log("✅ DÍA 2 - SCOPE APROBADO");