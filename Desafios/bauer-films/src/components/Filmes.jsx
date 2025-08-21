import FilmeCard from "./FilmeCard.jsx";

function Filmes({ lista, currentPage, totalPages, mudarPagina }) {
  if (!lista.length) return <p className="text-white text-center mt-4">Nenhum filme encontrado.</p>;

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {lista.map((filme) => (
          <FilmeCard key={filme.id} filme={filme} />
        ))}
      </div>

      <div className="flex justify-center mt-4 gap-4 text-white">
        <button
          onClick={() => mudarPagina(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-700 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => mudarPagina(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-700 rounded disabled:opacity-50"
        >
          Próxima
        </button>
      </div>
    </div>
  );
}

export default Filmes;
