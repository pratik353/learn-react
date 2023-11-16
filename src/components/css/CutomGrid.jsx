import React from 'react';
import './index.css';

const CustomGrid = ({ row, col, rowSpan, colSpan }) => {
  const gridItemStyle = {
    gridRow: `${row} / span ${rowSpan}`,
    gridColumn: `${col} / span ${colSpan}`,
    border:'1px solid blue'
  };

  return (
      <div className="grid-item" style={gridItemStyle}>
        Row {row}, Column {col}
      </div>
  );
};

export default CustomGrid;
