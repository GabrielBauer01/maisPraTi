// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require('prompt-sync')();

let num = Number(prompt('Digite um número para saber sua tabuada de 1 a 10: '));

for(i = 1; i <= 10; i++){
    console.log(`${i} x ${num} = ${i * num}` );
}

