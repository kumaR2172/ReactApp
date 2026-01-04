import React from 'react';
import { Clock } from 'lucide-react';

export const Timer = ({ timeRemaining }) => {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const isLowTime = timeRemaining < 300; 
  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
      isLowTime ? 'bg-red-50 text-red-700' : 'bg-blue-50 text-blue-700'
    }`}>
      <Clock size={20} />
      <span className="font-mono font-semibold">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
};