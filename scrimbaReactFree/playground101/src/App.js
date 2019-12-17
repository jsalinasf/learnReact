import React from "react";

function App() {
  return (
    <div>
      <img
        src="https://www.fillmurray.com/200/100"
        alt="Bill smoking a pipe"
        onMouseOver={() => {
          console.log("Mouse over image");
        }}
      />
      <br />
      <br />
      <button onClick={() => console.log("Button clicked")}>Click Me!</button>
    </div>
  );
}

export default App;
