// 9. Conversão Entre Formatos
// Escreva duas funções:

// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

function paresParaObjeto(pares) {
  return pares.reduce((obj, [chave, valor]) => {
    obj[chave] = valor;
    return obj;
  }, {});
}

console.log(paresParaObjeto([["nome", "Ana"], ["idade", 25]]));
// Saída: { nome: "Ana", idade: 25 }

function objetoParaPares(obj) {
  return Object.entries(obj);
}

console.log(objetoParaPares({ nome: "Ana", idade: 25 }));
// Saída: [["nome", "Ana"], ["idade", 25]]
