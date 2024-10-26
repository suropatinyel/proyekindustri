// RatingView.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRating } from "../../store/action/AlldataAction";
import axios from "axios";
import { Link } from "react-router-dom";

const RatingView = () => {
  const dispatch = useDispatch();
  const ratingList = useSelector((state) => state.alldata.rating || []);
  console.log("Rating list from Redux:", ratingList);

  const fetchRatedMovies = async () => {
    const ratedMoviesConfig = {
      method: "GET",
      url: "https://api.themoviedb.org/3/account/21559361/rated/movies",
      params: { language: "en-US", page: "1", sort_by: "created_at.asc" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmY3ZTM1Zjk3NGVmN2RlZTFjYjJhN2JjN2Y5YTZiOSIsIm5iZiI6MTcyOTgzOTM0OS44NzE5NDIsInN1YiI6IjY3MDQ4ODQxMWI5NmI4ZWY0YzY5Yjc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d43-4CvyjwCyMQZQInVNlGy-Ii0xKIX2Kzn6xuYUpto",
      },
    };

    try {
      const response = await axios.request(ratedMoviesConfig);
      console.log(
        "Fetched data:",
        Array.isArray(response.data.results),
        response.data.results
      );
      dispatch(setRating(response.data.results || [])); // Dispatch data ke Redux store
    } catch (error) {
      console.error("Error fetching rated movies:", error);
    }
  };

  useEffect(() => {
    fetchRatedMovies(); // Call function when component mounts
  }, [dispatch]);

  return (
    <div>
      <div className="flex w-full overflow-x-auto gap-2 scrollbar-hide pb-5">
        {console.log("Rendering rating list:", ratingList)}
        {Array.isArray(ratingList) && ratingList.length > 0 ? (
          ratingList.map((movie) => (
            <div
              key={movie.id}
              className="relative w-44 aspect-[4/5] shadow-xl flex-shrink-0 group"
            >
              <img
                className="w-full h-full object-cover rounded-2xl border-4 border-cyan-400 dark:border-cyan-800 border-opacity-0
                transition-all duration-300 group-hover:border-opacity-100 dark:border-opacity-0"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 rounded-2xl opacity-0 duration-300 group-hover:opacity-100">
                <h2 className="text-lg font-bold line-clamp-1">
                  {movie.title}
                </h2>
                <p className="text-sm line-clamp-1">{movie.overview}</p>
                <p>Rating: {movie.vote_average}</p>
                <div className="flex justify-end">
                  <Link to={`/detail/${movie.id}`} className="btn btn-primary">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No rated movies available.</p>
        )}
      </div>
    </div>
  );
};

export default RatingView;
