import React, { useState, useEffect } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import page1 from '../../images/betapage/page1.jpg'
import page2 from '../../images/betapage/page2.jpg'
import page3 from '../../images/betapage/page3.jpg'
import page4 from '../../images/betapage/page4.jpg'
import page5 from '../../images/betapage/page5.jpg'
import { Autoplay, Navigation, Pagination } from "swiper";
const PopUp = ({ permition, Toggle, }) => {

  return (
    <>


      <Modal open={permition} center style={{ marginLeft: '20px' }} >
        <div className='p-2 thank_you_form ' >
          <Swiper
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >

            <SwiperSlide>
              <div className='lg:flex lg:justify-center lg:items-center '>
                <img src={page1} className="w-[30%] lg:w-[50%] " alt="conditon" />

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='lg:flex lg:justify-center lg:items-center '>
                <img src={page2} className="w-[30%] lg:w-[50%] " alt="conditon" />

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='lg:flex lg:justify-center lg:items-center '>
                <img src={page3} className="w-[30%] lg:w-[50%] " alt="conditon" />

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='lg:flex lg:justify-center lg:items-center '>
                <img src={page4} className="w-[30%] lg:w-[50%] " alt="conditon" />

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='lg:flex lg:justify-center lg:items-center '>
                <img src={page5} className="w-[30%] lg:w-[50%] " alt="conditon" />

              </div>
            </SwiperSlide>


            <SwiperSlide>
            <div className='lg:flex lg:justify-center lg:items-center '>
                <div className='flex justify-center mt-4'>
                  <button className='w-[20%] p-2 rounded-lg text-white flex justify-center  bg-red-500'>OK</button>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>

        </div>
      </Modal>
    </>
  )
}

export default PopUp