import React from "react";
import "tailwindcss/tailwind.css";

// Fetching API
const API_KEY = "4f298a53e552283bee957836a529baec";

async function getMovie(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data;
}

interface MoviePageProps {
  params: {
    id: string;
  };
}

async function MoviePage({ params }: MoviePageProps) {
  const movie = await getMovie(Number(params.id));

  const posterStyle: React.CSSProperties = {
    width: "200px",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px",
    marginRight: "20px",
  };

  const containerStyle: React.CSSProperties = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: 1,
  };

  const overlayStyle: React.CSSProperties = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    position: "absolute",
    borderRadius: "8px",
    top: "0%",
    left: "0%",
    right: "0%",
    bottom: "0%",
    zIndex: 1,
  };

  return (
    <div className="items-center justify-center py-10 px-10">
      <div
        className="bg-black bg-opacity-80 p-8 rounded-xl relative"
        style={containerStyle}
      >
        <div
          className="items-center justify-center absolute inset-0"
          style={overlayStyle}
        ></div>
        <div className="flex relative z-10">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            style={posterStyle}
          />
          <div className="text-white">
            <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
            <p className="text-sm">
              <span className="font-bold">Release Date:</span>{" "}
              {movie.release_date}
            </p>
            <p className="text-sm">
              <span className="font-bold">Vote Average:</span>{" "}
              {movie.vote_average}
            </p>
            <h3 className="text-xl font-bold mt-4">Overview</h3>
            <p className="text-sm">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
