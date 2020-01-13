import React from "react";

function FormComponent(props) {
  return (
    <div>
      <div>
        <h2>Passenger's personal data</h2>
        <p>Please complete the following form</p>
        <form onSubmit={props.handleClick}>
          <label className="label" htmlFor="firstName">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={props.firstName}
            onChange={props.handleChange}
          />
          <br />
          <label className="label" htmlFor="lastName">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={props.lastName}
            onChange={props.handleChange}
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
            value={props.age}
            onChange={props.handleChange}
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
              checked={props.gender === "male"}
              onChange={props.handleChange}
            />
            <br />
            <label className="label" htmlFor="genderFemale">
              Female
            </label>
            <input
              type="radio"
              id="genderMale"
              name="gender"
              checked={props.gender === "female"}
              value="female"
              onChange={props.handleChange}
            />
          </fieldset>
          <br />
          <label className="label" htmlFor="destination">
            Destination:
          </label>
          <select
            id="destination"
            name="destination"
            onChange={props.handleChange}
            value={props.destination}
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
              onChange={props.handleChange}
              checked={props.dietaryRestrictions.isKosher}
            />
            <br />
            <label className="label" htmlFor="isVegan">
              Vegetarian
            </label>
            <input
              id="isVegan"
              type="checkbox"
              name="isVegan"
              checked={props.dietaryRestrictions.isVegan}
              onChange={props.handleChange}
            />
            <br />
            <label className="label" htmlFor="isLactoseFree">
              Lactose Free
            </label>
            <input
              id="isLactoseFree"
              type="checkbox"
              name="isLactoseFree"
              checked={props.dietaryRestrictions.isLactoseFree}
              onChange={props.handleChange}
            />
          </fieldset>
          <br />
          <button>Submit</button>
        </form>
      </div>
      <hr />
      <div>
        <h2>Entered Information</h2>
        <p>Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Age: {props.age}</p>
        <p>Gender: {props.gender}</p>
        <p>Your destination: {props.destination}</p>
        <div>
          <h3>Dietary Restrictions:</h3>
          <p>Kosher: {props.dietaryRestrictions.isKosher ? "Yes" : "No"}</p>
          <p>Vegetarian: {props.dietaryRestrictions.isVegan ? "Yes" : "No"}</p>
          <p>
            Lactose Free:{" "}
            {props.dietaryRestrictions.isLactoseFree ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FormComponent;
