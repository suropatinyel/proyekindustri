import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Beranda from "./pages/beranda/Beranda";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store"; // Update import store and persistor
import { useState } from "react";
import ThemeMode from "./context/ThemeMode";
import Detail from "./pages/beranda/Detail";
import Cari from "./pages/beranda/Cari";
import RatingView from "./pages/beranda/RatingView"; // Ensure this path is correct

function App() {
  const theme = useState("light");
  return (
    <BrowserRouter>
      <ThemeMode.Provider value={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Beranda />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/cari" element={<Cari />} />
              <Route path="/rating" element={<RatingView />} />{" "}
              {/* Ensure this is correct */}
            </Routes>
            <Footer />
          </PersistGate>
        </Provider>
      </ThemeMode.Provider>
    </BrowserRouter>
  );
}

export default App;
