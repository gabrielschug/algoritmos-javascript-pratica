const form = document.querySelector("form")
const divMoedas = document.querySelector("#divMoedas")

window.addEventListener("load", () => {

  // Gerar números aletórios
  const moeda1_00 = Math.ceil(Math.random() * 5)
  const moeda0_50 = Math.ceil(Math.random() * 5)
  const moeda0_25 = Math.ceil(Math.random() * 5)
  const moeda0_10 = Math.ceil(Math.random() * 5)


  // Texto Alternativo das Imagens (Acessibilidade)
  const textoAltMoeda1_00 = "Moedas de um real"
  const textoAltMoeda0_50 = "Moedas de ciquenta centavos"
  const textoAltMoeda0_25 = "Moedas de  vinte e cinco centavos"
  const textoAltMoeda0_10 = "Moedas de  dez centavos"

  // Chama método criarMoedas passando argumentos
  criarMoedas(moeda1_00, '1_00.jpg', textoAltMoeda1_00, "moeda1-00")
  criarMoedas(moeda0_50, '0_50.jpg', textoAltMoeda0_50, "moeda0-50")
  criarMoedas(moeda0_25, '0_25.jpg', textoAltMoeda0_25, "moeda0-25")
  criarMoedas(moeda0_10, '0_10.jpg', textoAltMoeda0_10, "moeda0-10")

})

const criarMoedas = (moeda, nomeImagem, textoAlternativo, classe) => {
  for (let i = 1; i <= moeda; i++) {
    const novaMoeda = document.createElement("img")
    novaMoeda.src = "img/" + nomeImagem
    novaMoeda.alt = textoAlternativo
    novaMoeda.className = classe
    divMoedas.appendChild(novaMoeda)
  }
  const br = document.createElement("br")
  divMoedas.appendChild(br)
}

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const soma = Number(form.inSoma.value)
  const moedas = divMoedas.querySelectorAll("img")
  let = totalMoedas = 0

  // Percorre as tags img (em moedas) e verifica a className
  for (const moeda of moedas) {
    if (moeda.className == "moeda1-00") {
      totalMoedas += 1
    } else if (moeda.className == "moeda0-50") {
      totalMoedas += 0.50
    } else if (moeda.className == "moeda0-25") {
      totalMoedas += 0.25
    } else if (moeda.className == "moeda0-10") {
      totalMoedas += 0.10
    }
  }

  const div = document.createElement("div")
  const h3 = document.createElement("h3")

  let mensagem
  // verifica se o valor informado é igual ao total de Moedas exibido
  if (soma == totalMoedas.toFixed(2)) {
    div.className = "alert alert-success"
    mensagem = "Parabéns!! Você acertou!"
  } else {
    div.className = "alert alert-danger"
    mensagem = `Ops.. A resposta correta é R$ ${totalMoedas.toFixed(2)}`
  }

  const texto = document.createTextNode(mensagem)
  h3.appendChild(texto)
  div.appendChild(h3)
  divMoedas.appendChild(div)

  form.submit.disabled = true
  form.reset.focus()

})

form.addEventListener("reset", () => {
  window.location.reload()
})