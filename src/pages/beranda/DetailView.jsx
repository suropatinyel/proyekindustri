import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRating } from "../../store/action/AlldataAction";
import Rating from "../../components/Rating";

export const DetailView = ({ detail }) => {
  const dispatch = useDispatch();
  const ratingList = useSelector((state) => state.alldata.rating || []);

  const handleRatingChange = (newRating) => {
    // Dispatch the new rating to Redux
    dispatch(setRating(newRating));
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 bg-gray-100 dark:bg-gray-800">
      {detail && detail.original_title ? (
        <div className="w-full max-w-3xl mb-8 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-900">
          <h1 className="text-3xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">
            {detail.original_title}
          </h1>
          <div className="flex justify-center mb-4">
            <img
              className="max-w-full h-auto object-cover rounded-lg"
              src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
              alt={detail.original_title}
            />
          </div>
          <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
            {detail.overview}
          </p>
          <div className="flex flex-col mb-4 text-center">
            <p className="text-md text-gray-600 dark:text-gray-400">
              Release Date:{" "}
              <span className="font-semibold">{detail.release_date}</span>
            </p>
            <p className="text-md text-gray-600 dark:text-gray-400">
              Genres:{" "}
              <span className="font-semibold">
                {detail.genres?.map((genre) => genre.name).join(", ")}
              </span>
            </p>
            <p className="text-md text-gray-600 dark:text-gray-400">
              Rating:{" "}
              <span className="font-semibold">{detail.vote_average} / 10</span>
            </p>
            <p className="text-md text-gray-600 dark:text-gray-400">
              Rated by{" "}
              <span className="font-semibold">{detail.vote_count} users</span>
            </p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Your Rating
            </h2>
            <Rating onRatingChange={handleRatingChange} />
          </div>
        </div>
      ) : (
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Loading movie details...
        </p>
      )}
    </div>
  );
};
