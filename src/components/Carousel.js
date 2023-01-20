import React from "react";
import { SwiperSlide } from "swiper/react";
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.min.css';
import Image1 from "../images/img1.jpg";
import Image2 from "../images/img3.jpg";
import Image3 from "../images/img6.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Navigation} from "swiper";


const Carousel = () => {
    
 

  return (
    <>            
 <div className="relative">
    <div className="carousel z-0">
        <Swiper 
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="object-fill w-[98%] h-[500px] m-auto pt-1"
                        src={Image1}
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-[98%] h-[500px] m-auto pt-1"
                        src={Image2}
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-[98%] h-[500px] m-auto pt-1"
                        src={Image3}
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
    </div>
    
    <div className="absolute top-40 left-0 z-10 ">
    <div className="border-[1.7px] border-[#c09d77] w-48 p-2 m-auto">
            <p className="text-center text-lg font-bold text-white m-center">
            Best rates guranteed <br/>
            when you book direct.
            </p>
        </div>
    <div className="relative top-[99px] left-0 z-10 flex items-center justify-between bg-[#000000be] w-[98%] m-auto" >
   <div className="flex justify-between p-0">
       <label className="text-white">Check In*
      <input className="border-2 border-[#c09d77] p-2 m-2 box-border h-10 w-52 bg-transparent text-[gray]" type="date" placeholder="Check-in date" />
      </label>
      <label className="text-white">Check Out*
      <input className="border-2 border-[#c09d77] p-2 m-2 box-border h-10 w-52 bg-transparent text-[gray]" type="date" placeholder="Check-out date" />
      </label>
   </div>
   <div className="flex justify-between p-4">
       <label className="text-white">Adults*
      <input className="border-2 border-[#c09d77] p-2 m-2 box-border h-10 w-28 bg-transparent" type="number" placeholder="1" />
      </label>
      <label className="text-white">Children
      <input className="border-2 border-[#c09d77] p-2 m-2 box-border h-10 w-28 bg-transparent " type="number" placeholder="0" />
      </label>
      <label className="text-white">Infants
      <input className="border-2 border-[#c09d77] p-2 m-2 box-border h-10 w-28 bg-transparent " type="number" placeholder="0" />
      </label>
   </div>
   <div className="text-center p-4">
      <button className="bg-[#c09d77] hover:bg-[#1c1c1cef] text-white text-xl text-bold py-2 px-4 box-border h-10 w-60 mt-6 ">CHECK AVILABILITY</button>
   </div>
</div>
</div>
</div>

     
      </>
    
  );
};

export default Carousel;
