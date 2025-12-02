//Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem indicando
//  se este número é par ou ímpar e se o número é positivo ou negativo. Veja os exemplos abaixo:

const leia = require("readline-sync");

let numero;

 console.log("Digite um número inteiro");
 numero = leia.questionInt();

 if (numero % 2 == 0){
        if (numero > 0){
            console.log("Seu numero é par e positivo");   
        } 
        else{
            console.log("Seu numero é par e negativo");
        }
 }
 else {
        if (numero > 0){
            console.log("Seu numero é impar e positivo");   
        } 
        else{
            console.log("Seu numero é impar e negativo");
        }
 }
 

