const cidade = "Pelotas"

console.log(`
  Primeira letra: ${cidade.charAt(0)}
  Última letra: ${cidade.charAt(cidade.length - 1)}
  `)

const frase = 'Jesus te ama!'
let numeroPalavras = 0

for (const caractere of frase) {
  if (caractere == " ") {
    numeroPalavras++
  }
}
console.log(`A  frase: "${frase}" contém ${numeroPalavras + 1} palavras`)