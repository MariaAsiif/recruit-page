import React from 'react'
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'
import { BsFillShareFill, BsHeart } from 'react-icons/bs'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const FavouriteJobs = ({ status }) => {
    let layout = "grid"
    let data = ["", "", "", "", "", ""]

    const swiper = document.querySelector('.swiper')?.swiper;

    // Now you can use all slider methods like
    // const SliderNext = () => {
    //     swiper.slideNext();
    // }

    // const SliderPrev = () => {
    //     swiper.sliderPrev();

    // }

    return (
        <>
            <div className='row mt-[50px]'>
                <div className='col-lg-12 flex items-end justify-between px-10 mb-5'>
                    <div className='w-[90%]'>
                        <h1 className='text-[#0D1829] font-semibold mb-2'>Recommended Jobs</h1>
                        <h1 className='text-[#626973] text-xs font-normal'>Based on your preferences</h1>
                    </div>
                    {/* <div className='flex items-center justify-end '>
                        <div className='swiper-button-prev' onClick={() => SliderPrev()}><AiFillLeftCircle className='text-[2rem] cursor-pointer text-gray-400 hover:text-red-500 ' /></div>
                        <div className='swiper-button-next' onClick={() => SliderNext()}> <AiFillRightCircle className='text-[2rem] cursor-pointer text-gray-400 hover:text-red-500 ' /></div>
                    </div> */}
                </div>
                <div className='col-lg-12 '>
                    <div className='relative'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            breakpoints={{
                                640: {
                                  slidesPerView: 1,
                                  spaceBetween: 20,
                                },
                                768: {
                                  slidesPerView: 2,
                                  spaceBetween: 40,
                                },
                                1024: {
                                  slidesPerView: 3,
                                  spaceBetween: 50,
                                },
                              }}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {data.map((d) => (
                                <SwiperSlide>
                                    <div className=' border-2 border-transparent hover:border-[#65A33A] rounded-md '>
                                        <div className='bg-white rounded-md cursor-pointer'>
                                            <div className='row g-0  '>
                                                <div className={`${layout === "grid" ? "col-lg-12 " : "col-lg-3"} ${layout === "grid" ? "h-44 " : "h-44"} bg-top-background bg-bottom bg-no-repeat bg-cover rounded-md`}>  </div>
                                                <div className={`${layout === "grid" ? "col-lg-12 " : "col-lg-8"} p-2`}>
                                                    <div className={` flex justify-between items-center`}>
                                                        <h1 className={`${layout !== "grid" && "text-[20px]"} 'text-[#0D1829] hover:text-[#65A33A] text-[16px] font-medium`}>Front end Developer</h1>
                                                        <div>
                                                            <span className='w-4 h-4 bg-red-600 rounded-full inline-block mr-1 align-middle'></span>
                                                            <span className='w-4 h-4 bg-red-600 rounded-full inline-block mr-1 align-middle'></span>
                                                            <span className='w-4 h-4 bg-red-600 rounded-full inline-block mr-1 align-middle'></span>
                                                        </div>
                                                    </div>
                                                    <h1 className={`${layout !== "grid" && "text-[15px] pt-2"} text-[#626973] mb-4 text-[10px] mt-2 font-light leading-4`}>Lor liqua equat. Duis aute irure dolor in repre hend erit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</h1>
                                                    <div className={`${layout !== "grid" && 'pt-[2rem] flex justify-between items-center '} flex justify-between items-center`}>
                                                        <div>
                                                            <button className='text-[12px] transition-all text-white hover:bg-[#E84025] hover:text-white  rounded-sm pl-2 pr-2 p-[6px] bg-[#42946C] mr-1'>Fulltime</button>
                                                            <button className='text-[12px] transition-all text-[#42946C]  p-[5px] border-[#42946C] border rounded-sm mr-1'>Senior level</button>
                                                            <BsHeart className='inline mx-1  text-[16px] ' />
                                                            <BsFillShareFill className='inline mx-1 text-[16px]' />
                                                        </div>
                                                        <div className='text-[12px]'>
                                                            <span className='font-bold'>$80K</span>/Year
                                                        </div>
                                                    </div>
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

export default FavouriteJobs