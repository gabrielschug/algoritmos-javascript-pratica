const prompt = require('prompt-sync')()

// Entradas
const numPessoas = Number(prompt('Informe o número de Pessoas: '))
const numPeixes = Number(prompt('Informe o número de Peixes: '))

// Processamento
let pagar

if (numPeixes <= numPessoas) {
  pagar = numPessoas * 20
} else {
  pagar = ((numPeixes - numPessoas) * 12) + (numPessoas * 20)
}

// Saída
console.log(`\nTotal a Pagar R$ ${pagar.toFixed(2)}\n`)