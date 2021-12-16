import React from "react";
import { useStopwatch } from "react-timer-hook";
export const Timer = () => {
  const { seconds, minutes } = useStopwatch({ autoStart: true });

  return (
    <div className="stats">
      <h3>
        Time:{" "}
        <span className="statistic">
          {minutes}m:{seconds}s
        </span>
      </h3>
    </div>
  );
};
