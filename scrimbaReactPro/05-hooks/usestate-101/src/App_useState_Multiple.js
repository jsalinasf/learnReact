import React, { useState } from 'react';

const App = () => {
  const [inputData, setInputData] = useState({ firstName: '', lastName: '' });
  const [contactList, setContactList] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputData((prevInputData) => ({ ...prevInputData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setContactList((prevContactList) => [...prevContactList, inputData]);
    setInputData({ firstName: '', lastName: '' });
  }

  const displayContacts = contactList.map((contact) => (
    <li key={contact.firstName + contact.lastName}>
      {contact.firstName} {contact.lastName}
    </li>
  ));

  return (
    <div className='content'>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='First Name'
          name='firstName'
          onChange={handleChange}
          value={inputData.firstName}
        ></input>
        <br />
        <input
          placeholder='Last Name'
          name='lastName'
          onChange={handleChange}
          value={inputData.lastName}
        ></input>
        <br />
        <button>Add Contact</button>
      </form>
      <ul>{displayContacts}</ul>
    </div>
  );
};

export default App;
