// Distância, Consumo ,  Preço

// (Distanca/ consumo) * preço

//DOM
const etapa1 = document.querySelector("#etapa1");
const etapa2 = document.querySelector("#etapa2");
const etapa3 = document.querySelector("#etapa3");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");

//EVENTOS

botao.addEventListener('click',calcular);

//FUNÇÕES

function calcular(){
    etp1 = Number(etapa1.value);
    etp2 = Number(etapa2.value);
    etp3 = Number(etapa3.value);

    
    const total = (etp1/etp2)*etp3;
    
    
    resultado.textContent = ` O gasto total para a viagem será de R$ ${total.toFixed(2)}`;

}

