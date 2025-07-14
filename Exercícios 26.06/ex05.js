// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function debounce(fn, delay) {
  let timeoutId;

  return function(...args) {
    // Se já tem um timeout pendente, limpa ele
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Agenda a execução da função depois do delay
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

//Exemplo:
function dizOi() {
  console.log("Oi!");
}

const debouncedOi = debounce(dizOi, 1000);

debouncedOi(); // chama "Oi!" só se passar 1 segundo sem novas chamadas
debouncedOi();
debouncedOi();
// Mesmo chamando várias vezes rápido, "Oi!" vai aparecer só 1 segundo após a última chamada

