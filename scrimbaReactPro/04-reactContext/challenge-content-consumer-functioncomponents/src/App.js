import React from 'react';
import UserContext from './userContext';
import Header from './components/Header';

function App(props) {
  return (
    <div>
      <Header />
      <UserContext.Consumer>
        {userName => <main>No new notifications, {userName}! 🎉</main>}
      </UserContext.Consumer>
    </div>
  );
}

export default App;
