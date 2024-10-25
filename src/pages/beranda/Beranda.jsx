import axios from "axios";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setNowPlaying,
  setPopular,
  setTopRate,
  setUpcoming,
} from "../../store/action/AlldataAction";
import BerandaView from "./BerandaView";

const Beranda = () => {
  const { nowPlaying, popular, topRate, upcoming } = useSelector(
    (state) => state.alldata
  );
  const dispatch = useDispatch();

  const getNowPlaying = useCallback(async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing",
      {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmY3ZTM1Zjk3NGVmN2RlZTFjYjJhN2JjN2Y5YTZiOSIsIm5iZiI6MTcyODk3OTA0NC43NDczNzMsInN1YiI6IjY3MDQ4ODQxMWI5NmI4ZWY0YzY5Yjc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jSILQRsf2N_BDBw-8NJK5ewoZaRlbWnrmvhNXlsVFb4",
        },
      }
    );
    dispatch(setNowPlaying(response.data.results)); // Menggunakan 'results'
  }, [dispatch]);

  const getPopular = useCallback(async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmY3ZTM1Zjk3NGVmN2RlZTFjYjJhN2JjN2Y5YTZiOSIsIm5iZiI6MTcyODk3OTA0NC43NDczNzMsInN1YiI6IjY3MDQ4ODQxMWI5NmI4ZWY0YzY5Yjc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jSILQRsf2N_BDBw-8NJK5ewoZaRlbWnrmvhNXlsVFb4",
        },
      }
    );
    dispatch(setPopular(response.data.results)); // Menggunakan 'results'
  }, [dispatch]);

  const getTopRated = useCallback(async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated",
      {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmY3ZTM1Zjk3NGVmN2RlZTFjYjJhN2JjN2Y5YTZiOSIsIm5iZiI6MTcyODk3OTA0NC43NDczNzMsInN1YiI6IjY3MDQ4ODQxMWI5NmI4ZWY0YzY5Yjc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jSILQRsf2N_BDBw-8NJK5ewoZaRlbWnrmvhNXlsVFb4",
        },
      }
    );
    dispatch(setTopRate(response.data.results)); // Menggunakan 'results'
  }, [dispatch]);

  const getUpcoming = useCallback(async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming",
      {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmY3ZTM1Zjk3NGVmN2RlZTFjYjJhN2JjN2Y5YTZiOSIsIm5iZiI6MTcyODk3OTA0NC43NDczNzMsInN1YiI6IjY3MDQ4ODQxMWI5NmI4ZWY0YzY5Yjc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jSILQRsf2N_BDBw-8NJK5ewoZaRlbWnrmvhNXlsVFb4",
        },
      }
    );
    dispatch(setUpcoming(response.data.results)); // Menggunakan 'results'
  }, [dispatch]);

  useEffect(() => {
    const getData = async () => {
      try {
        await Promise.all([
          getNowPlaying(),
          getPopular(),
          getTopRated(),
          getUpcoming(),
        ]);
      } catch (error) {
        console.error("Fetching data error", error);
      }
    };
    getData();
  }, [getNowPlaying, getPopular, getTopRated, getUpcoming]);

  return (
    <BerandaView
      movies={nowPlaying || []}
      popular={popular || []}
      topRate={topRate || []}
      upComing={upcoming || []}
    />
  );
};

export default Beranda;
