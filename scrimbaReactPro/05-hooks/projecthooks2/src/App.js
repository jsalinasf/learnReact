import React, { useState } from 'react';

function App() {
  const [inputData, setInputData] = useState({ firstName: '', lastName: '' });
  const [contactsData, setContactsData] = useState([]);

  return (
    <div className='counter'>
      <form onSubmit={}>
        <input
          type='text'
          placeholder='First Name:'
          name='firstName'
          value={inputData.firstName}
          onChange={}
        />
        <input
          type='text'
          placeholder='Last Name:'
          name='lastName'
          value={inputData.lastName}
          onChange={}
        />
      </form>
    </div>
  );
}

export default App;
