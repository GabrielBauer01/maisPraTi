// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require("prompt-sync")();

let soma = 0;
let contador = 0;
let numero;

do {
  numero = Number(prompt("Digite um número decimal (0 para calcular e exibir o resultado): "));
  if (numero !== 0) {
    soma += numero;
    contador++;
  }
} while (numero !== 0);

if (contador === 0) {
  console.log("Nenhum número válido foi inserido.");
} else {
  let media = soma / contador;
  console.log(`A média aritmética é: ${media}`);
}

