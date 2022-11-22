import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  if (guess) {
    return guess.split("").map((letter, index) => {
      return (
        <span key={index} className="cell">
          {letter}
        </span>
      );
    });
  } else {
    return range(5).map((index) => {
      return <span key={index} className="cell"></span>;
    });
  }
}

export default Guess;
