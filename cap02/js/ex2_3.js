// Iterações
const frm = document.querySelector("form")

const respota1 = document.getElementById("#resp1")
const respota2 = document.getElementById("#resp2")
const respota3 = document.getElementById("#resp3")

frm.addEventListener("submit", (e) => {
  
  const modelo = frm.inModelo.value
  const preco =Number(frm.inPreco.value)

  const entrada = preco *0.5
  const saldo = entrada / 12

  respota1.innerText = `Promoção para do Carro ${modelo}`
  respota2.innerText = `Entrada no valor de R$ ${entrada.toFixed(2)}`
  respota3.innerText = `+12 Pequenas Parcelas de R$ ${saldo.toFixed(2)}`


  e.preventDefault()
})