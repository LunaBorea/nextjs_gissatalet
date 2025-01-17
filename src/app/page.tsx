"use client";

import { useState } from "react";

export default function Home() {
  const [guess, setGuess] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [wins, setWins] = useState(0);
  const [hint, setHint] = useState('Press the guess button to begin!');
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100) + 1);

  function randomNumberGen() {
    setRandomNum(Math.floor(Math.random() * 100) + 1);
  }

  const handleGuess = (e: any) => {
    if (guess === randomNum) {
      randomNumberGen()
      setWins(wins + 1)
      setHint(`'Correct! You guessed the number! It took you ${attempts + 1} attempt(s). A new number has been generated'`);
      setAttempts(0)
    } else if (guess > randomNum) {
      setHint('Your guess was too high!')
      setAttempts(attempts + 1)
    } else if (guess < randomNum) {
      setHint('Your guess was too low!')
      setAttempts(attempts + 1)
    }
  }

  /* ChatGPT */
  const handleKeyDown = (e: any) => {
    const allowedKeys = ["ArrowUp", "ArrowDown", "Tab", "Backspace", "Delete"];
    if (!allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  const handleChange = (e: any) => {
    setGuess(Number(e.target.value));
  };
  /* ChatGPT */

  return (
    <div>
      <h1>Guess the Number</h1>
      <h2>I'm thinking of a number between 0 and 100</h2>
      <h2>Input your guess then press the 'Guess' button!</h2>
      <div id="container">
        <button type="button" id="guessBtn" onClick={handleGuess}>Guess</button>
        <input 
          type="number"
          name="guess"
          id="guessInput"
          value={guess}
          min="0"
          max="100"
          step="1"
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
      </div>
      <h2 id="hint">Hint: {hint}</h2>
      <h2 id="attempts">Number of attempts: {attempts}</h2>
      <h2 id="wins">Number of wins: {wins}</h2>
    </div>
  );
}
