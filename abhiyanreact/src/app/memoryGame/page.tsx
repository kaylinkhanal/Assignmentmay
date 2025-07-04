'use client'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [memory,setMemory]=useState([
        [4,2,5,6],
        [6,2,0,4],
        [3,3,0,5]
    ])
    const [clicked,setClicked]= useState([])
    // const [matchedElement, setMatchedElement]= useState([])

    const handleMemory= (id1,id2,element)=>{
        if(clicked.length==2) return
        setClicked([...clicked, [id1,id2]])
        // setMatchedElement([...matchedElement, element])
    }

    useEffect(() => {
      if(clicked.length===2){
       setTimeout(() => {
        setClicked([])
       }, 2000);
      }
    }, [clicked])

  return (
    <div className='border border-red-500 w-max m-2 '>
        {
        memory.map((item,index)=>{
            return(
                <div key={index} className='flex'>
                    {item.map((itm,idx)=>{
                        return(
                        <div key={idx} className='border border-black m-2 p-2 cursor-pointer'>
                            <Button onClick={()=>handleMemory(index,idx,itm)}>
                                {clicked.some(([x,y])=> x===index && y===idx)?itm:''}
                            </Button>
                        </div>
                        )
                    })}
                </div>
            )
        })
    }</div>
  )
}

export default page