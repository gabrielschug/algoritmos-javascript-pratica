const palavra = "#SenhA_123!"

console.log(`
    ${palavra.match(/[a-z]/g)} 
    ${palavra.match(/[A-Z]/g)}
    ${palavra.match(/[0-9]/g)}
    ${palavra.match(/\W|_/g)}
    ${palavra.match(/[T-Z]/g)}
    
    `)