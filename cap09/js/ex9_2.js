const divTitulo = document.querySelector('#divTitulo')
const inRadios = document.querySelectorAll("input[type=radio]")
const imgClube = document.querySelector('#imgClube')


const trocarClube = () => {
    const clubes = [
        'brasil',
        'pelotas',
        'farroupilha'
    ]

    let selecao
    for (let i = 0 ; i < inRadios.length; i++) {
        if( inRadios[i].checked) {
            selecao = i
            break
        }
    }

    if (selecao < clubes.length) {
        divTitulo.className = `row cores-${clubes[selecao]}`
        imgClube.src = `img/${clubes[selecao].toLowerCase()}.png`
        imgClube.className = `img-fluid`
        imgClube.alt = `Simbolo do ${clubes[selecao]}`
        localStorage.setItem("clube", clubes[selecao])
    }   else {
        divTitulo.className = 'row'
        imgClube.className = 'd-none'
        imgClube.alt = ''
        localStorage.removeItem("clube")
    }

}

for (const inRadio of inRadios) {
    inRadio.addEventListener("change",trocarClube)
}

const verificarClube = () => {
    
}