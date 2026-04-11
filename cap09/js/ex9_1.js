const formulario = document.querySelector("form")
const imagemClube = document.querySelector("#imgClube")
const divTitulo = document.querySelector("#divTitulo")

const trocarClube = () => {
  let clube

  clube = formulario.rbBrasil.checked ? "Brasil" : formulario.rbPelotas.checked ? "Pelotas" : "Farroupilha"
  divTitulo.className = `row cores -${clube}`

  imagemClube.src = `img/${clube.toLowerCase()}.png`
  imagemClube.className = "img-fluid"
  imagemClube.alt = `Símbolo do ${clube}`

  localStorage.setItem("clube", clube)
  console.log("salvo clube" + clube)

}

formulario.rbBrasil.addEventListener("change", trocarClube)
formulario.rbPelotas.addEventListener("change", trocarClube)
formulario.rbFarroupilha.addEventListener("change", trocarClube)

const verificarClube = () => {

  const clube = localStorage.getItem("clube")

  if (!clube) return

  if (clube === "Brasil") {
    formulario.rbBrasil.checked = true
  } else if (clube === "Pelotas") {
    formulario.rbPelotas.checked = true
  } else if (clube === "Farroupilha") {
    formulario.rbFarroupilha.checked = true
  }
  trocarClube()
}



window.addEventListener("load", verificarClube)