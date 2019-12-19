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
  }

  loadData = function() {
    const todoItems = this.todoArr.map()

  render() {
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
