import React from "react";
import "./Cell.css";
import { ObjectGame } from "../types";
import { generateRandomElement } from "../utils/utilts";
import { FiCircle } from "react-icons/fi";
import { GoSquare } from "react-icons/go";
import { BsTriangle } from "react-icons/bs";

interface CellProps extends ObjectGame {
  isActive: boolean;
  onClick: (id: ObjectGame) => void;
}

const Cell: React.FC<CellProps> = (props: CellProps) => {
  const { id, isActive, pairId, color, shape } = props;

  const colorsFront = ["red", "green", "blue", "yellow", "orange"];

  const colors = ["red", "green", "blue"];
  const obj: ObjectGame = {
    id,
    pairId,
    color,
    shape,
  };
  // Render cell with shape and color, use CSS to style based on shape and color.
  return (
    <div
      className={props.isActive ? "flip-container active" : "flip-container"}
      onClick={() => props.onClick(obj)}
    >
      <div className="flipper">
        <div className={`front ${generateRandomElement(colorsFront)}`}></div>
        <div className={`back ${color}`}>
          {shape === "circle" && <FiCircle  fill="white"/>}
          {shape === "square" && <GoSquare  fill="white"/>}
          {shape === "triangle" && <BsTriangle fill="white"/>}
        </div>
      </div>
    </div>
  );
};

export default Cell;
