const formulario = document.querySelector('form')
const retono = document.querySelector('h3')

formulario.addEventListener("submit", (event) => {
    event.preventDefault()

    const senha = formulario.inSenha.value
    const erros = []
    let nErros = 0
    //VALIDAÇÕES

    // Tamanho da senha  
    senha.length < 8 || senha.length > 15
    ? (erros.push('❌ Necessita ter entre 8 e 15 caracteres'), nErros++)
    : erros.push('✅ Possui entre 8 e 15 caracteres')
    
    // Números
    senha.match(/[0-9]/g) == null
    ? (erros.push('❌ Necessita de números (no mínimo, 1)'), nErros++)
    : erros.push('✅ Possui números')
    
    // Letras minúsculas
    !senha.match(/[a-z]/g)
    ? (erros.push('❌ Necessita de letras minúsculas (no mínimo, 1)'), nErros++)
    : erros.push('✅ Possui letras minúsculas')
    
    // Apenas 1 Letra Maiuscula ou Nenhuma
    !senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1
    ? (erros.push('❌ Necessita de letras maiúsculas (no mínimo, 2)'),nErros++)
    : erros.push('✅ Possui maiúsculas')
    
    // Símbolos ou "_"
    !senha.match(/[\W|_]/g)
    ? (erros.push('❌ Necessita de símbolos (no mínimo, 1)'), nErros++)
    : erros.push('✅ Possui símbolos')
    

    // RETORNO
    retono.innerText = `
    ${nErros > 0 
    ? `⚠️ ${nErros} erros para arrumar`
    : "✅ A senha está válidada!"}\n\n${erros.join("\n")}`

})