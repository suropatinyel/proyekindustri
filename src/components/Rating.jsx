import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast, Toaster } from "sonner";
import { setRating } from "../store/action/AlldataAction";

const Rating = () => {
  const dispatch = useDispatch(); // Perbaiki typo
  const rating = useSelector((state) => state.alldata.rating);
  const { id } = useParams(); // Perbaiki typo

  // Function to get the user rating
  const rating1 = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/account_state`,
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json;charset=utf-8",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmY3ZTM1Zjk3NGVmN2RlZTFjYjJhN2JjN2Y5YTZiOSIsIm5iZiI6MTcyOTgzOTM0OS44NzE5NDIsInN1YiI6IjY3MDQ4ODQxMWI5NmI4ZWY0YzY5Yjc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d43-4CvyjwCyMQZQInVNlGy-Ii0xKIX2Kzn6xuYUpto",
          },
        }
      );
      if (response.data.rated?.value) {
        dispatch(setRating(response.data.rated.value));
      }
    } catch (error) {
      console.error("Error fetching user rating:", error);
    }
  };

  // Fetch rating when component is mounted
  useEffect(() => {
    rating1();
  }, [id]);

  // Function to submit new rating
  const tambahrating = async (value) => {
    dispatch(setRating(value));
    try {
      const response = await axios.post(
        `https://api.themoviedb.org/3/movie/${id}/rating`,
        { value },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json;charset=utf-8",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmY3ZTM1Zjk3NGVmN2RlZTFjYjJhN2JjN2Y5YTZiOSIsIm5iZiI6MTcyOTgzOTM0OS44NzE5NDIsInN1YiI6IjY3MDQ4ODQxMWI5NmI4ZWY0YzY5Yjc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d43-4CvyjwCyMQZQInVNlGy-Ii0xKIX2Kzn6xuYUpto",
          },
        }
      );
      if (response.status === 201) {
        toast.success("Rating submitted successfully.");
      }
    } catch (error) {
      console.error("Error submitting rating:", error);
    }
  };

  // Function to delete user rating
  const busekrating = async () => {
    try {
      const response = await axios.delete(
        `https://api.themoviedb.org/3/movie/${id}/rating`,
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json;charset=utf-8",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmY3ZTM1Zjk3NGVmN2RlZTFjYjJhN2JjN2Y5YTZiOSIsIm5iZiI6MTcyOTgzOTM0OS44NzE5NDIsInN1YiI6IjY3MDQ4ODQxMWI5NmI4ZWY0YzY5Yjc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d43-4CvyjwCyMQZQInVNlGy-Ii0xKIX2Kzn6xuYUpto",
          },
        }
      );
      if (response.status === 200) {
        dispatch(setRating(0));
        toast.success("Rating deleted successfully.");
      }
    } catch (error) {
      console.error("Error deleting rating:", error);
    }
  };

  return (
    <div>
      <Toaster />
      <div className="rating rating-sm gap-1">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
          <input
            key={star}
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            value={star}
            onChange={() => tambahrating(star)}
            checked={star === rating}
          />
        ))}
      </div>
      {rating > 0 && (
        <button
          type="button"
          className="btn btn-xs bg-transparent hover:text-red-400 ml-2"
          onClick={busekrating}
        >
          Hapus
        </button>
      )}
    </div>
  );
};

export default Rating;
