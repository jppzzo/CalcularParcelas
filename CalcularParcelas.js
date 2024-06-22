const prompt = require('prompt-sync')();

function processarTransacao(valor) {
    console.log(`Processando transação de R$${valor.toFixed(2)}`);
}

function consultarSaldo(numeroCartao) {
    console.log(`Consultando saldo do cartão ${numeroCartao}`);
}

function calcularParcelas(valor, quantidadeParcelas) {
    let custoParcela = valor / quantidadeParcelas;

    let adicionarSeguro = prompt("Deseja adicionar seguro do cartão? (sim/não): ").toLowerCase();
    if (adicionarSeguro === "sim") {
        custoParcela += 20;
    }

    return custoParcela.toFixed(2);
}

function iniciarCompra() {
    let valorCompra = parseFloat(prompt("Digite o valor da compra: "));
    let parcelas = parseInt(prompt("Digite a quantidade de parcelas desejadas: "));

    if (!isNaN(valorCompra) && !isNaN(parcelas) && parcelas > 0) {
        let custoParcela = calcularParcelas(valorCompra, parcelas);
        console.log(`Custo por parcela: R$${custoParcela}`);
    } else {
        console.log("Por favor, digite valores numéricos válidos.");
    }
}

let opcoes = {
    1: processarTransacao,
    2: consultarSaldo,
    3: iniciarCompra
};

let opcaoEscolhida = 3;

if (opcoes[opcaoEscolhida]) {
    opcoes[opcaoEscolhida]();
} else {
    console.log("Opção inválida.");
}
