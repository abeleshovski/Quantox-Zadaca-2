import React, { useState } from "react";

import { NumRender } from "./NumRender";

import { createGridTemplate } from "./utils/InitialStart";

import {
  numbersDoMatch,
  numbersDoNotMatch,
  changeNumber,
} from "./utils/NumberManipulation";

export const Game = (props) => {
  const [score, setScore] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [gridSize] = useState(props.gridSize);
  const [numbers, setNumbers] = useState(createGridTemplate(gridSize));

  const [prevNumber, setPrevNumber] = useState(0);
  const [prevId, setPrevId] = useState(0);
  const [currNumber, setCurrNumber] = useState(0);
  const [currId, setCurrId] = useState(0);
  const [answer, setAnswer] = useState(true);

  const checkNumber = (number, id) => {
    number = parseInt(number);
    if (prevNumber === 0) {
      setPrevNumber(number);
      setPrevId(id);
    } else if (currNumber === 0) {
      setCurrNumber(number);
      setCurrId(id);
      checkIfNumbersMatch(number);
    }
  };

  const [answerClass, setAnswerClass] = useState("true");

  const checkIfNumbersMatch = (number) => {
    if (prevNumber === number) {
      numbersDoMatch(
        setPrevNumber,
        setCurrNumber,
        score,
        multiplier,
        setAnswer,
        setPrevId,
        setCurrId,
        setScore,
        setMultiplier
      );
      changeNum(number);
    } else {
      numbersDoNotMatch(
        setPrevNumber,
        setCurrNumber,
        setAnswer,
        setPrevId,
        setCurrId,
        setMultiplier,
        setAnswerClass
      );
    }
  };

  const changeNum = (number) => {
    changeNumber(
      numbers,
      number,
      props.gridSize,
      setNumbers,
      props.isStarted,
      score
    );
  };

  return (
    <div id="game">
      <div id="header">
        <h1>memory</h1>
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
                    {typeof number.value == "string" ? (
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
