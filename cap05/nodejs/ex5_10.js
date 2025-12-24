const prompt = require('prompt-sync')()

// Entrada
let valor = Number(prompt('Valor da Conta: R$ '))
let numParcelas = Number(prompt('Número de Parcelas: '))
// const formaPagamento = Number(prompt('[1] Boleto? ou [2] Carnê?: '))

if (Number.isInteger(valor / numParcelas)) {
    for (let i = 1; i <= numParcelas; i++) {
        console.log(`Parcela ${i}: R$ ${valor / numParcelas}`)
    }
} else {
    let valorParcela = Math.floor(valor / numParcelas)
    for (let i = 1; i <= numParcelas - 1; i++) {
        console.log(`Parcela ${i}: R$ ${valorParcela}`)
    }
    console.log(`Parcela ${numParcelas}: R$ ${(valor - (valorParcela * numParcelas - 1)) + valorParcela}`)
}