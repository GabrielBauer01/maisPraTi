import { Link } from "react-router-dom";

function Header({ query, setQuery, buscarFilmes }) {
  return (
    <header className="h-24 flex items-center bg-black px-4">
      <nav className="w-1/2 flex gap-4 items-center text-white">
        <Link to="/">Inicio</Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>

      <form className="w-1/2 flex ml-auto" onSubmit={buscarFilmes}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar filme"
          className="flex-1 p-2 bg-gray-700 text-white rounded-l"
        />
        <button className="bg-gray-600 text-white p-2 rounded-r">
          Buscar
        </button>
      </form>
    </header>
  );
}

export default Header;
