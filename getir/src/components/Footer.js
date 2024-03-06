import React from 'react'
import { FaApple,FaFacebook,FaGooglePlay,FaInstagram,FaShoppingBag, FaTwitter } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
export const Footer = () => {
  return (
    <div>
    <div className='grid grid-cols-8 gap-5 container'>

        <div className='col-span-2  h-80'>
           <h1 className='text-header-color text-xl p-5'>Getir'i indir</h1>
           <div className='flex flex-col space-y-5 p-4'>
           <button className='bg-black rounded-lg  flex space-x-2 items-center justify-center text-white w-1/2'><FaApple  size={30}/>App Store'dan indirin</button>
            <button className='bg-black rounded-lg flex space-x-2 items-center justify-center text-white w-1/2'><FaGooglePlay size={30}/>Google Play'den alın</button>
            <button className='bg-black rounded-lg  flex space-x-2 items-center justify-center text-white w-1/2'><FaShoppingBag size={30}/>App Galery ile keşfedin</button>
            </div>
        </div>

        <div className='col-span-2  h-80'>
        <h1 className='text-header-color text-xl p-5'>Getir'i Keşfet</h1>
        <ul className='flex flex-col ml-5 gap-3'>
            <li><a href='asd'>Hakkımızda</a></li>
            <li><a href='asd'>Kariyer</a></li>
            <li><a href='asd'>Teknoloji Kariyerleri</a></li>
            <li><a href='asd'>İletişim</a></li>
            <li><a href='asd'>Sosyal Sorumluluk Projeleri</a></li>
            <li><a href='asd'>Basın Bültenleri</a></li>
        </ul>
        </div>

        <div className='col-span-2  h-80'>
        <h1 className='text-header-color text-xl p-5'>Yardıma mı ihtiyacın var?</h1>
        <ul className='flex flex-col ml-5 gap-3'>
            <li><a href='asd'>Sıkça Sorulan Sorular</a></li>
            <li><a href='asd'>Kişisel Verilerin Korunması</a></li>
            <li><a href='asd'>Gizlilik Politikası</a></li>
            <li><a href='asd'>Kullanım Koşulları</a></li>
            <li><a href='asd'>Çerez Politikası</a></li>
            <li><a href='asd'>İşlem Rehberi</a></li>
        </ul>
        </div>

        <div className='col-span-2  h-80'>
        <h1 className='text-header-color text-xl p-5'>İş Ortağımız Ol</h1>
        <ul className='flex flex-col ml-5 gap-3'>
            <li><a href='asd'>Bayimiz Olun</a></li>
            <li><a href='asd'>Deponu Kirala</a></li>
            <li><a href='asd'>GetirYemek Restoranı Ol</a></li>
            <li><a href='asd'>GetirÇarşı İşletmesi Ol</a></li>
            <li><a href='asd'>Zincir Restoranlar</a></li>
            <li><a href='asd'>Basın Bültenleri</a></li>
        </ul>
        </div>

    </div>
   <hr className='w-3/4 mx-auto'></hr>
       <footer className='container flex justify-center'>
            <div className='flex justify-between items-center p-3 w-3/4'>
        <div className='flex space-x-2'>
            <p>© 2024 Getir</p>
            <a href='asd' className='text-header-color pl-2'>Bilgi Toplumu Hizmetleri</a>
        </div>

        <div className='icon-div flex space-x-7 items-center'>
             <div className='group '><a href='asd' className='text-gray-500 group-hover:text-header-color p-1'><FaFacebook size={22}/></a></div>
             <div className='group'><a href='asd' className='text-gray-500 group-hover:text-header-color'><FaTwitter size={22}/></a></div>
             <div className='group'><a href='asd' className='text-gray-500 group-hover:text-header-color'><FaInstagram size={22}/></a></div>
             <div className='group flex items-center space-x-1 border rounded-md p-1 cursor-pointer text-gray-500'>
                <a href='asd' className='text-gray-500 group-hover:text-header-color group-hover:bg-purple-50'><TfiWorld size={22}/></a>
                <span className='group-hover:text-header-color'>Türkçe(TR)</span>
             </div>
        </div>
        </div>
       </footer>


    </div>
  )
}
