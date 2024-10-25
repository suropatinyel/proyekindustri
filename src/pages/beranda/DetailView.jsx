import React from "react";
import Rating from "../../components/Rating";

export const DetailView = ({ detail }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 bg-blue-200 dark:bg-black dark:text-white">
      {detail && detail.original_title ? (
        <div className="w-full max-w-4xl">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-4">{detail.original_title}</h1>
            {/* Menampilkan judul film */}
            <img
              className="w-full max-w-md h-auto object-contain mb-8"
              src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`} // Correct poster path
              alt={detail.original_title} // Alt text gambar produk
            />
          </div>
          <div className="text-center">
            <p className="text-lg mb-4">{detail.overview}</p>
            {/* Deskripsi film */}
            <p className="text-md mb-2">Release Date: {detail.release_date}</p>
            {/* Tanggal rilis */}
            <p className="text-md mb-2">
              Genres: {detail.genres?.map((genre) => genre.name).join(", ")}
            </p>
            {/* Genre film */}
            <p className="text-md mb-2">Rating: {detail.vote_average} / 10</p>
            {/* Rating film */}
            <p className="text-md mb-2">Rated by {detail.vote_count} users</p>
            {/* Jumlah pengguna yang memberikan rating */}
            <Rating />
          </div>
        </div>
      ) : (
        <p>Loading movie details...</p> // Jika data belum tersedia, tampilkan teks loading
      )}
    </div>
  );
};
