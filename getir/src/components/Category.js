

const Category = ({categor}) => {
 
    
  return (
    <a href='asd' className='group flex flex-col items-center p-4 hover:bg-category transition duration-500 hover:rounded-lg'>
        <img src={categor.image} alt={categor.title} className='w-12 h-12 border rounded-lg'></img>
        <span className='mt-1 font-semibold group-hover:text-header-color'>{categor.title}</span>
        </a>
  )
}

export default Category