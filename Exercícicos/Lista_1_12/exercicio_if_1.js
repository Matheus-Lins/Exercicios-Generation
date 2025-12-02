const leia = require("readline-sync");
let a, b, c, soma;


console.log("Digite o Valor de A");
a = leia.questionInt()
console.log("Digite o Valor de B");
b = leia.questionInt()
console.log("Digite o Valor de C");
c = leia.questionInt()

soma = a + b 

if (soma > c){
    console.log(a, " + ", b, " = ", soma, ">", c);
    console.log("A soma de A e B é maior que C");
}
else if (soma < c){
    console.log(a, " + ", b, " = ", soma, "<", c);
    console.log("A soma de A e B é menor que C");
}
else {
    console.log(a, " + ", b, " = ", soma, "=", c);
    console.log("A soma de A e B é igual a C");
}    



