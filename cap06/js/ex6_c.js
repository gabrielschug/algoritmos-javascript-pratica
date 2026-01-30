/*
☐ Funciona?
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

  formulario.botaoListarCandidatos.dispatchEvent(new Event("click"))

  formulario.reset()
  formulario.inCandidato.focus()

})

botaoListarCandidatos.addEventListener("click", () => {
  let mostrarListagem = ''
  listagem.forEach((listagem) => {
    mostrarListagem += `${listagem.candidato} - ${listagem.acertos} acertos\n`
  })
  listagemCandidatos.innerHTML = mostrarListagem

})

botaoMostrarAprovados.addEventListener("click", () => {

  // Entrada de Informação
  const numAcertosNecessarios = Number(prompt('Número de Acertos para Aprovação: '))
  // Validação
  if (numAcertosNecessarios === 0) {
    alert('Digite um numero valido.')
    return
  }

  // Filtando Apenas Candidatos Aprovados
  const apenasAprovados = listagem.filter(candidato => candidato.acertos >= numAcertosNecessarios)
  // Validação
  if (apenasAprovados.length === 0) {
    listagemCandidatos.innerText = `Não houveram aprovados.`
    return
  }

  // Ordenação Decrescente
  apenasAprovados.sort((a, b) => b.acertos - a.acertos)

  // Exibir Listagem
  let mostrarListagem = ''
  apenasAprovados.forEach((aprovado) => {
    mostrarListagem += `${aprovado.candidato} - ${aprovado.acertos} acertos\n`
  })

  listagemCandidatos.innerHTML = mostrarListagem
  1
})
