// REFS ENTRADA E SAÍDA DOS DADOS
const frm  = document.querySelector("form")
const resp = document.querySelector("h3")

// OUVINTE DE EVENTO - Acionado quando o Submit for clicado
frm.addEventListener("submit", (e) => {
  const nome =frm.inNome.value
  resp.innerHTML = `Olá ${nome}!`
  e.preventDefault() //evita o envio do form
})