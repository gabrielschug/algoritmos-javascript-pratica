const frm = document.querySelector('form')
const resposta = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const valor = Number(frm.inValor.value)

    if (valor < 1) {
        resp = `Valor Insuficiente`
    } else if (valor < 1.75) {
        resp = valor % 1 !== 0 ? `Tempo: 30 mim\nTroco R$: ${(valor-1).toFixed(2)}`: `Tempo: 30 mim`
    } else if (valor < 3) {
        resp = valor % 1.75 !== 0 ? `Tempo: 60 mim\nTroco R$: ${(valor-1.75).toFixed(2)}`: `Tempo: 60 mim`
    } else {
        resp = valor % 3 !== 0 ? `Tempo: 120 mim\nTroco R$: ${(valor-3).toFixed(2)}`: `Tempo: 120 mim`
    }
    
    resposta.innerText = resp
})