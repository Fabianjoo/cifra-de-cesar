 // ADICIONANDO EVENTOS DE CLICK AOS BOTÕES

        //1- BOTAO CRIPTOGRAFAR
        botao_criptografar.addEventListener("click", function(){
            // OBTENDO INPUTS DO USUÁRIO
            let mensagem = document.getElementById("mensagem").value // MENSAGEM
            let chave = document.getElementById("chave").value // CHAVE

            //VALIDA SE A MENSAGEM ESTÁ VAZIA
            if(mensagem == ""){
                window.alert("[ERRO] Por favor digite uma mensagem!")
            } else{
                let mensagem_criptografada = criptografar(mensagem, chave)
                // ALTERANDO TÍTULO E PARÁGRAFO DA DIV RESULTADO
                resultado.querySelector("h2").innerText = "🔒 Mensagem Criptografada:"
                resultado.querySelector("p").innerText = mensagem_criptografada
                //ANIMAÇÃO E CONTEÚDO DA DIV RESULTADO
                resultado.classList.add("ativar")
                div_botao.style.display = "none"
                caixatexto.disabled = true

            }
        })

        //1- BOTAO DESCRIPTOGRAFAR
        botao_descriptografar.addEventListener("click", function(){
            let mensagem = document.getElementById("mensagem").value // MENSAGEM
            let chave = document.getElementById("chave").value // CHAVE

            //VALIDA SE A MENSAGEM ESTÁ VAZIA
            if(mensagem == ""){
                window.alert("[ERRO] Por favor digite uma mensagem!")
            } else{
                let mensagem_descriptografada = descriptografar(mensagem, chave)
                // ALTERANDO TÍTULO E PARÁGRAFO DA DIV RESULTADO
                resultado.querySelector("h2").innerText = "🔓 Mensagem Descriptografada:"
                resultado.querySelector("p").innerText = mensagem_descriptografada
                //ANIMAÇÃO E CONTEÚDO DA DIV RESULTADO
                resultado.classList.add("ativar")
                div_botao.style.display = "none";
                caixatexto.disabled = true
            }
        })

        //3- BOTAO RECARREGAR PÁGINA
        botao_reload.addEventListener("click", function(){
            location.reload();
        })

        //3- BOTAO COPIAR
        botao_copiar.addEventListener("click", function() {
            // Cria um elemento temporário textarea
            var temporario = document.createElement("textarea");
        
            // Define o conteúdo do textarea como o texto do parágrafo
            temporario.value = resultado.querySelector("p").innerText;
        
            // Adiciona o textarea ao corpo do documento (necessário para a operação de seleção)
            document.body.appendChild(temporario);
        
            // Seleciona o conteúdo do textarea
            temporario.select();
        
            // Tenta copiar o conteúdo para a área de transferência
            document.execCommand("copy");
        
            // Remove o textarea temporário
            document.body.removeChild(temporario);
        
            // Atualiza o texto de feedback para o usuário
            resultado.querySelector("p").innerText = "TEXTO COPIADO!!";
        });
        