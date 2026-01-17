const prompt = require('prompt-sync')()

const clientes = []

// entrada em do while
do {
  const nome = prompt('Nome: ')
  // se 'fim' → break
  if (nome.toUpperCase() === 'FIM') {
    break
  }
  const idade = Number(prompt('Idade: '))

  // add nome e idade em cliente
  clientes.push({ nome, idade })
} while (true)

// titulo preferencial
console.log("\nFILA PREFERENCIAL\n" + '-'.repeat(30))

//  filtra idade >=60
const filaPreferencial = clientes.filter(cliente => cliente.idade >= 60)
filaPreferencial.forEach((fila, i) => {
  console.log(`${i + 1}. ${fila.nome}`)
})

console.log("\nFILA NORMAL\n" + '-'.repeat(30))
const filaNormal = clientes.filter(cliente => cliente.idade < 60)
filaNormal.forEach((fila, i) => {
  console.log(`${i + 1}. ${fila.nome}`)
})

console.log('\nVolte sempre!\n')
// lista com for each