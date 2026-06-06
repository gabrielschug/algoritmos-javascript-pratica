const formulario = document.querySelector('form')
const btnExecutar = document.querySelector("#btnExecutar")
const tbody = document.querySelector("table tbody")
const pendentes = document.querySelector("#pendentes")
let emExecucao = null

formulario.addEventListener("submit", (e) => {
  e.preventDefault()

  // ENTRADAS
  const descricao = formulario.inServico.value.trim()
  const veic = formulario.inVeiculo.value.trim()
  const itemServico = { servico: descricao, veiculo: veic }

  //Validação Entradas
  if (descricao.length < 3 || veic.length < 3) {
    alert("⚠️ Preencha os dados corretamente...")
    formulario.reset()
    formulario.inServico.focus()
    return
  }

  const listaServicos = obterDados()

  // Adiciona um item no final da listaServicos
  listaServicos.push(itemServico)
  // Salva a nova listaServicos
  localStorage.setItem("servicosAutoCenter", JSON.stringify(listaServicos))


  formulario.reset()
  formulario.inServico.focus()

  atualizaPendentes()

})

btnExecutar.addEventListener("click", () => {
  const listaServicos = obterDados()

  if (!listaServicos.length) {
    alert("🟢 Não há Serviços pendentes no momento")
    tbody.innerHTML = `
    <tr class="text-center">
      <td class="text-danger-emphasis">Nenhuma execução no momento</td>
    </tr>
    `

    formulario.inServico.focus()
    return
  }

  emExecucao = listaServicos.shift()
  localStorage.setItem("servicosAutoCenter", JSON.stringify(listaServicos))

  tbody.innerHTML = `
  <tr class="text-center align-middle w-100">
  <td>${emExecucao.servico}</td>
  <td>${emExecucao.veiculo}</td>
  </tr>
  `

  atualizaPendentes()
})

function obterDados() {
  // Obtem os dadosSalvos
  const dadosSalvos = localStorage.getItem("servicosAutoCenter")
  // Converte os dadosSalvos em uma lista de objetos OU cria uma lista vazia
  const listaServicos = dadosSalvos ? JSON.parse(dadosSalvos) : []

  return listaServicos
}

function atualizaPendentes() {
  const listaServicos = obterDados()
  pendentes.innerText =
    (listaServicos.length > 1) ? `Serviços Pendentes: ${listaServicos.length}`
      : (listaServicos.length > 0) ? `Serviço Pendente: 1` : " "

  if (!emExecucao) {
    tbody.innerHTML = `
    <tr class="text-center">
      <td class="text-danger-emphasis">Nenhuma execução no momento</td>
    </tr>
  `
  }
}

window.addEventListener(("load"), () => {
  atualizaPendentes()
})