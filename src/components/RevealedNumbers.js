import React from 'react';

const RevealedNumbers = ({ revealedNumbers, onRemoveNumber }) => {
  return (
    <div>
      <h3>Revealed Numbers:</h3>
      <ul>
        {revealedNumbers.map((number, index) => (
          <li key={index} className="flex justify-between items-center m-2">
            <span>{number}</span>
            <button onClick={() => onRemoveNumber(index)} className="ml-4 bg-red-500 text-white px-2 rounded">
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RevealedNumbers;
