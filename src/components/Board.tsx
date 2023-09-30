import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import "./Board.css";
import { ObjectGame } from "../types";
import { generateRandomCells } from "../utils/utilts";
const { v4: uuidv4 } = require("uuid");

const Board: React.FC = () => {
  // states...
  const [cells, setCells] = useState<ObjectGame[]>([]);
  const [selectedCells, setSelectedCells] = useState<ObjectGame[]>([]);

  useEffect(() => {
    const randomCells: ObjectGame[] = [];
    // Initialize the game board with a 4x4 grid of random shapes and colors
    const generateRandomCell = () => {
      const numRows = 4;

      for (let row = 0; row < (numRows * numRows) / 2; row++) {
        const randomShell = generateRandomCells();
        randomCells.push(randomShell);
      }
    };

    generateRandomCell();

    let newArray: ObjectGame[] = [];

    randomCells.forEach((element) => {
      const copyElement = { ...element };
      copyElement.pairId = uuidv4()
      newArray.push(element, copyElement);
    });

    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    setCells(newArray);
  }, []);

  const handleCellClick = (e: ObjectGame) => {
    if(selectedCells.length % 2 !== 0) {
      const lastIndex = [...selectedCells].pop()
      if(lastIndex?.id === e.id && lastIndex.pairId !== e.pairId) {
        setSelectedCells(preState => [...preState , e])
      }else {
        console.log(e)
        setSelectedCells([])
      }
    }else {
      setSelectedCells(preState => [...preState , e])
    }
  };
  console.log(selectedCells)
  return (
    <div className="board">
      {cells.map((element) => (
        <Cell
          {...element}
          isActive={selectedCells.some((vendor) => {
            return vendor.id === element.id && vendor.pairId === vendor.pairId
          })}
          onClick={handleCellClick}
        />
      ))}
    </div>
  );
};

export default Board;
