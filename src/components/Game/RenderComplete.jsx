import React from "react";

export const RenderComplete = (props) => {
  return (
    <>
      {typeof props.item.value == "number" ? (
        <button className={`completed grid${props.gridSize}`}>
          {props.item.value}
        </button>
      ) : (
        <img
          className={`completed grid${props.gridSize}`}
          //transition background color
          src={props.item.value}
          alt={props.item.value}
        />
      )}
    </>
  );
};
