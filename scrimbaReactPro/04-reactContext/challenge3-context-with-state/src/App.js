import React from 'react';
import Header from './components/Header';
import {UserContextConsumer} from './userContext'

function App() {
  return (
    <Header />
    <main>
      <UserContextConsumer>
        {context => (
          <p className="main">No new notifications, {context.username}! 🎉</p>
        )}
      </UserContextConsumer>

    </main>
  )
}

export default App;
