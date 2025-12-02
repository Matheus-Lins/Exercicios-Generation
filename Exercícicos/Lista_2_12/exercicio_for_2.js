const leia = require("readline-sync");

let num 
let pares = 0
let impares = 0

for (let i = 1; i <= 10; i++){
    console.log("Digite o %d", i , "º", "número: ");
    num = leia.questionInt();
        if(num % 2 == 0){
            pares++
        }
        else{
            impares++
        }           
}

console.log("Total de números pares: %d", pares);
console.log("Total de números impares: %d", impares);

