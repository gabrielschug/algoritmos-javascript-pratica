const formulario = document.querySelector('form')
const retorno = document.querySelector('pre')

const itens = []

// Quando o radiobutton Pizza é clicado (click)
formulario.rbPizza.addEventListener("click", () => {
  formulario.inBebida.className = "oculta"
  formulario.inPizza.className = "exibe"
})

// Quando o radiobutton Bebida é clicado (click)
formulario.rbBebida.addEventListener("click", () => {
  formulario.inPizza.className = "oculta"
  formulario.inBebida.className = "exibe"
})

// Quando o inDetalhes recebe foco (focus)
formulario.inDetalhes.addEventListener("focus", () => {
  if (formulario.rbPizza.checked) {
    const pizza = formulario.inPizza.value
    //Número de sabores com Operador Ternário
    const num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4
    formulario.inDetalhes.placeholder = `Até ${num} sabores`
  }
})

// Quando o inDetalhes perde foco (blur)
formulario.inDetalhes.addEventListener("blur", () => {
  formulario.inDetalhes.placeholder = ""
})

// PROGRAMA PRINCIPAL
formulario.addEventListener("submit", (e) => {
  e.preventDefault()

  let item
  if (formulario.rbPizza.checked) {
    const index = formulario.inPizza.selectedIndex
    item = formulario.inPizza.options[index].text
  } else {
    const index = formulario.inBebida.selectedIndex
    item = formulario.inPizza.options[index].text
  }

  const detalhes = formulario.inDetalhes.value
  itens.push(`${item} (${detalhes})`)
  retorno.innerText = itens.join("\n")
  formulario.reset()
  formulario.rbPizza.dispatchEvent(new Event("click"))
})