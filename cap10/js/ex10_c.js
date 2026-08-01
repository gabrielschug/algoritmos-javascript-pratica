// ler nome de clube
// Adicionar: inserir na página tag h5 align-right italic
// TODO Botão Montar: verificar se tag.length %2 == 0 | Se PAR → INSERIR TIMES NA TABELA | SE IMPAR → aLERT. DESABILITAR ADD + MONTAR
// TODO Botão Novos: RELOAD

const formulario = document.querySelector("form")
const divLista = document.querySelector("#listaClubes")
const tabela = document.querySelector("table")
const btMontar = document.querySelector("#btMontarTabela")
const btNovosClubes = document.querySelector("#btNovosClubes")
const btAdicionar = document.querySelector("#btAdicionar")
tabela.hidden = true

formulario.addEventListener("submit", (e) => {
  e.preventDefault()

  const clube = formulario.inClube.value.trim()

  inserirLista(clube)

  formulario.reset()
  formulario.inClube.focus()

})

const inserirLista = (clube) => {
  const texto = document.createTextNode(clube)
  const h5 = document.createElement("h5")
  h5.classList.add("text-start", "fst-italic")
  h5.appendChild(texto)
  divLista.appendChild(h5)
}

btMontar.addEventListener("click", () => {
  const elementosh5 = document.querySelectorAll("h5")

  if (elementosh5.length % 2 !== 0) {
    alert("⚠️ Necessário mais um clube para montar a tabela.")
    return
  }

  divLista.hidden = true
  tabela.hidden = false

  let elemento = 0
  for (let i = 1; i <= elementosh5.length / 2; i++) {

    const linha = tabela.insertRow(-1)

    const col1 = linha.insertCell(0)
    const col2 = linha.insertCell(1)
    const col3 = linha.insertCell(2)
    col1.innerText = elementosh5[elemento].innerText
    col2.innerText = "x"
    col3.innerText = elementosh5[elemento + 1].innerText
    col1.classList.add("text-center")
    col2.classList.add("text-center")
    col3.classList.add("text-center")

    elemento += 2

    btAdicionar.disabled = true
    btMontar.disabled = true
    btNovosClubes.focus()
  }


})

btNovosClubes.addEventListener("click", () => {
  window.location.reload()
})