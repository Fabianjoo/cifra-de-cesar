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
                    Transforma o caractere em uma posição de 0 a 25 no alfabeto.
                2. + chave
                    Aplica o deslocamento da cifra.
                3. % 26
                    Garante que o resultado fique entre 0 e 25.
                4. + base
                    Converte de volta para o código ASCII.
            */
            let deslocamento = ((codigo - base + chave) % 26 + 26) % 26;
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