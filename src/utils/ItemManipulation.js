export const itemsDoMatch = (
  setPrevItem,
  setCurrItem,
  setPrevId,
  setCurrId
) => {
  setPrevItem(null);
  setPrevId(null);
  setCurrItem(null);
  setCurrId(null);
};

export const itemsDoNotMatch = (
  setPrevItem,
  setCurrItem,
  setAnswer,
  setPrevId,
  setCurrId,
  setAnswerClass
) => {
  setAnswer(false);
  setAnswerClass(false);
  setTimeout(() => {
    setPrevItem(null);
    setPrevId(null);
    setCurrItem(null);
    setCurrId(null);
    setAnswerClass(true);
  }, 1000);
  clearTimeout();
  setTimeout(() => {
    setAnswer(true);
  }, 2000);
  clearTimeout();
};

export const changeItem = (items, item, setItems, isStarted, score) => {
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
      alert(`You won! Your score is ${score}`);
      isStarted(false);
    }
  }, 500);
  clearTimeout();
};
