// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require("prompt-sync")();

const nota = Number(prompt("Digite sua nota: "));

if (nota >= 0 && nota < 4) {
  console.log(`Sua nota foi ${nota}! Portanto você está REPROVADO`);
} else if (nota >= 4 && nota < 7) {
  console.log(`Sua nota foi ${nota}! Portanto você está de RECUPERAÇÃO`);
} else if (nota >= 7 && nota < 11) {
  console.log(`Sua nota foi ${nota}! Portanto você está APROVADO`);
} else {
  console.log("O sistema só aceita notas entre 0 e 10!");
}
