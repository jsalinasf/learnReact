import React, { useState, useRef } from 'react';

const App = () => {
  const [newTodoValue, setNewTodoValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef(null);

  function handleChange(event) {
    setNewTodoValue(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    setTodoList((prevList) => [...prevList, newTodoValue]);
    setNewTodoValue('');
    inputRef.current.focus();
  }

  const displayList = todoList.map((element) => (
    <li key={Math.random(1)}>{element}</li>
  ));

  return (
    <div className='content'>
      <h1>My To Do List</h1>
      <form>
        <input
          ref={inputRef}
          name='newTodoValue'
          value={newTodoValue}
          onChange={handleChange}
        ></input>
        <br />
        <button onClick={handleClick}>Add To Do</button>
        <h2>Pending Tasks:</h2>
      </form>
      <ol>{displayList}</ol>
    </div>
  );
};

export default App;
