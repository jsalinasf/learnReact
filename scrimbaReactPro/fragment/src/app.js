import React from "react";
import Child from "./components/Child";

const App = () => {
  return (
    <>
      <h1>Grandfather Component</h1>
      <p>Im in the App Component</p>
      <Child />
    </>
  );
};

export default App;

// Without using Fragments
// This is the generated DOM by React
// Each component is contained within its own div
{
  /* <div id="root">
  <div>
    <h1>Grandfather Component</h1>
    <p>Im in the App Component</p>
    <div>
      <h2>Child Component</h2>
      <p>Im in the Child Component</p>
      <div>
        <h3>GrandChild Component</h3>
        <p>Im in the GrandChild Component</p>
      </div>
    </div>
  </div>
</div>; */
}

// USING FRAGMENTS
// This is the generated DOM by React
// MUCH MORE SIMPLE DOM, but pay attention to the effect it may cause on CSS
// and any other related components that are based on the relationship of
// the markup file

// In here all of the elements are now silbings
// They use to have a father child relationship before applying fragments!
{
  /* <div id="root">
  <h1>Grandfather Component</h1>
  <p>Im in the App Component</p>
  <h2>Child Component</h2>
  <p>Im in the Child Component</p>
  <h3>GrandChild Component</h3>
  <p>Im in the GrandChild Component</p>
</div>; */
}
