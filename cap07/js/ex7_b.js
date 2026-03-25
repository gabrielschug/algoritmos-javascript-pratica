const formulario = document.querySelector('form')
const retono = document.querySelector('h3')

formulario.addEventListener("submit", (event) => {
  event.preventDefault()

    const frase = formulario.inFrase.value.trim().toUpperCase()
    let palindromo = true
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] !== frase[frase.length-1-i]) {
            retono.innerText = 'Não é Palindromo'
            return
        }
    }
    retono.innerText = 'É palindromo!'
})