import React, { useState } from 'react';
import BingoCard from '../components/BingoCard';
import RevealedNumbers from '../components/RevealedNumbers';

const PlayPage = () => {
  const [bingoCards, setBingoCards] = useState([]);
  const [revealedNumbers, setRevealedNumbers] = useState([]);
  const [inputNumber, setInputNumber] = useState('');

  const handleAddCard = () => {
    if (bingoCards.length < 6) {
      const newCard = Array(25).fill('');
      setBingoCards([...bingoCards, newCard]);
    }
  };

  const handleRemoveCard = (index) => {
    const updatedCards = bingoCards.filter((_, i) => i !== index);
    setBingoCards(updatedCards);
  };

  const handleRevealNumber = () => {
    const number = parseInt(inputNumber);
    if (!isNaN(number) && !revealedNumbers.includes(number)) {
      setRevealedNumbers([...revealedNumbers, number]);
      setInputNumber('');
    }
  };

  const handleRemoveNumber = (index) => {
    const updatedNumbers = revealedNumbers.filter((_, i) => i !== index);
    setRevealedNumbers(updatedNumbers);
  };

  const handleStartNewGame = () => {
    setBingoCards([]);
    setRevealedNumbers([]);
  };

  const handleUpdateCell = (cardIndex, cellIndex, value) => {
    const updatedCards = [...bingoCards];
    updatedCards[cardIndex][cellIndex] = value;
    setBingoCards(updatedCards);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded w-full max-w-md mb-4"
          onClick={handleAddCard}
        >
          +
        </button>
        <div className="flex flex-wrap justify-center">
          {bingoCards.map((cardNumbers, index) => (
            <div key={index} className="mb-4">
              <BingoCard
                cardNumbers={cardNumbers}
                revealedNumbers={revealedNumbers}
                onRemoveCard={() => handleRemoveCard(index)}
                onUpdateCell={(cellIndex, value) =>
                  handleUpdateCell(index, cellIndex, value)
                }
              />
              <button
                className="bg-red-500 text-white px-2 py-1 rounded border mt-2"
                onClick={() => handleRemoveCard(index)}
              >
                -
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="flex items-center">
          <input
            type="text"
            value={inputNumber}
            onChange={(e) => setInputNumber(e.target.value)}
            placeholder="Enter a number"
            className="mr-2"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleRevealNumber}
          >
            Reveal
          </button>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <RevealedNumbers
          revealedNumbers={revealedNumbers}
          onRemoveNumber={handleRemoveNumber}
        />
      </div>
      <div className="mt-8 flex justify-center">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleStartNewGame}
        >
          Start New Game
        </button>
      </div>
    </div>
  );
};

export default PlayPage;