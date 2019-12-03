import React from "react";

const JokeCard = props => {
  return (
    <div className="jokeCard">
      <p>Q: {props.joke}</p>
      <p>R: {props.punchline}</p>
    </div>
  );
};

export default JokeCard;
