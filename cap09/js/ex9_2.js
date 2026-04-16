const divTitulo = document.querySelector('#divTitulo')
const inRadios = document.querySelectorAll("input[type=radio]")
const imgClube = document.querySelector('#imgClube')


const trocarClube = () => {
    const clubes = [
        'Brasil',
        'Pelotas',
        'Farroupilha'
    ]

    let selecao
    for (let i = 0; i < inRadios.length; i++) {
        if (inRadios[i].checked) {
            selecao = i
            break
        }
    }

    if (selecao < clubes.length) {
        divTitulo.className = `row cores-${clubes[selecao]}`
        imgClube.src = `img/${clubes[selecao].toLowerCase()}.png`
        imgClube.className = `img-fluid h-75`
        imgClube.alt = `Simbolo do ${clubes[selecao]}`
        localStorage.setItem("clube", clubes[selecao])
    } else {
        divTitulo.className = 'row'
        imgClube.className = 'd-none'
        imgClube.alt = ''
        localStorage.removeItem("clube")
    }

}

for (const inRadio of inRadios) {
    inRadio.addEventListener("change", trocarClube)
}

const verificarClube = () => {
    const clube = localStorage.getItem("clube")
    if (!clube) {
        return
    }
    if (clube == 'Brasil') {
        inRadios[0].checked = true
    } else if (clube == 'Pelotas') {
        inRadios[1].checked = true
    } else if (clube == 'Farroupilha') {
        inRadios[2].checked = true
    }
    trocarClube()
}
window.addEventListener("load", verificarClube)