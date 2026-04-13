const formulario = document.querySelector("form")
const imagemClube = document.querySelector("#imgClube")
const divTitulo = document.querySelector("#divTitulo")

const trocarClube = () => {
  let clube

  // Verifica qual radio button está selecionado
  clube = formulario.rbBrasil.checked ? "Brasil" : formulario.rbPelotas.checked ? "Pelotas" : "Farroupilha"

  // Define as classes de row titulo: row e cores do clube
  divTitulo.className = `row cores -${clube}`

  // Modifica a imagem de acordo com o rb selecionado
  imagemClube.src = `img/${clube.toLowerCase()}.png`// altera a imagem pelo src
  imagemClube.className = "img-fluid"
  imagemClube.alt = `Símbolo do ${clube}` // modifica atributo 'alt' da imagem

  localStorage.setItem("clube", clube) // salva o clube no localStorage

}

// Quando alterar o radio button, dispara a função de trocarClube
formulario.rbBrasil.addEventListener("change", trocarClube)
formulario.rbPelotas.addEventListener("change", trocarClube)
formulario.rbFarroupilha.addEventListener("change", trocarClube)

// O USUÁRIO JÁ ACESSOU O SITE ANTES E SELECIONOU UM CLUBE?
const verificarClube = () => {

  // Obtem o clube no localStorage...
  const clube = localStorage.getItem("clube")

  // Se não tiver clube, para a função
  if (!clube) return

  // Verifica, seleciona e chama a função trocarClube
  if (clube === "Brasil") {
    formulario.rbBrasil.checked = true
  } else if (clube === "Pelotas") {
    formulario.rbPelotas.checked = true
  } else if (clube === "Farroupilha") {
    formulario.rbFarroupilha.checked = true
  }
  trocarClube() // chama a função que altera imagem e cor
}

// Assim que carregar a página, verificaClube
window.addEventListener("load", verificarClube)