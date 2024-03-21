import React from 'react';

const BingoCell = ({ number, isRevealed, isFreeSpace, onUpdateCell }) => {
    const bgColor = (isRevealed || isFreeSpace) ? 'bg-green-500' : 'bg-white';
  
    return (
      <div className={`w-12 h-12 flex items-center justify-center border ${bgColor}`}>
        <input
          type="text"
          value={isFreeSpace ? 'X' : number}
          onChange={(e) => onUpdateCell(e.target.value)}
          readOnly={isFreeSpace}
          className="w-full h-full text-center bg-transparent outline-none"
        />
      </div>
    );
  };

export default BingoCell;