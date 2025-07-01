'use client'
import React, { useState } from 'react'

const wordsCollection = ['apple', 'banana', 'cherry', 'date', 'elderberry']
const correctWord = wordsCollection[Math.floor(Math.random()* wordsCollection.length)];

const Hangman = () => {
    const [guessedLetters, setGuessedLetters] = useState(correctWord.split('').map((item)=>'_').join(''));
    const [correctIds, setCorrectIds] = useState([]);
    const [step, setStep] = useState(1)
    const keyboardButton =[
        'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
        'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
        'z', 'x', 'c', 'v', 'b', 'n', 'm'
      ];    

      const handleGuess =(val)=>{
        debugger;
            // step 1: check if correctWord includes the guessed letter
            const isIncluded = correctWord.includes(val)
            if(!isIncluded){
                setStep(step + 1)
            }
            // no---> display nextimage and remove that wrong word from the list
            if(isIncluded){
                const matchedKeys = correctWord.split('').map((item,id)=>{
                        if (item == val) return id
                    }).filter(item=>item|| item==0)
                    setCorrectIds([...correctIds, ...matchedKeys])
            }
            // yes---> display the correct letter in the correct position
            // and remove that wrong word from the list
            // if all correct, display success message
      }

  return (
    <div>
        {correctWord.length == correctIds.length && (
            <div>Congrats you winning animal!!</div>
        )}
        {step == 7 && (
            <div>
                you lost the game!!!
                </div>
        )}
        <img src={`/hang_${step}.gif`} alt="Hangman" className="w-24 h-24" />
        <div className='flex gap-2'>
        {guessedLetters.split('').map((item,id)=>{
                return <div key={id}>{correctIds.includes(id)? correctWord[id]:'_'}</div>
        })}

        </div>
        <div className='flex'>
        {(step <7 && correctWord.length !== correctIds.length) && keyboardButton.map((item,id)=>{
            return (
                <div key={id} onClick={()=> handleGuess(item)}  className='p-4 bg-black text-white m-2 w-8 h-8 rounded flex items-center justify-center cursor-pointer hover:bg-gray-700'>
                        {item}
                    </div>
            )
        })}
        </div>
    </div>
  )
}

export default Hangman