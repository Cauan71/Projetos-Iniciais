//DOM
const cidade = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const texto_cidade = document.querySelector('.cidade')
const temperatura = document.querySelector('.temp')
const previsao = document.querySelector('.texto-previsao')
const imagem = document.querySelector('#imagem')

// Consumo API
// chave da API
const chave = 'a93779c5fb01a60e7c3eb2137640ee1e'

// Eventos
botao.addEventListener('click', buscar)
// async = termo para a função esperar o resultado da API
async function buscar() {

    nome_cidade = cidade.value

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nome_cidade}&appid=${chave}&units=metric&lang=pt_br`)
    .then(resposta => resposta.json())
// .then = traduza

    texto_cidade.textContent = `Tempo em ${dados.name}`
    temperatura.textContent = `${dados.main.temp.toFixed(0)}°C`
    previsao.textContent = `${dados.weather[0].description}`
    imagem.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    
    console.log(dados)


}
