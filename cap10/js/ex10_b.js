const formulario = document.querySelector("form")
const divPrincipal = document.querySelector("#divPrincipal")

formulario.addEventListener("submit", (e) => {

  const elementosh3 = document.querySelectorAll("h3")
  if (elementosh3) {
    elementosh3.forEach(elemento => elemento.remove())
  }

  e.preventDefault()

  const nome = formulario.inNome.value
  const partes = nome.split(" ")

  for (parte of partes) {
    const aletorio = Math.ceil(Math.random() * 5)
    const cor = aletorio == 1 ? "text-primary" : aletorio == 2 ? "text-success" : aletorio == 3 ? "text-danger" : aletorio == 4 ? "text-warning" : "text-info"
    const texto = document.createTextNode(parte)
    const h3 = document.createElement("h3")
    h3.classList.add(cor)
    h3.appendChild(texto)
    divPrincipal.appendChild(h3)

  }

})