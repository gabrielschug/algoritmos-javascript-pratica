const formulario = document.querySelector('form')
const retono = document.querySelector('h3')

const PRAZO_DESCONTO = 90
const DESCONTO = 0.20


formulario.addEventListener("submit", (event) => {
  event.preventDefault()
    
    const dataInfracao = formulario.inDataInfracao.value
    const ValorMulta = Number(formulario.inValorMulta.value)
    
    const hoje = new Date()
    const dataVencimento = new Date()

    const partes = dataInfracao.split("-")
    dataVencimento.setFullYear(Number(partes[0]))
    dataVencimento.setMonth(Number(partes[1]-1))
    dataVencimento.setDate(Number(partes[2])+PRAZO_DESCONTO)

    const valorTotalDesconto = ValorMulta *(1-DESCONTO)

    if (hoje > dataVencimento) {
        retono.innerText = `
        ⚠️ A data para pagamento de sua multa já está VENCIDA!\n
        🗓️ Data limite: ${dataVencimento.toLocaleDateString('pt-BR')}\n
        🪙 Valor da sua Multa R$: ${ValorMulta.toFixed(2)} `
    } else{
        retono.innerText = `
        ✅ Você ainda pode pagar com desconto!
        🗓️ Data limite: ${dataVencimento.toLocaleDateString('pt-BR')}\n
        🪙Valor com Desconto R$: ${valorTotalDesconto.toFixed(2)} `
    }
  
  
})