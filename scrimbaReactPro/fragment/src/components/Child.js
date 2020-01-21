import React from "react";
import GrandChild from "./GrandChild";

const Child = () => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Im in the Child Component</p>
      <GrandChild />
    </div>
  );
};

export default Child;
