import React from 'react'
import halfCircle from '../../images/halfCircle.png'
import slider1 from '../../images/slider1.png'
import slider2 from '../../images/slider2.jpg'
import slider3 from '../../images/slider3.jpg'

import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";
import { Translator, Translate } from 'react-auto-translate';

const Banner = () => {


    const Images = [
        slider1,
        slider2,
        slider3

    ]

    return (
        <div style={{ background: "radial-gradient(50% 117.72% at 50% 50%, #EEEBEB 0%, #FFFFFF 100%) " }} className='lg:h-[650px] h-auto'>
            <div className='row h-full g-0'>
                <div className='col-lg-7 flex banner_left items-center relative lg:order-1 sm:order-2'>
                    <div className=' lg:pl-12 pl-5 pr-5 py-8 lg:pr-32 lg:mt-0 mt-24 lg:mb-0 mb-12'>
                        <h1 className='font-sans font-bold lg:text-4xl md:text-4xl text-3xl mb-5 lg:leading-[50px] text-[#323232] lg:text-left text-center'>The standard Lorem Ipsum passage</h1>

                        <Translator from='en' to='es' googleApiKey='AIzaSyAy1kojwkNahDCOEq9Yc7237T46Nq5Qs30'   >

                            <h1><Translate>Welcome!</Translate></h1>

                        </Translator>
                        <p className='text-[#646464] font-sans text-base font-normal leading-7 lg:mb-16 mb-5 lg:text-left text-center'>A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs </p>
                        <div className='flex '>

                            <Link to="/signin" className='bg-[#e84025] hover:bg-[#93C234] hover:text-white hover:border-white mr-7 rounded-xl border border-[#E84025] px-6 lg:py-4 py-2 text-white font-oxygen font-bold'>Hire Talent</Link>
                            <Link to="/joinus">
                                <button className='bg-white rounded-xl hover:bg-[#93C234] hover:text-white hover:border-white border border-[#E84025] px-6 lg:py-4 py-2 text-[#E84025] font-oxygen font-bold lg:float-none float-right'>Browse Job</button>
                            </Link>
                        </div>
                    </div>
                    <img src={halfCircle} alt="halfcircle" className='w-full h-auto max-w-[80px] absolute bottom-0' />
                </div>
                <div className='col-lg-5 col-12 banner_right lg:order-2 sm:order-1'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={true}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        {Images.map((img, index) => (
                            <SwiperSlide key={index} >
                                <div className='images'>
                                    <img src={img} alt="halfcircle" className='lg:h-[649px] w-full object-cover' />
                                </div>
                            </SwiperSlide>
                        ))
                        }
                    </Swiper>

                    {/* <div className='bg-top-background lg:h-full bg-bottom bg-no-repeat bg-cover h-96'></div> */}
                </div>
            </div>
        </div >
    )
}

export default Banner