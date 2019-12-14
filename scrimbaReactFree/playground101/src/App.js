import React, { Component } from "react";

// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true
    };
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    if (isLoggedIn) {
      return (
        <div>
          <h1>You are currently logged in</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>You are currently logged out</h1>
        </div>
      );
    }
  }
}

// function App() {
//     return (
//         <div>
//             <h1>You are currently logged (in/out)</h1>
//         </div>
//     )
// }

export default App;
