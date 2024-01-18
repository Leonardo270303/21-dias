let nome
let idade
let temcarta = false
let temcarro = false 

//Informacoes usuarios

nome = prompt("Digite seu nome")
idade = parseInt(prompt("Digite sua idade"))
let opcaocarta  = prompt("Voce temm carta de motorista s/n")
if (opcaocarta = "s") {
temcarta = true
}
let opcaocarro = prompt("Voce tem carro s/n")
if (opcaocarro = "s"){
opcaocarro = true
}

//Escrevendo no console



if ( idade < 18 || !temcarta ){
    console.log("Leonardo, voce nao pode dirigir")       
}else if (idade >= 18 && temcarta && !temcarro ){
    console.log("voce pode dirigir mas n tem carro")
}
else {
console.log("Voce é o motorista")
}

