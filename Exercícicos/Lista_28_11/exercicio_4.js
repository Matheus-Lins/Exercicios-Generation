const leia = require("readline-sync");

let n1,n2,n3,n4, diferença;

console.log("digite o primeiro número");
n1 = leia.questionInt()

console.log("digite o segundo número");
n2 = leia.questionInt()

console.log("digite o terceiro número");
n3 = leia.questionInt()

console.log("digite o quarto número");
n4 = leia.questionInt()

diferença = (n1 * n2) - (n3 * n4);

console.log("A diferença do produto entre o n1 e n2 pelo produto entre o n3 e o n4 é: " + diferença);


