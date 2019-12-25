import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isUserLoggedIn: false
    };
  }
  render() {
    return (
      <div>
        <div>
          User's state: {this.state.isUserLoggedIn ? "logged in" : "logged out"}
        </div>
        <button>{this.state.isUserLoggedIn ? "Log Out" : "Log In"}</button>
      </div>
    );
  }
}

export default App;
