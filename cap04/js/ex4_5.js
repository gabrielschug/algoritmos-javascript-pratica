const frm = document.querySelector('form')
const resposta = document.querySelector('h3')

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)

    const raizQuadrada = Math.sqrt(numero)
    const resultado = Number.isInteger(raizQuadrada) 
        ? `Raiz: ${raizQuadrada}`
        : `Não há raiz exata para ${numero}`   

    resposta.innerText = `${resultado}`
})