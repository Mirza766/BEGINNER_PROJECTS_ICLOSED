import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import FetchData from "../Api";

function SearchMovie() {
  const [movie, setMovie] = useState("");

  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["movie_database", movie],
    queryFn: () => FetchData(movie),
    enabled: false,
  });

  const handleSearch = () => {
    if (movie.trim()) {
      refetch();
    }
  };
console.log(data?.results)
  return (
    <div className="max-w-4xl mx-auto p-6">
    
      <div className="flex items-center gap-3 mb-6">
        <input
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
          placeholder="Search for a movie..."
          className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

     
      {isPending && <p className="text-blue-500 font-medium">Loading...</p>}
      {isError && (
        <p className="text-red-500 font-semibold">Error: {error.message}</p>
      )}


      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {data?.results?.filter((movie)=>movie.poster_path && movie.overview).map((movie) => (
          <div
            key={movie.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              className="w-full h-72 object-cover"
            />
            <div className="p-3">
              <h2 className="text-lg font-semibold">{movie.title}</h2>
              <p className="text-sm text-gray-700 mt-1 leading-snug overflow-hidden text-ellipsis line-clamp-4">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchMovie;
