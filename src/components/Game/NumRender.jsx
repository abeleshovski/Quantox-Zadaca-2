import React from "react";

export const NumRender = (props) => {
  return (
    <>
      {(props.number === props.prevNumber && props.id === props.prevId) ||
      (props.number === props.currNumber && props.id === props.currId) ? (
        <button className={`notCompleted grid${props.gridSize} activeBtn`}>
          {props.number}
        </button>
      ) : (
        <button
          className={`notCompleted grid${props.gridSize} inactiveBtn `}
          onClick={() => props.checkNumber(props.number, props.id)}
        >
          {props.number}
        </button>
      )}
    </>
  );
};
