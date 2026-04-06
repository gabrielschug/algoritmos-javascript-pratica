/*
# MÉTODO MATCH: --------------------------------------------------------------
- Verifica a existência de letras:
  - maiusculas
  - minusculas
  - números 
  - símbolos        em uma string.

- MATCH Utiliza conceitos de EXPRESSÕES REGULARES.
  Contém um conjunto de caracteres que indicam um padrão a ser pesquisado.
  *** O assunto RegEx é amplo (por isso tenho que aprender :)
-------------------------------------------------------------------------------*/

/*
# EXPRESSÕES: -----------------------------------------------------------------

g → global: indica que a pesquisa deve retornar todas as ocorrências dos caracteres na string

# O RETORNO: 
  - vetor com os elementos encontrados; ou 
  - "null" (vazio)
-------------------------------------------------------------------------------*/

const palavra = '#SenhA_123!'

const maiusculas = palavra.match(/[A-Z]/g)
const minusculas = palavra.match(/[a-z]/g)
const numericos = palavra.match(/[0-9]/g)
const simbolos = palavra.match(/\W|_/g) // '\W'= metacaractere que retorna os símbolos '|' = ou '_' → underline q ñ vem no '\W'
const vetor5 = palavra.match(/[T-Z]/g) // Maiúsculas entre T e Z, retorna 'null'

