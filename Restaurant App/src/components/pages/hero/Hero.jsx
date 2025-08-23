import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import hero1 from '../../../assets/hero1.png'
import hero2 from '../../../assets/hero2.png'
import hero3 from '../../../assets/hero3.png'
import hero4 from '../../../assets/hero4.png'
import hero5 from '../../../assets/hero5.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
// import required modules
import {Autoplay, Navigation } from 'swiper/modules';

const Hero = () => {
  const heroImg = [
    {id:1,img:hero1},
    {id:2,img:hero2},
    {id:3,img:hero3},
    {id:4,img:hero4},
    {id:5,img:hero5},
  ]
  return (
    <div className='w-full h-[calc(100vh-8ch)] bg-gradient-to-bl from-red-800 to-orange-400 flex mt-16'>
       <div className='h-auto w-full flex flex-col md:flex-row md:justify-start gap-x-10 md:ml-28 sm:ml-10
        ml-1 lg:mt-28 md:mt-16 mt-0'>
          <div className='md:w-[38%] w-full h-auto flex flex-col'>
              <div className="md:w-[35%] w-[60%] h-3ch border-1 mb-4 rounded-md  bg-black/40">
                    <h1 className="text-base text-center font-normal capitalize text-orange-200 ">
                        try healthy and quality
                    </h1>
                </div>
                <div className="w-full h-auto flex flex-col md:justify-start">
                  <h1 className='text-white lg:text-6xl text-4xl font-bold leading-tight'>
                    Healthy Foods for Every Taste
                  </h1>
                  <p className="font-normal text-sm text-zinc-300 mt-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.  est, ea corrupti quisquam  Soluta minus non est, ea corrupti quisquam officiis error atque repudiandae sint! Possimus, exercitationem!
                  </p>
                  <div className="w-[25%] h-8 items-center mt-6">
                    <button className="w-full h-8  bg-neutral-100 hover:bg-orange-400 text-black text-center hover:text-white
                    ease-in-out duration-300 rounded-md">
                      Order Now
                    </button>
                  </div>
                </div>
          </div>
          <div className="h-auto md:w-[42%]  w-[90%]">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper w-full h-auto"
              >
                {heroImg.map((items) => (
                     <SwiperSlide>
                     <div className="swiper-zoom-container">
                       <img src={items.img} />
                     </div>
                   </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
        
    </div>
  )
}

export default Hero