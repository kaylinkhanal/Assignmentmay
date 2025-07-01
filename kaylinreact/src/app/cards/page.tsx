'use client'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'

//MAX cards
const Cards = () => {
    const [balance, setBalance] = useState(1000)
    const [userCards, setUserCards] = useState([])
    const [aiCards, setAiCards] = useState([])

    const cardsOptions =['2spade', '3spade', '4spade' , '5spade', '6spade', '7spade', '8spade' , '9spade',
        '10spade', '11spade', '12spade', '13spade', '14spade', '2heart', '3heart', '4heart' , '5heart', '6heart', '7heart'
        , '8heart' , '9heart' , '10heart', '11heart', '12heart', '13heart', '14heart', '2diamond', '3diamond',
        '4diamond', '5diamond', '6diamond', '7diamond', '8diamond', '9diamond', '10diamond', '11diamond', '12diamond',
        '13diamond', '14diamond', '2club', '3club', '4club', '5club', '6club', '7club', '8club', '9club',
        '10club', '11club', '12club', '13club', '14club']


    const handleWithdraw =() => {
                 setUserCards([...userCards, cardsOptions[Math.floor(Math.random()*cardsOptions.length)]])
                 setAiCards([...aiCards, cardsOptions[Math.floor(Math.random()*cardsOptions.length)]])
        }

    const generateWinner =()=>{
        if(userCards.length !== 3 && aiCards.length !== 3) return "Continue to game..."
        const userCardNumbers = userCards.map(item=> parseInt(item))
        const aiCardNumbers = aiCards.map(item=> parseInt(item))
        if(Math.max(...userCardNumbers) > Math.max(...aiCardNumbers) ) 
            return "You Won!!"
        else return "You lost!!"

    }
  return (
    <div>
        <p>
        Your remaining balance is: {balance}

        </p>
        <div className='bg-teal-100 p-4 m-4'>
        Your cards: {userCards.map((item,id)=>{
            return (
                <div key={id}>
                    {item}
                    </div>
            )
        })}
        </div>

        <div className='bg-pink-100 p-4 m-4'>
        Your cards: {aiCards.map((item,id)=>{
            return (
                <div key={id}>
                    {item}
                    </div>
            )
        })}
        </div>



         <Button onClick={handleWithdraw}>Distribute cards</Button>
         {generateWinner()}
    </div>
  )
}

export default Cards




// USEEFFECT HOOK IN REACT

// 1. manage component re-render/sideeffect
// 2. eg: fetching data from API, DOM manipulation 
// 3. function
// 4. two arguments: function, dependency array

