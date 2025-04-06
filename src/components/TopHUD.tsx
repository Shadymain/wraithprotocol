import React from 'react';

const TopHud = () => {
  return (
    <div className="absolute top-0 left-0 bg-neutral-800 w-[215px] p-2.5 rounded-lg text-white text-xs">
      {/* Header */}
      <div className="flex justify-between items-center mb-2.5">
        <div className="flex items-center">
          <span className="mr-1">Shady</span>
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        </div>
        <div>Level 20</div>
      </div>

      {/* Progress Bar */}
      <div className="flex gap-0.5 mb-2.5">
        {Array.from({ length: 42 }).map((_, index) => (
          <div key={index} className="w-1 h-4 bg-green-500"></div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="bg-white bg-opacity-10 p-2 rounded">
        <div className="flex justify-between mb-1">
          <span className="opacity-50">Shadows killed:</span>
          <span>10</span>
        </div>
        <div className="flex justify-between">
          <span className="opacity-50">Powers unlocked:</span>
          <span>3</span>
        </div>
      </div>
    </div>
  );
};

export default TopHud; 