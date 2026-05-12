// Escribí una función que reciba un array de números y devuelva:
// - El número más grande
// - Si el array está vacío, devolver null
// Usá ARROW FUNCTION.
// Pista: podés usar Math.max(...array) o un loop
// Ejemplo: encontrarMax([3, 7, 2, 9]) → 9

const encontrarMax = (listNum) => 
   {if (listNum.length === 0 ) return null; else return Math.max(...listNum);}
console.log(encontrarMax([2,5,3,1,8,9,11,17]));
console.log(encontrarMax([]));
console.log("-----------------------------------")