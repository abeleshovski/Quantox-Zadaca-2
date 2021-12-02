import React, { useState } from "react";

export const Game = (props) => {
  const [score, setScore] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [isActive, setIsActive] = useState("inactive");
  const createNumbers = (numbers) => {
    for (let i = 0; i < (props.gridSize * props.gridSize) / 2; i++) {
      let randomNumber = parseInt(Math.random() * 100);
      if (randomNumber === 0) {
        randomNumber = 1;
      }
      //if the number exists in numbers array, then create a new random number
      if (numbers.includes(randomNumber)) {
        randomNumber = parseInt(Math.random() * 100);
        if (randomNumber === 0) {
          randomNumber = 1;
        }
      }
      numbers.push(randomNumber);
    }
  };
  const shuffleNumbers = () => {
    let numbers = [];
    createNumbers(numbers);

    const shuffledNumbers = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .map((number) => number);
    return shuffledNumbers;
  };

  //grid from shuffledNumbers
  const createGrid = () => {
    let shuffledNumbers = shuffleNumbers();
    let grid = [];
    for (let i = 0; i < props.gridSize; i++) {
      let row = [];
      for (let j = 0; j < props.gridSize; j++) {
        row.push(shuffledNumbers.pop());
      }
      grid.push(row);
    }
    return grid;
  };

  const [numbers, setNumbers] = useState(createGrid());

  const [prevNumber, setPrevNumber] = useState(0);

  const checkNumber = (number) => {
    number = parseInt(number);
    if (prevNumber === 0) {
      setPrevNumber(number);
      console.log(`New number set ${number}`);
    } else if (prevNumber === number) {
      setPrevNumber(0);
      if (score === 0) {
        setScore(12);
      } else {
        setScore(score * multiplier);
      }
      setMultiplier(multiplier + 1);
      console.log(`${number} matched!`);
      changeNum(number);
    } else {
      setPrevNumber(0);
      setMultiplier(1);
      console.log("Number not matched");
    }
  };

  //change number in grid to a string
  const changeNum = (number) => {
    let newGrid = [...numbers];
    newGrid.forEach((row) => {
      row.forEach((num) => {
        if (num === number) {
          num = `${number}`;
        }
      });
    });
    setNumbers(newGrid);
  };

  return (
    <div id="game">
      <div id="header">
        <h1>memory</h1>
        <button id="newGame" onClick={() => props.isStarted(false)}>
          New Game
        </button>
      </div>
      <table id="gameBoard">
        <tbody>
          {numbers.map((arr, i) => (
            <tr key={i}>
              {arr.map((number, id) => (
                <td key={id}>
                  {console.log(number)}
                  {typeof number == "string" ? (
                    <button className="completed">{number}</button>
                  ) : (
                    <button
                      className={`notCompleted ${isActive}`}
                      onClick={() => checkNumber(number)}
                    >
                      {number}
                    </button>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>Score: {score}</div>
    </div>
  );
};
