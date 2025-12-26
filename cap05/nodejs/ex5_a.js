const prompt = require('prompt-sync')()

// Leia nome e um numero
const fruta = prompt('Fruta: ')
const num = prompt('Número: ')


// Repetir o nome da fruta conforme o numero - utilizar o "*" 
let repeticao = ''
for (let i = 1; i < num; i++) {
    repeticao += fruta + " * "
}
console.log(`${repeticao}${fruta}`)