const formulario = document.querySelector("form")
const respostaLista = document.querySelector("pre")
const respostaCavalo = document.querySelector("#outCavalo")

const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"]
const apostas = []

formulario.addEventListener("submit", (e) => {
  e.preventDefault()

  const cavalo = Number(formulario.inCavalo.value)
  const valor = Number(formulario.inAposta.value)

  apostas.push({ cavalo, valor })

  let lista = `Apostas Realizadas\n${"-".repeat(25)}\n`
  for (const aposta of apostas) {
    lista += `Nº ${aposta.cavalo} ${obterCavalo(aposta.cavalo)}`
    lista += ` - R$ ${aposta.valor.toFixed(2)}\n`
  }

  respostaLista.innerText = lista
  formulario.reset()
  formulario.inCavalo.focus()
})

const obterCavalo = (num) => {
  return CAVALOS[num - 1]
}

formulario.inCavalo.addEventListener("blur", () => {
  if (formulario.inCavalo.value == "") {
    respostaCavalo.innerText = ""
    return
  }

  const numCavalo = Number(formulario.inCavalo.value)

  if (!validarCavalo(numCavalo)) {
    alert("Nº do Cavalo inválido")
    formulario.inCavalo.focus()
    return
  }

  const nome = obterCavalo(numCavalo)
  const contaNum = contarApostas(numCavalo)
  const total = totalizarApostas(numCavalo)

  respostaCavalo.innerText = `${nome} (Apostas: ${contaNum} - R$ ${total.toFixed(2)})`
})

const validarCavalo = (num) => {
  return num <= 1 && num <= CAVALOS.length
}

contarApostas = (num) => {
  const contador = apostas.reduce((soma, aposta) => {
    return aposta.cavalo === num ? soma + 1 : soma
  }, 0)

}

const totalizarApostas = (num) => {
  const total = apostas.reduce((soma, aposta) => {
    return aposta.cavalo === num ? soma + aposta.valor : soma
  }, 0)
}