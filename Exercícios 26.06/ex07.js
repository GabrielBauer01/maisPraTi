// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

const produtos = [
  { nome: "Camiseta", preco: 30 },
  { nome: "Calça", preco: 80 },
  { nome: "Tênis", preco: 120 },
  { nome: "Boné", preco: 25 }
];

function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice()                // copia o array para não alterar o original
    .sort((a, b) => a.preco - b.preco)  // ordena por preco crescente
    .map(produto => produto.nome);       // pega só os nomes
}

console.log(nomesOrdenadosPorPreco(produtos));
// Saída: ["Boné", "Camiseta", "Calça", "Tênis"]
