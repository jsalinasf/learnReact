import React from 'react';
import Header from './components/Header';
import { UserContextConsumer } from './userContext';

function App() {
  return (
    <div>
      <Header />
      <main>
        <UserContextConsumer>
          {context => (
            <div>
              <p className='main'>
                No new notifications, {context.username}! 🎉
              </p>
              <button onClick={context.updateUsername}>Update Username</button>
            </div>
          )}
        </UserContextConsumer>
      </main>
    </div>
  );
}

export default App;
