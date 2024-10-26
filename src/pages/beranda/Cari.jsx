import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link for navigation

const Search = () => {
  // State untuk menyimpan hasil pencarian dan semua film
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [allMovies, setAllMovies] = useState([]); // State untuk semua film
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fungsi untuk mendapatkan semua film dari API
  const fetchAllMovies = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular`, // Fetch popular movies
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmY3ZTM1Zjk3NGVmN2RlZTFjYjJhN2JjN2Y5YTZiOSIsIm5iZiI6MTcyOTI1MDQ0MS40OTE5MDYsInN1YiI6IjY3MDQ4ODQxMWI5NmI4ZWY0YzY5Yjc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fodZ_Y9MX4yMGj1hhSbz0N1kB22AGJIik_NVOpDVm-k",
          },
        }
      );

      setAllMovies(response.data.results);
    } catch (err) {
      setError("Terjadi kesalahan saat mengambil film.");
    } finally {
      setLoading(false);
    }
  };

  // Fungsi untuk menangani input pencarian
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Panggil API pencarian berdasarkan query
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            query: query, // query diambil dari input pengguna
          },
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmY3ZTM1Zjk3NGVmN2RlZTFjYjJhN2JjN2Y5YTZiOSIsIm5iZiI6MTcyOTI1MDQ0MS40OTE5MDYsInN1YiI6IjY3MDQ4ODQxMWI5NmI4ZWY0YzY5Yjc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fodZ_Y9MX4yMGj1hhSbz0N1kB22AGJIik_NVOpDVm-k",
          },
        }
      );

      setResults(response.data.results);
    } catch (err) {
      setError("Terjadi kesalahan saat mencari film.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch all movies on component mount
  useEffect(() => {
    fetchAllMovies();
  }, []);

  return (
    <div className="search-container p-4">
      <h2 className="text-2xl font-bold mb-4">Search Movies</h2>

      {/* Form untuk pencarian */}
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Cari film..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <button
          type="submit"
          className="btn btn-primary ml-2"
          disabled={!query || loading} // Disable button saat loading atau input kosong
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </form>

      {/* Tampilkan error jika ada */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Tampilkan hasil pencarian atau semua film */}
      <div className="search-results">
        {loading ? (
          <p>Loading...</p>
        ) : results.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {results.map((movie) => (
              <div key={movie.id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-64 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{movie.title}</h3>
                  <p>{movie.release_date}</p>
                  <p>Rating: {movie.vote_average}</p>
                  <Link
                    to={`/detail/${movie.id}`}
                    className="btn btn-primary mt-2"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !loading &&
          allMovies.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {allMovies.map((movie) => (
                <div key={movie.id} className="card bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="w-full h-64 object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title">{movie.title}</h3>
                    <p>{movie.release_date}</p>
                    <p>Rating: {movie.vote_average}</p>
                    <Link
                      to={`/detail/${movie.id}`}
                      className="btn btn-primary mt-2"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Search;
