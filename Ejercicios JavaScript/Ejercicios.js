
console.log("----Arreglo de suma y promedio----");
    let total=0,numeros = [5,12,33,45,34,24,65,76,43];
for(let i of numeros) total+=i;
let count = numeros.length;
numeros = numeros.reduce((previous, current) => current += previous);
numeros /= count;

console.log("Valores: ",5,12,33,45,34,24,65,76,43);
console.log("Suma: ",total);
console.log("Promedio: ",numeros);

console.log("----Triangulo----");
function Triangulo(){


}