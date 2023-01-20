import React from 'react'

function Subbanner() {
  return (
    <div className='pt-20'>
        <div className='top-20 bg-[#c09d77] w-[100%] h-[180px] flex justify-between items-start '>
            <div className='w-1/2'>
                <p className='text-white text-3xl font-thin m-10 pl-3 text-left'>
                    <span className='font-bold'>Join our VIP Club </span>
                    to be eligible for a range of great benefits
                </p>
        </div>
        <div className='relative w-1/2 pt-2.5 '>
            <button className='text-white bg-[#1c1c1cef] hover:bg-transparent duration-700 cursor-pointer p-4 w-[200px] h-[70px] m-10 text-2xl'>
                JOIN THE CLUB
                
                <div className="absolute  top-[46px] left-[182px] border  w-[210px] h-[78px] border-[#000000dc]"></div>
            </button>
                </div>
        </div>

    </div>
  )
}

export default Subbanner