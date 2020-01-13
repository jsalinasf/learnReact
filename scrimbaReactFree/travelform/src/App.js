import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      destiny: "",
      kosher: false,
      vegetarian: false,
      lactoseFree: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  handleClick(event) {
    alert("uploaded");
  }

  render() {
    return (
      <div>
        <h1>Travel Form</h1>
        <div>
          <h2>Passenger's personal data</h2>
          <p>Please complete the following form</p>
          <form onSubmit={this.handleClick}>
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
            <br />
            <fieldset>
              <legend>Dietary Restrictions</legend>
              <p>Please mark all that apply:</p>
              <label className="label" htmlFor="kosher">
                Kosher
              </label>
              <input
                type="checkbox"
                id="kosher"
                name="kosher"
                value={this.state.kosher}
                onChange={this.handleChange}
              />
              <br />
              <label className="label" htmlFor="vegetarian">
                Vegetarian
              </label>
              <input
                type="checkbox"
                id="vegetarian"
                name="vegetarian"
                value={this.state.vegetarian}
                onChange={this.handleChange}
              />
              <br />
              <label className="label" htmlFor="lactoseFree">
                Lactose Free
              </label>
              <input
                type="checkbox"
                id="lactoseFree"
                name="lactoseFree"
                value={this.state.lactoseFree}
                onChange={this.handleChange}
              />
            </fieldset>
            <br />
            <button>Submit</button>
          </form>
        </div>
        <hr />
        <div>
          <h2>Entered Information</h2>
          <p>Name: {this.state.firstName}</p>
          <p>Last Name: {this.state.lastName}</p>
          <p>Age: {this.state.age}</p>
          <p>Your Destiny: {this.state.destiny}</p>
          <div>
            <h3>Dietary Restrictions:</h3>
            <p>Kosher: {this.state.kosher ? "Yes" : "No"}</p>
            <p>Vegetarian: {this.state.vegetarian ? "Yes" : "No"}</p>
            <p>Lactose Free: {this.state.lactoseFree ? "Yes" : "No"}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
