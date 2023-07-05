interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
}

const API_KEY = '4f298a53e552283bee957836a529baec';

async function fetchMovies(): Promise<Movie[]> {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
}

async function Home() {
  const movies: Movie[] = await fetchMovies();
  console.log(movies);
  return (
    <div>
      <h1>¡Sí funciona!</h1>
      <div>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <div>
                <h5>{movie.title}</h5>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <p>{movie.release_date}</p>
                <p>{movie.vote_average}</p>
                <p>{movie.genre_ids}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;