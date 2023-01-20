import React from 'react'
import Image1 from '../images/img5.jpg';
import Image2 from '../images/img6.jpg';
 
function Page4() {
  return (
    <div>
    <h1 className='text-5xl font-thin pt-20 text-black'>Hotel Lifestyle</h1> 

    <div className='bg-white pt-10   flex items-center justify-between relative'>
    <div className='w-1/2 pl-[10%]'>
        <img src={Image1}/>
        <div className='absolute left-[180px] -bottom-5'>
            <div className='relative'>
        <button className='bg-[#1c1c1cef] hover:bg-[#c09d77] w-[250px] text-2xl font-bold h-[100px] border mt-20  border-[#c09d77] text-white hover:text-black duration-700'>Hotel <br/> Facilities
        <div className='absolute border border-[#c09d77] w-[272px] h-[115px] -left-3 -bottom-2'></div>
        </button>
            </div>
        </div>
   </div>
   <div className=' w-1/2 pl-[10%] relative'>
        <img src={Image2}/>
   
        <div className='absolute left-[180px] -bottom-5'>
            <div className='relative'>
        <button className='bg-[#1c1c1cef] hover:bg-[#c09d77] w-[250px] text-2xl font-bold h-[100px] border mt-20  border-[#c09d77] text-white hover:text-black duration-700'>Local <br/> Attractions
        <div className='absolute border border-[#c09d77] w-[272px] h-[115px] -left-3 -bottom-2'></div>
        </button>
            </div>
        </div>
   </div>
</div> 
</div>
  )
}

export default Page4