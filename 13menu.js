const prompt = require('prompt-sync')(); 
let saldo = 2000.00;
let opcao;

function exibirMenu() {
  console.log(
    "\n---- Menu do Banco ----\n" +
    "1 - Ver Saldo\n" +
    "2 - Sacar\n" +
    "3 - Depositar\n" +
    "4 - Sair\n"
  );
  return prompt("Escolha uma opção: ");
}

function verSaldo() {

  console.log(`\nSeu saldo atual é de ${saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`);
}

function sacar() {
  const valorSaque = parseFloat(prompt("Digite o valor que deseja sacar: "));

  if (isNaN(valorSaque) || valorSaque <= 0) {
    console.log("\n Valor inválido. Por favor, tente novamente.");
    return;
  }
  if (valorSaque > saldo) {
    console.log("\n Saldo insuficiente para realizar o saque.");
  } else {
    saldo -= valorSaque;
    const valorFormatado = valorSaque.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    console.log(`\n Saque de ${valorFormatado} realizado com sucesso.`);
  }
}

function depositar() {
  const valorDeposito = parseFloat(prompt("Digite o valor que deseja depositar: "));

  if (isNaN(valorDeposito) || valorDeposito <= 0) {
    console.log("\n Valor inválido. Por favor, digite um número positivo.");
    return;
  }
  saldo += valorDeposito;
  const valorFormatado = valorDeposito.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  console.log(`\n Depósito de ${valorFormatado} realizado com sucesso.`);
}


while (opcao !== '4') {
  opcao = exibirMenu();
  switch (opcao) {
    case '1':
      verSaldo();
      break;

    case '2':
      sacar();
      break;

    case '3':
      depositar();
      break;

    case '4':
      console.log("\nSaindo do sistema...");
      break;

    default:
      console.log("\n Opção inválida. Tente novamente.");
      break;
  }

  if (opcao !== '4') {
    prompt("\nPressione ENTER para continuar...");
  }
}

console.log("\nObrigado e volte sempre!");