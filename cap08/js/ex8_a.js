const formulario = document.querySelector('form')
const retorno = document.querySelector('h3')

function categorizarAluno(idade) {
    const categoria = idade<=12? 'Infantil': idade<= 18? 'Juvenil':'Adulto'
    return categoria
}

function retornarTracos(nome) {
    const tracos = nome.replace(/[a-zA-Z]/g,'-')    
    console.log(tracos)
    return tracos
} 

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = formulario.inNome.value
    const idade = Number(formulario.inIdade.value)

    tracos = retornarTracos(nome)
    categoria = categorizarAluno(idade)

    retorno.innerText = `${nome}\n${tracos}\n${categoria}`

    formulario.reset()
    formulario.inNome.focus()
})