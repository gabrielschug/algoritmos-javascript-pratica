const frm = document.querySelector('form')
const resposta = document.querySelector('h3')

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const saque = Number(frm.inSaque.value)


    // Valida o valor do saque, deve ser multiplo de $10
    if (saque % 10 != 0) {
        alert('Valor Inválido para notas disponíveis (R$10, R$50, R$100)')
        frm.inSaque.focus()
        return
    }

    const notas100 = Math.floor(saque / 100)
    let resto = saque % 100
    const notas50 = Math.floor(resto / 50)
    resto = resto % 50
    const notas10 = Math.floor(resto / 10)
    
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