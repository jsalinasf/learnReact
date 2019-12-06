import React from "react";
import Product from "./components/Product";
import productsData from "./utils/productsData";
import AppHeader from "./components/AppHeader";

const App = () => {
  const productsArr = productsData.map(product => (
    <Product key={product.id} product={product} />
  ));
  return (
    <div className="container">
      <AppHeader />
      <div className="productsList">{productsArr}</div>
    </div>
  );
};

export default App;
