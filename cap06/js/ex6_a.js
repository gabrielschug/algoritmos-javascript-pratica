const frm = document.querySelector('form')
const resp = document.querySelector('pre')

const clubes = []

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Validar preenchimento


  const clube = frm.inClube.value
  // adicionar clube
  clubes.push(clube)

  frm.reset()
  frm.inClube.focus()

  //listar os clube
  frm.btListar.dispatchEvent(new Event("click"))

  console.log(clubes)
})

//listar clubes, se houver
btListar.addEventListener(("click"), () => {
  if (clubes.length === 0) {
    return
  }
  let lista = ''
  for (const clube of clubes) {
    lista += `${clube}\n`
  }
  resp.innerText = "CLUBES\n" + '-'.repeat(30) + '\n' + lista

})


// montar tabela de jogos, primeiro x ultimo, caso o numero de times seja impar, exibir mensagem
btTabelar.addEventListener(("click"), () => {
  if (clubes.length % 2 !== 0) {
    resp.innerText = "*Incapaz de fechar confrontos"
    return
  }
  let confrontos = ''
  for (let i = 1; i <= clubes.length / 2; i++) {
    console.log(i)
    confrontos += `${clubes[i - 1]} x ${clubes[clubes.length - i]}\n`

  }

  resp.innerText = clubes.length % 2 + "CONFRONTOS\n" + '-'.repeat(30) + '\n' + confrontos

})