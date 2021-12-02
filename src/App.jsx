import { StartMenu } from "./components/StartMenu";
import React, { useState } from "react";
import { Game } from "./components/Game";

const App = () => {
  const [theme, setTheme] = useState("numbers");
  const [isStarted, setIsStarted] = useState(false);
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);
  const [gridSize, setGridSize] = useState(4);

  return (
    <div className="App">
      <div className="container">
        {!isStarted && (
          <StartMenu
            started={setIsStarted}
            icons={setTheme}
            players={setNumberOfPlayers}
            grid={setGridSize}
          />
        )}
        {isStarted && (
          <Game
            theme={theme}
            gridSize={gridSize}
            players={numberOfPlayers}
            isStarted={setIsStarted}
          />
        )}
      </div>
    </div>
  );
};

export default App;
