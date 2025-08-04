//1 Criação das Variaveis Principais
let nome = "Vacivus Anonymous"
let classe = "Mago"
let nivel = 10
let vida = 100
let mana = 50
let moedas = 100
let xp = 0

//2 Definição de Constantes Mágicas
const NOME_ARMA = "Amuleto de Comando"
const DANO_BASE = 105
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
    console.log(`${nome} compra uma poção de Xp`)
    xp += 25
   
}

