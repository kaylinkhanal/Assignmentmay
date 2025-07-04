'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

const symbols = [
  ['AC', '+/-', '%', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['00', '0', '.', '='],
]

const ops = ['+', '-', '*', '/']

const Calculator = () => {
  const [output, setOutput] = useState('')

  const handleCalculation = ((val) => {

    switch (val) {
      case '=':
        setOutput(eval(output))
        break;

      case 'AC':
        setOutput('')
        break;

      case '+/-':
        setOutput(-output)
        break;

      case '%':
        setOutput(output / 100)
        break;

      default:
        setOutput(output + val)
    }
  })

  return (
    <div className='bg-orange-100 w-60 m-2 p-2'>
      <div className='w-56 bg-black text-white h-12 justify-center'>
        {output}
      </div>

      {symbols.map((items, index) => {
        return (
          <div key={index} className='flex m-2 justify-center'>
            {items.map((itm, id) => {
              return (
                <div key={id} className='m-1'>
                  <Button className='cursor-pointer' onClick={() => handleCalculation(itm)}>{itm}</Button>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Calculator