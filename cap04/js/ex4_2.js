// Pegar Elementos
const frm = document.querySelector('form')
const resposta = document.querySelector('h3')

// Formulario
frm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Entradas do Formulário
  const nome = frm.inNome.value
  const masculino = frm.inMasculino.checked
  const altura = frm.inAltura.value

  // Processamento
  let peso

  if (masculino) {
    peso = 22 * Math.pow(altura, 2)
  } else {
    peso = 21 * Math.pow(altura, 2)
  }

  // Saída de Informação
  resposta.innerText = ` Olá ${nome}!\nSeu peso ideal é de ${peso.toFixed(2)} kg`

})