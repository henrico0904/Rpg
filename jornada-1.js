//1 Criação das Variaveis Principais
let nome = "Vacivus"
let classe = "Mago"
let nivel = 10
let vida = 100
let mana = 50
let moedas = 100
let xp = 0

//2 Definição de Constantes Mágicas
const NOME_ARMA = "Amuleto de Comando"
const DANO_BASE = 105
let DanoBonus = 0
const NOME_ARMADURA = "Tunica do Desespero"
const DEFESA_BASE = 21


//lore
console.log(`📖Lore de: ${nome}`);
console.log(`${nome}, mago da noite nível, ${nivel}, percorre a escura madrugada de Algorithimia em busca de uma arma complementae a seu equipamento principal. Um item no qual apenas o mago sabe`)
console.log(`O ${NOME_ARMA}, que causa ${DANO_BASE} de dano, foi encontrado em um antigo navio naufragado nas margens de Algorithimia.`)
console.log(`Utilizando sua ${NOME_ARMADURA} com ${DEFESA_BASE} de defesa, carregando suas ${moedas} moedas, causa terror em todos os que cruzam seu caminho, causndo sintomas de cmd aparecendo e sumindo e monitor não ligar.`)
console.log("Agora, O mago volta a sua procura por seu novo equimento nas ruinas ao sul de Algorithimia... ")
console.log(" ")

//Capítulo 1 
let localAtual = "Ruinas Bugadas de Algorithimia"
let missãoAtual = "Procura do Equipamento complementar ao Amuleto do Comando"

console.log("Prólogo:")
console.log(`${nome} está rumo a sua missão nas ${localAtual}. O mago está a ${missãoAtual}`);
console.log("")
console.log("🕯️Capitulo 1 - O Chamado")
console.log(" ")

//Verificação de Nível
if(nivel < 12){
    console.log(`- Uma voz vinda das Ruinas chama ${nome} e o adverte, seu nivel de ${nivel} não é o bastante...`)
    console.log(`- ${nome}, fica confuso, mas resolve não tentar desafiar a voz enigmática por sentir uma magia nunca sentida antes e resolve voltar para o centro de Algorithimia`)
} else {
    console.log(`- ${nome}tenta avançar, mas uma força o impede de continuar`)
}

//Verificação de Moedas

if(moedas >= 55){
    console.log(`- ${nome} pensa em comprar uma poção ou equipamentos quando voltar`)
}
 
//verificação de classe
if(classe === "Mago"){
    console.log(`- A floresta abre caminho para ${nome} voltar`)
}
console.log(" ")
console.log(" ")

//Capitulo 2
console.log("💵Capitulo 2 - Loja dos Bytes")
console.log(" ")

//Escolha Baseada em Recursos
if(moedas >= 50){
    console.log(`- ${nome} compra uma poção de Xp `)
    xp += 25  
    moedas -= 50
    console.log(`- xp = ${xp}`)
    console.log(`- moedas = $${moedas}`)
} else {
    console.log(`- Você não tem moedas o suficiente`)
}

if(xp >= 100){
    nivel ++;
    console.log(`- ${nome} subiu de nível!!`)
    xp = 0

} else if (xp >= 100 && classe === "Mago"){
    mana += 500

} else {
    console.log(`- ${nome} ainda não evoluiu`)
}
console.log(" ")
console.log(" ")

//Capítulo 3- Batalha Inesperada
console.log(`🗡Capítulo 3: Batalha`);
console.log(`${nome} sai da loja, quando encontra um tipico hacker tentando roubar uma carruagem.`)
console.log(`Mesmo não se importando muito, o mago resolve acabar com o hacker para aproveitar o treino:`)
console.log("  ")
let vidaHacker = 200
let DANO_BASE_Hacker = 68
//combate
if(mana >= 50){
    DanoBonus = DANO_BASE + 15
    console.log(`- Hacker recebe ${DanoBonus} de dano de ${NOME_ARMA}, com bônus de mana`)
    vidaHacker =vidaHacker - DanoBonus
    console.log(`- Vida Hacker = ${vidaHacker}`)
    mana -= 50
    console.log(`- Mana atual =${mana}`)
} else {
    vidaHacker = vidaHacker - DANO_BASE;
    console.log(`- Hacker recebe ${DANO_BASE} de dano de ${NOME_ARMA}`)
    vidaHacker = vidaHacker - DANO_BASE;
    console.log(`- Vida Hacker = ${vidaHacker}`)   
}

