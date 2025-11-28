const leia = require("readline-sync");

let salario, abono, novoSalario;

console.log("Digite o salário do funcionário:");
salario = leia.questionFloat()
console.log("Digite o valor do abono:");
abono = leia.questionFloat()

novoSalario = salario + abono;

console.log("O novo salário do funcionário é: " + novoSalario.toFixed(2));
