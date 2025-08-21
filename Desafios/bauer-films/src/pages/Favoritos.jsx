import { useEffect, useState } from "react";
import FilmeCard from "../components/FilmeCard.jsx";

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const lista = JSON.parse(localStorage.getItem("favoritos") || "[]");
    setFavoritos(lista);
  }, []);

  if (!favoritos.length)
    return (
      <p className="text-white text-center mt-4">Nenhum filme favorito.</p>
    );

  return (
    <div className="p-4">
      <h1 className="text-white text-2xl mb-4">Meus Favoritos</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {favoritos.map((filme) => (
          <FilmeCard key={filme.id} filme={filme} />
        ))}
      </div>
    </div>
  );
}

export default Favoritos;
