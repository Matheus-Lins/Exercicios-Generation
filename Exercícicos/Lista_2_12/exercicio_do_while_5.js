const leia = require("readline-sync");

let condicao = true
let num
let soma = 0 

do{
    num = leia.questionInt("Digite um numero: ");

    if(num > 0){
        soma = soma + num
    } 

    if(num == 0){
        condicao = false
    }

}while(condicao);

console.log("A soma dos numero positivos é: %d", soma);



