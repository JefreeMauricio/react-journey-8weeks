////Esta función es impura. Reescribila como PURA:
//let impuesto = 0.21;

//function calcularPrecioFinal(precio) {
  //return precio + (precio * impuesto);
//}

const calcular_Precio_Final = (precio, impuesto) => precio +  (precio* impuesto);
console.log(calcular_Precio_Final(1850 , 0.21));