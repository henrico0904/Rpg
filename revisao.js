//Dados Iniciais
let vida = 60;
let energia = 40;
let xp = 800;
let ouro = 350;
let nivel = 3;

//Parte 1 - Estado de Saúde
if (vida >= 80) {
    console.log("Ayla pode viajar")
} else if (vida >= 40) {
    console.log("Ayla está ferida, mas pode continuar")
} else {
    console.log("Ayla precisa descansar, pouca vida")
}

// Parte 2 - Missão
if(vida >= 50 && energia >= 50) {
    console.log("Ayla entra em batalha com confiança");
} else {
    console.log("Ayla precisa descansar antes de seguir")
}

//Parte 3 - nivel
if (xp >= 1000) {
    nivel++;
    console.log(`Ayla subiu para o nívrl ${nivel}`)
    xo = 0;
} else {
    console.log("Continue lutando para subir de nível")
}

//Parte 4 - compra
if(ouro >= 300){
    console.log("fala 300, fala 300")
} else {
    console.log("Ayla não tem ouro suficiente")
}

//For 
//listar os numeros de 1 a 20
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

//Criando um inventário para Ayla
let inventario = ["Poção de cura", "Espada de fogo", "Mapa", "Chave", "Anel da invisibilidade"]

//mostrando os itens do inventario
console.log(`Inventario de Ayla`)
//length pegamos o tamanho do array
for (let i = 0; i < inventario.length; i++){
    console.log(`- ${inventario[i]}`)
}
