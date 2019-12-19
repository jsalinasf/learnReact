import React from "react";

const TodoItem = props => {
  console.log(props);
  return (
    <div className="todoItem">
      <input
        type="checkbox"
        name={props.item.id}
        id={props.item.id}
        defaultChecked={props.item.completed}
        onChange={event => props.handleChange(props.item.id)}
      ></input>
      <label htmlFor={props.item.id}>{props.item.text}</label>
    </div>
  );
};

export default TodoItem;
