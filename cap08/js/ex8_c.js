const formulario = document.querySelector('form')
const retorno = document.querySelector('h3')
const divConvenio = document.querySelector('#divConvenio')

const rbSim = document.querySelector('#rbConvenio')
const rbNao = document.querySelector('#rbSemConvenio')

const CONVENIOS = [
  { nome: 'Sem Convênio', desconto: 0.10 },
  { nome: 'Amigo dos Animais', desconto: 0.20 },
  { nome: 'Saúde Animal', desconto: 0.50 }
]


rbSim.addEventListener("click", () => { divConvenio.className = "exibe" })
rbNao.addEventListener("click", () => { divConvenio.className = "oculta" })



function calcularDesconto(nomeConvenio, valorVacina) {
  const convenioEncontrado = CONVENIOS.find(c => c.nome === nomeConvenio)
  const percentual = convenioEncontrado ? convenioEncontrado.desconto : 0
  return valorVacina * percentual
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault()

  const valorVacina = Number(formulario.inValorVacina.value)

  let nomeConvenio = 'Sem Convênio'
  if (formulario.rbConvenio.checked) {
    nomeConvenio = formulario.inConvenio.options[formulario.inConvenio.selectedIndex].text
  }

  const desconto = calcularDesconto(nomeConvenio, valorVacina)
  const aPagar = valorVacina - desconto

  retorno.innerHTML =
    `Desconto R$: ${desconto.toFixed(2)} | A Pagar R$: ${aPagar.toFixed(2)}`

  formulario.reset()
  divConvenio.className = 'oculta'
  formulario.valorVacina.focus()

})