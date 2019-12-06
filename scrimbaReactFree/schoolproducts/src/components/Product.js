import React from "react";

const Product = ({ product }) => {
  return (
    <div className="productCard">
      <div className="productName">{product.name}</div>
      <div className="productDescription">{product.description}</div>
      <div className="productPrice">${product.price}</div>
    </div>
  );
};

export default Product;
