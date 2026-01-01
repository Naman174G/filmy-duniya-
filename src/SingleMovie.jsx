import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function SingleMovie() {
    const { id } = useParams(); // URL se ID pakdi
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchDetails() {
            // Detail API Call (Notice '?i=' here)
            const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=4a3b711b`);
            const data = await response.json();
            setMovie(data);
        }
        fetchDetails();
    }, [id]);

    if (!movie) return <h2>Loading... ⏳</h2>;

    return (
        <div className="single-movie-card">
            <Link to="/" className="back-btn">⬅ Back to Home</Link>
            
            <div className="movie-info">
                <img src={movie.Poster} alt={movie.Title} />
                <div className="details-text">
                    <h1>{movie.Title}</h1>
                    <p><strong>Year:</strong> {movie.Year}</p>
                    <p><strong>Genre:</strong> {movie.Genre}</p>
                    <p><strong>Director:</strong> {movie.Director}</p>
                    <p><strong>Plot:</strong> {movie.Plot}</p>
                    <p>⭐ <strong>IMDb:</strong> {movie.imdbRating}</p>
                </div>
            </div>
        </div>
    );
}

export default SingleMovie;