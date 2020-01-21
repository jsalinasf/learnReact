import React from "react";

const Card = props => {
  const styles = {
    backgroundColor: props.backgroundColor,
    height: props.height,
    width: props.width
  };
  return <div className={"card"} style={styles}></div>;
};

Card.defaultProps = {
  backgroundColor: "crimson",
  width: 350,
  height: 350
};

export default Card;
