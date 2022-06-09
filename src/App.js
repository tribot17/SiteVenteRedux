import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Femme from "./pages/Femme";
import Home from "./pages/Home";
import Homme from "./pages/Homme";
import Panier from "./pages/Panier";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homme" element={<Homme />} />
        <Route path="/femme" element={<Femme />} />
        <Route path="/panier" element={<Panier />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
