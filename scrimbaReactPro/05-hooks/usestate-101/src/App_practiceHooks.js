import React, { useState, useEffect } from 'react';
import randomcolor from 'randomcolor';

const App = () => {
  const [answer, setAnswer] = useState('No');
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState('');
  const [inputData, setInputData] = useState({ firstName: '', lastName: '' });
  const [contactList, setContactList] = useState([]);

  function handleClick() {
    setAnswer(answer === 'Yes' ? 'No' : 'Yes');
  }

  function increment() {
    setCounter((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCounter((prevCount) => prevCount - 1);
  }

  function updateColor() {
    setColor(randomcolor());
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setInputData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setContactList((prevContactList) => [...prevContactList, inputData]);
    setInputData({ firstName: '', lastName: '' });
  }

  const displayContacts = contactList.map((contact) => (
    <li key={Math.random(1)}>
      {contact.firstName} {contact.lastName}
    </li>
  ));

  useEffect(() => {
    updateColor();
  }, [counter]);

  return (
    <div>
      <h2>Is it important lo learn React?</h2>
      <p>{answer}</p>
      <button onClick={handleClick}>Change Answer</button>
      <h2 style={{ color: color }}>{counter}</h2>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <form onSubmit={handleSubmit}>
        <h2>Contact List</h2>
        <input
          name='firstName'
          placeholder='First Name'
          value={inputData.firstName}
          onChange={handleChange}
        ></input>
        <br />
        <input
          name='lastName'
          placeholder='Last Name'
          value={inputData.lastName}
          onChange={handleChange}
        ></input>
        <br />
        <button>Add Contact</button>
      </form>
      <ol>{displayContacts}</ol>
    </div>
  );
};

export default App;
