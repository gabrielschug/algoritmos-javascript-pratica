const prompt = require("prompt-sync")()
// leia uma formula matematica e analise se os parenteses da formula estão corretos
// o numero de ( deve ser igual ao numero de )

const formula = prompt('Escreva a formula: ')

let parenteses = 0
for (const simbolo of formula) {
  if (simbolo === "(") {
    parenteses++
  } else if (simbolo === ")") {
    parenteses--
  }
  if (parenteses < 0) {
    break
  }
}

if (parenteses != 0) {
  console.log("FORMULA COM ERRO")
} else {
  console.log('Formula ok!')
}