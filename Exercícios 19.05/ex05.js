// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require("prompt-sync")();

const altura = Number(prompt('Digite sua altura: '));
const peso = Number(prompt('Digite seu peso: '));
const IMC = peso / (altura * altura);

if(IMC < 18.5){
    console.log(`Seu IMC é de ${IMC.toFixed(0)}. Portanto você está BAIXO PESO`);
}else if(IMC >= 18.5 && IMC < 25){
    console.log(`Seu IMC é de ${IMC.toFixed(0)}. Portanto você está com PESO NORMAL`);
}else if(IMC >= 25 && IMC < 30){
    console.log(`Seu IMC é de ${IMC.toFixed(0)}. Portanto você está com SOBREPESO`);
}else if(IMC >= 30 && IMC < 40){
    console.log(`Seu IMC é de ${IMC.toFixed(0)}. Portanto você tem OBESIDADE`);
}
