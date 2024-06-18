<<<<<<< HEAD
// Desenvolva um algoritmo que receba a nota e o sexo do aluno, usando a estrutura WHILE, e pergunte ao usuario se ele deseja cadastrar outra nota. No final, exiba no console:


//  - A média geral dos alunos
//  - Quantos homens enviaram as notas
//  - Quantas mulheres tiveram nota acima de 7
//  - Qual a maior nota entre os homens
    

//     *Obs.: para obter a média geral deve somar todas as notas e 

//     dividir pelo número de alunos!

// *Não esqueça de testar seu código!


let mediaGeral = 0
let qtdHomens = 0 
let qtdMulheresAcima7 = 0
let maiorNotaEntreHomens = 0 
let contador = 1

while (contador <= 10) {
 nota = parseInt(prompt("Digita a nota do " + contador + " aluno " ))
 sexo = prompt("Digite o sexo do aluno (f/h)")
 if(sexo == "h"){
     if(nota > maiorNotaEntreHomens) {
         maiorNotaEntreHomens = nota
     }
     qtdHomens++
 }
 if(sexo == "f" && nota > 7){
    qtdMulheresAcima7++
 }
 mediaGeral += nota
 contador++
}
mediaGeral = mediaGeral/10


console.log("A media geral dos alunos foi" + mediaGeral)
console.log("A quantidade de homens foi de:" + qtdHomens)
console.log("A quantidade de mulheres com notas maiores que 7 foi de:" + qtdMulheresAcima7)
console.log("A maior nota entre homens foi de:" + maiorNotaEntreHomens)
