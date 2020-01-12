import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      userBio: "Update me!"
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
          {this.state.firstName} {this.state.lastName} {this.state.userBio}
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
          />
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
          />
          <br />
          <label className="label">User biography: </label>
          <textarea
            name="userBio"
            id="userBio"
            value={this.state.userBio}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default App;
