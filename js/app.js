console.log('Olá, JavaScript!')

/*var nome = 'Mestre Yoda'
var idade = 100
var jedi = true

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof jedi)*/

var userName = "James"
document.getElementById('user-name').innerHTML = userName

// Operadores de comparação //

/*var v1 = 5
var v2 = '5'

var resultado = v1 !== v2
console.log(resultado)*/

/*function soma(n1, n2){
     console.log(n1+n2)
}
soma(1, 2)*/

// function boasVindas(nome){
//     alert(nome+ ', seja bem vindo')
// }
// boasVindas('Fulano')

// function soma(n1, n2){
//     return n1+n2
// }
// var resultado = soma(2, 2)
// console.log(resultado)

//Controle de fluxos/

// Sendo um cliente correntista do banco
//posso sacar dinheiro em caixas eletrônicos
// para poder comprar em lugares que não aceitem o cartão de débito ou crédito

var saldo = 1000
function saque(valor){
    if(valor > saldo){
        console.log('Valor do saque superior ao saldo')
    }
    else if(valor>700){
        console.log(' o valor é superior ao máximo permitido')
    }
    else{
        saldo = saldo - valor
    }
}
saque(701)

console.log(saldo)


//cenário 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais
// quando faço um saque de 500 reais
// então o valor do saque deve ser deduzido do meu saldo

//Cenário 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

// Cenário 3: Saque com valor máximo
// Dado que meu saldo é de 1000 reais
// E o valor máximo por operação é de 700
// Quando faço um saque no valor de 701 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido

