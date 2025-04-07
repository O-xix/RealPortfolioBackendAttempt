import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import TrueMain from './components/trueMain.jsx'
import IntroPage from './components/introVideoPage.jsx';
import CardModal from './components/cardModal.jsx'; // Assuming this is the correct path to your modal component

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/portfolio" element={<TrueMain />} />
      <Route path="/portfolio/repo/:id" element={<CardModal />} />
    </Routes>
  );
};

export default App;
