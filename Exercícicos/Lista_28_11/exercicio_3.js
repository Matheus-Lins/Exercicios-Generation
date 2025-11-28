
const leia = require("readline-sync");

let  salarioBruto, adicionalNoturno, horasExtras, descontColaborador, salarioLiquido;

console.log("Digite o salário bruto do colaborador:");
salarioBruto = leia.questionFloat()
console.log("Digite o valor do adicional noturno:");   
adicionalNoturno = leia.questionFloat()
console.log("Digite o valor das horas extras:");
horasExtras = leia.questionFloat()
console.log("Digite o valor do desconto do colaborador:");
descontColaborador = leia.questionFloat()

salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontColaborador;

console.log("Salário Líquido: " + salarioLiquido.toFixed(2));
