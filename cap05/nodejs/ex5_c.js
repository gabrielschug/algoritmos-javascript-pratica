const prompt = require('prompt-sync')()

const num = Number(prompt(`Número: `))

let divisores = '1, '
let soma = 1
const metade = num / 2

for (let i = 2; i < (metade); i++) {
    if (num % i == 0) {
        divisores += i + ", "
        soma += i
    }
}
soma += metade
const res = soma == num ? 'Perfeito' : 'Imperfeito'

console.log(` Divisores do ${num}: ${divisores}${metade} (Soma: ${soma})\n ${num} É um Número ${res}`)