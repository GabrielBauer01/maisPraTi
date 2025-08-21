import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Detalhes() {
  const { id } = useParams();
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const [filme, setFilme] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const chave = apiKey; // evita warning de dependência
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${chave}&append_to_response=credits`
    )
      .then((res) => res.json())
      .then((data) => setFilme(data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return <p className="text-white text-center mt-8">Carregando...</p>;
  if (!filme)
    return <p className="text-white text-center mt-8">Filme não encontrado.</p>;

  const diretor = filme.credits.crew.find((c) => c.job === "Director");
  const elenco = filme.credits.cast.slice(0, 5).map((a) => a.name).join(", ");
  const poster = filme.poster_path
    ? `https://image.tmdb.org/t/p/w300${filme.poster_path}`
    : "https://via.placeholder.com/300x450?text=Sem+Imagem";

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white flex flex-col md:flex-row gap-6">
      {/* Imagem do filme */}
      <div className="flex-shrink-0">
        <img src={poster} alt={filme.title} className="rounded shadow-lg" />
      </div>

      {/* Informações do filme */}
      <div className="flex-1 flex flex-col">
        <h1 className="text-3xl font-bold mb-4">{filme.title}</h1>
        <p className="mb-2"><strong>Sinopse:</strong> {filme.overview}</p>
        <p className="mb-2"><strong>Diretor:</strong> {diretor?.name || "N/A"}</p>
        <p className="mb-2"><strong>Elenco:</strong> {elenco || "N/A"}</p>
        <p className="mb-2"><strong>Avaliação:</strong> {filme.vote_average}</p>
        <p className="mb-2"><strong>Lançamento:</strong> {filme.release_date}</p>

        {/* Botão voltar */}
        <Link
          to="/"
          className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Voltar para a busca
        </Link>
      </div>
    </div>
  );
}

export default Detalhes;
