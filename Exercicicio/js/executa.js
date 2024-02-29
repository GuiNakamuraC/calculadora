var resultado = document.getElementById('resultado')

function pegarNome(){
    var nome = document.getElementById('nome').value 
    console.log('nome', nome)
    resultado.innerHTML = nome
}

function pegarNum1(){
    var num1 = document.getElementById('num1').value
    Number.parseInt(num1)
    console.log('num1', num1)
}