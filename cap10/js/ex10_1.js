const formulario = document.querySelector("form")
const divQuadro = document.querySelector("#divQuadro")

// ➕ Adicionar Tarefa
formulario.addEventListener("submit", (e) => {
  e.preventDefault()

  const tarefa = formulario.inTarefa.value.trim()

  if (!tarefa) {
    alert("⚠️ Por favor, digite uma tarefa válida.");
    formulario.inTarefa.focus();
    return;
  }

  const texto = document.createTextNode(tarefa)
  const h5 = document.createElement("h5")

  h5.classList.add("tarefa-normal")

  h5.appendChild(texto)
  divQuadro.appendChild(h5)

  formulario.inTarefa.value = ""
  formulario.inTarefa.focus()

})

// 🔘 Selecionar Tarefa
formulario.btSelecionar.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("h5")
  if (tarefas.length == 0) {
    alert("⚠️ Não há tarefas para selecionar")
    return
  }

  let linhaAtual = -1 // variável auxiliar da linha selecionada


  for (let index = 0; index < tarefas.length; index++) {

    // se a tag atual é da tarefa-selecionada
    if (tarefas[index].classList.contains("tarefa-selecionada")) {
      //remove o destaque e add para normal
      tarefas[index].classList.remove("tarefa-selecionada")
      tarefas[index].classList.add("tarefa-normal")

      //altera o valor da variavel auxiliar
      linhaAtual = index
      break
    }
  }

  // SE linha atual for a ultima → volta pra primeira
  if (linhaAtual == tarefas.length - 1) {
    linhaAtual = -1
  }

  // muda o estilo da proxima linha
  tarefas[linhaAtual + 1].classList.remove("tarefa-normal")
  tarefas[linhaAtual + 1].classList.add("tarefa-selecionada")
})

// 🖱️❌ Retirar Tarefa
formulario.btRetirar.addEventListener("click", () => {

  // 🔒 Obtém todas as tarefas
  const tarefas = document.querySelectorAll("h5")

  // 🪣 Cria uma variavel auxiliar
  let linhaAtual = -1

  // 🔄️🪣 Procura a tarefa selecionada e add na Auxiliar
  tarefas.forEach((tarefa, index) => {
    if (tarefa.className == "tarefa-selecionada") {
      linhaAtual = index
    }
  })

  // 🔀 Verifica se existe tarefa selecionada
  if (linhaAtual == -1) {
    alert("⚠️ Selecione uma tarefa para removê-la")
    return
  }

  // ❓ Solicita Confirmação de Exclusão da tarefa
  if (confirm(`❌ Confirma a Exclusão de "${tarefas[linhaAtual].innerText}"?`)) {
    divQuadro.removeChild(tarefas[linhaAtual])
  }

})

// 🖱️💾 Gravar Armazenamento
formulario.btGravar.addEventListener("click", () => {

  const tarefas = document.querySelectorAll("h5")

  if (tarefas.length == 0) {
    localStorage.removeItem("listaTarefas")
    alert("🗑️ Não há tarefas pendentes.");
    return;
  }

  const dados = []
  tarefas.forEach(tarefa => {
    dados.push(tarefa.innerText)
  })
  localStorage.setItem("listaTarefas", JSON.stringify(dados))

  if (localStorage.getItem("listaTarefas")) {
    alert("✅ OK! Tarefas Salvas")
  }
})

// 🖥️💾 Recuperar Armazenamento
window.addEventListener("load", () => {
  const dados = JSON.parse(localStorage.getItem("listaTarefas"))
  if (dados) {
    dados.forEach(dado => {
      const h5 = document.createElement("h5")
      h5.classList.add("tarefa-normal")
      const texto = document.createTextNode(dado)
      h5.appendChild(texto)
      divQuadro.appendChild(h5)
    })
  }
})