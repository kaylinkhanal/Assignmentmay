'use client'
import { Angry, Heart, Smile, ThumbsUp } from 'lucide-react'
import React, { useState } from 'react'

const Facebook = () => {
  const [reaction, setReaction] = useState('')
  const [hover, setHover] = useState(false)

  const handleReaction = (type: string) => {
    setReaction(reaction === type ? '' : type)
  }

  return (
    <div className="flex justify-center items-center h-48">
      <div
        onMouseEnter={() => setHover(true)}
        className="relative"
      >
    
        {hover && (
          <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 flex gap-3 bg-white px-3 py-2 rounded-xl shadow-md border z-10">
            <ThumbsUp
              onClick={() => handleReaction('Like')}
              className="w-5 h-5 text-blue-500 cursor-pointer"
            />
            <Heart
              onClick={() => handleReaction('Love')}
              className="w-5 h-5 text-pink-500 cursor-pointer"
            />
            <Smile
              onClick={() => handleReaction('Haha')}
              className="w-5 h-5 text-yellow-500 cursor-pointer"
            />
            <Angry
              onClick={() => handleReaction('Angry')}
              className="w-5 h-5 text-red-500 cursor-pointer"
            />
          </div>
        )}

        
        <button
          onClick={() => handleReaction('Like')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border transition duration-300 ${
            reaction === 'Like'
              ? 'bg-blue-100 text-blue-600'
              : 'bg-gray-100 text-blue-500'
          }`}
        >
          <ThumbsUp className="w-5 h-5" />
          {reaction ? reaction : 'Like'}
        </button>
      </div>
    </div>
  )
}

export default Facebook