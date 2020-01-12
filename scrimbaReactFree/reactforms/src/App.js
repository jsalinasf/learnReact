import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
        <form>
          <label for="firstName">First Name: </label>
          <input
            name="firstName"
            id="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          ></input>
          <br />
          <label for="lastName">Last Name: </label>
          <input
            name="lastName"
            id="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          ></input>
        </form>
      </div>
    );
  }
}

export default App;
