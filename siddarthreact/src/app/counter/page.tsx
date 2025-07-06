'use client'
import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(10) 
const increment = ()=> {
    setCount(count !==10 ? count+1 : count)
}
const Reset = () => {
    setCount(10)

}
const decrement = ()=> {
    setCount(count ===0 ? count: count-1)
}

  return (
    <div>
        {count}
        <button className='p-2 bg-black text-white m-2'
         onClick={increment} >Increment</button>
         <button className='p-2 bg-black text-white m-2'
         onClick={decrement} >Decrement</button>
         <button className='p-2 bg-black text-white m-2'
         onClick={Reset} >Reset</button>
        </div>
  )
}

export default Counter

