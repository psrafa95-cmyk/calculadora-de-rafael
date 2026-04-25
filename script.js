// Função que adiciona números ou operadores no display
function add(valor){
    document.getElementById("display").value += valor;
}

// Função que limpa o display
function clearDisplay(){
    document.getElementById("display").value = "";
}

// Função que faz o cálculo final
function calcular(){
    let resultado = document.getElementById("display").value;
    document.getElementById("display").value = eval(resultado);
}
