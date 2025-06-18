// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

const vendas = [
  { cliente: "Ana", total: 150 },
  { cliente: "Carlos", total: 200 },
  { cliente: "Ana", total: 100 },
  { cliente: "Beatriz", total: 50 }
];

function somaTotalPorCliente(vendas) {
  return vendas.reduce((acc, venda) => {
    if (!acc[venda.cliente]) {
      acc[venda.cliente] = 0;
    }
    acc[venda.cliente] += venda.total;
    return acc;
  }, {});
}

console.log(somaTotalPorCliente(vendas));
// Saída: { Ana: 250, Carlos: 200, Beatriz: 50 }
