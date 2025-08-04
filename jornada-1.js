//1 Criação das Variaveis Principais
let nome = "Vacivus Anonymous"
let classe = "Mago"
let nivel = 18
let vida = 100
let moedas = 50
let xp = 25

//2 Definição de Constantes Mágicas
const NOME_ARMA = "Amuleto de Comando"
const DANO_BASE = 105
const NOME_ARMADURA = "Tunica do Desespero"
const DEFESA_BASE = 21

//3 Aplicação de Operadores de Atribuição 
xp += 150
moedas -= 30
vida += 40
DANO_BASE * 2

//4  Cálculo de Atributos Finais
let ataqueTotal = nivel + DANO_BASE
let defesaTotal = DEFESA_BASE + (nivel / 2)

//5 Avaliação de Prontidão com Operadores Lógicos
let vidaSuficiente = vida > 70
let ataqueForte = ataqueTotal > 60
let nivelAvancado = nivel >= 10
let podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado)

//lore
console.log(`Lore de: ${nome}`);
console.log(`${nome}, mago da noite nível, ${nivel}, percorre a escura madrugada de Algorithimia em busca de uma arma complementae a seu equipamento principal. Um item no qual apenas o mago sabe`)
console.log(`O ${NOME_ARMA}, que causa ${DANO_BASE} de dano, foi encontrado em um antigo navio naufragado nas margens de Algorithimia.`)
console.log(`Utilizando sua ${NOME_ARMADURA} com ${DEFESA_BASE} de defesa, carregando suas ${moedas} moedas, causa terror em todos os que cruzam seu caminho, causndo sintomas de cmd aparecendo e sumindo e monitor não ligar.`)
console.log(`Depois de incessantes treinos, o mago acumulou ${xp}`)
console.log(`Vida suficiente? ${vidaSuficiente}`)
console.log(`Ataque forte? ${ataqueForte}`)
console.log(`Nível avançado? ${nivelAvancado}`)
console.log(`Pode enfrentar o Guardião? ${podeEnfrentarGuardiao}`)
console.log(`A grande batalha se aproxima...`)