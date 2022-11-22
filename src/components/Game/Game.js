import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput/GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function handlesGuess(guess) {
  console.log(guess);
}
function Game() {
  return <GuessInput handlesGuess={handlesGuess} minLength={5} maxLength={5} />;
}

export default Game;
