import React from "react";

// Check how to aplly inline style
// using ternary operator or
// using && operator

const JokeCard = props => {
  return (
    <div
      className="jokeCard"
      style={{ background: !props.joke && "linear-gradient(#ffffff, crimson)" }}
    >
      <p style={{ display: props.joke ? "block" : "none" }}>
        Question: {props.joke}
      </p>
      <p>Answer: {props.punchLine}</p>
    </div>
  );
};

export default JokeCard;
