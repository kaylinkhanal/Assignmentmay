'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementRadius,
  decrementRadius,
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  toggleShape,
} from '@/lib/redux/features/circle/circleSlice';

const Circle = () => {
  const { radius, backgroundColor, x, y,shape } = useSelector((state: any) => state.circle);
  const borderRadius = shape === 'circle' ? '50%' : '0';

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center space-y-6 mt-10">
      <div className="relative h-[400px] w-full border bg-gray-100 overflow-hidden">
        <div
           className="absolute transition-transform duration-200 ease-in-out"
           style={{
           width: `${radius * 2}px`,
           height: `${radius * 2}px`,
           backgroundColor,
           transform: `translate(${x}px, ${y}px)`,
           borderRadius,
          }}
       />
    </div>

      
      <div className="flex flex-wrap justify-center gap-2">
        <button onClick={() => dispatch(moveLeft())} className="px-3 py-1 bg-gray-600 text-white rounded">Left</button>
        <button onClick={() => dispatch(moveRight())} className="px-3 py-1 bg-gray-600 text-white rounded">Right </button>
        <button onClick={() => dispatch(moveUp())} className="px-3 py-1 bg-gray-600 text-white rounded"> Up</button>
        <button onClick={() => dispatch(moveDown())} className="px-3 py-1 bg-gray-600 text-white rounded">Down </button>
      </div>

      
      <div className="flex gap-2">
        <button onClick={() => dispatch(incrementRadius())} className="px-3 py-1 bg-green-500 text-white rounded">Increase</button>
        <button onClick={() => dispatch(decrementRadius())} className="px-3 py-1 bg-red-500 text-white rounded">Decrease</button>
        <button onClick={() => dispatch(toggleShape())} className="px-3 py-1 bg-blue-600 text-white rounded">Toggle Shape</button>

      </div>
    </div>
  );
};

export default Circle;
