const prompt = require('prompt-sync')()

// Ler no produto de um produto e o nº de num
const produto = prompt("Produto: ")
let num = Number(prompt("Nº de num: "))

if (num == 1) {
    console.log("-".repeat(19))
    console.log("| " + produto.padEnd(15) + " |")
    console.log("-".repeat(19))
} else {
    for (let i = 1; i <= num / 2; i++) {
        console.log("-".repeat(37))
        console.log(`| ${produto.padEnd(15)} | ${produto.padEnd(15)} |`)
    }
    if (num % 2 == 1) {
        console.log("-".repeat(37))
        console.log("| " + produto.padEnd(15) + " |")
        console.log("-".repeat(19))
    }
}