import { StartMenu } from "./components/StartMenu/StartMenu";
import React, { useState } from "react";
import { NumberGame } from "./components/Game/NumberGame";
import { IconGame } from "./components/Game/IconGame";

const App = () => {
  const [theme, setTheme] = useState("numbers");
  const [isStarted, setIsStarted] = useState(false);
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);
  const [gridSize, setGridSize] = useState(4);

  const changeBackgroundToWhite = () => {
    document.body.style = "background-color: #f5f5f5";
  };

  const changeBackgroundToDarkBlue = () => {
    document.body.style = "background-color: #152938";
  };
  return (
    <div className="App">
      {!isStarted && (
        <>
          {changeBackgroundToDarkBlue()}
          <StartMenu
            started={setIsStarted}
            icons={setTheme}
            players={setNumberOfPlayers}
            grid={setGridSize}
          />
        </>
      )}
      {isStarted && theme === "numbers" && (
        <>
          {changeBackgroundToWhite()}
          <NumberGame
            gridSize={gridSize}
            players={numberOfPlayers}
            isStarted={setIsStarted}
            theme={theme}
          />
        </>
      )}
      {isStarted && theme === "icons" && (
        <>
          {changeBackgroundToWhite()}
          <IconGame
            gridSize={gridSize}
            players={numberOfPlayers}
            isStarted={setIsStarted}
            theme={theme}
          />
        </>
      )}
    </div>
  );
};

export default App;
