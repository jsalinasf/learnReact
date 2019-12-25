import React, { Component } from "react";

// const TodoItem = props => {
//   return (
//     <div className="todoItem">
//       <input
//         type="checkbox"
//         name={props.item.id}
//         id={props.item.id}
//         // defaultChecked={props.item.completed}
//         checked={props.item.completed}
//         onChange={() => props.handleChange(props.item.id)}
//       ></input>
//       <label htmlFor={props.item.id}>{props.item.text}</label>
//     </div>
//   );
// };

// export default TodoItem;

class TodoItem extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="todoItem">
        <input
          type="checkbox"
          name={this.props.item.id}
          id={this.props.item.id}
          checked={this.props.item.completed}
          onChange={() => this.props.handleChange(this.props.item.id)}
        ></input>
        <label htmlFor={this.props.item.id}>{this.props.item.text}</label>
      </div>
    );
  }
}

export default TodoItem;
