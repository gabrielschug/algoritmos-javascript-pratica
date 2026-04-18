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
  const dadosNome = localStorage.getItem('melanciaNomes')
  const dadosPeso = localStorage.getItem('melanciaPesos')

  // SE vazio → retorna ''
  if (!dadosNome) {
    respostaLista.innerText = ''
    return
  }

  // Se tiver dados → atribui em um array
  const nomes = dadosNome.split(';')
  const pesos = dadosPeso.split(';')

  // Percorre o array 'nomes', utiliza um idex pra buscas o 'peso' e retorna com a linha formatada. Junta com 'Join' 
  respostaLista.innerText = nomes.map((nome, i) => `${nome}: ${pesos[i]} gramas`).join('\n')
}

window.addEventListener("load", mostrarApostas())