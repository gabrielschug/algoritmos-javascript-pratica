// Submit e Saída
const frm = document.querySelector("form")
const resTitulo = document.querySelector("#outTitulo")
const resDuracao = document.querySelector("#outDuracao")


frm.addEventListener("submit", (e) => {
  const inNome = frm.inTitulo.value
  const inDuracao = Number(frm.inDuracao.value)

  const horas = Math.floor(inDuracao / 60)
  const minutos = inDuracao % 60

  resTitulo.innerText = inNome
  resDuracao.innerText = `Duração: ${horas} ${horas > 1 ? "horas" : "hora"} e ${minutos} minuto(s).` 

  e.preventDefault()
})