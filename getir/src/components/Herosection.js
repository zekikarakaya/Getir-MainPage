import React,{useState} from 'react'
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
const Herosection = () => {
  const [selected, setSelected] = useState("TR");
  const phones ={
    TR:"+90",
    US:"+180",
    IT:"+4",
    IN:"+123",
    DE:"+23"
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className='h-125 relative before:bg-gradient-to-r before:from-header-color before:to-transparent before:absolute before:inset-0 before:h-full before:w-full before:z-10 '>
    <Slider {...settings} >
    <div>
    <img src='img/getir-mainpage-4.jpg'  alt=''  className='w-full h-125 object-cover'></img>
    </div>
    <div>
    <img src='img/getir-mainpage-2.jpg' alt='' className='w-full h-125 object-cover'></img>
    </div>
    <div>
    <img src='img/getir-mainpage-4.jpg' alt='' className='w-full h-125 object-cover'></img>
    </div>
    </Slider>
    
    <div className='container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20 px-10'>
      
    <div className=''>
    <img src='https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg' alt=''></img>
    <h3 className='mt-8 text-4xl font-semibold text-white'>Dakikalar içinde <br></br>Kapinizda</h3>
    </div>
    
    <div className='w-[400px] rounded-lg bg-gray-50 p-6'>
    <h4 className='text-header-color text-center font-semibold mb-4'>Giriş yap ya da Kaydol</h4>
    
    <div className='grid gap-y-3'>
    <div className='flex gap-x-2'><ReactFlagsSelect
    countries={Object.keys(phones)}
    customLabels={phones}
    selected={selected}
    onSelect={code => setSelected(code)}
    className='flag-select'/>
    <label className='flex-1 relative group'>
    
    <input required className='h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-header-color outline-none focus:header-color peer text-sm focus:pt-2'></input>
    <span className='absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 peer-focus:h-5  peer-focus:text-header-color transition-all peer-focus:text-xs'>Telefon Numarasi</span>
    </label>
    </div>
    <button className='bg-getir-sarı h-12 text-header-color flex items-center justify-center rounded w-full text-sm font-semibold'>Telefon Numarasıyla Devam et</button>
    <hr className='h-[1px] bg-gray-300 my-2'></hr>
    <button className='bg-blue-100 h-12 text-header-color flex items-center justify-center rounded w-full text-sm font-semibold'>Facebook ile Devam et</button>
    </div>
    </div>

    

    </div>
    
    </div>  
  )
}

export default Herosection




















