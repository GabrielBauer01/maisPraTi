// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

function palavrasUnicasComSet(texto) {
  let palavras = texto.split(' ');
  //new Set(palavras) cria um array onde não pode ter valores repetidos
  let unicas = [...new Set(palavras)];  
  return unicas;
}

let resultado = palavrasUnicasComSet("olá olá mundo mundo");
console.log(resultado); 
