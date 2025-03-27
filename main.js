//serve para mostrar os erros oculotos no terminal
"use strict"

async function register(){
    const url = `https://back-spider.vercel.app/user/cadastrarUser`

    const nome = document.getElementById('name').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('password').value
    const premium = document.getElementById('premium').value
    const imagem = document.getElementById('imgPerfil').value
    const recuperacao = document.getElementById('reset').value

    

    const data = {
        name: nome,
        email: email,
        password: senha,
        premium: premium,
        imgPerfil: imagem,
        reset: recuperacao

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

    if(response.status == 200){
        alert('Cadastro realizado com sucesso!')

    }else{
        alert('Cadastro inválido.')

    }

}