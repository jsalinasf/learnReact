import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1500);
  }

  render() {
    return (
      <div className="justCenter">
        <Header />
        {this.state.isLoading ? <h1>Loading...</h1> : <MainContent />}
        <Footer />
      </div>
    );
  }
}

export default App;
