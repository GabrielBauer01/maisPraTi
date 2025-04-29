// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')();

let numero = Number(prompt('Digite um número para saber o fatorial: '));
let fatorial = 1;
let expressao = "";

for (let i = numero; i >= 1; i--) {
    fatorial *= i;
    expressao += (i === 1) ? `${i}` : `${i} * `;
}

console.log(`${numero}! = ${expressao} = ${fatorial}`);


