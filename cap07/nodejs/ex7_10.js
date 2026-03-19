const prompt = require('prompt-sync')()

const altura = Number(prompt("Informe a altura: "))

for (let index = 1; index <= altura; index++) {
  console.log(" ".repeat(30 + altura - index) + "*".repeat(index * 2))
}
console.log(" ".repeat(30 + (altura * 2) / 2 - 1) + "||")