import React from 'react';
import BingoCell from './BingoCell';

const BingoCard = ({ cardNumbers, revealedNumbers, onRemoveCard, onUpdateCell }) => {
  const isCellRevealed = (number) => {
    console.log("is " + number + " revealed?")
    console.log("revealed nums: "+ revealedNumbers)
    console.log("prob false: " + revealedNumbers.includes(parseInt(number)))
    return revealedNumbers.includes(parseInt(number));
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        {'BINGO'.split('').map((letter) => (
          <div key={letter} className="w-12 h-12 flex items-center justify-center border">{letter}</div>
        ))}
      </div>
      {[...Array(5)].map((_, row) => (
        <div key={row} className="flex">
          {[...Array(5)].map((_, col) => {
            const index = row * 5 + col;
            const number = cardNumbers[index];
            const isRevealed = isCellRevealed(number);
            const isFreeSpace = row === 2 && col === 2;
            return (
              <BingoCell
                key={col}
                number={number}
                isRevealed={isRevealed}
                isFreeSpace={isFreeSpace}
                onUpdateCell={(value) => onUpdateCell(index, value)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default BingoCard;