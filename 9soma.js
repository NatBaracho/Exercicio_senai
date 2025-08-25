const prompt = require('prompt-sync')();

let soma = 0

for(i = 1; i <= 100; i++){
    soma += i;
   
}
console.log("A soma de todos os números de 1 a 100 é:", soma);