import React from "react";

const App = () => {
  return (
    <div>
      <h1>To Do List</h1>
      <div>
        <input type="checkbox" name="task01" id="task01"></input>
        <label for="task01">Buy Road Bike</label>
      </div>
      <div>
        <input type="checkbox" name="task02" id="task02"></input>
        <label for="task02">Finish React Free course</label>
      </div>
      <div>
        <input type="checkbox" name="task03" id="task03"></input>
        <label for="task03">Wash the truck</label>
      </div>
      <div>
        <input type="checkbox" name="task04" id="task04"></input>
        <label for="task04">Send the washing machine</label>
      </div>
    </div>
  );
};

export default App;
