import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import AppHeader from "./components/AppHeader";
import BackgroundImage from "./components/BackgroundImage";
import todosData from "./utils/todosData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    console.log(id);
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
      // Check how prevStateArray is different from updatedTodos
      // Hence we are not modifying the original state
      // console.log(prevState.todos);
      // console.log(updatedTodos);
      return { todos: updatedTodos };
    });
  }

  render() {
    const todoItems = this.state.todos.map(item => (
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
