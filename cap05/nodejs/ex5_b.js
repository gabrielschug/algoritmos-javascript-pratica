const prompt = require('prompt-sync')()

// Chinchilas triplicam a cada ano

// Ler numero inicial de chinchilas e anos
const num = Number(prompt('Nº Chinchilas: '))
const anos = Number(prompt('Nº Anos: '))

let soma = num
if (num > 1) {
    console.log(`\n1º Ano: ${num} Chinchilas`)
    for (let i = 1; i < anos; i++) {
        soma *= 3
        console.log(`${i + 1}º Ano: ${soma} Chinchilas`)
    }
}