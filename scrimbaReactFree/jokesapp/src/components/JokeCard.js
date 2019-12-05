import React from "react";

// Check how to apply inline style using ternary operator or using && operator

const JokeCard = props => {
  return (
    <div
      className="jokeCard"
      style={{
        background: !props.question && "linear-gradient(#ffffff, crimson)"
      }}
    >
      <p style={{ display: props.question ? "block" : "none" }}>
        Question: {props.question}
      </p>
      <p>Answer: {props.punchLine}</p>
    </div>
  );
};

export default JokeCard;
