const prompt = require('prompt-sync')();

const catalogoFilmes = {
    "Ação e Aventura": [
        { titulo: "Mad Max: Estrada da Fúria", ano: 2015 },
        { titulo: "John Wick: De Volta ao Jogo", ano: 2014 },
        { titulo: "Top Gun: Maverick", ano: 2022 },
    ],
    "Comédia": [
        { titulo: "Intocáveis", ano: 2011 },
        { titulo: "As Branquelas", ano: 2004 },
        { titulo: "O Auto da Compadecida", ano: 2000 },
    ],
    "Drama": [
        { titulo: "Um Sonho de Liberdade", ano: 1994 },
        { titulo: "À Espera de um Milagre", ano: 1999 },
        { titulo: "A Lista de Schindler", ano: 1993 },
    ]
};

console.log("Gêneros disponíveis: Ação e Aventura, Comédia, Drama");

let escolha = prompt("Escolha o gênero do filme: ");


function exibirFilmes(genero, listaDeFilmes) {

    console.log(`\n--- Filmes de ${genero} ---`);

    for (let i = 0; i < listaDeFilmes.length; i++) {
        const filmeAtual = listaDeFilmes[i];
        console.log(`- ${filmeAtual.titulo} (${filmeAtual.ano})`);
    }
}

switch (escolha.toLowerCase()) {

    case 'ação e aventura':
    case 'acao e aventura':
    case 'ação':
    case 'acao':
    case 'aventura':
        exibirFilmes("Ação e Aventura", catalogoFilmes["Ação e Aventura"]);
        break;

    case 'comédia':
    case 'comedia':
        exibirFilmes("Comédia", catalogoFilmes["Comédia"]);
        break;

    case 'drama':
        exibirFilmes("Drama", catalogoFilmes["Drama"]);
        break;

    default:
        console.log("Gênero inválido. Por favor, escolha um dos gêneros disponíveis.");
        break;
}