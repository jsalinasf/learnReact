import React, { useState } from 'react';

function App() {
  const [inputData, setInputData] = useState({ firstName: '', lastName: '' });
  const [contactsData, setContactsData] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputData((prevInputData) => ({ ...prevInputData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  console.log(inputData);
  console.log(contactsData);

  return (
    <div className='counter'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='First Name:'
          name='firstName'
          value={inputData.firstName}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Last Name:'
          name='lastName'
          value={inputData.lastName}
          onChange={handleChange}
        />
        <button type='submit'>Add contact</button>
      </form>
      <h2>Contacts List</h2>
    </div>
  );
}

export default App;
