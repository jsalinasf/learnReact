import React, { Component } from "react";

function FormComponent(props) {
  <div>
    <h1>Travel Form</h1>
    <div>
      <h2>Passenger's personal data</h2>
      <p>Please complete the following form</p>
      <form onSubmit={this.handleClick}>
        <label className="label" htmlFor="firstName">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={this.state.firstName}
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
          value={this.state.lastName}
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
          value={this.state.age}
          onChange={this.handleChange}
        />
        <br />
        <fieldset>
          <legend>Gender: </legend>
          <label className="label" htmlFor="genderMale">
            Male
          </label>
          <input
            type="radio"
            id="genderMale"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />
          <br />
          <label className="label" htmlFor="genderFemale">
            Female
          </label>
          <input
            type="radio"
            id="genderMale"
            name="gender"
            checked={this.state.gender === "female"}
            value="female"
            onChange={this.handleChange}
          />
        </fieldset>
        <br />
        <label className="label" htmlFor="destination">
          Destination:
        </label>
        <select
          id="destination"
          name="destination"
          onChange={this.handleChange}
          value={this.state.destination}
        >
          <option value="">--Please choose a destination--</option>
          <option value="argentina">Argentina</option>
          <option value="brazil">Brazil</option>
          <option value="ecuador">Ecuador</option>
          <option value="france">France</option>
          <option value="usa">Usa</option>
        </select>
        <br />
        <fieldset>
          <legend>Dietary Restrictions: </legend>
          <p>Please mark all that apply:</p>
          <label className="label" htmlFor="isKosher">
            Kosher
          </label>
          <input
            id="isKosher"
            type="checkbox"
            name="isKosher"
            onChange={this.handleChange}
            checked={this.state.dietaryRestrictions.isKosher}
          />
          <br />
          <label className="label" htmlFor="isVegan">
            Vegetarian
          </label>
          <input
            id="isVegan"
            type="checkbox"
            name="isVegan"
            checked={this.state.dietaryRestrictions.isVegan}
            onChange={this.handleChange}
          />
          <br />
          <label className="label" htmlFor="isLactoseFree">
            Lactose Free
          </label>
          <input
            id="isLactoseFree"
            type="checkbox"
            name="isLactoseFree"
            checked={this.state.dietaryRestrictions.isLactoseFree}
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
      <p>Gender: {this.state.gender}</p>
      <p>Your destination: {this.state.destination}</p>
      <div>
        <h3>Dietary Restrictions:</h3>
        <p>Kosher: {this.state.dietaryRestrictions.isKosher ? "Yes" : "No"}</p>
        <p>
          Vegetarian: {this.state.dietaryRestrictions.isVegan ? "Yes" : "No"}
        </p>
        <p>
          Lactose Free:{" "}
          {this.state.dietaryRestrictions.isLactoseFree ? "Yes" : "No"}
        </p>
      </div>
    </div>
  </div>;
}

export default FormComponent;
