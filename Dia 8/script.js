function calculadora (numero1, numero2, operador) {
    let resultado
    let num1 = parseInt(numero1)
    let num2 = parseInt(numero2)
    switch(operador) {
        case "+":
            resultado = num1 + num2
            break;
        case "-":
            resultado = num1 - num2
            break;
        case "*":
            resultado = num1 * num2
            break;
        case "/":
            resultado = num1 / num2
            break;
    }
    if(resultado == undefined || resultado > 1000000){
        resultado = "ERROR"
    }
    return resultado
}