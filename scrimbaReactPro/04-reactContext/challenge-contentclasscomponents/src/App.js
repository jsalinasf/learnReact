import React, { Component } from 'react';
import Header from './components/Header';
import ThemeContext from './ThemeContext';

class App extends Component {
  static contextType = ThemeContext;
  render() {
    const currentUser = this.context;
    return (
      <div>
        <Header />
        <main>
          <p>No new notifications, {currentUser}!</p>
        </main>
      </div>
    );
  }
}

export default App;
