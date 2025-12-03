const prompt = require('prompt-sync')()

// Entradas
const centena = Number(prompt('Informe a centena: '))

if (centena < 100 || centena > 999) {
  console.log(`O valor informado não é uma centena válida!`)
  return
}

let resto
const num1 = Math.floor(centena / 100)
resto = centena % 100
const num2 = Math.floor(resto / 10)
const num3 = resto % 10

console.log(`${num3}${num2}${num1}`)