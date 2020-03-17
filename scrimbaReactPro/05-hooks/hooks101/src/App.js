import React, { useState } from 'react';

function App() {
  const [inputData, setInputData] = useState({ firstName: '', lastName: '' });
  const [contactsData, setContactsData] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputData(prevInput => ({ ...prevInput, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setContactsData(prevContactsData => [...prevContactsData, inputData]);
    setInputData({ firstName: '', lastName: '' });
  }

  const contacts = contactsData.map(contact => (
    <h2 key={contact.firstName + contact.lastName}>
      {contact.firstName} {contact.lastName}
    </h2>
  ));

  return (
    <>
      <form onSubmit={handleSubmit} id='myForm'>
        <input
          placeholder='First Name'
          type='input'
          id='firstName'
          name='firstName'
          value={inputData.firstName}
          onChange={handleChange}
        ></input>
        <br />
        <input
          placeholder='Last Name'
          type='input'
          id='lastName'
          name='lastName'
          value={inputData.lastName}
          onChange={handleChange}
        ></input>
        <br />
        <button type='submit'>Add contact</button>
      </form>
      {contacts}
    </>
  );
}

export default App;
