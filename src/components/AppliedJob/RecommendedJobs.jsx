import React, { useRef, useEffect, useCallback, useState } from 'react'
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'
import { BsFillShareFill, BsHeart } from 'react-icons/bs'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from 'swiper';
import { HOSTNAME, callApi } from '../../utils/CallApi';
import { Truncate } from '../../utils/TrucateString';
import { useSelector } from 'react-redux';
const FavouriteJobs = ({ status }) => {
    let layout = "grid"
    let data = ["", "", "", "", "", ""]
    const [jobs, setJobs] = useState([])

    const user = useSelector((state) => state.recruitAuth?.userInfo)

    useEffect(() => {
        let payload = {
            "sortproperty": "created_at",
            "sortorder": -1,
            "offset": 0,
            "limit": 50,
            "query": {
                "userid": user._id
            }
        }
        let fetchApi = async () => {
            try {
                let res = await callApi('/jobs/getRecommendedJobs', 'post', payload)
                setJobs(res?.data?.jobs)
                console.log("Data is rec", res)
            }
            catch (err) { }
        }
        fetchApi()
    }, [])



    const sliderRef = useRef(null);

    //   const previous = () => {
    //     customeSlider.current.swiper.slidePrev();
    //   };

    //   const next = () => {
    //     customeSlider.current.swiper.slideNext();
    //   };


    return (
        <>
            <div className='row mt-[50px]'>
                <div className='col-lg-12 flex items-end justify-between  mb-5'>
                    <div className='lg:w-[90%]'>
                        <h1 className='text-[#0D1829] text-[16px] font-semibold mb-2'>Recommended Jobs</h1>
                        <h1 className='text-[#626973] text-[14px] text-xs font-normal'>Based on your preferences</h1>
                    </div>
                    <div className='flex items-center justify-end '>
                        <div onClick={() => sliderRef.current?.slidePrev()}><AiFillLeftCircle className='text-[2rem] cursor-pointer text-[#D7D9DF] hover:text-red-500 ' /></div>
                        <div onClick={() => sliderRef.current?.slideNext()}> <AiFillRightCircle className='text-[2rem] cursor-pointer text-[#D7D9DF] hover:text-red-500 ' /></div>
                    </div>
                </div>
                <div className='col-lg-12 '>


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
                            {jobs.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className=' border-2 border-transparent hover:border-[#65A33A] rounded-md '>
                                        <div className='bg-white rounded-md cursor-pointer'>
                                            <div className='row g-0  '>
                                                <div className={`${layout === "grid" ? "col-lg-12 " : "col-lg-3"} ${layout === "grid" ? "h-44 " : "h-44"}  rounded-md`}>
                                                    <img src={`${HOSTNAME}${item?.job_image_url}`} alt="job_img" className='object-cover h-[150px] w-full' />
                                                </div>
                                                <div className={`${layout === "grid" ? "col-lg-12 " : "col-lg-8"} p-2`}>
                                                    <div className={` flex justify-between items-center`}>
                                                        <h1 className={`${layout !== "grid" && "text-[18px]"} 'text-[#0D1829] hover:text-[#65A33A] text-[18px] font-medium`}>{Truncate(item?.job_title, 20)}</h1>
                                                        <div>
                                                            <span className='w-4 h-4 bg-red-600 rounded-full inline-block mr-1 align-middle'></span>
                                                            <span className='w-4 h-4 bg-red-600 rounded-full inline-block mr-1 align-middle'></span>
                                                            <span className='w-4 h-4 bg-red-600 rounded-full inline-block mr-1 align-middle'></span>
                                                        </div>
                                                    </div>
                                                    <h1 className={`${layout !== "grid" && "text-[16px] pt-2"} text-[#626973] mb-4 text-[16px] mt-2 `}>{Truncate(item?.description, 120)}</h1>
                                                    <div className={`${layout !== "grid" && 'pt-[2rem] flex justify-between items-center '} flex justify-between items-center`}>
                                                        <div>
                                                            <button className='text-[14px] transition-all text-white hover:bg-[#E84025] hover:text-white  rounded-sm pl-2 pr-2 p-[6px] bg-[#42946C] mr-1'>{item?.jobtype}</button>
                                                            <button className='text-[14px] transition-all text-[#42946C]  p-[5px] border-[#42946C] border rounded-sm mr-1'>{item?.jobclass}</button>
                                                            <BsHeart className='inline mx-1  text-[16px] ' />
                                                            <BsFillShareFill className='inline mx-1 text-[16px]' />
                                                        </div>
                                                        <div className='text-[14px]'>
                                                            <span className='font-bold'>{Truncate(item?.salary, 12)}</span>
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