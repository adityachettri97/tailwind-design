import React from 'react'
import Image0 from '../images/img2.jpg'

function Page2() {
  return (
    <div className='bg-[#000000dc] flex items-start justify-between text-left relative'>
        <div className='p-[20px] ml-[10%]  m-20 pb-0 w-1/3'>
        <h1 className='text-3xl  text-[#c09d77]'>Accommodation</h1>
        <h1 className='text-xl font-medium pt-4  text-white'>An elegant and charming 4-star hotel awaits you in the heart of North Adelaide.</h1>
        <p className='font-thin pt-3 text-white'>Located on bustling O’Connell Street in the premier dining, entertainment and shopping location of North Adelaide, 
        the hotel is just a short walk to the Adelaide CBD and the acclaimed Adelaide Oval.</p>
        <button className='bg-transparent hover:bg-[#c09d77] w-[110px] h-[40px] border-[1px] mt-10 border-white text-sm text-[#c09d77] hover:text-white duration-500'>Find Out More</button>
        </div>
        <div className='w-1/2'>
        <img
             className="w-[48%] p-10 -top-10 pt-0 pb-0 absolute"
             src={Image0}/>
        </div>
    </div> 


  )
}

export default Page2