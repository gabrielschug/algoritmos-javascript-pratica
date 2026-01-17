// ORDENAR LISTAS COM DE CARACTERES

const nomes = ['Pedro', 'Ana', 'João']
console.log("\nNomes: " + nomes.join(', '))

nomes.sort() // ORDENAR
console.log("\nCrescente: " + nomes.join(', '))

nomes.reverse() // ORDEM DECRESCENTE
console.log("\nDecrescente: " + nomes.join(', '))


// ORDENAR LISTAS COM NÚMEROS

const numeros = [50, 100, 2]

numeros.sort()
console.log(numeros.join(", "))

numeros.sort((a, b) => a - b)
console.log(numeros.join(", "))