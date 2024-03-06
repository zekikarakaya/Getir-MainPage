import React,{useState,useEffect} from 'react';
import { carddata } from './carddata'
const Card = () => {
  
  const [cards,setCards]=useState([])
  useEffect(() => {
    setCards(carddata)
  }, [])
  
  return (
    <div>
      <div className='container grid grid-cols-3 gap-4 my-5'>
           {
            cards.map((card)=>(
              <div key={card.id} className='h-[353px] shadow-2xl flex flex-col items-center justify-center bg-white'>
                <img src={card.image} alt={card.id}></img>
                <h2 className='mt-5 font-semibold text-header-color'>{card.title}</h2>
                <p className='text-center mt-3'>{card.text}</p>
              </div>
            ))
           }
      </div>
    </div>
  )
}

export default Card