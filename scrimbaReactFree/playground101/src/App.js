import React from "react";

function App() {
  return (
    <div>
      <img src="https://www.fillmurray.com/200/100" alt="Bill smoking a pipe" />
      <br />
      <br />
      <button
        onClick={function() {
          console.log("Test");
        }}
      >
        Click Me!
      </button>
    </div>
  );
}

export default App;
