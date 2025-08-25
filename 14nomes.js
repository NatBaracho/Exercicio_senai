const prompt = require('prompt-sync')();

let resposta; 

console.log("--- Programa para Digitar Nomes ---");

do {
  const nome = prompt('Digite um nome: ');
  console.log(`Você digitou o nome: ${nome}`);

  resposta = prompt('Deseja digitar outro nome? (sim/não): ');

} while (resposta.toLowerCase() === 'sim');

console.log("\nOk, programa encerrado. Até a próxima!");