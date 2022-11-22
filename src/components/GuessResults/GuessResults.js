import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        return (
          <p key={index} className="guess">
            <Guess guess={guesses[index]} />
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
