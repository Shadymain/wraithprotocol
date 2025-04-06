import React from 'react';
import TopHUD from './components/TopHUD';
import ActionBar from './components/ActionBar';
import PowerPopup from './components/PowerPopup';
import GameGrid from './components/GameGrid';

function App() {
  return (
    <div className="relative h-screen">
      <TopHUD />
     
      <PowerPopup />
      <GameGrid />
    </div>
  );
}

export default App; 