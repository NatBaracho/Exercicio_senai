const prompt = require('prompt-sync')();

let numero = parseFloat(prompt("Digite um número: "));

if (numero % 2 === 0) {
    console.log("Este número é par.");
} else {
    console.log("Este número é ímpar.");
}