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
          <label className="label" htmlFor="firstName">
            First Name:
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          ></input>
          <br />
          <label className="label" htmlFor="lastName">
            Last Name:
          </label>
          <input
            type="text"
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
