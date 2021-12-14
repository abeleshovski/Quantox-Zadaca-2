import React from "react";

export const RenderComplete = (props) => {
  console.log(props.item);
  return (
    <>
      {typeof props.item.value == "number" ? (
        <button className={`completed grid${props.gridSize}`}>
          {props.item.value}
        </button>
      ) : (
        <img
          className={`complete grid${props.gridSize}`}
          src={props.item.value}
          alt={props.item.value}
        />
      )}
    </>
  );
};
