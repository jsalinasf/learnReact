import React from "react";

const TodoItem = ({ item }) => {
  return (
    <div className="todoItem">
      <input
        onChange={() => console.log("Item changed!")}
        type="checkbox"
        name={item.id}
        id={item.id}
        defaultChecked={item.completed}
      ></input>
      <label htmlFor={item.id}>{item.text}</label>
    </div>
  );
};

export default TodoItem;
