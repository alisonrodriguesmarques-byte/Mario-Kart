 const player1 = {
      nome: "Mario",
      velocidade: 30,
      posicao: 0
    };

    const player2 = {
      nome: "Pikachu",
      velocidade: 30,
      posicao: 0
    };
    // Simula a rolagem de um dado de 6 lados
    function rollDice() {
      return Math.floor(Math.random() * 6) + 1;
    }
    // Roleta um Boost de 1 a 3
    function getSpeedModifier() {
      return Math.floor(Math.random() * 3) + 1;
    }
    // Move o player de acordo com a nova posição em PX
    function updateUI() {
      document.getElementById("mario").style.left = player1.posicao + "px";
      document.getElementById("luigi").style.left = player2.posicao + "px";
    }
    // Mantem a logica do codigo antigo, definindo os raudes.
    async function startRace() {
    document.getElementById("btn").style.display = "none";

    const FINISH_LINE = 500;

    for (let round = 1; round <= 100; round++) {

    let dice1 = rollDice();
    let dice2 = rollDice();
    let boost1 = getSpeedModifier();
    let boost2 = getSpeedModifier();

    let total1 = (dice1 + player1.velocidade) * boost1;
    let total2 = (dice2 + player2.velocidade) * boost2;

    player1.posicao += total1;
    player2.posicao += total2;

    player1.posicao = Math.min(player1.posicao, FINISH_LINE);
    player2.posicao = Math.min(player2.posicao, FINISH_LINE);

    updateUI();

    // Faz com que não va miuto rapido a animação
    await new Promise(r => setTimeout(r, 800));

    if (player1.posicao >= FINISH_LINE || player2.posicao >= FINISH_LINE) {
      break;
    }
    }

    // 🏁 RESULTADO FORA DO LOOP
    if (player1.posicao >= FINISH_LINE && player2.posicao >= FINISH_LINE) {
    alert("Empate épico! 🏁");
     } else if (player1.posicao >= FINISH_LINE) {
    alert("Mario venceu! 🏆");
     } else if (player2.posicao >= FINISH_LINE) {
    alert("Pikachu venceu! 🏆");
     }
        
        updateUI();
        // Faz a animação durar 800ms
        await new Promise(r => setTimeout(r, 800));

        document.getElementById("resetBtn").style.display = "inline-block";
      }

      function resetGame() {
    // resetar posições
    player1.posicao = 0;
    player2.posicao = 0;

    // atualizar tela
    updateUI();

    // esconder botão reset
     document.getElementById("resetBtn").style.display = "none";

    // mostrar botão iniciar de novo
    document.getElementById("btn").style.display = "inline-block";
     }