import { fetchProducts } from "../API/api";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import productImage from "../assets/nilufar-nattaq-UU_W0xwydFc-unsplash.jpg";
import { useContext } from "react";
import ShoppingContext from "../context/ShoppingContext";




export default function ShoppingCart() {

const {AddCart}=useContext(ShoppingContext);


  const { data, isPending, isError, error } = useQuery({
    queryKey: ["shopping-cart"],
    queryFn: fetchProducts,
  });

  if (isPending) return <p>Loading products...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "16px",
        marginTop: "20px"
      }}>
        {data.map((cart) => (
          <div  
            key={cart.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "12px",
              padding: "10px",
              textAlign: "center",
              boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
            }}
          >
            <p>
              <span>{cart.name}{" "}</span> (${cart.price})
            </p>
            <img
              src={productImage}
              alt={cart.name}
              width="100%"
              style={{ borderRadius: "8px" }}
            />
          <button  onClick={() => {
                AddCart((prev) => {
                  const exists = prev.find((item) => item.id === cart.id);
                  if (exists) {
                    return prev.map((item) =>
                      item.id === cart.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                    );
                  }
                  return [...prev, { ...cart, quantity: 1 }];
                });
              }}>Add to Cart</button>;
          </div>
        ))}
      </div>
      
    </div>
  );
}
