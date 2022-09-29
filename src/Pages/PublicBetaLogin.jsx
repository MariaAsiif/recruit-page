import React, { useState } from 'react'
import slider1 from '../assets/videos/slider1.mp4'
import slider2 from '../assets/videos/slider2.mp4'
import slider3 from '../assets/videos/slider3.mp4'
import slider4 from '../assets/videos/slider4.mp4'
import slider5 from '../assets/videos/slider5.mp4'
import logoImage from '../images/logo.png'
// import beta from '../images/beta.png'
import { IoMail } from 'react-icons/io5'
import { FaLock } from 'react-icons/fa'
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { HiCheckCircle } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";
import PopUp from '../components/popup/popup'
const PublicBetaLogin = () => {
    const [login, setLogin] = useState({ email: '', password: '' })
    const [show, setShow] = useState(false)
    const [term, setterm] = useState(false)

    const Images = [
        slider1,
        slider2,
        slider3,
        slider4,
        slider5,

    ]


    const handleChange = (e) => {
        const { value, name } = e.target

        setLogin((prev) => ({
            ...prev,
            [name]: value
        }))
    }



    const handleValue = (e) => {
        const { value, checked } = e.target;
        if (checked === true) {
            setterm(true)
        }
        console.log(`${value} is ${checked}`);

    }



    return (
        <div className='container h-screen'>
            <div className='row h-full'>
                <div className='col-lg-5 col-12  '>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        // autoplay={{
                        //     delay: 5000,
                        //     disableOnInteraction: false,
                        // }}
                        pagination={true}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        {/* {Images.map((img, index) => ( */}
                        <SwiperSlide  >
                            <ReactPlayer url={slider1} playing className="object-cover" width={"100%"} height={"624px"} />
                        </SwiperSlide>
                        <SwiperSlide  >
                            <ReactPlayer url={slider2} playing className="object-cover" width={"100%"} height={"624px"} />
                        </SwiperSlide>
                        <SwiperSlide  >
                            <ReactPlayer url={slider3} playing className="object-cover" width={"100%"} height={"624px"} />
                        </SwiperSlide>
                        <SwiperSlide  >
                            <ReactPlayer url={slider4} playing className="object-cover" width={"100%"} height={"624px"} />
                        </SwiperSlide>
                        <SwiperSlide  >
                            <ReactPlayer url={slider5} playing className="object-cover" width={"100%"} height={"624px"} />
                        </SwiperSlide>
                        {/* )) */}
                        {/* } */}
                    </Swiper>

                </div>
                <div className='col-lg-7 col-12'>
                    <div className='lg:max-w-[400px] m-auto lg:mt-[5rem] text-center page_wrapper'>
                        <img src={logoImage} className="lg:ml-[85px] w-[40%]" alt="logo" />
                        {term && <PopUp permition={term} Toggle={setterm} />}
                        <div className='mt-[3rem]'>

                            <div className='text-center flex justify-center items-center mb-4'>
                                <h2 className='flex items-center  text-[30px] text-[#93C234]'>Public <span className=' text-[#E84025] ml-1'>Beta</span></h2>
                            </div>

                            <div className='border mb-5  cursor-pointer  rounded-md flex items-center'>
                                <IoMail className={`${login.email ? 'text-[20px]  ml-2 mr-2 text-[#93C234]' : 'text-[20px] ml-2 mr-2  '}`} />
                                <input type="email" onChange={handleChange} name="email" value={login.email} placeholder='Join@gmail.com' className='focus:outline-none text-[#93C234] w-full rounded-md  h-[45px] ' />
                                <HiCheckCircle className={`${login.email && 'text-[#93C234]'} text-gray-400 text-[1.5rem] mr-1`} />
                            </div>
                            <div className={` border mb-4  cursor-pointer rounded-md flex items-center`}>
                                <FaLock className={`${login.password ? 'text-[18px]  ml-2 mr-2 text-[#93C234]' : 'text-[18px] ml-2 mr-2 '}`} />
                                <input type={show ? "text" : "password"} onChange={handleChange} name="password" value={login.password} placeholder='Password' className='focus:outline-none text-[#93C234] w-full rounded-md  h-[45px] ' />
                                <HiCheckCircle className={`${login.password && 'text-[#93C234]'} text-gray-400 text-[1.5rem] mr-1`} />

                            </div>
                        </div>
                        <div className='mt-[2rem] flex items-center'>
                            <input type="checkbox" className='text-gray-400 ' onChange={handleValue} />
                            <span className='text-[13px] ml-2 text-gray-400'>Accept terms and condition</span>
                        </div>

                        <div className='mt-[2rem]'>
                            <div >
                                <span className='text-[14px] text-gray-400'>Organic Health </span>
                                <span className='text-[14px] ml-1 text-gray-400'>. Organic Health </span>
                                <span className='text-[14px] ml-1 text-gray-400'>. Organic Health </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PublicBetaLogin