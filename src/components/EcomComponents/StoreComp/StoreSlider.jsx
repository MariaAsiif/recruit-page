import React from 'react'
import slider from '../../../assets/Stocks/slider1.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
const StoreSlider = () => {
    return (
        <>
            <div>
                <Swiper
                    slidesPerView={1}
                    autoplay={{
                        delay: 10000,

                    }
                    }
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className=""
                >
                    <SwiperSlide>
                        <div className='relative'>
                            <img src={slider} alt="slider" />
                            <div className='absolute top-[35%] left-[10%] bottom-0 max-w-[260px]'>
                                <h2 className='text-white text-[3rem] font-bold '>Online
                                    Exclusive</h2>
                                <p className='text-white text-[14px] font-normal'>New collection The Essentials with
                                    basic item necessary</p>
                                <button className='bg-[#43AE95] text-white  my-4 px-6 py-3 text-[14px] rounded-md'>BUY IT NOW!</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img src={slider} alt="slider" />
                            <div className='absolute top-[35%] left-[10%] bottom-0 max-w-[260px]'>
                                <h2 className='text-white text-[3rem] font-bold '>Online
                                    Exclusive</h2>
                                <p className='text-white text-[14px] font-normal'>New collection The Essentials with
                                    basic item necessary</p>
                                <button className='bg-[#43AE95] text-white  my-4 px-6 py-3 text-[14px] rounded-md'>BUY IT NOW!</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </>
    )
}

export default StoreSlider