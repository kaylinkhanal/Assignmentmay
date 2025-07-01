'use client'
import React, { useEffect, useState } from 'react'



const Memory = () => {
    const [displayedIndex, setDisplayedIndex] = useState([])
    const [memory, setMemory] = useState([
        [4,2,5,6],
        [6,2,0,4],
        [3,3,0,5]
    ])
    const handleClick = (idArr)=> {
        setDisplayedIndex([...displayedIndex, idArr])
    }
    useEffect(()=>{
        if(displayedIndex.length == 2){
            setTimeout(() => {
                setDisplayedIndex([])
            }, 3000);
        }
    },[displayedIndex.length])
  return (
    <div>
        {JSON.stringify(displayedIndex)}
        {memory.map((item, id)=>{
        return (
            <div key={id} className='flex gap-2'>
                {item.map((val, idx)=>{
                  
                    return (
                        <div key={idx} className='flex items-center justify-center w-12 h-12 border ' onClick={()=>handleClick([id , idx])}>
                            {displayedIndex[id]?.[0]== id && displayedIndex[id]?.[1]== idx ? val : ''}
                            </div>
                    )
                })}
                </div>
        )
         
        })}
    </div>
  )
}

export default Memory