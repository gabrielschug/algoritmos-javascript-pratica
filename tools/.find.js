// UTILIZANDO O MÉTODO FIND

const CONVENIOS = [
  { nome: 'Sem Convênio', desconto: 0.10 },
  { nome: 'Amigo dos Animais', desconto: 0.20 },
  { nome: 'Saúde Animal', desconto: 0.50 }
]


function calcularDesconto(nomeConvenio, valorVacina) {
  // Encontre o convenio onde a key nome é === nomeConvenio
  const convenioEncontrado = CONVENIOS.find(c => c.nome === nomeConvenio)
  // Se convenio foi Encontrado → obtem desconto, se não = 0
  const percentual = convenioEncontrado ? convenioEncontrado.desconto : 0
  return valorVacina * percentual
}