// FORMULARIO SOBRE ---------------- -------------------- ----------
let nome = prompt('Digite seu nome !')
let idade = parseInt(prompt('Digite sua idade !'))
let peso = parseFloat(prompt('Digite seu peso !'))
let profissao = prompt('Digite sua profissão !')

console.log(`Olá ${nome}, você tem ${idade} anos, pesa ${peso} kg e é ${profissao}`)

if (idade < 18) {
    console.log(`Vish você tem ${idade}, sem gelada hoje!`)
} else {
    console.log('Bora tomar uma ?')
}

console.log(`Você possui ${idade * 365} dias de vida!`)
console.log(`Você possui ${idade * (365 / 7)} semanas de vida!`)
console.log(`Você possui ${idade * (365 / 30)} meses de vida!`)