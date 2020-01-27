import React from "react";
import FunctionalCard from "./components/FunctionalCard";
import ClassCard from "./components/ClassCard";
import RoundedImg from "./components/RoundedImg";

const App = () => {
  return (
    <div>
      <h1>React Default Props and TypeProps</h1>
      <p>PropTypes exercise</p>
      <RoundedImg
        src="https://picsum.photos/id/237/300/300"
        borderRadius="10px"
      />
      <p>Here are 3 FunctionalCards components:</p>
      <FunctionalCard backgroundColor={"black"} width={100} height={"mike"} />
      <FunctionalCard backgroundColor={"blue"} width={150} height={150} />
      <FunctionalCard />
      <p>Here are 3 ClassCards components:</p>
      <ClassCard backgroundColor={"red"} width={100} height={100} />
      <ClassCard backgroundColor={"blue"} width={150} height={150} />
      <ClassCard />
    </div>
  );
};

export default App;
