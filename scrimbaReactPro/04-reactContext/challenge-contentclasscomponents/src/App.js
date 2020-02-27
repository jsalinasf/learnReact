import React, { Component } from 'react';
import Header from './components/Header';
import UserContext from './userContext';

class App extends Component {
  static contextType = UserContext;
  render() {
    const currentUser = this.context;
    return (
      <div>
        <Header />
        <main>
          <p>No new notifications, {currentUser}! 🎉</p>
        </main>
      </div>
    );
  }
}

export default App;
