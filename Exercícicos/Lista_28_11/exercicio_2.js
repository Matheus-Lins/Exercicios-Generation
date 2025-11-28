const leia = require("readline-sync");

let primeiraNota, segundaNota, terceiraNota, quartaNota, mediaFinal;

console.log("Digite a primeira nota:");
primeiraNota = leia.questionFloat()
console.log("Digite a segunda nota:");
segundaNota = leia.questionFloat()
console.log("Digite a terceira nota:");
terceiraNota = leia.questionFloat()
console.log("Digite a quarta nota:");
quartaNota = leia.questionFloat()

mediaFinal = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4;

console.log("Média final: " + mediaFinal.toFixed(1));
