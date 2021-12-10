import { v4 as uuidv4 } from "uuid";
import { icons, iconNames } from "./IconStorage";

const createNumbers = (numbers, gridSize, theme) => {
  if (theme === "numbers") {
    for (let i = 0; i < (gridSize * gridSize) / 2; i++) {
      let randomNumber = parseInt(Math.random() * 100 + 1);
      //if the number exists in numbers array, then create a new random number
      if (numbers.includes(randomNumber)) {
        randomNumber = parseInt(Math.random() * 100 + 1);
      }
      numbers.push(randomNumber);
    }
  } else if (theme === "icons") {
    for (let i = 0; i < (gridSize * gridSize) / 2; i++) {
      numbers.push(icons[i]);
    }
  }
};
export const shuffleNumbers = (gridSize, theme) => {
  let numbers = [];
  createNumbers(numbers, gridSize, theme);

  let shuffledNumbers = [...numbers, ...numbers];
  shuffledNumbers = shuffledNumbers.map((number, i) =>
    //give number a uuid
    ({
      id: uuidv4(),
      value: number,
      matched: false,
    })
  );
  return shuffledNumbers.sort(() => Math.random() - 0.5);
};
