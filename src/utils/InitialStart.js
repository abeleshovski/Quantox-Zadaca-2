import { v4 as uuidv4 } from "uuid";
import { icons } from "./IconStorage";

const createItems = (items, gridSize, theme) => {
  if (theme === "numbers") {
    for (let i = 0; i < (gridSize * gridSize) / 2; i++) {
      let randomItem = parseInt(Math.random() * 100 + 1);

      if (items.includes(randomItem)) {
        randomItem = parseInt(Math.random() * 100 + 1);
      }
      items.push(randomItem);
    }
  } else if (theme === "icons") {
    for (let i = 0; i < (gridSize * gridSize) / 2; i++) {
      items.push(icons[i]);
    }
  }
};
export const shuffleItems = (gridSize, theme) => {
  let items = [];
  createItems(items, gridSize, theme);

  let shuffledItems = [...items, ...items];
  shuffledItems = shuffledItems.map((number, i) =>
    //give number a uuid
    ({
      id: uuidv4(),
      value: number,
      matched: false,
    })
  );
  return shuffledItems.sort(() => Math.random() - 0.5);
};
