import { chunk } from "lodash";
import React, { useState } from "react";

import { RenderIncomplete } from "./RenderIncomplete";

import { shuffleItems } from "../../utils/InitialStart";

import {
  changeItem,
  itemsDoMatch,
  itemsDoNotMatch,
} from "../../utils/ItemManipulation";
import { Timer } from "./Timer";
import { RenderComplete } from "./RenderComplete";

export const Game = (props) => {
  const [score, setScore] = useState(0);
  const [gridSize] = useState(props.gridSize);
  const [items, setItems] = useState(
    chunk(shuffleItems(gridSize, props.theme), gridSize)
  );

  const [prevItem, setPrevItem] = useState(null);
  const [prevId, setPrevId] = useState(null);
  const [currItem, setCurrItem] = useState(null);
  const [currId, setCurrId] = useState(null);

  const checkItem = (item, id) => {
    if (prevItem == null) {
      setPrevItem(item);
      setPrevId(id);
    } else if (currItem == null) {
      setCurrItem(item);
      setCurrId(id);
      checkIfItemsMatch(item);
    }
  };

  const checkIfItemsMatch = (item) => {
    if (prevItem === item) {
      itemsDoMatch(resetStates);
      changeItem(items, item, setItems, props.isStarted, score);
    } else {
      itemsDoNotMatch(resetStates);
      setScore(score + 1);
    }
  };

  const resetStates = () => {
    setPrevItem(null);
    setPrevId(null);
    setCurrItem(null);
    setCurrId(null);
  };

  const resetGame = () => {
    setItems(chunk(shuffleItems(gridSize, props.theme), gridSize));
    resetStates();
  };

  return (
    <div id="game">
      <div id="header">
        <h1 id="memoryHeader">memory</h1>
        <div id="controlGame">
          <button id="restartGame" onClick={() => resetGame()}>
            Restart
          </button>
          <button id="newGame" onClick={() => props.isStarted(false)}>
            New Game
          </button>
        </div>
      </div>
      <table id="gameBoard">
        <tbody>
          {items.map((arr, i) => (
            <tr key={i}>
              {arr.map((item) => {
                return (
                  <td key={item.id}>
                    {item.matched ? (
                      <RenderComplete item={item} gridSize={gridSize} />
                    ) : (
                      <RenderIncomplete
                        prevItem={prevItem}
                        item={item.value}
                        checkItem={checkItem}
                        id={item.id}
                        prevId={prevId}
                        currItem={currItem}
                        currId={currId}
                        gridSize={gridSize}
                      />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div id="score">
        <Timer />
        <span className="stats">
          Moves: <span className="statistic"> {score}</span>
        </span>
      </div>
    </div>
  );
};
