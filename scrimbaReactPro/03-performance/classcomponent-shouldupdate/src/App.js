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
    console.log('---------------------------------------------------------');
    return (
      <div>
        <button onClick={this.incrementCount}>
          Current Count: {this.state.count}
        </button>
        <h1>App Component</h1>
        {/* When App first loads, both of GrandParents components should load */}
        {/* Then, when state changes, only */}
        {/* first GrandParent and its tree will re render */}
        {/* Open Browser console*/}
        <GrandParent count={this.state.count} />
        <GrandParent />
      </div>
    );
  }
}

export default App;
