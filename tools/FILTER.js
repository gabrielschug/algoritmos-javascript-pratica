// EXEMPLO 1  ----------------------------------------

const alunos = [
  { nome: 'Gabriel', nota: 10 },
  { nome: 'Karen', nota: 10 },
  { nome: 'Larissa', nota: 7 }
]

const notaDEZ = alunos.filter(aluno => aluno.nota === 10)

notaDEZ.forEach(aluno => console.log(aluno.nome))


// EXEMPLO 2 -----------------------------------------
const notas = [10, 2, 7, 9, 1, 3]

const aprovado = notas.filter(nota => nota > 6)
console.log(aprovado.join(' - '))
