import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handlesGuess(guess) {
    console.log(guess);

    setGuesses([...guesses, guess]);
  }

  function gameOver() {
    return guesses.length === 6 || guesses.includes(answer);
  }

  function banner() {
    if (guesses.includes(answer)) {
      return (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{guesses.length} guesses</strong>.
          </p>
        </div>
      );
    } else if (
      guesses.length === NUM_OF_GUESSES_ALLOWED &&
      !guesses.includes(answer)
    ) {
      return (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      );
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        minLength={5}
        maxLength={5}
        handlesGuess={handlesGuess}
        disabled={gameOver()}
      />
      {gameOver() && banner()}
    </>
  );
}

export default Game;
