import React, { createContext, useContext, useState } from "react";

const Context = createContext();

const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  return (
    <Context.Provider value={[cartData, setCartData]}>
      {children}
    </Context.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(Context);
