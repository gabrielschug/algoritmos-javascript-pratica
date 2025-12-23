const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

let resposta = ''
let numContas = 0
let valorTotal = 0

frm.addEventListener('submit', (e) => {
  e.preventDefault()

  // Entrada de dados
  const descricao = frm.inDescricao.value
  const valor = Number(frm.inValor.value)

  // Processamento
  numContas++ // Incrementa o número de contas
  valorTotal += valor // Acumula o valor total


  resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + " \n"

  // Saída de dados
  resp1.innerText = `${resposta} ---------------------------------`
  resp2.innerText = `${numContas} Conta(s) | Total R$: ${valorTotal.toFixed(2)}`

  // Limpa os campos e posiciona o cursor em inDescricao
  frm.inDescricao.value = ""
  frm.inValor.value = ""
  frm.inDescricao.focus()
})