import React from "react";

export const IconRender = (props) => {
  return (
    <>
      {(props.icon === props.prevIcon && props.id) === props.prevId ||
      (props.icon === props.currIcon && props.id === props.currId) ? (
        <button className={`notCompleted activeBtn`}>
          <img src={props.icon} alt={props.icon} />
        </button>
      ) : (
        <button
          className={`notCompleted inactiveBtn `}
          onClick={() => props.checkIcon(props.icon, props.id)}
        >
          <img src={props.icon} alt={props.icon} />
        </button>
      )}
    </>
  );
};
