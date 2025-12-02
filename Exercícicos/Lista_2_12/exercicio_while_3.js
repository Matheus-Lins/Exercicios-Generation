const leia = require("readline-sync");

let idade = 0
let condicao = true
let menor21 = 0
let maior50 = 0 


while(condicao){ 
    idade = leia.questionInt("Digite uma idade: ");

    if(idade < 21 && idade > 0){
        menor21 ++;
    }

    if(idade > 50){
        maior50 ++;
    }

    if(idade < 0){
        condicao = false
    }

}

console.log("Total de pessoas menores que 21 anos: %d", menor21);
console.log("Total de pessoas maiores que 50 anos: %d", maior50);

