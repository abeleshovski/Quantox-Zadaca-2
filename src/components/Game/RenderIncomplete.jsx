import React from "react";

export const RenderIncomplete = (props) => {
  if (typeof props.item == "number") {
    return (
      <>
        {(props.item === props.prevItem && props.id === props.prevId) ||
        (props.item === props.currItem && props.id === props.currId) ? (
          <button className={`notCompleted grid${props.gridSize} activeBtn`}>
            {props.item}
          </button>
        ) : (
          <button
            className={`notCompleted grid${props.gridSize} inactiveBtn `}
            onClick={() => props.checkItem(props.item, props.id)}
          >
            {props.item}
          </button>
        )}
      </>
    );
  } else if (typeof props.item == "string") {
    return (
      <>
        {(props.item === props.prevItem && props.id === props.prevId) ||
        (props.item === props.currItem && props.id === props.currId) ? (
          <button className={`notCompleted grid${props.gridSize} activeBtn`}>
            <img src={props.item} alt={props.item} />
          </button>
        ) : (
          <button
            className={`notCompleted grid${props.gridSize} inactiveBtn `}
            onClick={() => props.checkItem(props.item, props.id)}
          >
            <img src={props.item} alt={props.item} />
          </button>
        )}
      </>
    );
  }
};
