import {
  FILTER,
  GENRE,
  IMAGE,
  LIST,
  NOWPLAYING,
  POPULAR,
  REKOMENDASI,
  SEARCH,
  TOPRATE,
  UPCOMING,
  VIDEO,
  DETAIL,
  RATING,
} from "../action/AlldataAction";

const initialState = {
  nowPlaying: [],
  popular: [],
  topRate: [],
  upcoming: [],
  list: [],
  rekomendasi: [],
  searchResults: [],
  filter: null,
  videos: [],
  images: [],
  genres: [],
  detail: [],
  rating: [],
};

// Movie reducer
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOWPLAYING:
      return {
        ...state,
        nowPlaying: action.payload,
      };
    case POPULAR:
      return {
        ...state,
        popular: action.payload,
      };
    case TOPRATE:
      return {
        ...state,
        topRate: action.payload,
      };
    case UPCOMING:
      return {
        ...state,
        upcoming: action.payload,
      };
    case LIST:
      return {
        ...state,
        list: action.payload,
      };
    case REKOMENDASI:
      return {
        ...state,
        rekomendasi: action.payload,
      };
    case SEARCH:
      return {
        ...state,
        searchResults: action.payload,
      };
    case FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case VIDEO:
      return {
        ...state,
        videos: action.payload,
      };
    case IMAGE:
      return {
        ...state,
        images: action.payload,
      };
    case GENRE:
      return {
        ...state,
        genres: action.payload,
      };
    case DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case RATING:
      return {
        ...state,
        rating: action.payload,
      };
    default:
      return state;
  }
};


export default movieReducer;