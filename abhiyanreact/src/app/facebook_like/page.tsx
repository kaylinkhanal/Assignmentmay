'use client'
import { Heart, Smile, ThumbsUp } from 'lucide-react'
import React, { useState } from 'react'

const Like = () => {
    const [reaction, setReaction]= useState('')
    const [reactionOpen, setReactionOpen]= useState(false)

    const reactionHandle= (type)=>{
        switch(type){
            case 'Like':
                setReaction('Like')
                {reaction===type?setReaction(''):''}
                break;      
                      
        }
    }

    const allReactions= (anyReact)=>{
        setReactionOpen(true)

        switch(anyReact){
            case 'Like':
                setReaction('Like')
                break;

            case 'Love':
                setReaction('Love')
                break;

            case 'Haha':
                setReaction('Haha')
                break;
        }
    }

  return (
    <div>
        {reactionOpen && 
        (<div className='flex bg-gray-200 w-25 m-2 p-2 border rounded-[25px] gap-1 mouse-pointer'>
            <ThumbsUp onClick={()=>allReactions('Like')}></ThumbsUp>
            <Heart onClick={()=>allReactions('Love')}></Heart>
            <Smile onClick={()=>allReactions('Haha')}></Smile>
        </div>)}
        <div className='flex m-2 gap-2 bg-gray-200 w-21 p-2 cursor-pointer' onClick={()=>reactionHandle('Like')} onMouseOver={()=>allReactions()}>
        <ThumbsUp className={reaction==='Like'? 'bg-blue-400':''}></ThumbsUp><span>{reaction? reaction: "Like"}</span>
        </div>
    </div>
  )
}

export default Like