import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import AppHeader from "./components/AppHeader";
import BackgroundImage from "./components/BackgroundImage";
import todosData from "./utils/todosData";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <BackgroundImage />
        <AppHeader />
      </div>
    );
  }
}

// const App = () => {
//   const todosArr = todosData.map(item => (
//     <TodoItem key={item.id} item={item} />
//   ));

//   return (
//     <div>
//       <BackgroundImage />
//       <AppHeader />
//       <div className="todoList">{todosArr}</div>
//     </div>
//   );
// };

export default App;
