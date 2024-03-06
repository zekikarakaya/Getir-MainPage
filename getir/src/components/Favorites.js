
import React,{useState,useEffect} from 'react';
import { favoriesdata } from '../favoriesdata';
import { FaPlus } from "react-icons/fa";
const Favorites = () => {
    const [favorites,setFavorites]=useState([])
    useEffect(() => {
     setFavorites(favoriesdata);
    }, [])
  return (
    <div className='bg-white px-10'>
         <h3 className='text-sm font-semibold mb-3 pl-14'>Favoriler</h3>
        
            <div className='grid grid-cols-8 p-3 gap-6 overflow-hidden'>
       {
        favorites.map((favor)=>(
            <div key={favor.id} className=' relative  flex flex-col items-center text-center gap-y-1'>
                <button className='absolute top-2 right-2 w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg bg-white text-header-color shadow-md hover:bg-header-color hover:text-orange-500'><FaPlus /></button>
                <img src={favor.image} alt={favor.id} className='object-cover'></img>
                <p className='text-sm text-header-color font-semibold'>{favor.price}</p>
                <span className='text-sm font-semibold mt-3'>{favor.title}</span>
                <p className='text-gray-500'>{favor.alt}</p>
                
            </div>
        ))
       }
       </div>
        

    </div>
  )
}

export default Favorites