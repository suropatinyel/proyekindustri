import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // menggunakan local storage
import movieReducer from "./reducer/AlldataReducer";
import { combineReducers } from "redux";

// Konfigurasi persist untuk menentukan reducer yang akan disimpan
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  alldata: movieReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
