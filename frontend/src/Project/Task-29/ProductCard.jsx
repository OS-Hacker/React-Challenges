import React from "react";

const ProductCard = ({
  thumbnail,
  title,
  description,
  price,
  handleAddToCart,
  product,
}) => {
  // create function to make price in indian currency
  const priceInIndianCurrency = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);
  };

  return (
    <div
      className="product-container"
      style={{
        border: "2px solid black",
        width: "200px",
        height: "300px",
        margin: "auto",
        gap: "10px",
        padding: "5px",
        borderRadius: "10px",
        boxShadow: "2px 2px 5px 2px",
      }}
    >
      <div
        className="product"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={thumbnail}
          alt="product-image"
          style={{ width: "200px", height: "150px", margin: "auto" }}
        />
        <div className="product-title">
          <h4>{title.slice(0, 20)}</h4>
          <div className="product-price">
            {/* how i make this price in indian currency */}
            price: {priceInIndianCurrency(price)}
          </div>
          <p>{description.slice(0, 50)}</p>
        </div>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "5px 10px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            marginTop: "10px",
          }}
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
