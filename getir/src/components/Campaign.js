
import { campaigndata } from '../campaigndata';
import Slider from "react-slick";
import React,{useState,useEffect} from 'react';
const Campaign = () => {
    const [banners,setBanners]=useState([])

    useEffect(() => {
     setBanners(campaigndata)
    }, [])
    
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed:3500,
        cssEase:"linear",
      };
   
  return (
    <div className='container px-6'>
        
        <h3 className='text-sm font-semibold mb-3 pl-14'>Kategoriler</h3>
        
    <Slider {...settings}>
      {banners.length && banners.map((banner)=>(
        <div key={banner.id} className='px-2'>
            <img src={banner.image} alt={banner.id}></img>
        </div>
      ))}
     
      
     
    </Slider>


    </div>
  )
}

export default Campaign