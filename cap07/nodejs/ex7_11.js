const prompt = require('prompt-sync')()

const numParcelas = Number(prompt('Quantas parcelas? '))

const data = new Date() //  Data atual

for (let i = 1; i <= numParcelas; i++) {
  data.setMonth(data.getMonth() + 1) // Aumenta um mês na data atual, a cada loop = mes++
  const dia = data.getDate()
  const mes = data.getMonth() + 1 // +1 pra ajustar o JavaScript
  const ano = data.getFullYear()

  const acc0Dia = dia < 10 ? "0" + dia : dia // acc 0  se dia < 10
  const acc0Mes = mes < 10 ? "0" + mes : mes // acc 0  se mês < 10


  console.log(`${i}ª Parcela: ${acc0Dia}/${acc0Mes}/${ano} `)
}