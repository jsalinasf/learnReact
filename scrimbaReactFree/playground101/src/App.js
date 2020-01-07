import React, { Component } from "react";

// FETCH - To get data from API
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch

//Star Wars API
// https://swapi.co/

// JavaScript Promises Overview
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {}
    };
  }

  // Lifecycle application
  componentDidMount() {
    this.setState({
      loading: true
    });
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          character: data,
          loading: false
        });
      });
  }

  render() {
    console.log(this.state.character);
    const textToDisplay = this.state.loading
      ? "Loading..."
      : this.state.character.name;
    return (
      <div>
        <h1>Fetching data from API</h1>
        <p>{textToDisplay}</p>
      </div>
    );
  }
}

export default App;
