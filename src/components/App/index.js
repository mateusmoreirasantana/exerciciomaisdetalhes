import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../Navbar";
import ProductsPage from "./../pages/ProductsPage";
import AboutPage from "./../pages/AboutPage";
import WorkPage from "./../pages/WorkPage";
import ProductPage from "./../pages/ProductPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
