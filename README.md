# 🏁 Simulador de Corrida - Mario vs Pikachu

Este projeto é um **simulador de corrida em JavaScript**, onde dois personagens competem entre si para alcançar a linha de chegada.

## 🎮 Como funciona

O jogo simula uma corrida entre dois jogadores:

- **Mario**
- **Pikachu**

Cada jogador possui:
- Nome
- Velocidade base
- Posição na pista

A cada rodada:
- Um dado de 6 lados é rolado 🎲
- Um bônus de velocidade (1 a 3) é aplicado ⚡
- O avanço do jogador é calculado com base nesses valores

### 🧮 Fórmula de movimento

## 🔁 Mecânica da corrida

- A corrida dura no máximo **100 rodadas**
- A linha de chegada está definida em **500px**
- O jogo termina quando um dos jogadores chega ao final

## 🏆 Resultado

Ao final da corrida:

- Se os dois jogadores chegarem juntos → **Empate épico 🏁**
- Se apenas um chegar → **Ele é declarado vencedor 🏆**

## 🖥️ Interface

- Os personagens se movem visualmente na tela
- A posição é atualizada dinamicamente via DOM
- Existe um pequeno delay entre rodadas para simular animação

## 🔘 Controles

- **Iniciar corrida**: começa a simulação
- **Resetar jogo**:
  - Zera as posições
  - Atualiza a interface
  - Permite iniciar uma nova corrida

## ⚙️ Tecnologias utilizadas

- JavaScript
- HTML
- CSS

## ✨ Possíveis melhorias

- Adicionar mais jogadores
- Criar obstáculos na pista
- Implementar sistema de ranking
- Melhorar animações

---

Feito para fins de aprendizado e prática com lógica de programação e manipulação do DOM 🚀
