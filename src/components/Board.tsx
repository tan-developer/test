import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import './Board.css';
import { ObjectGame } from '../types';
import {generateRandomCells} from "../utils/utilts"
const Board: React.FC = () => {
  // states...
  const [cells, setCells] = useState<ObjectGame[]>([]);
  const [selectedCells, setSelectedCells] = useState<number[]>([]);

  useEffect(() => {
    // Initialize the game board with a 4x4 grid of random shapes and colors
    const generateRandomCell = () => {
      const numRows = 4;
      const randomCells: ObjectGame[] = [];

      for (let row = 0; row < (numRows*numRows)/2; row++) {
        const randomShell = generateRandomCells()
        randomCells.push(randomShell);
      }

      return randomCells;
    };

    setCells(generateRandomCell());
  }, []);

  const handleCellClick = (index: number) => {
    // Reveal cell, check for matches, update game state, and handle game completion
  };
  console.log(cells)
  return (
    <div className="board">
      
    </div>
  );
};

export default Board;

