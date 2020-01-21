import React from "react";
import Child from "./components/Child";

const App = () => {
  return (
    <div>
      <h1>Grandfather Component</h1>
      <p>Im in the App Component</p>
      <Child />
    </div>
  );
};

export default App;
