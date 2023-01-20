import React from 'react'
import Image4 from '../images/img4.jpg';

function Page3() {
  return (
    <div className='bg-white pt-20 flex items-start justify-between text-left relative '>
         <div className='w-1/2'>
            <div className='absolute ml-32 h-[18%] bg-[#f2f2d6] w-[41%] -bottom-24 '></div>
        <div  className="absolute ">
        <img className=' w-[80%] pb-[10px] p-10   pt-0'
            
             src={Image4}/>
             
        </div>
        </div>
        <div className='p-[10px] m-20 w-1/3 '>
        <h1 className='text-3xl font-normal text-[#c09d77]'>Meetings & Events</h1>
        <h1 className='text-2xl pt-2 font-normal text-black'>Your ‘one stop shop’,<br/> providing all the facilities you <br/> will need.</h1>
        <p className='font-thin mt-4 text-black'>Whether it’s a business meeting or conference, 
        Adelaide Inn offers a choice of three versatile event spaces. Adelaide Inn will ensure your
         next breakfast meeting, seminar or trade display is a success.

</p>
        <button className='bg-transparent hover:bg-[#c09d77] w-[120px] mt-8 h-[40px] border  border-[#c09d77] text-black hover:text-white duration-700 text-sm'>Find Out More</button>
        </div>
    </div> 
    
  )
}

export default Page3