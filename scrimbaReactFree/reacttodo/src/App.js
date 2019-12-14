import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import AppHeader from "./components/AppHeader";
import BackgroundImage from "./components/BackgroundImage";
import todosData from "./utils/todosData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoArr: this.loadData()
    };
  }

  loadData = function() {
    this.todoArr = todosData.map(item => (
      <TodoItem key={item.id} item={item} />
    ));
    return this.todoArr;
  };

  render() {
    return (
      <div>
        <BackgroundImage />
        <AppHeader />
        <div className="todoList">{this.state.todoArr}</div>
      </div>
    );
  }
}

export default App;
