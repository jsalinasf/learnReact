import React, { Component } from "react";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      dietaryRestrictions: {
        isKosher: false,
        isVegan: false,
        isLactoseFree: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // Elements that work with values can be updated with this.setState({[name]: value})
  // That's why handleChange works for input text, select and radio
  // But since checbox works with checked, I need to extend handleChange to use the ternary operator
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState(prevState => {
          return {
            dietaryRestrictions: {
              ...prevState.dietaryRestrictions,
              [name]: checked
            }
          };
        })
      : this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    alert(
      `${document.getElementById("firstName").value} your info has been saved`
    );
  }

  render() {
    return (
      <div>
        <h1>Travel Form</h1>
        <div>Test</div>
      </div>
    );
  }
}

export default FormContainer;