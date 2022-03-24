let resultado = ''
let numeros = document.getElementById('numeros')
let adicionando = ''

function zero() {
    adicionando += '0'
    numeros.innerHTML = adicionando
}

function um() {
    adicionando += '1'
    numeros.innerHTML = adicionando
}

function dois() {
    adicionando += '2'
    numeros.innerHTML = adicionando
}

function tres() {
    adicionando += '3'
    numeros.innerHTML = adicionando
}

function quatro() {
    adicionando += '4'
    numeros.innerHTML = adicionando
}

function cinco() {
    adicionando += '5'
    numeros.innerHTML = adicionando
}

function seis() {
    adicionando += '6'
    numeros.innerHTML = adicionando
}

function sete() {
    adicionando += '7'
    numeros.innerHTML = adicionando
}

function oito() {
    adicionando += '8'
    numeros.innerHTML = adicionando
}

function nove() {
    adicionando += '9'
    numeros.innerHTML = adicionando
}

function mais() {
    adicionando += '+'
    numeros.innerHTML = adicionando
}

function menos() {
    adicionando += '-'
    numeros.innerHTML = adicionando
}

function multi() {
    adicionando += '*'
    numeros.innerHTML = adicionando

}

function divi() {
    adicionando += '/'
    numeros.innerHTML = adicionando
}

function igual() {
    resultado = eval(adicionando)
    numeros.innerHTML = resultado

}

function del() {
    numeros[-1]
}

function reset() {
    adicionando = ''
    numeros.innerHTML = adicionando
}