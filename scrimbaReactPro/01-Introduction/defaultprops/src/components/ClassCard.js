import React, { Component } from "react";

class ClassCard extends Component {
  static defaultProps = {
    backgroundColor: "dodgerblue",
    width: 75,
    height: 75
  };

  render() {
    const styles = {
      backgroundColor: this.props.backgroundColor,
      width: this.props.width,
      height: this.props.height
    };
    return <div className="card" style={styles}></div>;
  }
}

export default ClassCard;
