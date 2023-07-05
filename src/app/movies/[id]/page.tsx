import React from "react";
import "tailwindcss/tailwind.css";
import { Genre } from "../../../../types/Genre";
import { Cast, Crew } from "../../../../types/Credits";

// Fetching API
const API_KEY = "4f298a53e552283bee957836a529baec";

async function getMovie(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data;
}

// Fetching Credits
async function getCredits(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
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
  const credits = await getCredits(Number(params.id));

  const posterStyle: React.CSSProperties = {
    width: "300px",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px",
    marginRight: "30px",
  };

  const profilePicture: React.CSSProperties = {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    borderEndStartRadius: 0,
    borderEndEndRadius: 0,
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
    <div className="bg-white items-center justify-center py-10 px-10">
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
          <div className="text-white py-10">
            <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
            <div className="text-white">
              {movie.release_date} {"\u2022"}{" "}
              {movie.genres &&
                movie.genres.map((genre: Genre) => genre.name).join(", ")}{" "}
              {"\u2022"} {movie.runtime} min
            </div>

            <p className="text-sm">
              <span className="font-bold">Vote Average:</span>{" "}
              {movie.vote_average}
            </p>
            <h3 className="text-xl font-bold mt-4">Overview</h3>
            <p className="text-sm">{movie.overview}</p>
            <div className="py-10">
              <h3 className="text-xl font-bold mt-4">Director</h3>
              {credits.crew &&
                credits.crew
                  .filter((member: Crew) => member.job === "Director")
                  .map((director: Crew) => (
                    <div key={director.id}>
                      <p>{director.name}</p>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-black text-xl font-bold mt-4">Top Billed Cast</h3>
      <div className="flex relative">
        <div
          className="text-black rounded-lg mt-5"
          style={{
            overflowX: "auto",
          }}
        >
          <div className="flex flex-nowrap pl-5">
            {credits.cast &&
              credits.cast.map((character: Cast) => (
                <div
                  key={character.id}
                  className="mr-4 min-w-[200px] bg-gray-200 rounded-lg shadow-md"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${character.profile_path}`}
                    alt={character.name}
                    style={profilePicture}
                  />
                  <p className="mt-2 px-2">{character.name}</p>
                  <p className="mt-2 px-2">({character.character})</p>
                </div>
              ))}
          </div>
        </div>
        <div className="ml-10 mt-10 min-w-[200px]">
          <p className="text-black font-bold">Status</p>
          <p className="text-black">{movie.status}</p>
          <p className="text-black font-bold">Original Language</p>
          <p className="text-black">{movie.original_language}</p>
          <p className="text-black font-bold">Budget</p>
          <p className="text-black">${movie.budget} USD</p>
          <p className="text-black font-bold">Revenue</p>
          <p className="text-black">${movie.revenue} USD</p>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
