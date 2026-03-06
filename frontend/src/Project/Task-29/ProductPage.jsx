import axios from "axios/unsafe/axios.js";
import React, { useEffect, useState } from "react";
import { API_URL } from "./App_29";
import ProductCard from "./ProductCard";
import { useCart } from "./CartProvider";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const data = await axios.get(API_URL);
      setProduct(data?.data?.products);
      console.log(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const [cartData, setCartData] = useCart();

  const handleAddToCart = (product) => {
    setCartData((prev) => {
      const isPresent = prev.find((item) => item.id === product.id);
      if (isPresent) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const navigate = useNavigate();

  if (loading) {
    return (
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          
        }}
      >
        Loading...
      </h3>
    );
  }

  return (
    <>
      <div
        className=""
        style={{
          width: "100%",
          background: "#f2f2f2",
          padding: "8px",
          marginBottom: "7px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <h2 style={{}}>Product Page</h2>

        <h3
          style={{
            color: "rosybrown",
            fontWeight: "bold",
            fontSize: "20px",
            cursor: "pointer",
            userSelect: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
          onClick={() => {
            navigate("/cart");
          }}
        >
          cart-{cartData?.length}
        </h3>
      </div>

      <div
        className=""
        style={{
          width: "80%",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "10px",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        {product?.length > 0 ? (
          <>
            {product?.map((item) => {
              const { id, title, price, description, thumbnail, category } =
                item;
              return (
                <ProductCard
                  id={id}
                  title={title}
                  price={price}
                  description={description}
                  thumbnail={thumbnail}
                  category={category}
                  key={id}
                  handleAddToCart={handleAddToCart}
                  product={item}
                />
              );
            })}
          </>
        ) : (
          <h3>Product Not Found</h3>
        )}
      </div>
    </>
  );
};

export default ProductPage;
