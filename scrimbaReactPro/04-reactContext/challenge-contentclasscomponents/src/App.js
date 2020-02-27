import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <p>No new notifications, Username!</p>
        </main>
      </div>
    );
  }
}

export default App;
