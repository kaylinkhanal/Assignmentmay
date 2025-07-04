'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const Counter = () => {
    let [a, setA] = useState(0)
    const decrement = (() => {
        if(!(a<=0)){
            setA(a-1)
        }  
    })

    const increment= (()=>{
        if (!(a>=10))
        setA(a+1)
    })

    const reset= (()=>{
        setA(0)
    })
    return (
        <div>
            {a} <br />
            <Button className='m-2 cursor-pointer' onClick={increment}>Increment</Button>
            <Button className='cursor-pointer' onClick={decrement}>Decrement</Button>
            <Button className='cursor-pointer m-2' onClick={reset}>Reset</Button>
        </div>
    )
}

export default Counter