let numero1 = Number(prompt("Insira o primeiro numero"))
let numero2 = Number(prompt("Insira o segundo numero"))
let operacao = prompt("Qual operacao numerica voce deseja")

switch(operacao){
    case "*":
        console.log (numero1 + " * " + numero2 + " = " + (numero1 * numero2))
        break;
    case "/":
        console.log (numero1 + " / " + numero2 + " = " + (numero1 / numero2))
        break;
    case "+":
        console.log (numero1 + " + " + numero2 + " = " + (numero1 + numero2))
        break;
    default:
        console.log(numero1 + " - " + numero2 + " = " + (numero1 - numero2))
        break;
}
