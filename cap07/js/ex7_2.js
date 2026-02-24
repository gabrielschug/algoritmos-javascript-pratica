/*
☐ Funciona?
☐ Nomes claros?
☐ Não repete código?
☐ Funções fazem 1 coisa?
☐ Fácil de ler?
☐ Não compliquei demais?
*/

const formulario = document.querySelector('form')
const retorno = document.querySelector('span')

formulario.addEventListener("submit", (event) => {
  event.preventDefault()

  const fruta = formulario.inFruta.value.toUpperCase()
  let resposta = ''

  for (letra of fruta) {
    if (letra == fruta.charAt(0)) {
      resposta += fruta.charAt(0)
    } else {
      resposta += '_'
    }
  }

  retorno.innerText = resposta

  formulario.inFruta.value = "*".repeat(fruta.length)

})