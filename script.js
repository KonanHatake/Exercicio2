//Exercicio 2
let nome = document.getElementById("nomeI")
let nomeR = document.getElementById("nomeP")

function nomeB()
{
    nomeR.innerHTML = "Olá, " + nomeI.value + ", tudo bem?"
}

//Exercicio 3
let numC = document.getElementById("numC")
let converterR = document.getElementById("converterP")

function converterB()
{
    converterR.innerHTML = (parseInt(numC.value)/100)
}

//Exercicio 4
let numAS = document.getElementById("numAS")
let antecessorP = document.getElementById("antecessorP")
let sucessorP = document.getElementById("sucessorP")

function ASB()
{
    antecessorP.innerHTML = "Antecessor é " + (parseInt(numAS.value) - 1)
    sucessorP.innerHTML = "Sucessor é " + (parseInt(numAS.value) + 1)
}

//Exercicio 5
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let somarR = document.getElementById("somarP")

function somarB()
{
    somarR.innerHTML = (parseInt(num1.value) + parseInt(num2.value))
}

//Exercicio 6
let salario = document.getElementById("salario")
let aumento1 = 0.10
let aumento2 = 0.15
let aumento = document.getElementById("aumentoP")

function aumentoB()
{
    if(salario.value > 1250)
    {
        aumento.innerHTML = (parseInt(salario.value) + (aumento1 * parseInt(salario.value)))
    }
    else
    {
        aumento.innerHTML = (parseInt(salario.value) + (aumento2 * parseInt(salario.value)))
    }
}

//Console
//Exercicio 7
console.log("Exercicio 7")
let a = 1
while(a < 101)
    {
        console.log(a)
        a = a + 1
    }

//Exercicio 8
console.log("Exercicio 8")
let b = 0
while(b < 51)
    {
        console.log(b)
        b = b + 5
    }

//Exercicio 9
console.log("Exercicio 9")
let c = 100
while(c > 0)
    {
        console.log(c)
        c = c - 10
    }
