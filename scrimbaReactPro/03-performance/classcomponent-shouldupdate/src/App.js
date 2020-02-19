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
        <button onClick={this.incrementCount}>{this.state.count}</button>
        <h1>App Component</h1>
        {/* first GrandParent and its tree will re render because state changed */}
        {/* Open Browser console */}
        <GrandParent count={this.state.count} />
        <GrandParent />
      </div>
    );
  }
}

export default App;
