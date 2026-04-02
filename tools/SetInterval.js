const mostraHora = () => {
  const data = new Date()

  const hora = data.getHours()
  const minutos = data.getMinutes()
  const segundos = data.getSeconds()
  console.log(`Atenção para o horário: ${hora}:${minutos}:${segundos}`)
}
// Recebe o horário a cada 5 segundos
setInterval(mostraHora, 5000)


// MODO ALTERNATIVO

setInterval(() => {
  const data = new Date()

  const hora = data.getHours()
  const minutos = data.getMinutes()
  const segundos = data.getSeconds()

  console.log(`Atenção para o horário: ${hora}:${minutos}:${segundos}`)
}, 5000)