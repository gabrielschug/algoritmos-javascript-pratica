const prompt = require('prompt-sync')()

// Entradas
const vlrCompra = Number(prompt('Informe o Valor da Compra: R$ '))

// Processamento
//cada parcela deve ser de no mínimo $20
//máximo de parcelas é 6

const divisaoVlrCompra = Math.floor(vlrCompra / 20) // Arrendonda as parcelas pra baixo
const numParcelas = divisaoVlrCompra == 0 ? 1 // Menos de $20 - 1x 
  : divisaoVlrCompra > 6 ? 6 // mais de $120 - 6x
    : divisaoVlrCompra // > $20 < $120 
const vlrParcela = vlrCompra / numParcelas

console.log(`Pode pagar em ${numParcelas}x de R$ ${vlrParcela.toFixed(2)}`)