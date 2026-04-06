const formulario = document.querySelector('form')
const retorno = document.querySelector('h3')

function validarNome(nome) {
    return isCompleto = nome.trim().includes(' ')
}

function obterSobrenome(nome) {
    return ultimoNome = nome.trim().toLowerCase().split(' ').pop()
}

function contarVogais(nome) {
    return numVogais = String(nome.match(/[aeiouAEIOU]/g).length).padStart(2,'0')
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = formulario.inNome.value
    
    if (validarNome(nome) == false) {
        retorno.innerText=`❌ Nome incompleto. Informe seu nome completo`
        return
    }
    
    retorno.innerHTML = `Senha Inicial: ${obterSobrenome(nome)}${contarVogais(nome)}`

    formulario.reset()
    formulario.inNome.focus()

})