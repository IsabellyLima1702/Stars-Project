//serve para mostrar os erros oculotos no terminal
"use strict"

async function register(){
    const url = `https://back-spider.vercel.app/user/cadastrarUser`

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const premium = document.getElementById('premium').value
    const imagem = document.getElementById('imagemPerfil').value
    const recuperacao = document.getElementById('senhaRecuperacao').value

    

    const data = {
        nome: nome,
        email: email,
        senha: senha,
        premium: premium,
        imagemPerfil: imagem,
        senhaRecuperacao: recuperacao

    }
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }
    const response = await fetch(url,options)

    console.log(response);

    if(response.status == 201){
        alert('Cadastro realizado com sucesso!')

    }else{
        alert('Cadastro inválido.')

    }

}