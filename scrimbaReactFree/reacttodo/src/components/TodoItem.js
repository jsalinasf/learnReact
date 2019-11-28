import React from "react";

const TodoItem = () => {
  return (
    <div>
      <input type="checkbox" name="task01" id="task01"></input>
      <label className="itemLabel">Loading data...</label>
      {/* <label for="task01">Loading data...</label> */}
    </div>
  );
};

export default TodoItem;
