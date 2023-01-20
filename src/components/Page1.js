import React from 'react'
import {BiWifi} from 'react-icons/bi'
import {ImSpoonKnife} from 'react-icons/im'
import {AiFillCar} from 'react-icons/ai' 


function Page1() {
  return (
    <div className='mt-10'>
        <div className='text-4xl text-extrabold'>Under New Management</div>
        <p className='mt-20 text-3xl font-thin text-[#c09d77]'>An elegant and charming hotel awaits you in the heart of North Adelaide</p>
        <div className='mt-10 flex items-center justify-between ml-40 mr-40 '>
        <div className='font-normal flex items-center justify-between'>
            <BiWifi className='text-[#c09d77] h-7 w-7'/>
            Free Wifi
         </div>
         <div className='font-normal flex items-center justify-between'>
            <ImSpoonKnife className='text-[#c09d77] h-5 w-5'/>
            Dine-in or Take-Away Breakfast
            </div>
         <div className='font-normal flex items-center justify-between'>
            <AiFillCar className='text-[#c09d77] h-5 w-5'/>
            Free Limited Parking
            </div>
        <div className='font-normal flex items-center justify-between'>
            <AiFillCar className='text-[#c09d77] h-5 w-5'/>
            $10 per night Reserved Bay Parking
            </div>
            </div>
            <div className='mt-10 flex justify-between text-left m-32'>
                <p className='text-xl font-thin pr-20 w-1/2'>A charming and stylish 4 star hotel awaits you in the heard of North Adelaide, 
                    located on the prominent O’Connell Street walking distance from some award wining 
                    fine dining restaurants,entertainment, local attractions and short drive from
                     the Adelaide CBD and world renowned Adelaide Oval.<br/>

                    Adelaide Inn’s 64 recently renovated and well-appointed accommodation rooms and
                     suites are complemented by elegant spaces including flexible meeting and function rooms,
                      an outdoor pool and spa area, and Fox Restaurant serving breakfast daily.</p>
                      <p className='text-xl font-thin w-1/2'>In addition, on the hotels doorstep are fashion boutiques, restaurants, bars, pubs,
                         a cinema, golf course, jogging tracks and Adelaide Oval.<br/>

                        Welcome to our hotel, the elegant and charming Adelaide Inn</p>
            </div>
    </div>
  )
}

export default Page1