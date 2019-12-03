import React from "react";
import JokeCard from "./components/JokeCard";

const App = () => {
  return (
    <div>
      <JokeCard
        joke={"What is the advantage of living in Switzerland?"}
        punchLine={"Well, the flag is a big plus!"}
      />
      <JokeCard
        joke={"Why did Peter Pan fail as a stand-up comedian?"}
        punchLine={"Because his jokes Neverland"}
      />
      <JokeCard
        joke={"What do you call an alligator wearing a vest?"}
        punchLine={"An investigator"}
      />
      <JokeCard
        joke={"What did the termite say when he entered the bar?"}
        punchLine={"Is the bar tender here?"}
      />
      <JokeCard
        punchLine={
          "It’s hard to explain puns to kleptomaniacs because they always take things literally."
        }
      />
    </div>
  );
};

export default App;
