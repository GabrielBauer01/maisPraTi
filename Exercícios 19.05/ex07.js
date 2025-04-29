// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

let qtdMaca = Number(prompt('Digite a quantidade de maças compradas: '));
let valorTotal = 0;

if(qtdMaca < 12){
    valorTotal = qtdMaca * 0.30;
    console.log(`A quantidade de maças compradas foi: ${qtdMaca}. Menor que uma dúzia. Portanto cada uma custa R$0,30. O valor a ser pago é de: ${valorTotal}`);
}else if(qtdMaca === 12){
    valorTotal = qtdMaca * 0.25;
    console.log(`A quantidade de maças compradas foi: ${qtdMaca}. Uma dúzia. Portanto cada uma custa R$0,25. O valor a ser pago é de: ${valorTotal}`);
}else if(qtdMaca > 12){
    valorTotal = qtdMaca * 0.25;
    console.log(`A quantidade de maças compradas foi: ${qtdMaca}. Mais que uma dúzia. O preço continua R$0,25. O valor a ser pago é de: ${valorTotal}`);
}