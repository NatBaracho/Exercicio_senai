const prompt = require('prompt-sync')();

const cardapio = ["Pizza", "Hambúrguer", "Salada", "Sair"];


console.log(
`----- MENU-------
1. Pizza
2. Hambúrguer
3. Salada
4. Sair

`);


let escolha = parseInt(prompt("Escolha seu prato (1-3) e 4 para sair: "));

switch (escolha) {
    case 1:
        console.log(`Você escolheu: ${cardapio[0]}`);
        break;
    case 2:
        console.log(`Você escolheu: ${cardapio[1]}`);
        break;
    case 3:
        console.log(`Você escolheu: ${cardapio[2]}`);
        break;
    case 4: // Adicionado o caso para Sair
        console.log(cardapio[3]);
        break;
    default: 
        console.log("Opção inválida. Por favor, escolha um número do menu.");
}