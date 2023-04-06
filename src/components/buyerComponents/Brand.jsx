import React, { useRef } from 'react'
import { AiFillLeftCircle, AiFillRightCircle, AiFillStar } from 'react-icons/ai'
import { BsSuitHeartFill } from 'react-icons/bs'
import { HiBars3 } from 'react-icons/hi2'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from 'swiper';
import list from '../../images/wordpress.png'
import user from '../../images/Ellipse 23.png'
import { HiArrowNarrowRight } from 'react-icons/hi';
const Brand = () => {

    const sliderRef = useRef(null);

    //   const previous = () => {
    //     customeSlider.current.swiper.slidePrev();
    //   };

    //   const next = () => {
    //     customeSlider.current.swiper.slideNext();
    //   };


    return (
        <>
            <div className=' mt-[50px] px-10 bg-[#F8F8F8] py-4'>
                <div className=' flex items-end justify-between  mb-5'>
                    <div className=' text-[25px]'>
                        <h1 className='text-[#0D1829]  font-semibold flex items-center'>Beautiful Brand Style Guide deliveries, handpicked for you
                        </h1>
                    </div>
                    {/* <div className='flex items-center justify-end '>
                        <div onClick={() => sliderRef.current?.slidePrev()}><AiFillLeftCircle className='text-[2rem] cursor-pointer text-[#D7D9DF]  ' /></div>
                        <div onClick={() => sliderRef.current?.slideNext()}> <AiFillRightCircle className='text-[2rem] cursor-pointer text-[#D7D9DF]  ' /></div>
                    </div> */}

                    <h1 className='text-[#24D29F]  flex items-center'>{`See More Projects >`} 
                    </h1>
                </div>

                <div className=''>


                    <div className='relative'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            modules={[Navigation]}
                            onBeforeInit={(swiper) => {
                                sliderRef.current = swiper;
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                375: {
                                    slidesPerView: 1,
                                },
                                640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className="mySwiper"
                        >
                            {Array(5).fill(5).map((_, i) => (
                                <SwiperSlide key={i}>
                                    <div className='rounded-md border shadow-md bg-white'>
                                        <img src={list} alt="list_img" className='object-cover' />

                                        <div className='border-t  px-5 py-3'>
                                            <div className='flex items-center'>
                                                <img src={user} alt="list_img" className='object-cover w-[10%] rounded-full' />
                                                <div className='pl-2'>
                                                    <h2 className='text-[#151515] text-[16px]'>by Mahvish Aftab</h2>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Brand