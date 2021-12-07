export const numbersDoMatch = (
  setPrevNumber,
  setCurrNumber,
  score,
  multiplier,
  setAnswer,
  setPrevId,
  setCurrId,
  setScore,
  setMultiplier
) => {
  setAnswer(true);
  setPrevNumber(0);
  setPrevId(0);
  setCurrNumber(0);
  setCurrId(0);
  if (score === 0) {
    setScore(12);
  } else {
    setScore(score * multiplier);
  }
  setMultiplier(multiplier + 1);
};

export const numbersDoNotMatch = (
  setPrevNumber,
  setCurrNumber,
  setAnswer,
  setPrevId,
  setCurrId,
  setMultiplier,
  setAnswerClass
) => {
  setMultiplier(1);
  setAnswer(false);
  setAnswerClass("false");
  setTimeout(() => {
    setPrevNumber(0);
    setPrevId(0);
    setCurrNumber(0);
    setCurrId(0);
    setAnswerClass("true");
  }, 1000);
  clearTimeout();
  setTimeout(() => {
    setAnswer(true);
  }, 2000);
  clearTimeout();
};

export const changeNumber = (
  numbers,
  number,
  gridSize,
  setNumbers,
  isStarted,
  score
) => {
  let newGrid = [...numbers];
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (newGrid[i][j].value === number) {
        console.log(newGrid[i][j].value);
        newGrid[i][j].value = `${number}`;
      }
    }
  }
  setNumbers(newGrid);
  let flag = false;
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (typeof newGrid[i][j].value != "string") {
        flag = false;
      } else {
        flag = true;
      }
      if (!flag) {
        break;
      }
    }
    if (!flag) {
      break;
    }
  }
  if (flag) {
    alert(`You won! Your score is ${score}`);
    isStarted(false);
  }
};
