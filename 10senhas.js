const prompt = require('prompt-sync')();

let acertou = false
const numeroSecreto = 1234

while (acertou === false){
    let palpite = parseInt(prompt("Digite a senha sercreto: "))

    if (palpite === numeroSecreto){
        console.log ("Parabéns você acertou");
        acertou = true
    }else {
        console.log(" Errou tente novamente")
    }
}

