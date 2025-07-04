'use client'
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'

const wordList = ['cat', 'dog', 'fish', 'banana', 'rocket', 'mountain', 'umbrella', 'computer'];
  const guessWord = wordList[Math.floor(Math.random()*wordList.length)]


const Hangman = () => {
  const keyboard = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I' , 'J'],
    ['K', 'L', 'M', 'N', 'O'],
    ['P', 'Q', 'R', 'S', 'T'],
    ['U', 'V', 'W', 'X', 'Y'],
    ['Z']
  ];

  const [step, setStep] = useState(1)
  const [guesssedword, setGuessedWord] = useState([])
  const mainWord= guessWord.toUpperCase()

  const handleGuess = (val) => {
    const isIncluded = (mainWord.split('')).includes(val)
    if (!isIncluded) {
      setStep(step + 1)
    }

    if(isIncluded){
      setGuessedWord([...guesssedword, val])
    }
  }

  return (
    <div>
      <span className='text-4xl m-2 p-2'>Hangman</span>

          {step ==7 && (
            <div className='bg-black w-50 m-2 p-2'>
            <span className='text-white'>YOU LOST THE GAME!!! <span className='font-bold m-3'>The word was {mainWord}</span></span>
          </div>)}
      <img src={`/hang_${step}.gif`} alt="Default" className='m-3' />

      {JSON.stringify(guesssedword)===JSON.stringify(mainWord.split('')) && //JSON.stringify converts array into string as direct array comparision was not possible here
       (<div className='bg-black w-100 m-2 p-2'>
        <span className='text-white'>CONGRATULATIONS!!! YOU GUESSED THE WORD CORRECTLY.</span>
        </div>)}

      {mainWord.split('').map((item, idx) => {
        return (<span className='m-2' key={idx}>
          {guesssedword.includes(item)?item:'___'} </span>)
      })}

      {step<7 && !(JSON.stringify(guesssedword)===JSON.stringify(mainWord.split('')))  && keyboard.map((items, id) => {
        return (<div className='flex m-2' key={id}>
          {items.map((itm, idx) => {
            return (<div key={idx}>
              <Button className='m-2' onClick={()=> handleGuess(itm)}>{itm}</Button>
            </div>)
          })}
        </div>)
      })}
    </div>

  )
}

export default Hangman