// Review FORMIK
// It is a library for managing forms in react

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      userBio: "",
      isSuscribed: false,
      userGender: "",
      favoriteColor: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ isSuscribed: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>
          Welcome {this.state.firstName} {this.state.lastName}!
        </h1>
        <p>
          Are you suscribed to our newsletter:{" "}
          {this.state.isSuscribed ? "Yes" : "No"}
        </p>
        <p>Your bio says: {this.state.userBio}</p>
        <p>Your gender is: {this.state.userGender}</p>
        <p>Your favorite color is: {this.state.favoriteColor}</p>
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
          <label className="label" htmlFor="isSuscribed">
            Receive Newsletter:{" "}
          </label>
          <input
            type="checkbox"
            name="isSuscribed"
            id="isSuscribed"
            checked={this.state.isSuscribed}
            onChange={this.handleChange}
          />
          <br />
          <label className="label" htmlFor="userBio">
            User biography:{" "}
          </label>
          <textarea
            name="userBio"
            id="userBio"
            value={this.state.userBio}
            onChange={this.handleChange}
          />
          <br />
          <label className="label" htmlFor="userGenderMale">
            Male:
          </label>
          <input
            id="userGenderMale"
            type="radio"
            name="userGender"
            value="male"
            checked={this.state.userGender === "male"}
            onChange={this.handleChange}
          />
          <br />
          <label className="label" htmlFor="userGenderFemale">
            Female
          </label>
          <input
            id="userGenderFemale"
            type="radio"
            name="userGender"
            value="female"
            checked={this.state.userGender === "female"}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default App;
