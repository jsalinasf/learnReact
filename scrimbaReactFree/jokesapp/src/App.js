import React from "react";
import JokeCard from "./components/JokeCard";
import jokesData from "./utils/jokesData";

const App = () => {
  const jokesComponents = jokesData.map(joke => (
    <JokeCard
      key={joke.id}
      question={joke.question}
      punchLine={joke.punchLine}
    />
  ));

  return <div>{jokesComponents}</div>;
};

export default App;
