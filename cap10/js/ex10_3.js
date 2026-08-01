const form = document.querySelector("form")
const tbFilmes = document.querySelector("table")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const titulo = form.inTitulo.value.trim()
  const genero = form.inGenero.value.trim()

  inserirLinha(titulo, genero)
  gravarFilme(titulo, genero)

  form.reset()
  form.inTitulo.focus()

})

const inserirLinha = (titulo, genero) => {

  const linha = tbFilmes.insertRow(-1)
  const coluna1 = linha.insertCell(0)
  const coluna2 = linha.insertCell(1)
  const coluna3 = linha.insertCell(2)

  coluna1.innerText = titulo
  coluna2.innerText = genero
  coluna3.innerHTML = "<I class='exclui' title='Excluir'>&#10008</i>"
}

const gravarFilme = (titulo, genero) => {
  const dadosSalvos = localStorage.getItem("listaFilmes")
  const listaFilmes = dadosSalvos ? JSON.parse(dadosSalvos) : []

  listaFilmes.push({ titulo, genero })
  localStorage.setItem("listaFilmes", JSON.stringify(listaFilmes))

}

window.addEventListener("load", () => {
  const dadosSalvos = localStorage.getItem("listaFilmes")
  const listaFilmes = dadosSalvos ? JSON.parse(dadosSalvos) : []

  if (!listaFilmes) {
    return
  }

  for (const filme of listaFilmes) {
    inserirLinha(filme["titulo"], filme["genero"])
  }
})

tbFilmes.addEventListener("click", (e) => {
  if (e.target.className.includes("exclui")) {
    const titulo = e.target.parentElement.parentElement.children[0].innerText
    console.log(titulo)
    if (confirm(`⚠️ Confirma a exclusão do filme "${titulo}"?`)) {
      e.target.parentElement.parentElement.remove()

      localStorage.removeItem("listaFilmes")

      for (let i = 1; i < tbFilmes.rows.length; i++) {
        const auxTitulo = tbFilmes.rows[i].cells[0].innerText
        const auxGenero = tbFilmes.rows[i].cells[1].innerText
        gravarFilme(auxTitulo, auxGenero)
      }

    }
  }
})