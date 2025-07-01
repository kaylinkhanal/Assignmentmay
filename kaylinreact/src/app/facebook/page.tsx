'use client'
import { ThumbsUp } from 'lucide-react'
import React, { useState } from 'react'
import { text } from 'stream/consumers'
const Facebook = () => {
    const [reaction,setReaction] = useState('')
    const [reactionOpen, setReactionOpen] = useState(false)
    const handleReaction = (type)=> {
        setReaction(reaction === type? '' : type)
    }

    const generateReactionButton = ()=> {
        switch (reaction) {
            case 'angry':
                return <span onClick={()=> handleReaction('angry')}  role='img' aria-label='angry'>😡 Angry</span>
            case 'haha':
                return <span onClick={()=> handleReaction('haha')}  role='img' aria-label='haha'>😂 Haha</span>
            default :
                return <span className={`${reaction=='like'? 'text-blue-200': ''}`}>
                        <ThumbsUp onClick={()=> handleReaction('like')} className={`w-4 h-4 `}   /> 
                        <div>Like</div>
                </span> 
        }
    }

  return (
    <div>
       {reactionOpen && (<div className='flex gap-2 p-2 bg-pink-50 rounded-md w-48'>
        <div onClick={()=>handleReaction('like')}>👍</div> 
           <div onClick={()=>handleReaction('angry')}> 😡 </div> 
           <div onClick={()=>handleReaction('haha')}>😂 </div> 
           <div onClick={()=>handleReaction('haha')}>😢 </div> 
        </div>)}
        <button 
         onMouseEnter={()=> setReactionOpen(true)}
         className={reaction === 'like' ? 'rounded-sm': ''}
         onClick={()=>handleReaction('like')}>
         <span className={`flex gap-1 p-2 items-center`}> 
          {generateReactionButton()}
     
             </span>
        </button>
    </div>
  )
}

export default Facebook