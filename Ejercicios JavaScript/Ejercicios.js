
console.log("----Arreglo de suma y promedio----");
    let total=0,numeros = [5,12,33,45,34,24,65,76,43];
for(let i of numeros) total+=i;
let count = numeros.length;
numeros = numeros.reduce((previous, current) => current += previous);
numeros /= count;

console.log("Valores: ",5,12,33,45,34,24,65,76,43);
console.log("Suma: ",total);
console.log("Promedio: ",numeros);


function conversion(){
    var dolares = 100;
    var T_lempiras;
    var T_euros;
    var T_pesos;
    
    T_lempiras = dolares*24.13;
    T_euros = dolares*0.83;
    T_pesos = dolares * 20.28;
    
    console.log("Lempiras"+T_lempiras+" "+"Euros"+T_euros+" "+"pesos"+T_pesos+" ");
    console.log("----Conversion----");
    }

   
    function triangulo(){
        var a=3;
        var b=4;
        var c=5;
    
        if(a==b && a==c && b==c){
            console.log("Equilatero");
            }
            else if (a==b && a==c && b==c){
            console.log("Isosceles");    
            }
            else{
            console.log("Escaleno");
            }
            console.log("----Triangulo----");
    }