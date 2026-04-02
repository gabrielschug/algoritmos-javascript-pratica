// FUNÇÕES
const classificarVeiculo = (ano) => {
  const anoAtual = new Date().getFullYear() // obtém ano atual
  let classificar
  if (ano == anoAtual) {
    classificar = 'Novo'
  } else if (ano == anoAtual - 1 || ano == anoAtual - 2) {
    classificar = 'Seminovo'
  } else {
    classificar = 'Usado'
  }

  return classificar // retorna a classificação
}

const calcularEntrada = (valor, status) => status == 'Novo' ? valor * 0.5 : valor * 0.3


// ENTRADA DE ELEMENTOS
const formulario = document.querySelector("form")
const resposta1 = document.querySelector("#outResposta1")
const resposta2 = document.querySelector("#outResposta2")
const resposta3 = document.querySelector("#outResposta3")


// PROGRAMA PRINCIPAL
formulario.addEventListener("submit", (e) => {
  e.preventDefault()

  const modelo = formulario.inModelo.value
  // const anoFabricacao = Number(formulario.inAnoFabricacao.value)
  // const preco = Number(formulario.inPreco.value)

  const anoFabricacao = 2025
  const preco = 20000

  const classificacao = classificarVeiculo(anoFabricacao) // chama funções e atribui retorno as variáveis
  const entrada = calcularEntrada(preco, classificacao)
  const parcela = (preco - entrada) / 10 //  usa o retorno da função "entrada" para cálculo

  console.log(entrada)
  console.log(parcela)

  resposta1.innerText = modelo + " - " + classificacao
  resposta2.innerText = `Entrada R$: ${entrada.toFixed(2)}`
  resposta3.innerText = `+10x de R$: ${parcela.toFixed(2)}`
})
