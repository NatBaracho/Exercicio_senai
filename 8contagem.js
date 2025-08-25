const prompt = require('prompt-sync')();

const numeros = [];

for(let i = 10; i >= 0; i --){
    numeros.push(i);
}
console.log(numeros.join(' '));