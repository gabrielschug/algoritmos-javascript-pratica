// OBTÉM ELEMENTOS DA PÁGINA HTML --------------------------------------------------------
const frm = document.querySelector('form')
const resposta = document.querySelector('h3')

// ESCUTA AS AÇÕES NO FORMULÁRIO ---------------------------------------------------------
frm.addEventListener("submit", (e) => {

    // Evita o loop do Form
    e.preventDefault()

    // Obtém a entrada do formulário
    const saque = Number(frm.inSaque.value)


    // Valida se o valor do saque é multiplo de $10
    if (saque % 10 != 0) {
        alert('Valor Inválido para notas disponíveis (R$10, R$50, R$100)')
        frm.inSaque.focus()
        return
    }

    // Calcula qtd de notas e o valor que sobra
    const notas100 = Math.floor(saque / 100)
    let resto = saque % 100
    const notas50 = Math.floor(resto / 50)
    resto = resto % 50
    const notas10 = Math.floor(resto / 10)

    // Exibe as notas, se houver (acumulando frases)
    let resp
    if (notas100 > 0) {
        resp = `Notas de 100: ${notas100}\n`
    }
    if (notas50 > 0) {
        resp += `Notas de 50: ${notas50}\n`
    }
    if (notas10 > 0) {
        resp += `Notas de 10: ${notas10}\n`
    }

    resposta.innerText = `${resp}`
})

// FIM -----------------------------------------------------------------------------------