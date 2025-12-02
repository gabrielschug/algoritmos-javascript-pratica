frm = document.querySelector('form')
resposta = document.querySelector('h3')

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const horaFranca = Number(frm.inHora.value) + 5
    const horaConvertida = horaFranca > 24 ? horaFranca - 24 : horaFranca
    
    resposta.innerText = `Hora na França: ${horaConvertida.toFixed(2)}`

})