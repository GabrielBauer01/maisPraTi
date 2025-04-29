// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//     controle if-else.

const prompt = require("prompt-sync")();

let idade = Number(prompt('Digite uma idade válida para verificar a faixa etária: '))

if(idade >=0 && idade < 12){
    console.log('Criança');
}else if(idade >= 12 && idade < 18){
    console.log('Adolescente');
}else if(idade >= 18 && idade < 60){
    console.log('Adulto');
}else if(idade >= 60){
    console.log('Idoso');
}else if(idade < 0){
    console.log('Idade inválida');
}