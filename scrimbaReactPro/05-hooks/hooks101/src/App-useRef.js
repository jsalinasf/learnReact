// useRef Hook
// to focus a specific element

// You cant use document.getElementbyId because there could be many
// instances of a component and then multiple elements with the same id

import React, { useState, useRef } from 'react';

function App() {
  const [currentTodo, setCurrentTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef(null);

  function handleChange(event) {
    setCurrentTodo(event.target.value);
  }

  function addTodo(event) {
    event.preventDefault();
    setTodoList(prevElements => [...prevElements, currentTodo]);
    setCurrentTodo('');
    inputRef.current.focus();
  }

  function displayTodoArray() {
    return todoList.map(item => <h2>{item}</h2>);
  }

  return (
    <div>
      <form>
        <input
          ref={inputRef}
          type='text'
          value={currentTodo}
          onChange={handleChange}
        ></input>
        <button onClick={addTodo}>Add TO-DO item </button>
      </form>
      {displayTodoArray()}
    </div>
  );
}

export default App;
