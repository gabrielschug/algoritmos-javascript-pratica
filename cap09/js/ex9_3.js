const formulario = document.querySelector('form')
const respostaLista = document.querySelector('pre')


formulario.addEventListener("submit", (e) => {
  e.preventDefault()

  const nome = formulario.inNome.value
  const peso = Number(formulario.inPeso.value)

  // Chama função que verifica se o peso já foi apostado
  if (verApostaExiste(peso)) {
    alert('Alguém já apostou este peso, informe outro ...')
    formulario.inPeso.focus()
    return
  }

  //OPERADOR TERNÁRIO PARA IF/ELSE
  const nomeSalvo = localStorage.getItem('melanciaNome')
  const pesoSalvo = localStorage.getItem('melanciaPeso')

  // Salva na variavel 'melancia...' do localStorage
  // SE o ''nomeSalvo' tem conteudo ENTÃO inclui 'nomeSalvo' + 'nome' SENÃO inclui 'nome' que chegou agora 
  localStorage.setItem('melanciaNome', nomeSalvo ? nomeSalvo + ';' + nome : nome)
  localStorage.setItem('melanciaPeso', pesoSalvo ? pesoSalvo + ';' + peso : peso)

  mostrarApostas() // chama função que mostra as apostas salvas
  formulario.reset()
  formulario.inNome.focus()

})

const verApostaExiste = (peso) => {

  // Obtem dados do localStorage
  const dadosPeso = localStorage.getItem('melanciaPeso')

  return dadosPeso?.includes(peso.toString()) ?? false

}

const mostrarApostas = () => {

  const dadosNome = localStorage.getItem('melanciaNome')
  const dadosPeso = localStorage.getItem('melanciaPeso')

  if (!dadosNome) {
    respostaLista.innerText = ''
    return
  }

  const nomes = dadosNome.split(";")
  const pesos = dadosPeso.split(";")

  respostaLista.innerText = nomes.map((nome, i) => `${nome}: ${pesos[i]} gramas`).join('\n')

}

formulario.btnVencedor.addEventListener("click", () => {

  const dadosNome = localStorage.getItem('melanciaNome')
  const dadosPeso = localStorage.getItem('melanciaPeso')

  if (!dadosNome) {
    alert('Não há apostas cadastradas')
    return
  }

  const nomes = dadosNome.split(';')
  const pesos = dadosPeso.split(';')

  const pesoCorreto = Number(prompt('Qual o peso correto da melancia?'))
  if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
    return
  }


  vencedor = nomes.reduce((melhor, nome, i) => { // Recebe: melhor (array de menor diferença) / nome(nome da aposta atual) / index

    // Gera o valor das diferenças de peso da 'menor diferença até o momento' vs 'diferença atual'
    const difMelhor = Math.abs(melhor.peso - pesoCorreto)
    const difAtual = Math.abs(Number(pesos[i]) - pesoCorreto)

    // Comparação das diferenças..
    return difAtual < difMelhor ? { nome, peso: Number(pesos[i]) } : melhor
  }, { nome: nomes[0], peso: Number(pesos[0]) }) // Valor inicial: cria um objeto do primeiro array do primeiro


  let mensagem = `✨Resultado - Peso Correto ${pesoCorreto} gramas
  ----------------------------------------------
  🎉 Vencedor: ${vencedor.nome}
  Aposta: ${vencedor.peso} gramas`
  alert(mensagem)

})

formulario.btnLimpar.addEventListener('click', () => {
  if (confirm('🗑️ Confirma a exclusão de todas as apostas?')) {
    localStorage.removeItem('melanciaNome')
    localStorage.removeItem('melanciaPeso')
    mostrarApostas()
  }
})


window.addEventListener("load", mostrarApostas())