import React from "react";
import { useCart } from "./CartProvider";
import { useNavigate } from "react-router-dom";

const CartItem = () => {
  const [cartData, setCartData] = useCart();

  const updateQuantityHandler = (id, updatedQuantity) => {
    // ensure we work with numbers
    const qty = Number(updatedQuantity);

    setCartData((prevState) => {
      if (qty <= 0) {
        return prevState.filter((item) => item.id !== id);
      } else {
        return prevState.map((item) =>
          item.id === id ? { ...item, quantity: qty } : item,
        );
      }
    });
  };

  const getTotalCartPrice = () => {
    const totalPrice = cartData.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    return totalPrice;
  };

  const navigate = useNavigate();

  return (
    <>
      <button
        style={{
          position: "absolute",
          left: "80px",
          top: "20px",
          padding: "6px",
          fontWeight: "bold",
          cursor: "pointer",
          color: "white",
          background: "red",
          borderRadius: "4px",
          border: "none",
        }}
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      {cartData?.length <= 0 ? (
        <h2 style={{ textAlign: "center" }}>No item in cart</h2>
      ) : (
        <>
          {" "}
          <div
            className=""
            style={{
              width: "100%",
              background: "#f2f2f2",
              padding: "8px",
              marginBottom: "7px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <h2 style={{}}>Cart Page</h2>

            <table
              style={{
                width: "80%",
                border: "1px solid black",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {/* map through cart data and display it in table */}
                {cartData.map((item) => (
                  <tr
                    key={item.id}
                    style={{
                      border: "1px solid black",
                      borderCollapse: "collapse",
                      textAlign: "center",
                    }}
                  >
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>
                      <span
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          padding: "0 9px",
                          cursor: "pointer",
                          color: "red",
                          border: "1px solid red",
                          borderRadius: "20%",
                          marginRight: "5px",
                          hover: {
                            backgroundColor: "red",
                            color: "white",
                          },
                        }}
                        onClick={() =>
                          updateQuantityHandler(
                            item.id,
                            (Number(item.quantity) || 0) - 1,
                          )
                        }
                      >
                        -
                      </span>

                      {parseInt(item.quantity) || 0}
                      <span
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          padding: "0 7px",
                          cursor: "pointer",
                          color: "green",
                          border: "1px solid green",
                          borderRadius: "20%",
                          marginLeft: "5px",
                          hover: {
                            backgroundColor: "green",
                            color: "white",
                          },
                        }}
                        onClick={() =>
                          updateQuantityHandler(
                            item.id,
                            (Number(item.quantity) || 0) + 1,
                          )
                        }
                      >
                        +
                      </span>
                    </td>
                    <td>
                      {(Number(item.price) || 0) * (Number(item.quantity) || 0)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3>Total Price: {getTotalCartPrice()}</h3>
          </div>
        </>
      )}
    </>
  );
};

export default CartItem;
