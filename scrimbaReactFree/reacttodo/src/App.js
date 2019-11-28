import React from "react";
import TodoItem from "./components/TodoItem";
import AppHeader from "./components/AppHeader";
import BackgroundImage from "./components/BackgroundImage";

const App = () => {
  return (
    <div>
      <BackgroundImage />
      <AppHeader />
      <div className="todoList">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default App;
