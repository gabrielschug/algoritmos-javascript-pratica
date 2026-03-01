const formulario = document.querySelector("form")
const retorno = document.querySelector("h3")

const TAXA_MULTA = 2 / 100 // 2% do valor total da conta
const TAXA_JUROS = 0.33 / 100 // 0.33%

formulario.addEventListener("submit", (event) => {
  event.preventDefault()

  // ENTRADAS
  const dataVencimento = formulario.inDataVencimento.value
  const valor = Number(formulario.inValorConta.value)

  // INSTANCIADA AS DATAS
  const hoje = new Date() // hoje
  const vencimento = new Date() // hoje

  // OBTENDO AAAA-MM-DD
  const partes = dataVencimento.split("-") // aaaa-mm-dd
  vencimento.setDate(Number(partes[2])) // dd
  vencimento.setMonth(Number(partes[1] - 1)) // mes no JS vai do 0-11 
  vencimento.setFullYear(Number(partes[0])) // aaaa

  const atraso = hoje - vencimento
  console.log(atraso) // em milisegundos
  let multa = 0
  let juros = 0

  if (atraso > 0) {
    const dias = atraso / 86_400_000
    multa = valor * TAXA_MULTA
    juros = valor * TAXA_JUROS * dias // 0.33% a cada dia de atraso
  }

  const total = valor + multa + juros

  formulario.outValorMulta.value = multa.toFixed(2)
  formulario.outValorJuros.value = juros.toFixed(2)
  formulario.outTotalPagar.value = total.toFixed(2)

})