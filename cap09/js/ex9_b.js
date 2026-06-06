const formulario = document.querySelector('form')
const retorno = document.querySelector('h3')


formulario.addEventListener("submit", (e) => {
  e.preventDefault()

  const produto = formulario.inProduto.value.trim()

  if (produto.length < 3) {
    alert("⚠️ Informe um produto com mais de 3 caracteres")
    formulario.reset()
    formulario.inProduto.focus()
    return
  }

  const dadosSalvos = localStorage.getItem("listaProdutos")
  const listaProdutos = dadosSalvos ? JSON.parse(dadosSalvos) : []

  listaProdutos.push(produto)
  localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos))


  mostrarListaProdutos()
  formulario.reset()
  formulario.inProduto.focus()

})

const mostrarListaProdutos = () => {
  const dados = localStorage.getItem('listaProdutos')

  if (!dados) {
    retorno.innerText = ''
    return
  }

  const produtos = JSON.parse(dados).sort()

  retorno.innerText = `Produtos Adicionados: \n ${"-".repeat(27)} \n ${produtos.join('\n')}`

}

formulario.btnLimpar.addEventListener("click", () => {
  if (!localStorage.getItem('listaProdutos')) {
    return
  }

  if (confirm("🗑️ Confirma a exclusão de todos os produtos?")) {
    localStorage.removeItem("listaProdutos")

    mostrarListaProdutos()
  }

  formulario.inProduto.focus()
})

window.addEventListener("load", mostrarListaProdutos)