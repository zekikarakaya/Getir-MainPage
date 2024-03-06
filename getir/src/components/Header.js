import React from 'react';
const Header = () => {
  return (
    <div className='h-11 bg-header-color text-white flex items-center'>

      <div className='container flex justify-between lg:mx-10 '>

        <div className='flex space-x-4 font-bold h-11 items-center'>

          <div className='active'>
          <a href='asd' className='pointer-events-none text-getir-sarı bg-hover-color p-2 rounded-md'>Getir</a>
          </div>
          <div className='hover:bg-hover-color p-2 hover:rounded-md'>
          <a href='asd'className=''>getiryemek</a>
          </div>
          <div className='hover:bg-hover-color p-2 hover:rounded-md'>
          <a href='asd'className=''>getirbüyük</a>
          </div>
          <div className='hover:bg-hover-color p-2 hover:rounded-md'>
          <a href='asd'className=''>getirsu</a>
          </div>
          <div className='hover:bg-hover-color p-2 hover:rounded-md'>
          <a href='asd'className=''>getirçarşi</a>
          </div>
          
         
        </div>

        <div className='flex space-x-6 flex-1 justify-end'>
          <div className='item1 flex space-x-1 items-center'>
          <i className="fa-solid fa-globe"></i>
          <p>Türkçe TR</p>
          </div>
          <div className='item2 flex space-x-1 items-center'>
          <i className="fa-solid fa-user"></i>
          <p>Giriş Yap</p>
          </div>
          <div className='item3 flex space-x-1 items-center'>
          <i className="fa-solid fa-user-plus"></i>
          <p>Kayit ol</p>
          </div>
        </div>

      </div>
    </div>
   

  )
}

export default Header