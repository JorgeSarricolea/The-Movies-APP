import React from 'react';
import 'tailwindcss/tailwind.css';
import { Movie } from '@/types/Movie';

// Fetching API
const API_KEY = '4f298a53e552283bee957836a529baec';

async function fetchMovies(): Promise<Movie[]> {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
}

const Home: React.FC = async () => {
  const movies: Movie[] = await fetchMovies();
  // console.log(movies);

  return (
    <div>
      <div className="grid grid-cols-5 gap-4 py-10 px-10">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-200 p-4 hover:bg-blue-200 transform hover:scale-105 transition duration-300 rounded-2xl cursor-pointer"
          >
            <h5 className="text-lg font-bold mb-2">{movie.title}</h5>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto mb-2 rounded-2xl"
            />
            <p className="text-sm">Release Date: {movie.release_date}</p>
            <p className="text-sm">Vote Average: {movie.vote_average}</p>
            <p className="text-sm">Genre IDs: {movie.genre_ids.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
