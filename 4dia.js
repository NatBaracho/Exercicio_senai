const prompt = require('prompt-sync')();

let semanas = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", ];

let dias = parseInt(prompt("Digite um número de 1 a 7 para ver o dia da semana: "));

switch (dias) {
    case 1:
        console.log(semanas[0]);
        break;
    case 2:
        console.log(semanas[1]);
        break;
    case 3:
        console.log(semanas[2]);
        break;
    case 4:
        console.log(semanas[3]);
        break;
    case 5:
        console.log(semanas[4]);
        break;
    case 6:
        console.log(semanas[5]);
        break;
    case 7:
        console.log(semanas[6]);
        break;
    default:
        console.log("Número inválido. Por favor, digite um número entre 1 e 7.");
}