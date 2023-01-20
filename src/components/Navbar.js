import React, { useState, useEffect } from 'react';
import {AiOutlineCaretUp, AiOutlineCaretDown} from 'react-icons/ai';
import {FaHome} from 'react-icons/fa';
import {IoMdCall} from 'react-icons/io';
import Logo from '../images/logo.png'


function Navbar() {
            const [isOpen, setIsOpen] = useState(false);
            const [isOpeneve, setIsOpeneve] = useState(false);
            const [navbarClass, setNavbarClass] = useState('bg-transparent fixed top-0 left-0 right-0 z-50');

            useEffect(() => {
                function handleScroll() {
                  if (window.scrollY > 0) {
                    setNavbarClass('bg-[#000000dc] fixed top-0 left-0 right-0 z-50');
                  } else {
                    setNavbarClass('bg-transparent fixed top-0 left-0 right-0 z-50');
                  }
                }
            
                window.addEventListener('scroll', handleScroll);
            
                return () => {
                  window.removeEventListener('scroll', handleScroll);
                };
              }, []);
      
      return (
        <>
        <nav className= {`${navbarClass}`}>
        <div className="flex items-center justify-between px-7 py-2.5}">
        <img className='w-[4.5rem]' src={Logo} alt="/"/>
          <div className="text-[1.7rem] font-[150] p-2 text-white hover:text-[#c09d77] cursor-pointer">
            ADELAIDE INN
            </div>
            <FaHome className='w-5 h-5  text-[#c09d77]'/>

          <div className=" relative flex flex-col  rounded-lg text-xl">
          <button onClick={()=> setIsOpen((prev) => !prev) } 
          className='p-4 w-full flex items-center justify-between text-white hover:text-[#c09d77] font-light text-base'>
            ABOUT
            {isOpen ? (
                <AiOutlineCaretDown className='pt-0'/>
            ): (
                <AiOutlineCaretUp className='pt-0'/>
            )}
          </button>

          {
            isOpen && (
                <div className='absolute top-40 flex flex-col items-start py-5 w-[230%] bg-[#353535]'>
                    <ul>
                        <li>
                        <button className='text-[15px] text-white hover:text-[#c09d77] cursor-pointer '>ABOUT THE ADELAIDE INN</button></li>
                        <li className='text-[15px] text-white cursor-pointer hover:text-[#c09d77]'>FACILITIES</li>
                        <li className='text-[15px] text-white cursor-pointer hover:text-[#c09d77]'>LOCATION</li>
                        <li className='text-[15px] text-white cursor-pointer hover:text-[#c09d77]'>VIP CLUB</li>
                        <li className='text-[15px] text-white cursor-pointer hover:text-[#c09d77]'>REVIEWS</li>
                    </ul>
                </div>
            )
          }
          </div>
          <div className="text-white hover:text-[#c09d77] cursor-pointer font-light text-base">ACCOMMODATION</div>
          <div className=" relative flex flex-col  rounded-lg text-xl">
          <button onClick={()=> setIsOpeneve((prev) => !prev) } 
          className='p-4 w-full flex items-center justify-between text-white hover:text-[#c09d77] font-light text-base '>
            EVENTS
            {isOpeneve ? (
                <AiOutlineCaretDown className='pt-0'/>
            ): (
                <AiOutlineCaretUp className='pt-0'/>
            )}
          </button>

          {
            isOpeneve && (
                <div className='absolute top-40 flex flex-col items-start py-1 w-[200%] bg-[#353535]'>
                    <ul>
                        <li>
                        <button className='text-[15px] text-white cursor-pointer hover:text-[#c09d77]'>EVENT SPACES</button>
                        </li>
                        
                    </ul>
                </div>
            )
          }
          </div>
          <div className="text-base text-white hover:text-[#c09d77]">RESTAURANT</div>
          <div className="text-base text-white hover:text-[#c09d77]">CONTACT</div>
          <IoMdCall className='w-5 h-5 text-[#c09d77]'/>
          <div className="text-lg text-white hover:text-[#c09d77]">08 82675066 |</div>
          <div className="text-xl text-[#c09d77] hover:text-white  hover:white font-bold">BOOK A ROOM</div>
          
          </div>
        </nav>
        </>
      );
      
}

export default Navbar