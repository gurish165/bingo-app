import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PlayPage from './pages/PlayPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/play" element={<PlayPage />} />
      </Routes>
    </Router>
  );
};

export default App;