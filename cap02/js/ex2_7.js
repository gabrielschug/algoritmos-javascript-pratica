const frm = document.querySelector("form")
const out = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  const produto = frm.inProduto.value
  const preco = Number(frm.inPreco.value)

  const valor = (preco * 2) + (preco / 2)  

  out.innerText = `${produto} - Promoção: Leve 3 por R$ ${valor.toFixed()}\nO 3º produto custa apenas R$ ${(preco/2).toFixed(2)}`

  e.preventDefault()
})