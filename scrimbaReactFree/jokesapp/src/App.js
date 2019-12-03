import React from "react";
import JokeCard from "./components/JokeCard";

const App = () => {
  return (
    <div>
      <JokeCard
        joke={"What is the advantage of living in Switzerland?"}
        punchline={"Well, the flag is a big plus!"}
      />
      <JokeCard
        joke={"Why did Peter Pan fail as a stand-up comedian?"}
        punchline={"Because his jokes Neverland"}
      />
      <JokeCard
        joke={"What do you call an alligator wearing a vest?"}
        punchline={"An investigator"}
      />
      <JokeCard
        joke={"What did the termite say when he entered the bar?"}
        punchline={"Is the bar tender here?"}
      />
      <JokeCard
        punchline={
          "It’s hard to explain puns to kleptomaniacs because they always take things literally."
        }
      />
    </div>
  );
};

export default App;
