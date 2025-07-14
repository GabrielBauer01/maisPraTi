// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')();

let numero = Math.floor(Math.random() * 100) + 1;
let tentativaUsu;
let tentativas = 0;

do {
  tentativaUsu = Number(prompt("Digite um número de 1 a 100: "));
  tentativas++;

  if (tentativaUsu < numero) {
    console.log("Mais alto");
  } else if (tentativaUsu > numero) {
    console.log("Mais baixo");
  } else {
    console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
  }
} while (tentativaUsu !== numero);

