import React from "react";

export const MovieCard = () => {
  return (
    <div className="relative w-40 bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg">
      {/* Bagian Rating */}
      <div className="absolute top-0 left-0 m-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
        <span className="mr-1">★</span>7.1
      </div>

      {/* Bagian HD */}
      <div className="absolute top-0 right-0 m-2 bg-green-600 text-xs font-bold px-2 py-1 rounded">
        HD
      </div>

      {/* Gambar Film */}
      <img
        className="w-full object-cover h-56"
        src=""
        alt="The Goat Life"
      />

      {/* Judul Film */}
      <div className="p-3">
        <h2 className="text-center text-sm font-bold">The Goat Life (2024)</h2>
      </div>
    </div>
  );
};
