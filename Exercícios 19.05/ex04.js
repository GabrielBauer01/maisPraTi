// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require("prompt-sync")();
let opcao;

do {
  console.log("\nBem-vindo ao sistema de números:");
  console.log("1 - Calcular média de notas");
  console.log("2 - Verificar se um número é PAR ou ÍMPAR");
  console.log("3 - Sair");

  opcao = Number(prompt("Digite a opção desejada: "));

  switch (opcao) {
    case 1:
      console.log("");
      const nota1 = Number(prompt("Digite a primeira nota: "));
      const nota2 = Number(prompt("Digite a segunda nota: "));
      const nota3 = Number(prompt("Digite a terceira nota: "));
      const media = (nota1 + nota2 + nota3) / 3;
      console.log("");
      console.log(`A média das notas foi: ${media.toFixed(2)}`);
      break;

    case 2:
      console.log("");
      const num = Number(prompt("Digite um número: "));
      console.log("");
      if (num % 2 === 0) {
        console.log(`O número ${num} é PAR.`);
      } else {
        console.log(`O número ${num} é ÍMPAR.`);
      }
      break;

    case 3:
      console.log("");
      console.log("Saindo do programa. Até logo!");
      break;

    default:
      console.log("");
      console.log("Opção inválida. Tente novamente.");
  }
} while (opcao !== 3);
