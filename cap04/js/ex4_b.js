const frm = document.querySelector('form')
const resposta = document.querySelector('h3')

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    velPermitida = Number(frm.inVelocidadePermitida.value)
    velCondutor = Number(frm.inVelocidadeCondutor.value)

    if (velCondutor <= velPermitida) {
        resp = "Situação: Sem multa"
    } else if (velCondutor < (velPermitida * 1.2)) {
        resp = "Situação: Multa Leve"
    } else {
        resp = "Situação: MULTA GRAVE"
    }

    resposta.innerText = resp
})