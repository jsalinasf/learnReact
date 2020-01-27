import React from "react";
import PropTypes from "prop-types";

const Card = props => {
  const styles = {
    backgroundColor: props.backgroundColor,
    height: props.height,
    width: props.width
  };
  return <div className={"card"} style={styles}></div>;
};

// Please watch the broswer console window to see the alerts
// Remember, PropTypes only works on Development mode
Card.propTypes = {
  backgroundColor: PropTypes.oneOf(["red", "blue"]),
  width: PropTypes.number.isRequired,
  height: PropTypes.number
};

// Card.defaultProps = {
//   backgroundColor: "crimson",
//   width: 50,
//   height: 50
// };

export default Card;
