import React from "react";

const TodoItem = props => {
  return (
    <div className="todoItem">
      <input
        onChange={props.handleChange}
        type="checkbox"
        name={props.item.id}
        id={props.item.id}
        defaultChecked={props.item.completed}
      ></input>
      <label htmlFor={props.item.id}>{props.item.text}</label>
    </div>
  );
};

export default TodoItem;
