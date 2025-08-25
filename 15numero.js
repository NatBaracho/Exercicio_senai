const prompt = require('prompt-sync')();
let numero;

do {
  numero = parseFloat(prompt("Digite um número positivo: "));
  if (numero <= 0) {
    console.log("Número inválido. Tente novamente.");
  }
} while (numero <= 0);

console.log("Obrigado! Você digitou um número positivo: " + numero);