import React from 'react';

const RevealedNumbers = ({ revealedNumbers, onRemoveNumber }) => {
  return (
    <div>
      <h3>Revealed Numbers:</h3>
      <ul>
        {revealedNumbers.map((number, index) => (
          <li key={index}>
            {number}
            <button onClick={() => onRemoveNumber(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RevealedNumbers;