'use client'
import { decrementHeight, incrementHeight } from '@/lib/redux/features/box/boxSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Box = () => {
    const dispatch = useDispatch()
    const {width, height,backgroundColor} = useSelector(state=> state.box)
  return (
    <div>
        
        <button onClick={()=> dispatch(decrementHeight())}> Decrease width </button>
        <button onClick={()=> dispatch(incrementHeight())}> Increase width </button>

        
        <div style={{width, height,backgroundColor}}>
        </div>
 

    </div>
  )
}

export default Box