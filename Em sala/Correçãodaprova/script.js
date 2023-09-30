function exercicio1(){
    const Usuario = {
    nome: document.getElementById("inputnome").value,
    CPF: document.getElementById("inputcpf").value,
    dataNascimento: document.getElementById("inputdataNascimento").value
    }
    let usuarioCadastrado = []
    usuarioCadastrado.push(Usuario) 

}

function Enviar(){
    const nome = document.getElementById("inputNome").value
    const senha =  document.getElementById("inputSenha").value
    const confirmacaoSenha = document.getElementById("inputconfirmaSenha").value
    const mensagemErro = document.getElementById("messageErro")

    if(senha === confirmacaoSenha){
        mensagemErro.innerHTML = ""
        console.log("Senha coincidiram")
    }else{
        mensagemErro.innerHTML = "Senha errada"
        console.log("Senhas não coincidiram")
    }

    console.log("Senha:" + senha)
    console.log("Confirmação senha:" + confirmacaoSenha)
}

function NOME(parametros){

}

//arrowfunction - não se chama no html 