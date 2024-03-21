import React from 'react';

const BingoCell = ({ number, isRevealed, isFreeSpace, onUpdateCell }) => {
    const bgColor = (isRevealed || isFreeSpace) ? 'bg-green-500' : 'bg-white';

    const handleInputChange = (e) => {
        const value = e.target.value;
        if ((value === '' || /^[0-9\b]+$/.test(value)) && (value === '' || parseInt(value, 10) <= 99)) {
            onUpdateCell(value);
        }
    };

    return (
      <div className={`w-12 h-12 flex items-center justify-center border ${bgColor}`}>
        <input
          type="text" // Keep as type="text" to allow for custom validation
          value={isFreeSpace ? 'X' : number}
          onChange={handleInputChange}
          readOnly={isFreeSpace}
          className="w-full h-full text-center bg-transparent outline-none"
        />
      </div>
    );
};

export default BingoCell;
