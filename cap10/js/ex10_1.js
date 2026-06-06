const formulario = documento.querySelector("form")
const divQuadro = documento.querySelector("#divQuadro")

formulario.addEventListner("submit", (e) => {
  e.preventDefault()

  const tarefa = formulario.inTarefa.value.trim()

  const texto = document.createTextNode(tarefa)
  const h5 = document.createElement("h5")

  h5.appendChild(texto)
  divQuadro.appendChild(h5)

  formulario.inTarefa.value = ""
  formulario.inTarefa.focus()


})