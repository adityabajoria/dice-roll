import "./App.css";
import React, { useState } from 'react';
import Dice from "./Dice.js";

export default function App() {
  const [diceOne, setDiceOne] = useState(0);
  const [diceTwo, setDiceTwo] = useState(0);

  return (
    <div className="App">
      <h1>Welcome to the Dice Rolling Game!</h1>
      <p>Roll the dice and generate a random number between 1-6.</p>
      <Dice result={diceOne} setter={setDiceOne}/>
      <Dice result={diceTwo} setter={setDiceTwo} />
      <h2>Sum of Dices</h2>
      <p>{diceOne + diceTwo}</p>
    </div>
  );
}
