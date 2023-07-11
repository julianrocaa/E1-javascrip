 // EJERCICIO 1 //

let numero = 5;
function paridad(numero) {
  if (numero % 2 === 0) {
    console.log("- El número " + numero + " es PAR");
  } else {
    console.log("- El número " + numero + " es IMPAR");
  }
}

paridad(numero);

console.log("‎");

// EJERCICIO 2 //

let num1 = 25;
let num2 = 9;
function comparacion(num1, num2) {
  if (num1 > num2) {
    console.log("- El número " + num1 + " es mayor a " + num2);
  }
  if (num2 > num1) {
    console.log("- El número " + num2 + " es mayor a " + num1);
  }
  if (num1 == num2) {
    console.log("- Los números son iguales");
  }
}

comparacion(num1, num2);

console.log("‎");

// EJERCICIO 3 //

let multiplo = 9;
function multiplo5(multiplo) {
  if (multiplo > 0 && multiplo % 5 == 0) {
    console.log("- Si, el número " + multiplo + " es múltiplo de 5");
  } else {
    console.log("- No, el número " + multiplo + " no es múltiplo de 5");
  }
}

multiplo5(multiplo);

console.log("‎");

// EJERCICIO 4 //

comienzo = 0;
fin = 11;
function ciclos(comienzo, fin) {
  while (comienzo < fin) {
    console.log(comienzo);
    comienzo++;
  }
}

ciclos(comienzo, fin);

console.log("‎");

// EJERCICIO 5 //

comienzo1 = 0;
texto = "- Innmediato";
repeticion = 19;
function rep(texto, repeticion, comienzo1) {
  while (comienzo1 < repeticion) {
    console.log(texto);
    comienzo1++;
  }
}

rep(texto, repeticion, comienzo1);

console.log("‎");

// EJERCICIO 6 //

let efectos = ["Distorsión", "Delay", "Reverb", "Chorus", "Wha-Wha"];
function array(efectos) {
  console.log(efectos);
}

array(efectos);

console.log("‎");

// EJERCICIO 7 //

function lista(num3) {
  for (let i = 0; i < num3.length; i++) {
    if (i !== 4) {
      console.log(num3[i]);
    }
  }
}

const num3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
lista(num3);

console.log("‎");

// EJERCICIO 8 //

function multiplicacion(array1, num4) {
  for (let i = 0; i < array1.length; i++) {
    console.log(array1[i] * num4);
  }
}
const array1 = [2, 10, 88, 23, 17];
const num4 = 2;

multiplicacion(array1, num4);

console.log("‎");

// FIN //