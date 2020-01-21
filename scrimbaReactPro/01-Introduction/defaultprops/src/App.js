import React from "react";
import FunctionalCard from "./components/FunctionalFunctionalCard";
import ClassCard from "./components/ClassCard";

const App = () => {
  return (
    <div>
      <h1>React Default Props</h1>
      <p>Here are 3 FunctionalCards components:</p>
      <FunctionalCard backgroundColor={"black"} width={100} height={100} />
      <FunctionalCard backgroundColor={"green"} width={150} height={150} />
      <FunctionalCard />
      <p>Here are 3 ClassCards components:</p>
      <ClassCard backgroundColor={"black"} width={100} height={100} />
      <ClassCard backgroundColor={"green"} width={150} height={150} />
      <ClassCard />
    </div>
  );
};

export default App;
