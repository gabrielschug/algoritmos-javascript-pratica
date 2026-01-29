/*
☐ Funciona ?
☐ Nomes claros?
☐ Não repete código?
☐ Funções fazem 1 coisa?
☐ Fácil de ler?
☐ Não compliquei demais?
*/


const formulario = document.querySelector('form')
const listagemCandidatos = document.querySelector('pre')
const botaoListarCandidatos = document.querySelector('#botaoListarCandidatos')
const botaoMostrarAprovados = document.querySelector('#botaoMostrarAprovados')


const listagem = []

formulario.addEventListener("submit", (event) => {
  event.preventDefault()

  const candidato = formulario.inCandidato.value
  const acertos = formulario.inAcertos.value
  listagem.push({ candidato, acertos })
  console.log(listagem)

  formulario.reset()
  formulario.inCandidato.focus()
})

let mostrarListagem = ''
botaoListarCandidatos.addEventListener("click", () => {
  listagem.forEach((listagem) => {
    mostrarListagem += `${listagem.candidato} - ${listagem.acertos} acertos`
  })
  listagemCandidatos.innerHTML = mostrarListagem

})

botaoMostrarAprovados.addEventListener("click", () => {

  const numAcertosNecessarios = Number(prompt('Número de Acertos para Aprovação: '))

  const apenasAprovados = listagem.filter(candidato => candidato.acertos >= numAcertosNecessarios)
  console.log(apenasAprovados)

})