console.log(" ")
console.log(`O hacker contra ataca!!!`)

if(DEFESA_BASE >= 20){
    DANO_BASE_Hacker -= 10
    vida = vida - DANO_BASE_Hacker
    console.log(`- ${nome} recebe ${DANO_BASE_Hacker} de dano`)
    console.log(`- vida = ${vida}`)

} else if (DEFESA_BASE >= 20 && mana >= 50){
    DANO_BASE_Hacker -= 30
    vida = vida - DANO_BASE_Hacker
    mana - 50
    console.log(`- ${nome} recebe ${DANO_BASE_Hacker} de dano, mas a sua magia segura a maior parte do dano`)
    console.log(`- Vida = ${vida}`)
    console.log(`- Mana = ${mana}`)
} else {
    vida = vida - DANO_BASE_Hacker
    console.log(`-${nome} recebe ${DANO_BASE_Hacker} de dano `)
}

console.log(" ")
console.log(`${nome} ataca`)
console.log(" ")

if(NOME_ARMA === "Amuleto de Comando"){
    DanoBonus = DANO_BASE + nivel / 2
    vidaHacker = vidaHacker - DANO_BASE
    console.log(`- Hacker recebe ${DanoBonus} de dano, com bonus de ${NOME_ARMA}`)
    console.log(`- Vida Hacker = ${vidaHacker}`)

} else if (NOME_ARMA === "Amuleto de Comando" && classe === "Mago"){
    DanoBonus = DANO_BASE + nivel * 2
    vidaHacker = vidaHacker - DANO_BASE
    console.log(`- Hacker recebe ${DanoBonus} de dano, com bonus de ${NOME_ARMA} e bonus de classe!`)
    console.log(`- Vida Hacker = ${vidaHacker}`)
} else {
    vidaHacker = vidaHacker - DANO_BASE
    console.log(`- Hacker recebe ${DANO_BASE} de dano`)
    console.log(`- Vida Hacker = ${vidaHacker}`)
}
console.log(" ")

if(vidaHacker <= 0){
    xp += 25
    moedas += 33
    console.log(`${nome} vence a Batalha!!!`)
    console.log(`- Vida = ${vida}`)
    console.log(`- XP = ${xp}`)
    console.log(`- moedas = ${moedas}`)
}

//Continuação - Nível 3
//inevntário mágico
let inventario = ["Poção de cura", "Poção de XP", " Cristal Mágico (azul)", "Couro de Cabra"];
let aliados = ["Ziegfried, o guerreiro", "Mohg, o mago de virus", "Claudinei do Pneu"];
let inimigosEncontrados = ["Gárgula da Torre", "Goblin Absoluto", "Esqueleto Dourado", "Cavaleiro do Trono"];
let salasDoCastelo = ["Torre do sino", "Cemitério", "Cadeia da Perdição", "Sala do Trono","Salão Principal"];
let artefato = [];
console.log(" ")
console.log(" ")
console.log(`-🎇 Ruínas de Algorithimia-`)
console.log(`Após os acontecimentos anteriores, ${nome} finalmente vai as antigas ruínas onde tanto queria.`)
console.log(`O mago, com sua Magia, descobre que as ruínas não passam de uma ilusão, que esconde o seu tão procurado artefato.`)
console.log(`${nome}, juntamente com seus amigos ${aliados.join(" ;")} adentram o castelo misterioso.`)
console.log(" ")
console.log(`Inventário: ${inventario}`)
console.log(" ")

//Capitulo 1
console.log(`🔒 Capitulo 1: Salão de Báus`)
console.log(" ")

let itensEncontrados = ["Cristal Mágico (verde)", "30 moedas","Espada VPN"]
console.log(`- Primeiro item encontrado: ${itensEncontrados[0]}`);
console.log(`- Todos os Itens achados de inicio: ${itensEncontrados.join(" ,")} `)
moedas += 30

//substituição
inventario[2] = "Cristal Mágico Encantado";
console.log(`- ${nome} utilizou os cristais para criar um ${inventario[2]}!`);

//push
inventario.push("30 moedas")
moedas += 30
console.log(`Adcionado a seu inventário: ${inventario}`)

let itemRemovido = inventario.pop()
console.log(`item removido: ${itemRemovido}`)
console.table(inventario)
console.log("")

//Capitulo 2