const prompt = require('prompt-sync')();

let par = []

let numero = 1;

while (numero <= 50) {
  if (numero % 2 === 0) {
    par.push(numero)

  }
  numero++;
  
}

console.log(par.join(" "));