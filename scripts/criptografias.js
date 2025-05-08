//FUNÇÃO CRIPTOGRAFAR
function criptografar(mensagem, chave) {
    let resultado = "";

    // ITERAÇÃO SOBRE OS CARACTERES DA MENSAGEM
    for (let c = 0; c < mensagem.length; c++) {
        let caractere = mensagem[c];
        chave = Number(chave);

        if (caractere.match(/[a-z]/i)) { // VALIDA SE O CARACTERE É LETRA (MAIÚSCULA OU MINÚSCULA)
            let base = caractere === caractere.toUpperCase() ? 65 : 97; // DEFINE A BASE PARA O CÓDIGO ASCII
            let codigo = caractere.charCodeAt(0); // PEGA O CÓDIGO ASCII DO CARACTERE

            /* Cálculo:
            1. codigo - base
                Transforma o caractere em uma posição no alfabeto, onde A = 0, B = 1, ..., Z = 25
            2. + chave
                Aplica o deslocamento da cifra, que pode ser positivo ou negativo.
            3. % 26
                Garante que o resultado do deslocamento esteja dentro do intervalo de 0 a 25, ou seja, dentro das letras do alfabeto.
            4. + 26
                Adiciona 26 para lidar com deslocamentos negativos e garantir que o valor final seja sempre positivo.
            5. % 26
                Garante que, após o ajuste de deslocamento, o valor final fique dentro do intervalo de 0 a 25.
            6. + base
                Converte o índice final de volta para o código ASCII do caractere deslocado (maiúscula ou minúscula).
            */
            let deslocamento = ((codigo - base + chave) % 26 + 26) % 26
            let letra_deslocada = String.fromCharCode(base + deslocamento); // CONVERTE DE VOLTA PARA CARACTERE
            resultado += letra_deslocada;

        } else if (caractere.match(/[áéíóúÁÉÍÓÚ]/)) { // VALIDA SE É UMA LETRA ACENTUADA
            let acentuadas = "áéíóúÁÉÍÓÚ"
            let index = acentuadas.indexOf(caractere)
        
            if (index !== -1) {
        
                // (index % 5) garante que o índice se mantenha dentro do intervalo de 0 a 4 (por conta das 5 letras de cada tipo: minúsculas e maiúsculas)
                // Somamos a chave (deslocamento) ao índice para aplicar o efeito da cifra.
                let baseIndex = (index % 5) + chave
        
                // Este cálculo assegura que baseIndex esteja dentro do intervalo correto de 0 a 4.
                baseIndex = ((baseIndex % 5) + 5) % 5 
        
                // Dependendo se o caractere original (antes do deslocamento) está na parte das minúsculas ou maiúsculas da string 'acentuadas',
                // ele vai escolher a posição correta para a letra deslocada.
                // Se o índice for menor que 5 (minúsculas), aplica o deslocamento na parte das minúsculas da string.
                // Se for maior ou igual a 5 (maiúsculas), aplica o deslocamento na parte das maiúsculas.
                resultado += acentuadas[index < 5 ? baseIndex : baseIndex + 5]
            } 
            
        } else if (caractere.match(/[âêîôûÂÊÎÔÛ]/)) { 
            let acentuadas = "âêîôûÂÊÎÔÛ"
            let index = acentuadas.indexOf(caractere)
        
            if (index !== -1) {
                let baseIndex = (index % 5) + chave
                baseIndex = ((baseIndex % 5) + 5) % 5 
                resultado += acentuadas[index < 5 ? baseIndex : baseIndex + 5]
            } 
        }
        else { // SE NÃO FOR LETRA, ADICIONA AO RESULTADO COMO ESTÁ
            resultado += caractere;
        }
    }
    return resultado;
}

//FUNÇÃO DESCRIPTOGRAFAR
function descriptografar(mensagem, chave){
    let mensagem_descriptografada = criptografar(mensagem, -chave)
    return mensagem_descriptografada
}