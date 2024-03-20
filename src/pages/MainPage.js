import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate('/play');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handlePlayClick}>Play</button>
    </div>
  );
};

export default MainPage;