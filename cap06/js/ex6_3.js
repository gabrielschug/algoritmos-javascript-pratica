const frm = document.querySelector('form')
const resp = document.querySelector('pre')

const carros = []

// ADICIONAR CARRO
frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const modelo = frm.inModelo.value
  const preco = Number(frm.inPreco.value)

  carros.push({ modelo, preco })

  frm.inModelo.value = ''
  frm.inPreco.value = ''

  frm.inModelo.focus()

  // Dispara um click no botão Listar
  frm.btListar.dispatchEvent(new Event("click"))

})

// LISTAR CARROS
frm.btListar.addEventListener("click", () => {

  if (carros.length === 0) {
    alert(`Não há carros na lista`)
    return
  }
  // REDUCE PARA CONCATENAR STRING - Obtendo modelo e preço de cada veículo
  const lista = carros.reduce((acc, carro) =>
    acc + carro.modelo + ' - R$: ' + carro.preco.toFixed(2) + '\n', "")

  resp.innerText = `Lista dos Carros Cadastrados\n${'-'.repeat(40)}\n${lista}`

})

// FILTRAR PREÇOS MENORES
frm.btFiltrar.addEventListener("click", () => {
  const maximo = Number(prompt("Qual o valor máximo que desejas pagar?"))

  if (maximo === 0 || isNaN(maximo)) {
    return
  }

  let lista = ''
  const carrosFilter = carros.reduce((acumulador, carro) => {
    if (carro.preco <= maximo) { // FILTER - CONDIÇÃO
      lista += `${carro.modelo} - R$ ${carro.preco.toFixed(2)}\n` // REDUCE - CONCATENANDO
    }

  }, '')

  resp.innerText = `Carros Até ${maximo.toFixed(2)}:\n${'-'.repeat(40)}\n${lista}`

})

// SIMULAR PROMOÇÃO

frm.btSimular.addEventListener("click", () => {

  const desconto = Number(prompt("Qual % de desconto?"))
  if (desconto === 0 || isNaN(desconto)) {
    return
  }

  const carrosComDesconto = carros.map(aux => ({
    modelo: aux.modelo,
    preco: aux.preco - (aux.preco * desconto / 100)
  }))

  let lista = ''
  for (const carro of carrosComDesconto) {
    lista += `${carro.modelo}  - R$: ${carro.preco.toFixed(2)}\n`
  }

  resp.innerText = `Carros com Desconto de ${desconto}%\n${"-".repeat(40)}\n${lista}`


})