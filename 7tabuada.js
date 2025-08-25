const prompt = require('prompt-sync')();

console.log("--- Gerador de Tabuada Interativa ---");
const numero = parseInt(prompt("Digite o número para gerar a tabuada: "));


if (isNaN(numero)) {
    console.log("Erro: Por favor, digite um número válido.");
} else {

    console.log("\nEscolha a operação desejada:");
    console.log("1. Adição (+)");
    console.log("2. Subtração (-)");
    console.log("3. Multiplicação (*)");
    console.log("4. Divisão (/)");

    const operacao = prompt("Digite o número ou o símbolo da operação: ");


    let simboloOperacao = '';
    let nomeOperacao = '';


    switch (operacao) {
        case '1':
        case '+':
            simboloOperacao = '+';
            nomeOperacao = 'Adição';
            console.log(`\n--- Tabuada de ${nomeOperacao} do ${numero} ---`);

            for (let i = 1; i <= 10; i++) {
                const resultado = numero + i;
                console.log(`${numero} ${simboloOperacao} ${i} = ${resultado}`);
            }
            break;

        case '2':
        case '-':
            simboloOperacao = '-';
            nomeOperacao = 'Subtração';
            console.log(`\n--- Tabuada de ${nomeOperacao} do ${numero} ---`);
            for (let i = 1; i <= 10; i++) {
                const resultado = numero - i;
                console.log(`${numero} ${simboloOperacao} ${i} = ${resultado}`);
            }
            break;

        case '3':
        case '*':
            simboloOperacao = '*';
            nomeOperacao = 'Multiplicação';
            console.log(`\n--- Tabuada de ${nomeOperacao} do ${numero} ---`);
            for (let i = 1; i <= 10; i++) {
                const resultado = numero * i;
                console.log(`${numero} ${simboloOperacao} ${i} = ${resultado}`);
            }
            break;

        case '4':
        case '/':
            simboloOperacao = '/';
            nomeOperacao = 'Divisão';
            console.log(`\n--- Tabuada de ${nomeOperacao} do ${numero} ---`);
            for (let i = 1; i <= 10; i++) {
                const resultado = numero / i;

                console.log(`${numero} ${simboloOperacao} ${i} = ${resultado.toFixed(2)}`);
            }
            break;

        default:

            console.log("Operação inválida! Por favor, escolha uma das opções acima.");
            break;
    }
}