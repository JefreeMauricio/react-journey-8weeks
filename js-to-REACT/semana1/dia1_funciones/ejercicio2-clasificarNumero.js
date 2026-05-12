//  Escribí una función que reciba un número y devuelva:
// - "positivo" si es > 0
// - "negativo" si es < 0  
// - "cero" si es 0
// Usá DECLARACIÓN DE FUNCIÓN (function)

function clasificarNumero(num){
    if (num>0){
        return 'positivo ';
    }else if (num<0){
        return 'negativo';
    }else{
        return 'cero';}
    
}
console.log(clasificarNumero(0));
console.log(clasificarNumero(3));
console.log(clasificarNumero(-22));
console.log("-----------------------------------")