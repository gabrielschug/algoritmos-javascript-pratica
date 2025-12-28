const frm = document.querySelector('form')
const respErros = document.querySelector('#outErros')
const respChances = document.querySelector('#outChances')
const respDica = document.querySelector('#outDica')

const sorteado = Math.floor(Math.random() * 100) + 1
const erros = []
const CHANCES = 6

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const numero = frm.inNumero.value
  if (numero == sorteado) {                                                   // SE ACERTEI = TERMINA
    respDica.innerText = `Parabéns! Número sorteado: ${sorteado}`

    frm.btSubmit.disabled = true
    frm.btNovo.className = "exibe"
  } else {                                                                    // SE NÃO ACERTEI ...
    if (erros.includes(numero)) {                                                   // SE JÁ TINHA ERRADO ESSE NÚMERO = ALERTA
      alert(`Você já apostou o número ${numero}. Tente outro...`)
    } else {                                                                        // SE Ñ TINHA JOGADO ESSE NÚMERO ...
      erros.push(numero)
      const numErros = erros.length
      const numChances = CHANCES - numErros
      respErros.innerText = `${numErros} (${erros.join(" - ")})`
      respChances.innerText = numChances
      if (numChances == 0) {                                                              // SE ACABOU MINHAS CHANCES = RESET
        alert(`Suas chances acabaram ...`)
        frm.btSubmit.disabled = true
        frm.btNovo.className = "exibe"
        respDica.innerText = `Game Over! Número Sorteado: ${sorteado}`
      } else {                                                                            // SE AINDA TENHO CHANCES = DICA
        const dica = numero < sorteado ? "maior" : "menor"
        respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
      }
    }
  }
  frm.inNumero.value = ''
  frm.inNumero.focus()

  frm.btNovo.addEventListener('click', () => {
    location.reload()
  })

})