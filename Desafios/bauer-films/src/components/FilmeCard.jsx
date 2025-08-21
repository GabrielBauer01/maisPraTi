import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function FilmeCard({ filme }) {
  const poster = filme.poster_path
    ? `https://image.tmdb.org/t/p/w200${filme.poster_path}`
    : "https://via.placeholder.com/200x300?text=Sem+Imagem";

  const [favorito, setFavorito] = useState(false);

  // Checa se o filme já está nos favoritos
  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");
    setFavorito(favoritos.some(f => f.id === filme.id));
  }, [filme.id]);

  function toggleFavorito() {
    const favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");
    let novosFavoritos;

    if (favorito) {
      // Remove dos favoritos
      novosFavoritos = favoritos.filter(f => f.id !== filme.id);
    } else {
      // Adiciona aos favoritos
      novosFavoritos = [...favoritos, filme];
    }

    localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
    setFavorito(!favorito);
  }

  return (
    <div className="bg-gray-800 p-2 rounded relative">
      <h3 className="text-white font-bold text-center">
        {filme.title} ({filme.release_date?.slice(0, 4)})
      </h3>
      <img src={poster} alt={filme.title} className="mt-2 rounded mx-auto" />

      <div className="flex justify-between mt-2">
        <Link
          to={`/filme/${filme.id}`}
          className="bg-blue-600 text-white p-1 rounded flex-1 text-center mr-1"
        >
          Detalhes
        </Link>

        <button
          onClick={toggleFavorito}
          className={`p-1 rounded flex-1 text-center ${
            favorito ? "bg-red-600" : "bg-green-600"
          } text-white ml-1`}
        >
          {favorito ? "Remover" : "Favorito"}
        </button>
      </div>
    </div>
  );
}

export default FilmeCard;
