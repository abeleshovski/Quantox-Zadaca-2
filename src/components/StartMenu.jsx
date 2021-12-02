import React, { useState } from "react";
import "../style/main.css";

export const StartMenu = (props) => {
  const [theme, setTheme] = useState("numbers");
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);
  const [gridSize, setGridSize] = useState(4);

  const startGame = () => {
    props.started(true);
    props.icons(theme);
    props.players(numberOfPlayers);
    props.grid(gridSize);
    alert("Have Fun! :D");
    console.log(theme, numberOfPlayers, gridSize);
  };

  return (
    <div className="startMenu">
      <h1 id="title">memory</h1>
      <div className="startMenuOptions">
        <div className="selectTheme">
          <h3 className="selectSettings" id="themeSelect">
            Select theme
          </h3>
          {theme === "numbers" ? (
            <>
              <button
                className="selected"
                onClick={() => {
                  setTheme("numbers");
                }}
              >
                Numbers
              </button>
              <button className="notSelected" onClick={() => setTheme("icons")}>
                Icons
              </button>
            </>
          ) : (
            <>
              <button
                className="notSelected"
                onClick={() => {
                  setTheme("numbers");
                }}
              >
                Numbers
              </button>
              <button className={`selected`} onClick={() => setTheme("icons")}>
                Icons
              </button>
            </>
          )}
        </div>
        <div className="gridSize">
          <h3 className="selectSettings">Grid size</h3>
          {gridSize === 4 ? (
            <>
              <button className="selected" onClick={() => setGridSize(4)}>
                4x4
              </button>
              <button onClick={() => setGridSize(6)}>6x6</button>
            </>
          ) : (
            <>
              <button onClick={() => setGridSize(4)}>4x4</button>
              <button className="selected" onClick={() => setGridSize(6)}>
                6x6
              </button>
            </>
          )}
        </div>
        <button onClick={() => startGame()}>Start Game</button>
      </div>
    </div>
  );
};

export let isGameStarted = false;
