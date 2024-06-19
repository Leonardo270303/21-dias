
// Desenvolva um algoritmo que receba a nota e o sexo do aluno, usando a estrutura WHILE, e pergunte ao usuario se ele deseja cadastrar outra nota. No final, exiba no console:


//  - A média geral dos alunos
//  - Quantos homens enviaram as notas
//  - Quantas mulheres tiveram nota acima de 7
//  - Qual a maior nota entre os homens
    

//     *Obs.: para obter a média geral deve somar todas as notas e 

//     dividir pelo número de alunos!

// *Não esqueça de testar seu código!


// let mediaGeral = 0
// let qtdHomens = 0 
// let qtdMulheresAcima7 = 0
// let maiorNotaEntreHomens = 0 
// let contador = 1

// while (contador <= 10) {
//  nota = parseInt(prompt("Digita a nota do " + contador + " aluno " ))
//  sexo = prompt("Digite o sexo do aluno (f/h)")
//  if(sexo == "h"){
//      if(nota > maiorNotaEntreHomens) {
//          maiorNotaEntreHomens = nota
//      }
//      qtdHomens++
//  }
//  if(sexo == "f" && nota > 7){
//     qtdMulheresAcima7++
//  }
//  mediaGeral += nota
//  contador++
// }
// mediaGeral = mediaGeral/10


// console.log("A media geral dos alunos foi" + mediaGeral)
// console.log("A quantidade de homens foi de:" + qtdHomens)
// console.log("A quantidade de mulheres com notas maiores que 7 foi de:" + qtdMulheresAcima7)
// console.log("A maior nota entre homens foi de:" + maiorNotaEntreHomens)


let saldo = 1000
let maiorValorInserido = 0
let somaValoresInseridos = 0 
let continuar = false
let totalTransacoes = 0


do {
    const nome = promt("Digite seu nome")
    const cpf = promt("Digite seu CPF")
    const valor = Number(promt("Digite o valor da transação"))
    const operacao = promt("Qual operação deseja fazer S / D")

    if(valor < 0) {
        console.log("Valor inválido. A transação não foi realizada.")
    } else if (operacao == "S" && valor > saldo) {
        console.log("Saldo insuficiente. A transação não foi realizada")
    }else if (operacao == "S") {
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`)
        saldo -= valor;
        totalTransacoes++
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual é R$${saldo}`)
    }
    const opcao = prompt("Deseja continuar(1 para continuar, 2 para parar)")
    if(opcao === "1") {
        continuar = true
    }else if (opcao === "2"){
        continuar = false
    }else {
        console.log("Opção invalida. Programa encerrado")
        continuar = false
    }
}while(continuar)


console.log(`Saldo final: R$${saldo}`)
console.log(`Maior valor inserido R$${maiorValorInserido}`)
console.log(`Média dos valores inseridos: R$${(somaValoresInseridos/totalTransacoes)}`)