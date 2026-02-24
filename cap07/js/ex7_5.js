/*
☐ Funciona?
☐ Nomes claros?
☐ Não repete código?
☐ Funções fazem 1 coisa?
☐ Fácil de ler?
☐ Não compliquei demais?
*/

// REFERENCIAS
const formulario = document.querySelector('form')
const retorno = document.querySelector('h3')

// OUVIDOR
formulario.addEventListener("submit", (event) => {
  event.preventDefault()

  // ENTRADA
  const nome = formulario.inNome.value.trim()

  // VALIDAÇÃO DA ENTRADA
  if (!nome.includes(' ')) {
    alert('Informe o nome completo...')
    return
  }
  // REGRA 
  const primeiroEspaco = nome.indexOf(" ")
  const ultimoEspaco = nome.lastIndexOf(" ")
  const cracha = nome.substr(0, primeiroEspaco) + nome.substr(ultimoEspaco)

  retorno.innerText = `Cracha: ${cracha}`

})