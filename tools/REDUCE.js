// MAIOR NUMERO DE UM VETOR

numeros = [10, 6, 8, 2, 80]

const maior = numeros.reduce((a, b) => Math.max(a, b), 0)

console.log(maior)