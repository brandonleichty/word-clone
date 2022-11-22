import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";
import { checkGuess } from "../../game-helpers";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        return (
          <p key={index} className="guess">
            <Guess guessValue={checkGuess(guesses[index], answer)} />
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
