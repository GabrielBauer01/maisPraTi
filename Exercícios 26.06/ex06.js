// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

function memoize(fn) {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      // Retorna resultado em cache
      return cache.get(key);
    }

    // Executa função e salva resultado no cache
    const resultado = fn(...args);
    cache.set(key, resultado);
    return resultado;
  };
}

//Exemplo:

function fatorial(n) {
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

const fatorialMemo = memoize(fatorial);

console.log(fatorialMemo(5)); // calcula e guarda
console.log(fatorialMemo(5)); // retorna do cache instantaneamente

