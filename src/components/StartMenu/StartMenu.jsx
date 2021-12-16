import React, { useState } from "react";

export const StartMenu = (props) => {
  const [theme, setTheme] = useState("numbers");
  const [gridSize, setGridSize] = useState(4);

  const startGame = () => {
    props.started(true);
    props.icons(theme);

    props.grid(gridSize);
    alert("Have Fun! :D");
    console.log(theme, gridSize);
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
            <div className="select">
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
            </div>
          ) : (
            <div className="select">
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
            </div>
          )}
        </div>
        <div className="gridSize">
          <h3 className="selectSettings">Grid size</h3>
          {gridSize === 4 ? (
            <div className="select">
              <button className="selected" onClick={() => setGridSize(4)}>
                4x4
              </button>
              <button onClick={() => setGridSize(6)}>6x6</button>
            </div>
          ) : (
            <div className="select">
              <button onClick={() => setGridSize(4)}>4x4</button>
              <button className="selected" onClick={() => setGridSize(6)}>
                6x6
              </button>
            </div>
          )}
        </div>
        <button id="startButton" onClick={() => startGame()}>
          Start Game
        </button>
      </div>
    </div>
  );
};
