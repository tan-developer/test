import React from "react";
import "./Cell.css";

interface CellProps {
  id: String;
  shape : String;
  color:String
}

const Cell: React.FC<CellProps> = (props: CellProps) => {
  // Render cell with shape and color, use CSS to style based on shape and color.
  return (
    <div className="flipbox">
      <div className="flip-box-inner">
        <div className="flip-box-front">

        </div>
        <div className="flip-box-back">
          <h2>Back Side</h2>
        </div>
      </div>
    </div>
  );
};

export default Cell;
