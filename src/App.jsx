import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
// import { Beranda } from "./pages/beranda/Beranda";
// import { DetailBeranda } from "./pages/beranda/DetailBeranda";
import Beranda from "./pages/beranda/Beranda";
import { Provider } from "react-redux";
import store from "./store/store";
import { useState } from "react";
import ThemeMode from "./context/ThemeMode";
import Detail from "./pages/beranda/Detail";
import Cari from "./pages/beranda/Cari";
import RatingView from "./pages/beranda/RatingView";

function App() {
  const theme = useState("light");
  return (
    <BrowserRouter>
    <ThemeMode.Provider value={theme}>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/cari" element={<Cari/>}/>
          <Route path="/rating" element={<RatingView/>}/>
        </Routes>
        <Footer />
      </Provider>
      </ThemeMode.Provider>
    </BrowserRouter>
  );
}

export default App;
