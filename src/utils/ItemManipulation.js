export const itemsDoMatch = (resetStates) => {
  resetStates();
};

export const itemsDoNotMatch = (resetStates) => {
  setTimeout(() => {
    resetStates();
  }, 1000);
  clearTimeout();
};

export const changeItem = (items, item, setItems, isStarted, moves, time) => {
  let newGrid = [...items];

  newGrid.forEach((row) => {
    row.forEach((col) => {
      if (col.value === item) {
        col.matched = true;
      }
    });
  });
  setItems(newGrid);
  let flag = false;
  try {
    newGrid.forEach((row) => {
      row.forEach((col) => {
        if (!col.matched) {
          flag = false;
          throw new Error("");
        } else {
          flag = true;
        }
      });
    });
  } catch (e) {
    return "";
  }
  setTimeout(() => {
    if (flag) {
      alert(
        `You won! Your finished in ${moves} moves and ${time.minutes} minutes and ${time.seconds} seconds!`
      );
      isStarted(false);
    }
  }, 500);
  clearTimeout();
};
