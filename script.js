function add(valor){
document.getElementById("display").value += valor;
}

function clearDisplay(){
document.getElementById("display").value = "";
}

function calcular(){
let resultado = document.getElementById("display").value;
document.getElementById("display").value = eval(resultado);
}