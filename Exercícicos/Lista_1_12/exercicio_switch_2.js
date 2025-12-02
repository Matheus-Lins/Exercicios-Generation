//Com base na tabela abaixo, escreva um algoritmo que leia o Nome do Colaborador (string), 
// o Código do Cargo do Colaborador (número inteiro entre 1 e 6) e o Salário (número real). 
// A seguir, mostre na tela o Nome do Colaborador, o Cargo e o novo Salário reajustado.

const leia = require("readline-sync");

let nomeC, codigo, salario,novo

console.log("Digite seu nome");
nomeC = leia.question();
console.log("");

console.log("Digite o codigo do cargo");

console.log("| codigo do cargo |      Cargo       | Percentual do Reajuste |");
console.log("|        1        |     Gerente      |          10%           |");
console.log("|        2        |     Vendedor     |          7%            |");
console.log("|        3        |    Supervisor    |          9%            |");
console.log("|        4        |     Motorista    |          6%            |");
console.log("|        5        |    Estoquista    |          5%            |");
console.log("|        6        |   Técnico de TI  |          8%            |");
console.log("---------------------------------------------------------------");

codigo = leia.questionInt();
console.log("Digite o salario");
salario = leia.questionFloat();



switch(codigo){
    case 1:
        novoSalario = salario + (salario * 0.10)
        console.log(nomeC,", cargo gerente, com salario e reajuste recebe R$"+ novoSalario.toFixed(2));
        break;
    case 2:
        novoSalario = salario + (salario * 0.07)
        console.log(nomeC,", cargo venderdor, com salario e reajuste recebe R$"+ novoSalario.toFixed(2));
        break;
    case 3:
        novoSalario = salario + (salario * 0.09)
        console.log(nomeC,", cargo surpevisor, com salario e reajuste recebe R$"+ novoSalario.toFixed(2));
        break;
    case 4:
        novoSalario = salario + (salario * 0.06)
        console.log(nomeC,", cargo motorista, com salario e reajuste recebe R$"+ novoSalario.toFixed(2));
        break;
    case 5:
        novoSalario = salario + (salario * 0.05)
        console.log(nomeC,", cargo estoquista, com salario e reajuste recebe R$"+ novoSalario.toFixed(2));
        break;
    case 6:
        novoSalario = salario + (salario * 0.08)
        console.log(nomeC,", cargo tecnico de TI, com salario e reajuste recebe R$"+ novoSalario.toFixed(2));
        break;
    default:
        console.log("Codigo do cargo invalido");
}




