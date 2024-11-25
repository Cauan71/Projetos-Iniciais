//DOM
const cidade = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const texto_cidade = document.querySelector('.cidade')
const temperatura = document.querySelector('.temp')
const previsao = document.querySelector('.texto-previsao')

// Consumo API
const chave = 'a93779c5fb01a60e7c3eb2137640ee1e'

// Eventos
botao.addEventListener('click', buscar)

async function buscar() {

    nome_cidade = cidade.value

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nome_cidade}&appid=${chave}&units=metric&lang=pt_br`)
    .then(resposta => resposta.json())

    console.log(dados)


}

