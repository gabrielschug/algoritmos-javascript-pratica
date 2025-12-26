const prompt = require('prompt-sync')()

const valor = Number(prompt('Valor Total: '))
const num = Number(prompt('Nº de Parcelas: '))

const parcela = Math.floor(valor / num)
const ultima = parcela + (valor % num)

console.log(`1ª Parcela: ${ultima.toFixed(2)}`)
for (let i = 2; i <= num; i++) {
    console.log(`${i}ª Parcela: ${parcela.toFixed(2)}`)
}