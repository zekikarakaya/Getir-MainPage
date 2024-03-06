
import Category from './Category'

const Categories = ({categoriesdata}) => {
    
  return (
    <div className='bg-white py-6'>
        <div className='container px-4'>
        <h3 className='text-sm font-semibold mb-3 pl-14'>Kategoriler</h3>
    <div className='grid grid-cols-10'>
        {categoriesdata.map((categor,i)=>(
            <Category key={i} categor={categor}></Category>
        ))}
    </div>
    </div>
    </div>
  )
}

export default Categories