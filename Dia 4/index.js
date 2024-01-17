const Comfome = prompt("Voce esta com fome SIM/NAO")
const Comdinheiro = prompt("Voce esta com dinheiro SIM/NAO")
const Restaberto = prompt("O restaurante esta aberto SIM/NAO")

if(Comfome === "NAO" || Comdinherio === "NAO"){ 
    console.log("Hoje a janta será em casa")
} else if (Comfome === "SIM" && Comdinheiro === "SIM" && Restaberto === "NAO") {
    console.log("Peça delivery")
} else {
    console.log("Hoje vou jantar no meu restaurante fav")
}
