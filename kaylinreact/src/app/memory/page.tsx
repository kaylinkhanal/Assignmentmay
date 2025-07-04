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
        if(displayedIndex.length == 2) return;
        setDisplayedIndex([...displayedIndex, idArr])
    }



    useEffect(()=>{
   
    if(displayedIndex.length == 2){
        if(memory[displayedIndex[0][0]][displayedIndex[0][1]] ==
            memory[displayedIndex[1][0]][displayedIndex[1][1]]){
                const newMemory = [...memory]
                newMemory[displayedIndex[0][0]][displayedIndex[0][1]] = 'tick'
                  newMemory[displayedIndex[1][0]][displayedIndex[1][1]] = 'tick'
                setMemory(newMemory)
            }

            setTimeout(() => {
                setDisplayedIndex([])
            }, 5000);
    }
    }, [displayedIndex.length])
  return (
    <div>
   

        {memory.map((item, id)=>{
        return (
            <div key={id} className='flex gap-2'>
                {item.map((val, idx)=>{
                      const showItem = displayedIndex.some(([r,c])=> r==id && c ==idx)
                    return (
                        <div key={idx} className='flex items-center justify-center w-12 h-12 border ' onClick={()=>handleClick([id , idx])}>
                            {showItem  ? val : ''}
                            {val == 'tick' ? '✅' :''}
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