
const formulario = document.querySelector("form")
const divPrincipal = document.querySelector("#divPrincipal")
const btNovasVelas = document.querySelector("#btNovasVelas")

formulario.addEventListener("submit", (e) => {
  e.preventDefault()

  const idade = formulario.inIdade.value.toString()

  for (caractere of idade) {
    const imagem = document.createElement("img")
    imagem.src = `img/${caractere}.png`
    divPrincipal.appendChild(imagem)
  }

  formulario.reset()
  formulario.btNovasVelas.focus()
})

btNovasVelas.addEventListener("click", () => {
  window.location.reload()
})