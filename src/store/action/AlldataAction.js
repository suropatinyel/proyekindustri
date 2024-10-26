// AlldataAction.js
export const NOWPLAYING = "NOWPLAYING";
export const POPULAR = "POPULAR";
export const TOPRATE = "TOPRATE";
export const UPCOMING = "UPCOMING";
export const DETAIL = "DETAIL";
export const RATING = "RATING"; // pastikan hanya satu konstanta RATING

export const LIST = "LIST";
export const REKOMENDASI = "REKOMENDASI";
export const SEARCH = "SEARCH";
export const FILTER = "FILTER";
export const VIDEO = "VIDEO";
export const IMAGE = "IMAGE";
export const GENRE = "GENRE";

// Action creators
export const setNowPlaying = (data) => ({
  type: NOWPLAYING,
  payload: data,
});

export const setPopular = (data) => ({
  type: POPULAR,
  payload: data,
});

export const setTopRate = (data) => ({
  type: TOPRATE,
  payload: data,
});

export const setUpcoming = (data) => ({
  type: UPCOMING,
  payload: data,
});

export const setList = (data) => ({
  type: LIST,
  payload: data,
});

export const setRekomendasi = (data) => ({
  type: REKOMENDASI,
  payload: data,
});

export const setSearch = (query) => ({
  type: SEARCH,
  payload: query,
});

export const setFilter = (filter) => ({
  type: FILTER,
  payload: filter,
});

export const setVideo = (data) => ({
  type: VIDEO,
  payload: data,
});

export const setImage = (data) => ({
  type: IMAGE,
  payload: data,
});

export const setGenre = (data) => ({
  type: GENRE,
  payload: data,
});

export const setDetail = (data) => ({
  type: DETAIL,
  payload: data,
});

// Gunakan action type RATING yang sudah didefinisikan
export const setRating = (ratingList) => ({
  type: RATING,
  payload: ratingList,
});
