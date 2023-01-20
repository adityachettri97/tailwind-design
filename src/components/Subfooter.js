import React from 'react'
import {CiFacebook, CiInstagram} from 'react-icons/ci'

function Subfooter() {
  return (
    <div className='flex justify-between text-left bg-[#000000dc] h-[200px]'>
    <div className="text-white font-thin w-3/5  p-8 pl-10 ">
        <h4 className='text-2xl'>ADELAIDE INN</h4>
        <div className='flex text-[#c09d77] p-6 pl-0 '>
        <CiFacebook className='h-14 w-14 '/>
        <CiInstagram className='h-14 w-14 '/>
        </div>
        
    </div>

    <div className=" p-8 w-1/4">
        <h1 className='font-bold text-[#ded6b7f7]'>PHONE</h1>
        <p className='font-bold text-white pt-5'>Give us a call</p>
        <button className=' font-normal bg-transparent hover:bg-[#c09d77] w-[130px] h-[40px] border-[1px] mt-3 border-[#c09d77] text-lg text-white hover:text-white duration-500'>
        08 82675066</button>
    </div>

    <div className=" p-8 w-1/4">
        <h1 className='font-bold text-[#ded6b7f7]'>WRITE</h1>
        <p className='font-bold text-white pt-5'>Write us an email </p>
        <button className='font-normal bg-transparent hover:bg-[#c09d77] w-[130px] h-[40px] border-[1px] mt-3 border-[#c09d77] text-lg text-white hover:text-white duration-500'>
        CONTACT US</button>
    </div>

    <div className=" p-8 w-1/4">
        <h1 className='font-bold text-[#ded6b7f7]'>WRITE</h1>
        <p className='font-thin text-sm text-white pt-5'>160 O’CONNELL ST <br/>NORTH ADELAIDESOUTH AUSTRALIA <br/> 5006 </p>
    </div>
    </div>
  )
}

export default Subfooter