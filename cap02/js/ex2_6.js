const frm = document.querySelector("form")
const out = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  const preco = Number(frm.inValor.value)
  const duracao = Number(frm.inDuracao.value)

  const fracoes = Math.ceil(duracao/15)
  const pagamento = fracoes * preco

  out.innerText = `Valor a Pagar: R$ ${pagamento.toFixed(2)}`

  e.preventDefault()
})