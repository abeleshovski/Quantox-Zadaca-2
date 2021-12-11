import { chunk } from "lodash";
import React, { useState } from "react";

import { NumRender } from "./NumRender";

import { shuffleNumbers } from "../../utils/InitialStart";

import {
  changeItem,
  itemsDoMatch,
  itemsDoNotMatch,
} from "../../utils/ItemManipulation";

export const NumberGame = (props) => {
  const [score, setScore] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [gridSize] = useState(props.gridSize);
  const [numbers, setNumbers] = useState(
    chunk(shuffleNumbers(gridSize, props.theme), gridSize)
  );

  const [prevNumber, setPrevNumber] = useState(null);
  const [prevId, setPrevId] = useState(null);
  const [currNumber, setCurrNumber] = useState(null);
  const [currId, setCurrId] = useState(null);
  const [answer, setAnswer] = useState(true);

  const checkNumber = (number, id) => {
    number = parseInt(number);
    if (prevNumber == null) {
      setPrevNumber(number);
      setPrevId(id);
    } else if (currNumber == null) {
      setCurrNumber(number);
      setCurrId(id);
      checkIfNumbersMatch(number);
    }
  };

  const [answerClass, setAnswerClass] = useState(true);

  const checkIfNumbersMatch = (number) => {
    if (prevNumber === number) {
      itemsDoMatch(setPrevNumber, setCurrNumber, setPrevId, setCurrId);
      if (score === 0) {
        setScore(12);
      } else {
        setScore(score * multiplier);
      }
      setMultiplier(multiplier + 1);
      changeNum(number);
    } else {
      itemsDoNotMatch(
        setPrevNumber,
        setCurrNumber,
        setAnswer,
        setPrevId,
        setCurrId,
        setAnswerClass
      );
      setMultiplier(2);
    }
  };

  const changeNum = (number) => {
    changeItem(numbers, number, setNumbers, props.isStarted, score);
  };

  return (
    <div id="game">
      <div id="header">
        <h1 id="memoryHeader">memory</h1>
        {!answer && (
          <h1 className={`wrongAnswer ${answerClass}Answer`}>Wrong answer!</h1>
        )}

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
                    {number.matched ? (
                      <button className="completed">{number.value}</button>
                    ) : (
                      <NumRender
                        prevNumber={prevNumber}
                        number={number.value}
                        checkNumber={checkNumber}
                        id={number.id}
                        prevId={prevId}
                        currNumber={currNumber}
                        currId={currId}
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
