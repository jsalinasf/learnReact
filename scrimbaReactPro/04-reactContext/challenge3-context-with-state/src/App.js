import React, { Component } from 'react';
import Header from './components/Header';
import { UserContextConsumer } from './userContext';

class App extends Component {
  render() {
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
                <button onClick={context.updateUsername}>
                  Update Username
                </button>
              </div>
            )}
          </UserContextConsumer>
        </main>
      </div>
    );
  }
}

export default App;
