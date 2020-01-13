import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      destiny: ""
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
        <h1>Travel Form</h1>
        <div>
          <h2>Passenger's personal data</h2>
          <p>Please complete the following form</p>
          <form>
            <label className="label" htmlFor="firstName">
              First Name:{" "}
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={this.handleChange}
            />
            <br />
            <label className="label" htmlFor="lastName">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={this.handleChange}
            />
            <br />
            <label className="label" htmlFor="age">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              min="1"
              max="150"
              onChange={this.handleChange}
            />
            <br />
            <label className="label" htmlFor="destiny">
              Destiny:
            </label>
            <select id="destiny" name="destiny" onChange={this.handleChange}>
              <option value="Argentina">Argentina</option>
              <option value="Brazil">Brazil</option>
              <option value="Ecuador">Ecuador</option>
              <option value="France">France</option>
              <option value="Usa">Usa</option>
            </select>
          </form>
        </div>
        <hr />
        <div>
          <h2>Entered Information</h2>
          <p>Name: {this.state.firstName}</p>
          <p>Last Name: {this.state.lastName}</p>
          <p>Age: {this.state.age}</p>
          <p>Your Destiny: {this.state.destiny}</p>
        </div>
      </div>
    );
  }
}

export default App;
