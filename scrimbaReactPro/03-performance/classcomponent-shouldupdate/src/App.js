import React, { Component } from 'react';
import GrandParent from './components/GrandParent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>{this.state.count}</button>
        <h1>App Component</h1>
        <GrandParent />
        <GrandParent />
      </div>
    );
  }
}

export default App;
