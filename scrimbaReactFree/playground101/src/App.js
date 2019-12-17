import React from "react";

function App() {
  return (
    <div>
      <img src="https://www.fillmurray.com/200/100" alt="Bill smoking a pipe" onMouseOver={function() {console.log('Mouse over the image')}}/>
      <br />
      <br />
      <button
        onClick={function() {
          console.log("Button clicked");
        }}
      >
        Click Me!
      </button>
    </div>
  );
}

export default App;
