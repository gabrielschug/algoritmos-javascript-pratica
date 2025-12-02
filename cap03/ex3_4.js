const prompt = require('prompt-sync')()

const pesoKg = Number(prompt(`Peso da Ração(kg): `))
const consumoDiarioGr = Number(prompt(`Consumo diário (gr): `))

const pesoGr = pesoKg * 1000
const duracao = Math.floor(pesoGr / consumoDiarioGr)
const sobra = pesoGr % consumoDiarioGr

console.log(`Duração : ${duracao} dia(s).`)
console.log(`Sobra : ${sobra} grama(s).`)