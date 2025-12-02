const frm = document.querySelector("form")
const out = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  const medicamento = frm.inMedicamento.value
  const preco = Number(frm.inPreco.value)

  const valor = Math.floor(preco*2)

  out.innerText = `Promoção de ${medicamento}\nLeve 2 por apenas R$ ${valor.toFixed(2)}`


  e.preventDefault()
})