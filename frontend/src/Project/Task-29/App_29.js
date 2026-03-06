import React from "react";
import ProductPage from "./ProductPage";
import { BrowserRouter, Route, Routes, routes } from "react-router-dom";
import CartItem from "./CartItem";

export const API_URL = "https://dummyjson.com/products";

const App_29 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App_29;
