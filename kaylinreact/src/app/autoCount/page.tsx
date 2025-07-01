'use client'
import React, { useEffect, useState } from 'react'

const AutoCount = () => {
    const [count, setCount] = useState(0)
    const [age, setAge] = useState(20)

    useEffect(() => {
        console.log("Hello")
    }, [])

    useEffect(() => {
        console.log("Hello")
    }, [age, count])

    useEffect(() => {
        console.log("Hello")
    })


  return (
    <div>
    Your count  is : {count}
    <button onClick={()=> setCount(count + 1)}>+</button>
    <button onClick={()=> setAge(age + 1)}>Increase age</button>

    </div>
  )
}

export default AutoCount