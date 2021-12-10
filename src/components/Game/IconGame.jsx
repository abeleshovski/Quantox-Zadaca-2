import { chunk } from "lodash";
import React, { useState } from "react";
import {
  changeItem,
  itemsDoMatch,
  itemsDoNotMatch,
} from "../../utils/ItemManipulation";
import { shuffleNumbers } from "../../utils/InitialStart";
import { IconRender } from "./IconRender";

export const IconGame = (props) => {
  const [icons, setIcons] = useState(
    chunk(shuffleNumbers(props.gridSize, props.theme), props.gridSize)
  );

  const [prevIcon, setPrevIcon] = useState(null);
  const [prevId, setPrevId] = useState(null);
  const [currIcon, setCurrIcon] = useState(null);
  const [currId, setCurrId] = useState(null);

  const checkIcon = (icon, id) => {
    if (prevIcon == null) {
      setPrevIcon(icon);
      setPrevId(id);
    } else {
      setCurrIcon(icon);
      setCurrId(id);
      checkIfIconsMatch(icon);
    }
  };

  const [score, setScore] = useState(0);
  const [multiplier, setMultiplier] = useState(2);
  const [answer, setAnswer] = useState(true);
  const [answerClass, setAnswerClass] = useState("true");

  const checkIfIconsMatch = (icon) => {
    if (prevIcon === icon) {
      itemsDoMatch(setPrevIcon, setCurrIcon, setPrevId, setCurrId);
      if (score === 0) {
        setScore(12);
      } else {
        setScore(score * multiplier);
      }
      setMultiplier(multiplier + 1);
      changeItem(icons, icon, setIcons, props.isStarted, score);
    } else {
      itemsDoNotMatch(
        setPrevIcon,
        setCurrIcon,
        setAnswer,
        setPrevId,
        setCurrId,
        setAnswerClass
      );
      setMultiplier(2);
    }
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
          {icons.map((arr, i) => (
            <tr key={i}>
              {arr.map((icon) => {
                return (
                  <td key={icon.id}>
                    {icon.matched ? (
                      <img
                        className="completed"
                        src={icon.value}
                        alt={icon.value}
                      />
                    ) : (
                      <IconRender
                        prevIcon={prevIcon}
                        prevId={prevId}
                        currIcon={currIcon}
                        currId={currId}
                        icon={icon.value}
                        id={icon.id}
                        checkIcon={checkIcon}
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
