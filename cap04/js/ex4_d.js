const frm = document.querySelector('form')
const resposta = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const A = Number(frm.inA.value)
    const B = Number(frm.inB.value)
    const C = Number(frm.inC.value)

    const FormaTriangulo = (A+B > C) && (A+C > B) && (B+C > A)

    if (!FormaTriangulo) {
        resp = `Não forma Triângulo.`
    } else if (A == B && B == C){
        resp = "Tipo: Equilátero"
    } else if ((A !== B) && (A !== C) && (B !== C) ) {
        resp = "Tipo: Escaleno"
    } else {
        resp = "Tipo: Isóceles"
    }
    
    resposta.innerText = `${FormaTriangulo? 'Lados podem formar um triângulo\n':''} ${resp}`
})