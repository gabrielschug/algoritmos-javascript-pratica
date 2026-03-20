const formulario = document.querySelector('form')
const retono = document.querySelector('h3')

let cripto = ''
formulario.addEventListener("submit", (event) => {
  event.preventDefault()

  const mensagem = formulario.inMensagem.value

  mensagemOriginal = mensagem

  let criptoPar = ""
  let criptoImpar = ""

  for (let i = 0; i < mensagem.length; i++) {
    i % 2 === 0 ? criptoPar += mensagem[i] : criptoImpar += mensagem[i]


  }
  cripto = criptoImpar + criptoPar


  retono.innerText = ''

  let index = 0

  const timer = setInterval(() => {
    if (index < cripto.length) {
      retono.innerText += cripto[index]
      index++
    } else {
      clearInterval(timer)
    }
  }, 250);



  formulario.inMensagem.value = "";
  formulario.inMensagem.focus();

})

formulario.outDescriptografar.addEventListener("click", () => {

  const tamCripto = cripto.length
  const meioCripto = Math.floor(tamCripto / 2)

  let descriptoImpar = cripto.slice(0, meioCripto)
  let descriptoPar = cripto.slice(meioCripto)

  let descripto = ''
  for (let i = 0; i < descriptoPar.length; i++) {
    descripto += descriptoPar[i]
    if (i < descriptoImpar.length) {
      descripto += descriptoImpar[i]
    }
  }

  retono.innerText = ''

  let index = 0

  const timer = setInterval(() => {
    if (index < descripto.length) {
      retono.innerText += descripto[index]
      index++
    } else {
      clearInterval(timer)
    }
  }, 250);

})