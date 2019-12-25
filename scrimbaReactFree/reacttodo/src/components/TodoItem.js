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
      props: props
    };
  }

  render() {
    return (
      <div className="todoItem">
        <input
          type="checkbox"
          name={this.state.props.item.id}
          id={this.state.props.item.id}
          checked={this.state.props.item.completed}
          onChange={() =>
            this.state.props.handleChange(this.state.props.item.id)
          }
        ></input>
        <label htmlFor={this.state.props.item.id}>
          {this.state.props.item.text}
        </label>
      </div>
    );
  }
}

export default TodoItem;
