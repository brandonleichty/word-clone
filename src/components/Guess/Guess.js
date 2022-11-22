import React from "react";
import { range } from "../../utils";

function Guess({ guessValue }) {
  return range(5).map((index) => {
    return (
      <span
        key={index}
        className={`cell ${
          guessValue?.[index] ? guessValue[index].status : undefined
        }`}
      >
        {guessValue?.[index] ? guessValue[index].letter : undefined}
      </span>
    );
  });
}

export default Guess;
