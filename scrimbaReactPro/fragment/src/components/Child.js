import React from "react";
import GrandChild from "./GrandChild";

const Child = () => {
  return (
    <>
      <h2>Child Component</h2>
      <p>Im in the Child Component</p>
      <GrandChild />
    </>
  );
};

export default Child;
