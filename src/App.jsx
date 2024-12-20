import "./App.css";
import { Navbar } from "../src/components/ui"
import { ProductListPage, ProductDetailsPage } from "./pages"
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/details/:productId" element={<ProductDetailsPage />} />
      </Routes>

    </div>
  );
}

export default App;
