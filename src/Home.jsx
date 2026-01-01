import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  async function searchMovie() {
    try {
      // Search API Call
      const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=4a3b711b`);
      const data = await response.json();

      if (data.Search) {
        setMovies(data.Search);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>🎬 Filmy Duniya</h1>
      
      {/* Search Section */}
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search movies..." 
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchMovie} className="search-btn">Search</button>
      </div>

      {/* Movie Grid */}
      <div className="movie-grid">
        {movies.map((movie) => (
          // Har card ko Link bana diya
          <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID} className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;