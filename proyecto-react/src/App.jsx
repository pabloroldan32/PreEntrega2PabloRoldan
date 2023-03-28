import { useEffect, useState } from "react";
import { Navigate, Route, Routes, } from "react-router-dom";
import "./App.css";
import CardDetail from "./components/CardDetail";
import ItemListContainer from "./components/ItemListContainer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";



function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      setProductos(data);
    });
  }, []);
  

  return (
    <div>
      <Navbar />
      <h1>React + Vite</h1>
      <Routes>

        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<ItemListContainer productos={productos} />} />            
        <Route path="/home/:id" element={<CardDetail />} />
        <Route path="/category/men's clothing" element={<ItemListContainer productos={productos} category="men's clothing" />} />
        <Route path="/category/men's clothing/:id" element={<CardDetail />} />
        <Route path="/category/women's clothing" element={<ItemListContainer productos={productos} category="women's clothing" />} />
        <Route path="/category/women's clothing/:id" element={<CardDetail />} />
        <Route path="/category/electronics" element={<ItemListContainer productos={productos} category="electronics" />} />
        <Route path="/category/electronics/:id" element={<CardDetail />} />
        <Route path="/category/jewelery" element={<ItemListContainer productos={productos} category="jewelery" />} />
        <Route path="/category/jewelery/:id" element={<CardDetail />} />
        <Route path="/404" element={<h2>404 Not Found</h2>} />

      </Routes>  
    </div>
  );
}

export default App;
