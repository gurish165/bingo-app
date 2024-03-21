import React, { useState } from 'react';
import BingoCard from '../components/BingoCard';
import RevealedNumbers from '../components/RevealedNumbers';

const PlayPage = () => {
  const [bingoCards, setBingoCards] = useState([]);
  const [revealedNumbers, setRevealedNumbers] = useState([]);
  const [inputNumber, setInputNumber] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === '') {
      setInputNumber(value);
    } else {
      const number = parseInt(value, 10);
      if (!isNaN(number) && number >= 1 && number <= 99) {
        setInputNumber(value);
      }
    }
  };

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
            <div key={index} className="m-4 flex flex-col items-end relative">
            <button
                className="bg-red-500 text-white px-3 py-1 rounded border mb-2"
                onClick={() => handleRemoveCard(index)}
            >
                -
            </button>
            <div className="flex justify-center w-full">
                <BingoCard
                cardNumbers={cardNumbers}
                revealedNumbers={revealedNumbers}
                onRemoveCard={() => handleRemoveCard(index)}
                onUpdateCell={(cellIndex, value) => handleUpdateCell(index, cellIndex, value)}
                />
            </div>
            </div>
        ))}
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="flex items-center">
          <input
            type="text" // Keep type as text to better handle leading zeroes
            value={inputNumber}
            onChange={handleInputChange}
            placeholder="Enter a number"
            className="mr-2 p-2"
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