/*
☐ Funciona ?
☐ Nomes claros?
☐ Não repete código?
☐ Funções fazem 1 coisa?
☐ Fácil de ler?
☐ Não compliquei demais?
*/

const formulario = document.querySelector('form')
const listaNumeros = document.querySelector('h3')
const resultado = document.querySelector('pre')
const botaoVerificar = document.querySelector('#botaoVerificar')

const numeros = []

formulario.addEventListener("submit", (e) => {
  e.preventDefault()

  const numero = Number(formulario.inNumero.value)

  // Validações
  if (Number.isNaN(numero)) {
    alert('Digite um número válido')
    return
  }

  if (numeros.includes(numero)) {
    alert('Número já adicionado!')
    return
  }

  numeros.push(numero)
  listaNumeros.innerText = "Números: " + numeros.join(", ")

  formulario.reset()
  formulario.inNumero.focus()

})

botaoVerificar.addEventListener("click", () => {

  if (numeros.length < 2) {
    resultado.innerText = "Adicione pelo menos 2 números para verificar"
    return
  }

  const crescente = numeros.every((num, i, arr) =>
    i === 0 || arr[i - 1] < num)
  resultado.innerText = crescente
    ? 'Números estão em ordem crescente'
    : 'Atenção... Números NÃO ESTÃO em ordem crescente!'

})