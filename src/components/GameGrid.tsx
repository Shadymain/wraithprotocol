import React from 'react';
import TopHud from './TopHUD';
import ActionBar from './ActionBar';
import PowerPopup from './PowerPopup';

const GameGrid = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 relative">
      <div className="absolute top-10 left-10">
        <TopHud />
      </div>
      <div className="absolute bottom-10 left-10">
        <ActionBar />
      </div>
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
        <PowerPopup />
      </div>
      <div className="grid grid-cols-5 gap-2">
        <div className="w-16 h-16 bg-white"></div>
        <div className="w-16 h-16 bg-black"></div>
        <div className="w-16 h-16 bg-black"></div>
        <div className="w-16 h-16 bg-black"></div>
        <div className="w-16 h-16 bg-black"></div>
        {/* Add more grid items as needed */}
      </div>
    </div>
  );
};

export default GameGrid; 