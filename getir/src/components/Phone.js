import React from 'react'
import { FaApple,FaGooglePlay,FaShoppingBag } from "react-icons/fa";
const Phone = () => {
  return (
    <div className='bg-purple-700 rounded-2xl text-white px-6'>
    <div className='flex container gap-5 '>
       <div className='basis-1/2 p-16'>
         <h1 className='font-bold text-4xl '>Getir'i İndir!</h1>
         <p className='font-semibold my-3'>İstediğiniz ürünleri kapınıza koyalım</p>
         <div className='my-8 flex gap-4'>
            <button className='bg-black rounded-lg p-2 flex space-x-2 items-center justify-center'><FaApple />App Store'dan indirin</button>
            <button className='bg-black rounded-lg p-2 flex space-x-2 items-center justify-center'><FaGooglePlay />Google Play'den alın</button>
            <button className='bg-black rounded-lg p-2 flex space-x-2 items-center justify-center'><FaShoppingBag />App Galery ile keşfedin</button>
         </div>
       </div>
       <div className='basis-1/2'>
       <img src='img/phoneLanding.png' alt='' className='object-cover w-full'></img>
       </div>
    </div>
    </div>
  )
}

export default Phone