const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const inNome = frm.inNome.value
  const inNota1 = Number(frm.inNota1.value)
  const inNota2 = Number(frm.inNota2.value)

  const media = (inNota1 + inNota2) / 2

  resp1.innerText = `Média das Notas ${media.toFixed(2)}`

  if (media >= 7) {
    resp2.innerText = `Parabéns ${inNome}! Você foi ARPOVADO(A)`
    resp2.style.color = 'blue'

  } else if (media >= 4) {
    resp2.innerText = `Atenção ${inNome}! Você está em Exame`
    resp2.style.color = 'green'

  } else {
    resp2.innerText = `Ops ${inNome}... Você foi reprovado(a)`
    resp2.style.color = 'red'
  }

})