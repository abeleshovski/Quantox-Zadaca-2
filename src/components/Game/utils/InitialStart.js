import { v4 as uuidv4 } from "uuid";

const createNumbers = (numbers, gridSize) => {
  for (let i = 0; i < (gridSize * gridSize) / 2; i++) {
    let randomNumber = parseInt(Math.random() * 100 + 1);
    //if the number exists in numbers array, then create a new random number
    if (numbers.includes(randomNumber)) {
      randomNumber = parseInt(Math.random() * 100 + 1);
    }
    numbers.push(randomNumber);
  }
};
const shuffleNumbers = (gridSize) => {
  let numbers = [];
  createNumbers(numbers, gridSize);

  let shuffledNumbers = [...numbers, ...numbers];
  shuffledNumbers = shuffledNumbers.map((number) =>
    //give number a uuid
    ({
      id: uuidv4(),
      value: number,
    })
  );
  return shuffledNumbers
    .sort(() => Math.random() - 0.5)
    .map((number) => number);
};

//grid from shuffledNumbers
export const createGridTemplate = (gridSize) => {
  let shuffledNumbers = shuffleNumbers(gridSize);
  let grid = [];
  for (let i = 0; i < gridSize; i++) {
    let row = [];
    for (let j = 0; j < gridSize; j++) {
      row.push(shuffledNumbers.pop());
    }
    grid.push(row);
  }
  return grid;
};
