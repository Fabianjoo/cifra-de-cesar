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
        } else { // SE NÃO FOR LETRA, ADICIONA AO RESULTADO COMO ESTÁ
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