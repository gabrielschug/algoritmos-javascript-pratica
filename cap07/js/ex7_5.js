/*
☐ Funciona?
☐ Nomes claros?
☐ Não repete código?
☐ Funções fazem 1 coisa?
☐ Fácil de ler?
☐ Não compliquei demais?
*/

// REFERENCIAS
const formulario = document.querySelector('form')
const retorno = document.querySelector('h3')

// OUVIDOR
formulario.addEventListener("submit", (event) => {
  event.preventDefault()

  // ENTRADA
  const funcionario = formulario.inNome.value

  // REGRA 
  const partes = funcionario.split(" ")
  let email = ""
  const tamanho = partes.length

  for(let i = 0; i < tamanho -1; i++){
    email +=partes[i].charAt(0)
  }

  email += partes[tamanho -1] + "@empresa.com.br" // contatena ultimo sobrenome + @...

  retorno.innerText = `email: ${email.toLocaleLowerCase()}`

})