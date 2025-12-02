const prompt = require('prompt-sync')()

const salario = Number(prompt('Salário: R$ '))
const anos = Number(prompt('Anos de casa: '))

const quadrienios = Math.floor(anos / 4)
const calculo = Math.floor(anos / 4) * 0.01
const aumento = (salario * calculo) + salario

console.log(`O funcionário tem direito a ${quadrienios} quadriênio(s).`)
console.log(`Salário final: R$ ${aumento.toFixed(2)}`)