import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast, Toaster } from "sonner";
import { setRating } from "../store/action/AlldataAction";

const Rating = ({ onRatingChange }) => {
  const dispatch = useDispatch();
  const rating = useSelector((state) => state.alldata.rating);
  const { id } = useParams();

  const fetchUserRating = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/account_state`,
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json;charset=utf-8",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmY3ZTM1Zjk3NGVmN2RlZTFjYjJhN2JjN2Y5YTZiOSIsIm5iZiI6MTcyOTgzOTM0OS44NzE5NDIsInN1YiI6IjY3MDQ4ODQxMWI5NmI4ZWY0YzY5Yjc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d43-4CvyjwCyMQZQInVNlGy-Ii0xKIX2Kzn6xuYUpto", // Replace with your token
          },
        }
      );
      if (response.data.rated) {
        const userRating = response.data.rated.value || 0;
        dispatch(setRating(userRating));
        onRatingChange(userRating); // Notify parent about the fetched rating
      }
    } catch (error) {
      console.error("Error fetching user rating:", error);
    }
  };

  useEffect(() => {
    fetchUserRating();
  }, [id]);

  const submitRating = async (value) => {
    dispatch(setRating(value));
    onRatingChange(value); // Notify parent about the new rating
    try {
      const response = await axios.post(
        `https://api.themoviedb.org/3/movie/${id}/rating`,
        { value },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json;charset=utf-8",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmY3ZTM1Zjk3NGVmN2RlZTFjYjJhN2JjN2Y5YTZiOSIsIm5iZiI6MTcyOTgzOTM0OS44NzE5NDIsInN1YiI6IjY3MDQ4ODQxMWI5NmI4ZWY0YzY5Yjc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d43-4CvyjwCyMQZQInVNlGy-Ii0xKIX2Kzn6xuYUpto", // Replace with your token
          },
        }
      );
      if (response.status === 201) {
        toast.success("Rating submitted successfully.");
      }
    } catch (error) {
      console.error("Error submitting rating:", error);
      toast.error("Failed to submit rating.");
    }
  };

  const deleteRating = async () => {
    try {
      const response = await axios.delete(
        `https://api.themoviedb.org/3/movie/${id}/rating`,
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmY3ZTM1Zjk3NGVmN2RlZTFjYjJhN2JjN2Y5YTZiOSIsIm5iZiI6MTcyOTgzOTM0OS44NzE5NDIsInN1YiI6IjY3MDQ4ODQxMWI5NmI4ZWY0YzY5Yjc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d43-4CvyjwCyMQZQInVNlGy-Ii0xKIX2Kzn6xuYUpto", // Replace with your token
          },
        }
      );
      if (response.status === 200) {
        dispatch(setRating(0)); // Reset rating in Redux
        onRatingChange(0); // Notify parent about the deleted rating
        toast.success("Rating deleted successfully.");
      }
    } catch (error) {
      console.error("Error deleting rating:", error);
      toast.error("Failed to delete rating.");
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
            onChange={() => submitRating(star)} // Submit rating on change
            checked={star === rating} // Check if this star is the current rating
          />
        ))}
      </div>
      {rating > 0 && (
        <button
          type="button"
          className="btn btn-xs bg-transparent hover:text-red-400 ml-2"
          onClick={deleteRating} // Delete rating on click
        >
          Hapus
        </button>
      )}
    </div>
  );
};

export default Rating;
