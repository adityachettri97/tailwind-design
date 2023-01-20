import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";

export default function SliderComponent() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper bg-[#c09d77] text-white h-[300px] mt-40"
            >
          <SwiperSlide className="text-4xl font-thin mt-20 align-center" >...Lovely hotel, rooms very clean, bed was fantastic!...
          <br/>
           <p className="text-white font-normal text-sm mt-10">
            <span className="font-bold">Verified  traveller</span>- Expedia</p></SwiperSlide>
          <SwiperSlide className="align-center font-thin mt-20 text-4xl">...Very friendly and helpful staff, good twin room, comfortable beds,<br/>
           good heating on a cold and rainy day...
           <br/>
           <p className="text-white font-normal text-sm mt-10">
            <span className="font-bold">Mark E</span>- Expedia</p>
           </SwiperSlide>
           <SwiperSlide className="align-center font-thin mt-20 text-4xl">...walking distance to Adelaide oval. Many cafes, bars and <br/>
           restaurants around. Cheaper than CBD...
           <br/>
           <p className="text-white font-normal text-sm mt-10">
            <span className="font-bold">urin84me</span>- TripAdvisor</p></SwiperSlide>
            </Swiper>
        </>
    );
}

