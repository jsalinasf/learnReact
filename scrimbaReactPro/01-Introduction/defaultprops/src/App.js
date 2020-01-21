import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <h1>React Default Props</h1>
      <p>Here are 3 cards components:</p>
      <Card backgroundColor={"black"} width={100} height={100} />
      <Card backgroundColor={"green"} width={150} height={150} />
      <Card />
    </div>
  );
};

export default App;
