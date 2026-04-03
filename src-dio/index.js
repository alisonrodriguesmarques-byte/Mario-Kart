const player1 = {
    NOME: "Mario",
    VELOCIDEDE: 4,
    MANOBRABILIDADE: 3, 
    PODER: 3,
    PONTOS: 0,
};

const player2 = {
    NOME: "Luigi",
    VELOCIDEDE: 3,
    MANOBRABILIDADE: 4, 
    PODER: 4,
    PONTOS: 0,
};

//  função acicrona, ela não espera as outras funções, ou seja ela é independente.
//  função que cimula a rolagem de um dade de 6 lados de 1 a 6.
 async function rollDice() {
   return Math.floor(Math.random() * 6) + 1;
 }

 async function getRandomBlock() {
    let random = Math.random()
    let result

    switch (true) {
        case random < 0.33:
            result = "RETA"
           break;
        case random < 0.66:
            result = "CURVA"   
           break;
        default:
           result = "CONFRONTO"
    }

    return result;
 }

 async function logRollResult(characterNome, block, diceResult, attribute) {
    
        console.log(`${characterNome} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute }`);
 }

 async function playRaceEngine(character1, character2) {

    for(let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`);

        // sortear bloco
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);
    
    // rolar dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    // teste de abilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;
    
    if(block === "RETA"){
        totalTestSkill1 = diceResult1 + character1.VELOCIDEDE;
        totalTestSkill2 = diceResult2 + character2.VELOCIDEDE;
        
        await logRollResult(
            character1.NOME,
            "velocidade",
             diceResult1,
             character1.VELOCIDEDE
            );

        await logRollResult(
            character2.NOME,
            "velocidade",
             diceResult2,
             character2.VELOCIDEDE
            );
    }
    
    if(block === "CURVA"){
        totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
        totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

        await logRollResult(
            character1.NOME,
            "manobrabilidade",
             diceResult1,
             character1.MANOBRABILIDADE
            );

        await logRollResult(
            character2.NOME,
            "manobrabilidade",
             diceResult2,
             character2.MANOBRABILIDADE
            );
    }

    if(block === "CONFROTO"){
       let powerResult1 = diceResult1 + character1.PODER;
       let powerResult2 = diceResult2 + character2.PODER;

       console.log(`${character1.NOME} confronto com ${character2.NOME}!🥊`);

        await logRollResult(
            character1.NOME,
            "poder",
             diceResult1,
             character1.PODER
            );

        await logRollResult(
            character2.NOME,
            "poder",
             diceResult2,
             character2.PODER
            );
            
            if(powerResult1 > powerResult2 && character2.PONTOS > 0){
                console.log(`${character1.NOME} venceu o confronto! ${character2} perdeu 1 ponto 🐢`);
                character2.PONTOS--;
            }
            
            if( powerResult2 > powerResult1 && character1.PONTOS > 0){
                 console.log(`${character2.NOME} venceu o confronto! ${character1} perdeu 1 ponto 🐢`)
                character1.PONTOS--;
            }

            console.log(
                powerResult2 === powerResult1
                 ? "Confronto empatado! Nenhum ponto foi perdido"
                 : ""
                );
        }
    // verificado o vencedor
    if(totalTestSkill1 > totalTestSkill2){
        console.log(`${character1.NOME} marcou um ponto!`);
        character1.PONTOS++;
    } else if(totalTestSkill2 > totalTestSkill1){
        console.log(`${character2.NOME} marcou um ponto!`);
        character2.PONTOS++;
    }

 console.log("_______________________________________________")

  
  }
 }

 async function declareWinner(character1, character2){
    console.log("Resultado final:")
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

    if(character1.PONTOS > character2.PONTOS)
        console.log(`\n ${character1} venceu a corrida! Parabéns! 🏆`);
     else if(character2.PONTOS > character1.PONTOS)
        console.log(`\n ${character2} venceu a corrida! Parabéns! 🏆`);
     else 
        console.log("A corrida deu empate");
    }

 (async function main() {

    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} iniciando...\n`);
    
    // await, faz com que a função enpere a ação anterior.
    await playRaceEngine(player1, player2);
    await declareWinne(player1, player2);
 })();