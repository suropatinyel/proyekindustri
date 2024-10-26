import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailView } from "./DetailView";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  const ambilDetail = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmY3ZTM1Zjk3NGVmN2RlZTFjYjJhN2JjN2Y5YTZiOSIsIm5iZiI6MTcyOTgzOTM0OS44NzE5NDIsInN1YiI6IjY3MDQ4ODQxMWI5NmI4ZWY0YzY5Yjc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d43-4CvyjwCyMQZQInVNlGy-Ii0xKIX2Kzn6xuYUpto", // Ganti dengan token Anda
          },
        }
      );
      setDetail(response.data);
    } catch (error) {
      console.error("Error fetching the movie details:", error);
    }
  }, [id]);

  useEffect(() => {
    ambilDetail();
  }, [ambilDetail]);

  return <DetailView detail={detail} />;
};

export default Detail;
