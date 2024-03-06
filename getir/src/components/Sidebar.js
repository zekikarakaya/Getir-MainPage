import React,{useState} from 'react'
import Modal from 'react-modal';
import { MdClose } from "react-icons/md";
const Sidebar = () => {
 
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal(e) {
        e.preventDefault();
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  return (
    <div className='sidebar h-full w-[320px] min-w-[320px] border-r-2 border-gray-400 p-5'>
        <div className='flex space-x-2 mt-3'>
        <div>
            <a href='asdads'>Logo</a>
        </div>
        <p className='font-bold'>Brand Colors</p>
        </div>

        
        <p className=' mt-3 text-sm text-green-400'>Lorem asdadsasd asas  as das das dasd as da sdas d asd</p>
        
        <nav className='my-4'>
            <ul>
            <li><a href='asd' className='font-bold cursor-pointer hover:text-blue-500'>Suggest a brand</a></li>
            <li><a href='ads' className='font-bold cursor-pointer hover:text-blue-500' onClick={openModal}>About a brand</a></li>
            </ul>
       
        </nav>

           <div>
            <h4>BrandColors a DesignBomb</h4>
          <p className='text-sm text-green-400'>Lorem asdadsasd asas  as das das dasd as da sdas d asd</p>
        
           </div>
           <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>About BrandColor</h2>
        <div>
            <button onClick={closeModal} className='absolute top-3 right-3 w-[30px] h-[30px] bg-gray-500'><MdClose size={30}/></button>
        
            <p className='text-sm text-green mb-3'>asdddddddddddddddddddddddddasdasdasdasdddddddddddddddddddddasdasdasdddddddddddddddddddddasdasdasdddddddddddddddddddddasdadasd</p>
            <p className='text-sm text-green'>dddddddddddddddddddaqweqwesdasdaqwesdasdddddasdasdddddddddddddddddasdasdasdddddddddddddddddddddasdasdasdddddddddddddddddddasdasdas</p>
        </div>
       
      </Modal>
    </div>
    
  )
}

export default Sidebar