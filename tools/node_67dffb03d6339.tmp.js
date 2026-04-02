const mostraHora = () => {
  const data = new Date()

  const hora = data.getHours()
  const minutos = data.getMinutes()
  const segundos = data.getSeconds()
  console.log(`Atenção para o horário: ${hora}:${minutos}:${segundos}`)
}
setInterval(mostraHora, 5000)