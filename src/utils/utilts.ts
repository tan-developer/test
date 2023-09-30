import { ObjectGame } from "../types";
const { v4: uuidv4 } = require('uuid');

const generateRandomElement = (array: any[]) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const generateRandomCells = (): ObjectGame => {
  const shapes = ["circle", "square", "triangle"];
  const colors = ["red", "green", "blue"];
  const totalCells = 16;

  const randomShape = generateRandomElement(shapes);
  const randomColor = generateRandomElement(colors);
  return {
    id: uuidv4(),
    shape: randomShape,
    color: randomColor,
    isRevealed: false,
  };
};

export {generateRandomCells}
