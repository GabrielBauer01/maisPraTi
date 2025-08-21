import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Filmes from "./components/Filmes.jsx";
import Favoritos from "./pages/Favoritos.jsx";
import Detalhes from "./pages/Detalhes.jsx";

function App() {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const [filmes, setFilmes] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  async function buscarFilmes(e, page = 1) {
    e?.preventDefault();
    if (!query) return;

    try {
      setLoading(true);
      setErro("");
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
          query
        )}&page=${page}`
      );
      if (!res.ok) throw new Error("Erro ao buscar filmes");
      const data = await res.json();
      setFilmes(data.results || []);
      setCurrentPage(data.page);
      setTotalPages(data.total_pages);
    } catch (err) {
      setErro(err.message);
    } finally {
      setLoading(false);
    }
  }

  function mudarPagina(novaPagina) {
    buscarFilmes(null, novaPagina);
  }

  return (
    <>
      <Header query={query} setQuery={setQuery} buscarFilmes={buscarFilmes} />
      {loading && <p className="text-white text-center mt-4">Carregando...</p>}
      {erro && <p className="text-red-500 text-center mt-4">{erro}</p>}
      <Routes>
        <Route
          path="/"
          element={
            <Filmes
              lista={filmes}
              currentPage={currentPage}
              totalPages={totalPages}
              mudarPagina={mudarPagina}
            />
          }
        />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/filme/:id" element={<Detalhes />} />
      </Routes>
    </>
  );
}

export default App;
