// UTILIZANDO O IF ELSE INTELIGENTE
// ASSUME O ELSE PRA VARIÁVEL
let nomeConvenio = 'Sem Convênio'

// SE A CONDIÇÃO DER VERDADEIRA → ALTERA A VARIÁVEL. SEM USAR ELSE
if (formulario.rbConvenio.checked) {
  nomeConvenio = formulario.inConvenio.options[formulario.inConvenio.selectedIndex].text
}