//DOM
const uni1 = document.querySelector('#uni1')
const uni2 = document.querySelector('#uni2')
const uni3 = document.querySelector('#uni3')
const botao = document.querySelector('#botao')
const resultado = document.querySelector('#resultado')


//EVENTOS

botao.addEventListener('click', calcular)


//FUNÇÕES

function calcular(){
    n1 = Number(uni1.value)
    n2 = Number(uni2.value)
    n3 = Number(uni3.value)

    media = (n1+n2+n3)/3

    if(media >=5){
        mensagem = 'foi Aprovado(a)!!'
    }else{
        mensagem = 'ficou de Recuperação!!'
    }

    resultado.textContent = `A sua média foi ${media.toFixed(1)}, você ${mensagem}`
}