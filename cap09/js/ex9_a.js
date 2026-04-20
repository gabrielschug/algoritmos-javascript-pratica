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
  if (clube == 'brasil') {
    inRadios[0].checked = true
  } else if (clube == 'pelotas') {
    inRadios[1].checked = true
  } else if (clube == 'farroupilha') {
    inRadios[2].checked = true
  }
  trocarClube()
}

const contadorVisitas = () => {
  let contador = localStorage.getItem('contadorVisitas')

  if (!contador) {
    contador = localStorage.setItem('contadorVisitas', 1)
    alert('Muito Bem-Vindo Esta é sua primeira visita ao nosso site.')
  } else {
    let acc = Number(contador) + 1
    localStorage.setItem('contadorVisitas', acc)
    alert(`Que bom que você voltou! Esta é a sua visita de número ${acc} ao nosso site.`)
  }
}
window.addEventListener("load", contadorVisitas)


window.addEventListener("load", verificarClube)