const prompt = require('prompt-sync')()

// Entrada
const valor = Number(prompt('Valor: R$ '))
const num = Number(prompt('Número de Parcelas: '))

const valorParcelas = Math.floor(valor / num) // Parceças sem decimais
const valorFinal = valorParcelas + (valor % num) // Ultima parcela com o resto

for (let i = 1; i < num; i++) { // percorre até a penultima parcela
    console.log(`${i}ª Parcela: R$ ${valorParcelas.toFixed(2)}`)
}
console.log(`${num}ª Parcela: R$ ${valorFinal.toFixed(2)}`) // ultima parcela