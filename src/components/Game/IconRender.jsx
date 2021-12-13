import React from "react";

export const IconRender = (props) => {
  return (
    <>
      {(props.icon === props.prevIcon && props.id) === props.prevId ||
      (props.icon === props.currIcon && props.id === props.currId) ? (
        <button className={`notCompleted grid${props.gridSize} activeBtn`}>
          <img src={props.icon} alt={props.icon} />
        </button>
      ) : (
        <button
          className={`notCompleted grid${props.gridSize} inactiveBtn `}
          onClick={() => props.checkIcon(props.icon, props.id)}
        >
          <img src={props.icon} alt={props.icon} />
        </button>
      )}
    </>
  );
};
