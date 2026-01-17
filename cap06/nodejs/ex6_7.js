const prompt = require('prompt-sync')()

const saques = []
// ler valor solicitado até digitar 0
do {
  const valor = Number(prompt('Saque R$: '))
  if (valor === 0) {
    break
  }
  saques.push(valor)

  valor % 10 == 0 ? console.log(`Saque realizado`) : console.log(`ERRO... Valor deve ser múltiplo de $10`)

} while (true);

const saquesValidos = saques.filter(saque => saque % 10 === 0)
const somaSaques = saquesValidos.reduce((acc, saque) => acc + saque, 0)

somaSaques > 0 ?
  console.log("\nSaques Válidos\n" + '-'.repeat(30) + '\nR$ ' + saquesValidos.join(' - R$ ') + '\n' + '-'.repeat(30) + '\nTotal dos Saques: R$ ' + somaSaques.toFixed(2))
  : console.log('\nNão houve saque.')




const saquesInvalidos = saques.length - saquesValidos.length
saquesInvalidos > 0 ?
  console.log("Total de Saques Inválidos: " + saquesInvalidos)
  : console.log('')

// listar saques validose soma

// contar saques inválidos