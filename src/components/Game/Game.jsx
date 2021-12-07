import React, { useState } from "react";

import { NumRender } from "./NumRender";
import { createGridTemplate } from "./utils/functions";

export const Game = (props) => {
  const [score, setScore] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [gridSize] = useState(props.gridSize);
  const [numbers, setNumbers] = useState(createGridTemplate(gridSize));

  const [prevNumber, setPrevNumber] = useState(0);
  const [prevId, setPrevId] = useState(0);
  const [answer, setAnswer] = useState(true);

  const checkNumber = (number, id) => {
    number = parseInt(number);
    if (prevNumber === 0) {
      setPrevNumber(number);
      setPrevId(id);
    } else if (prevNumber === number) {
      setPrevNumber(0);
      setPrevId(0);
      if (score === 0) {
        setScore(12);
      } else {
        setScore(score * multiplier);
      }
      setMultiplier(multiplier + 1);

      changeNum(number);
    } else {
      setPrevNumber(0);
      setPrevId(0);
      setMultiplier(1);
      setAnswer(false);
    }
  };

  const changeNum = (number) => {
    let newGrid = [...numbers];
    for (let i = 0; i < props.gridSize; i++) {
      for (let j = 0; j < props.gridSize; j++) {
        if (newGrid[i][j].value === number) {
          console.log(newGrid[i][j].value);
          newGrid[i][j].value = `${number}`;
        }
      }
    }
    setNumbers(newGrid);
    let flag = false;
    for (let i = 0; i < props.gridSize; i++) {
      for (let j = 0; j < props.gridSize; j++) {
        if (typeof newGrid[i][j].value != "string") {
          flag = false;
        } else {
          flag = true;
        }
        if (!flag) {
          break;
        }
      }
      if (!flag) {
        break;
      }
    }
    if (flag) {
      alert(`You won! Your score is ${score}`);
      props.isStarted(false);
    }
  };

  return (
    <div id="game">
      <div id="header">
        <h1>memory</h1>
        {!answer && <h1 id="wrongAnswer">wrong answer</h1>}
        <button id="newGame" onClick={() => props.isStarted(false)}>
          New Game
        </button>
      </div>
      <table id="gameBoard">
        <tbody>
          {numbers.map((arr, i) => (
            <tr key={i}>
              {arr.map((number) => {
                return (
                  <td key={number.id}>
                    {typeof number.value == "string" ? (
                      <button className="completed">{number.value}</button>
                    ) : (
                      <NumRender
                        prevNumber={prevNumber}
                        number={number.value}
                        checkNumber={checkNumber}
                        id={number.id}
                        prevId={prevId}
                      />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div id="score">Score: {score}</div>
    </div>
  );
};
