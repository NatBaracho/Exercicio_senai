const prompt = require('prompt-sync')();


let crianca = 'criança';
let adolescente = 'adolescente';
let adulto = 'adulto';

let idade = parseInt(prompt("Digite uma idade: "));

if (idade <= 12) {
    console.log(crianca);
} else if (idade <= 17) {
    console.log(adolescente);
} else {
    console.log(adulto);
}
