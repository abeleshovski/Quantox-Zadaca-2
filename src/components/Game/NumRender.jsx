import React from "react";

export const NumRender = (props) => {
  return (
    <>
      {props.number === props.prevNumber && props.id === props.prevId ? (
        <button className={`notCompleted activeBtn`}>{props.number}</button>
      ) : (
        <button
          className={`notCompleted inactiveBtn `}
          onClick={() => props.checkNumber(props.number, props.id)}
        >
          {props.number}
        </button>
      )}
    </>
  );
};
