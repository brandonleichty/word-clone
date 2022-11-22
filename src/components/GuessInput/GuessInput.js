import React from "react";

function GuessInput({ maxLength, minLength, handlesGuess, disabled }) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handlesGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        disabled={disabled}
        maxLength={maxLength}
        minLength={minLength}
      />
    </form>
  );
}

export default GuessInput;
