import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickSub = this.handleClickSub.bind(this);
  }

  handleClickAdd() {
    // this.setState must return an object
    // prevState is the state of the component before the event
    // State can not be modified directly
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleClickSub() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  render() {
    return (
      <div className="justCenter">
        <button onClick={this.handleClickAdd}>Add 1</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClickSub}>Subs 1</button>
      </div>
    );
  }
}

export default App;
