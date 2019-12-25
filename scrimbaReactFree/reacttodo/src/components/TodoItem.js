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
    this.state = {
      pendingStyle: {
        textDecoration: "none",
        color: "#333333"
      },
      completedStyle: {
        textDecoration: "line-through",
        color: "#cecece"
      }
    };
  }

  render() {
    const itemLabelStyle = this.props.item.completed
      ? this.state.completedStyle
      : this.state.pendingStyle;

    return (
      <div className="todoItem">
        <input
          type="checkbox"
          name={this.props.item.id}
          id={this.props.item.id}
          checked={this.props.item.completed}
          onChange={() => this.props.handleChange(this.props.item.id)}
        ></input>
        <label style={itemLabelStyle} htmlFor={this.props.item.id}>
          {this.props.item.text}
        </label>
      </div>
    );
  }
}

export default TodoItem;
