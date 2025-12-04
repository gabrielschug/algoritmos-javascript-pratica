// OBTÉM ELEMENTOS DA PÁGINA HTML --------------------------------------------------------
const frm = document.querySelector('form')
const resposta = document.querySelector('h3')

// ESCUTA AS AÇÕES NO FORMULÁRIO ---------------------------------------------------------
frm.addEventListener("submit", (e) => {
    // Evita o loop do Form
    e.preventDefault()

    // Obtém a entrada do formulário
    const inNumero = Number(frm.inNumero.value)


    resp = inNumero % 2 == 0 ? `${inNumero} é Par`: `${inNumero} é Ímpar`

    resposta.innerText = `${resp}`
})

// FIM -----------------------------------------------------------------------------------