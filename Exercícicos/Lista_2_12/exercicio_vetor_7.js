const leia = require("readline-sync");

const vetor = [2, 5, 1, 3, 4, 9 ,7, 8, 10, 6];

let num

num = leia.questionInt("Digite o numero que voce deseja encontrar: ");

for(let i = 0; i < vetor.length; i++){
    if(vetor[i] == num){
       console.log("O número %d", num,"esta localizado na posição ", i);
       break;
  
    }else if(i == vetor.length -1){
        console.log("O numero %d", num,"não foi encontrado!" );     
        break;
    }                           

}

