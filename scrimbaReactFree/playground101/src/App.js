import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isUserLoggedIn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isUserLoggedIn: !prevState.isUserLoggedIn
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Conditional Rendering and State React Practice</h1>
        <div>
          User's state: {this.state.isUserLoggedIn ? "logged in" : "logged out"}
        </div>
        <br />
        <button onClick={this.handleClick}>
          {this.state.isUserLoggedIn ? "Log Out" : "Log In"}
        </button>
      </div>
    );
  }
}

export default App;
