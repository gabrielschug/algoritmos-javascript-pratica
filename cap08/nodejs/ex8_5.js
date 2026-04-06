const prompt = require('prompt-sync')()


const vinhos = [
  { marca: 'Garibaldi', tipo: 'Tinto  Suave', preco: 15.90 },
  { marca: 'Contry Wine', tipo: 'Branco Suave', preco: 16.90 },
  { marca: 'Jota Pe', tipo: 'Tinto Seco', preco: 20.90 },
  { marca: 'Sangue de Boi', tipo: 'Tinto Suave', preco: 14.90 },
  { marca: 'Chalise', tipo: 'Branco Seco', preco: 19.90 }
]

function geraTitulo(titulo) {
  console.log(`\n===< ${titulo} >===\n${'-'.repeat(40)}`)
}

function geraCabecalho() {
  console.log('Marca............... Tipo................ Preço R$:')
}

function incluir() {
  geraTitulo('Inclusão de Vinhos')

  const marca = prompt('Marca...: ')
  const tipo = prompt('Tipo....: ')
  const preco = Number(prompt('Preço R$: '))
  vinhos.push({ marca, tipo, preco })
  console.log('\n✅ Ok! vinho cadastrado com sucesso')
}

function listar() {
  geraTitulo('Lista de Vinhos Cadastrados')
  geraCabecalho()
  for (const vinho of vinhos) {
    console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} R$ ${vinho.preco.toFixed(2).padStart(6)}`)
  }
}

function pesquisar() {
  geraTitulo('Pesquisa por Tipo de Vinho')

  const pesquisa = prompt('Tipo: ')

  let contador = 0
  geraCabecalho()

  for (const vinho of vinhos) {
    if (vinho.tipo.toUpperCase().includes(pesquisa.toUpperCase())) {
      console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} R$ ${vinho.preco.toFixed(2).padStart(6)}`)
      contador++
    }
  }

  if (contador == 0) {
    console.log(`❌ Não há vinhos do tipo ${pesquisa}`)
  }

}

function calcularMedia() {
  geraTitulo('Média e Destaques do Cadastro de Vinhos')

  const quantidadeVinhos = vinhos.length
  if (quantidadeVinhos == 0) {
    console.log('❌ Não há vinhos cadastrados')
    return
  }

  let total = 0
  for (const vinho of vinhos) {
    total += vinho.preco
  }

  const media = total / quantidadeVinhos

  const vinhosOrdenados = [...vinhos] // CRIA CÓPIA com spread

  vinhosOrdenados.sort((a, b) => a.preco - b.preco)

  const menor = vinhosOrdenados[0]
  const maior = vinhosOrdenados[quantidadeVinhos - 1]

  console.log(`Preço Médio dos Vinhos R$: ${media.toFixed(2)}`)
  console.log(`Menor Valor R$: ${menor.preco.toFixed(2)} - ${menor.marca}`)
  console.log(`Maior Valor R$: ${maior.preco.toFixed(2)} - ${maior.marca}`)

}






















// PROGRAMA PRINCIPAL

do {
  geraTitulo('🍇 CADASTRO DE VINHOS')
  console.log('1. Inclusão de Vinhos')
  console.log('2. Listagem de Vinhos')
  console.log('3. Pesquisa por Tipo')
  console.log('4. Média e Destaques')
  console.log('5. Finalizar')

  const opcao = Number(prompt('Opção: '))

  if (opcao == 1) {
    incluir()
  } else if (opcao == 2) {
    listar()
  } else if (opcao == 3) {
    pesquisar()
  } else if (opcao == 4) {
    calcularMedia()
  } else {
    break
  }
} while (true)