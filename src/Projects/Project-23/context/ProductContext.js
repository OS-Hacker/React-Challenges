import React, { createContext, useEffect, useState } from "react";

export const context = createContext();

const ProductContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const URL = "https://fakestoreapi.com/products";

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(URL);
      const data = await res.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const value = {
    loading,
    data,
    setData,
  };

  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ProductContext;
