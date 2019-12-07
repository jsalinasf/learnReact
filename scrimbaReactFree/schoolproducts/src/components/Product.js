import React from "react";

const Product = ({ product }) => {
  return (
    <div className="productCard">
      <h2 className="productName">{product.name}</h2>
      <p className="productDescription">{product.description}</p>
      <p className="productPrice">
        {product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        })}
      </p>
      <button className="productButton">Get Info</button>
    </div>
  );
};

export default Product;
