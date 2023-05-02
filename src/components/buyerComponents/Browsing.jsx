import React, { useRef} from 'react'
import { AiFillLeftCircle, AiFillRightCircle, AiFillStar } from 'react-icons/ai'
import {BsSuitHeartFill } from 'react-icons/bs'
import { HiBars3} from 'react-icons/hi2'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from 'swiper';
import list from '../../images/wordpress.png'
import user from '../../images/Ellipse 23.png'
import { HiArrowNarrowRight } from 'react-icons/hi';
const Browsing = () => {

    const sliderRef = useRef(null);

    //   const previous = () => {
    //     customeSlider.current.swiper.slidePrev();
    //   };

    //   const next = () => {
    //     customeSlider.current.swiper.slideNext();
    //   };


    const Browsing = [{ saller: "Gold badge" , desc:"I will design frontend of your website " } , { saller: "Silver badge" , desc:"I will make complete UI/UX design of your product" },{ saller: "bronze badge" , desc:"I will be you personal technical writer " },{ saller: "Gold badge" , desc:"I will design frontend of your website " },{ saller: "Silver badge" , desc:"I will make complete UI/UX design of your product" } ]


    return (
        <>
            <div className=' mt-[50px] px-10 border-t border-b py-4'>
                <div className=' flex items-end justify-between  mb-5'>
                    <div className='lg:w-[90%] flex items-center text-[25px]'>
                        <h1 className='text-[#0D1829]  font-semibold flex items-center'>Continue browsing
                        <span className='ml-2'><HiArrowNarrowRight/></span>
                        </h1>
                  
                    </div>
                    <div className='flex items-center justify-end '>
                        <div onClick={() => sliderRef.current?.slidePrev()}><AiFillLeftCircle className='text-[2rem] cursor-pointer text-[#D7D9DF]  ' /></div>
                        <div onClick={() => sliderRef.current?.slideNext()}> <AiFillRightCircle className='text-[2rem] cursor-pointer text-[#D7D9DF]  ' /></div>
                    </div>
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
                          { Browsing?.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className='rounded-md relative border shadow-md h-[500px]'>
                                    <img src={list} alt="list_img" className='object-cover' />
                                    <div className='p-5 '>
                                        <div className='flex items-center'>
                                            <img src={user} alt="list_img" className='object-cover w-[15%] rounded-full' />
                                            <div className='pl-2'>
                                                <h2 className='text-[#151515] text-[20px] font-semibold'>Mahvish Aftab</h2>
                                                <p className='text-[#F2C214]'>{item?.saller}</p>
                                            </div>
                                        </div>
                                        <div className='pt-2'>
                                            <p className='text-[#151515]'>{item?.desc}</p>
                                        </div>
                                        <div className='flex items-center pt-2'>
                                            <div className=''>
                                                <h2 className='text-[#ABABAB] text-[14px]'>Graphics</h2>
                                            </div>
                                            <div className='mx-2 text-[#ABABAB]'>
                                                |
                                            </div>
                                            <div className='flex items-center'>
                                                <div className='flex items-center'>
                                                    <AiFillStar className='text-[#F2C214]' />
                                                    <p className='text-[#F2C214] px-1 text-[14px]'>5.0</p>
                                                </div>
                                                <h2 className="text-[#ABABAB px-1 text-[14px]">(650)</h2>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-t mt-2 px-5 py-3 h-[50px] absolute bottom-0 w-full'>
                                        <div className="flex justify-between items-center ">
                                            <div className='flex items-center'>
                                                    <HiBars3 className='text-[25px] text-[#B5B6BA]' />
                                                    <BsSuitHeartFill className='text-[20px] text-[#B5B6BA] mx-3' />
                                            </div>
                                            <div>
                                                <h2 className='font-semibold text-[18px] text-[#B5B6BA]'>Starting at US $125</h2>
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

export default Browsing