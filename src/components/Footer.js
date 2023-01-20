import React from 'react'
import Foot from '../images/footer.png'


function Footer() {
  return (
    <>
    <div className='flex justify-between text-left bg-[#c09d77f1] h-[250px]'>
    <div className="text-black font-thin w-3/6  p-8 pl-10 ">
        <h4 className='text-sm font-normal'>MORE INFORMATION</h4>
        <div className='bg-black w-[100%] h-[0.3%] mt-2'></div>
        <div className='mt-5'>
            <p className='text-[13px] cursor-pointer hover:font-bold'>ACCOMMODATION</p>
            <p className='text-[13px] cursor-pointer hover:font-bold'>MEETINGS & EVENTS</p>
            <p className='text-[13px] cursor-pointer hover:font-bold'>FOX RESTAURANT</p>
            <p className='text-[13px] cursor-pointer hover:font-bold'>WEDDINGS</p>
            <p className='text-[13px] cursor-pointer hover:font-bold'>BLOG</p>
            <p className='text-[13px] cursor-pointer hover:font-bold'>JOIN OUR VIP CLUB</p>
            <p className='text-[13px] cursor-pointer hover:font-bold'>REVIEWS</p>
        </div>
        
    </div>
    <div className='w-3/6'>
        <img src={Foot} className='w-[22%] h-[48%] mt-8 ml-0' />
        
    </div>
    
    </div>
    <div className='bg-black w-[100%] h-[0.5px]'></div>
    <div className='flex justify-between text-left bg-[#c09d77f1]'>    
    <div className='m-4 ml-10 text-xs font-thin w-3/6'>Copyright © 2023 The Adelaide Inn</div>
    <div className='ml-[60%] w-3/6 m-4 font-thin text-sm'>Website design by EDynam</div>

    </div>
    </>


   
  )
}

export default Footer