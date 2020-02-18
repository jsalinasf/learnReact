import React, { Component } from 'react';
import GrandParent from './components/GrandParent';

class App extends Component {
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <GrandParent />
        <GrandParent />
      </div>
    );
  }
}

export default App;
