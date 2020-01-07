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
      character: {}
    };
    this.saveCharacter = this.saveCharacter.bind(this);
  }

  saveCharacter(data) {
    this.setState({
      character: data
    });
  }

  // Lifecycle application
  componentDidMount() {
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => {
        this.saveCharacter(data);
      });
  }

  render() {
    return (
      <div>
        <h1>Application LifeCycle</h1>
        <div>{this.state.character.name}</div>
      </div>
    );
  }
}

export default App;
