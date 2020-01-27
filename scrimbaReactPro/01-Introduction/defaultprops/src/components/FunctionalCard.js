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

Card.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired
};

Card.defaultProps = {
  // backgroundColor: "crimson",
  // width: 50,
  // height: 50
};

export default Card;
