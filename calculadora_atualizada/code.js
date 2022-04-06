let nume = document.querySelector('.num')
let numero = ''
let res = ''
inserir = num => {
    res += num
    numero += num
    nume.innerHTML = numero
    console.log(res)
}
limpar = () => {
    res = ''
    numero = ''
    nume.innerHTML = ''
}
deleta = () => {
    numero = numero.substring(0, numero.length - 1)
    res = res.substring(0, res.length - 1)
    nume.innerHTML = numero
    console.log(res)
}
calcular = (sinal) => {
    res += sinal
    numero += sinal
    console.log(res)
    nume.innerHTML = numero
}

igual = () => {
    if (res) {
        nume.innerHTML = eval(res)
    }

}