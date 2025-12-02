const frm = document.querySelector("form")
const out = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  const preco = Number(frm.inPreco.value)
  const consumo = Number(frm.inConsumo.value)/1000

  const valor = consumo*preco

  out.innerText = `Valor a pagar: R$ ${valor.toFixed(2)}`


  e.preventDefault()
})