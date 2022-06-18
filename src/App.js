import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Femme from "./pages/Femme";
import Home from "./pages/Home";
import Homme from "./pages/Homme";
import Panier from "./pages/Panier";
import ProductPage from "./pages/ProductPage";
import { store } from "./redux/redux";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homme" element={<Homme />} />
          <Route path="/femme" element={<Femme />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
