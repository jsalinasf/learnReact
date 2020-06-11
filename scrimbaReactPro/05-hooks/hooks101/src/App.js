import React, { useState, useRef } from 'react';

function App(props) {
  const [newTodoValue, setNewTodoValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef(null);

  function handleChange(event) {
    const { value } = event.target;
    setNewTodoValue(value);
  }

  function handleClick(event) {
    event.preventDefault();
    setTodoList((prevTodoList) => [...prevTodoList, newTodoValue]);
    setNewTodoValue('');
    inputRef.current.focus();
  }

  const allTodoItems = todoList.map((item) => <p>{item}</p>);

  return (
    <div>
      <h1>To-do List</h1>
      <form action='#' method='POST'>
        <input
          ref={inputRef}
          type='text'
          value={newTodoValue}
          onChange={handleChange}
        ></input>
        <button onClick={handleClick}>Add to-do item</button>
      </form>
      {allTodoItems}
    </div>
  );
}

export default App;
