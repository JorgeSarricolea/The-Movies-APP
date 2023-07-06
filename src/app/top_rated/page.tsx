import React from "react";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import { Movie } from "../../../types/Movie";

// Fetching API
const API_KEY = "4f298a53e552283bee957836a529baec";

async function fetchMovies(): Promise<Movie[]> {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
}

const Home: React.FC = () => {
  const renderMovies = async () => {
    const movies: Movie[] = await fetchMovies();

    return movies.map((movie) => (
      <Link key={movie.id} href={`/movies/${movie.id}`}>
        <div className="text-black bg-gray-200 p-4 hover:bg-blue-200 transform hover:scale-105 transition duration-300 rounded-2xl cursor-pointer">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-auto mb-2 rounded-2xl"
          />
          <h5 className="text-lg font-bold">{movie.title}</h5>
          <p className="text-sm">{movie.release_date}</p>
          <p className="text-sm">Vote Average: {movie.vote_average}</p>
        </div>
      </Link>
    ));
  };

  return (
    <div>
      <div className="bg-white grid grid-cols-5 gap-4 py-10 px-10">
        {renderMovies()}
      </div>
    </div>
  );
};

export default Home;
