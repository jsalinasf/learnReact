import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import AppHeader from "./components/AppHeader";
import BackgroundImage from "./components/BackgroundImage";
import todosData from "./utils/todosData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todosArr: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    console.log("Changed", id);
    // this.setState(prevState => {
    // })
  }

  render() {
    const todoItems = this.state.todosArr.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return (
      <div>
        <BackgroundImage />
        <AppHeader />
        <div className="todoList">{todoItems}</div>
      </div>
    );
  }
}

export default App;
