const prompt = require('prompt-sync')();

let nota = parseFloat(prompt("Digite sua nota: "));

if (nota < 6){
    console.log("Reprovado");
}else if (nota <= 7.9){
    console.log("Recuperação");
}else{
    console.log("Aprovado");
}