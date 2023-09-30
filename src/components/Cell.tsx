import React from "react";
import "./Cell.css";
import { ObjectGame } from "../types";

interface CellProps extends ObjectGame {
  isActive : boolean
  onClick : (id :ObjectGame) => void
}

const Cell: React.FC<CellProps> = (props: CellProps) => {
  const {id , isActive , pairId ,color ,shape} = props

  const obj :ObjectGame  = {
    id  , pairId ,color ,shape
  }
  // Render cell with shape and color, use CSS to style based on shape and color.
  return (
    <div className={props.isActive ? "flip-container active" : "flip-container"} onClick={() => props.onClick(obj)}>
    <div className="flipper">
      <div className="front"><h1>CELL</h1></div>
      <div className="back"><h1>BACK</h1></div>
    </div>
  </div>
  );
};

export default Cell;
