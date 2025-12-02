//Com base na tabela abaixo, escreva um algoritmo que leia o código de um item (número inteiro entre 1 e 6) e
//  a quantidade comprada deste item (número inteiro). A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.


const leia = require ("readline-sync");

let produto, quantidade, valor ;


console.log(" |===============ESCOLHA UM ITEM DO CARDÁPIO=============|");
console.log(" | codigo do produto |      Produto     | Preço unitário |");
console.log(" |        1          |  Cachorro quente |    R$ 10.00    |");
console.log(" |        2          |     X-Salada     |    R$ 15.00    |");
console.log(" |        3          |     X-Bacon      |    R$ 18.00    |");
console.log(" |        4          |      Bauru       |    R$ 12.00    |");
console.log(" |        5          |   Refrigerante   |    R$ 8.00     |");
console.log(" |        6          |  Suco de laranja |    R$ 13.00    |");

console.log("Digite o numero do produto");
produto = leia.questionInt();
console.log("Quanto você quer desse produto?");
quantidade = leia.questionInt();

switch(produto){
    case 1:
        console.log("%d", quantidade, "cachorro(s) quente(s) ficam R$"+ quantidade * 10.00);
        break;
    case 2:
        console.log("%d", quantidade, "X-Salada(s) custam R$"+ quantidade * 15.00);
        break;
    case 3:
        console.log("%d", quantidade, "X-Bacon(s) custam R$"+ quantidade * 18.00);
        break;
    case 4:
        console.log("%d", quantidade, "Bauru(s) custam R$"+ quantidade * 12.00);
        break;
    case 5:
        console.log("%d", quantidade, "Refrigerante(s) custam R$"+ quantidade * 8.00);
        break;
    case 6:
        console.log("%d" ,quantidade, "Suco(s) de laranja custam R$"+ quantidade * 13.00);
        break;
    default:
        console.log("Numero do produto invalido");
        
        

}







