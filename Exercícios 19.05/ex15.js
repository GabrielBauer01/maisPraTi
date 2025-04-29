// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let a = 0, b = 1;

console.log("Primeiros 10 números da sequência de Fibonacci:");
console.log(a); 
console.log(b); 

for (let i = 3; i <= 10; i++) {
    let proximo = a + b;
    console.log(proximo);
    a = b;
    b = proximo;
}
