import React, { useState, useEffect } from 'react'
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
// import ReactPlayer from 'react-player/lazy'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";
import PopUp from '../components/popup/popup'
import { AiFillLock } from 'react-icons/ai'
import { ImDatabase } from 'react-icons/im'
import { IoMdClock } from 'react-icons/io'
import Whatabout from '../components/popup/whatAbout'
const PublicBetaLogin = () => {
    const [login, setLogin] = useState({ email: '', password: '' })
    const [show, setShow] = useState(false)
    const [term, setterm] = useState(false)
    const [terms, setterms] = useState(false)
    const [about, setAbout] = useState(false)
    const [play, setplay] = useState(false)

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
            setterms(true)
        }
        console.log(`${value} is ${checked}`);

    }
    useEffect(() => {
        setTimeout(() => {
            setplay(true)
        }, 3000)

        return (() => {
            clearTimeout()
        })
    }, [])

    console.log("play", play)
    const demo = () => {
        console.log("Data")
    }

    return (
        <div className='container h-screen'>
            <div className='row h-full'>
                <div className='col-lg-5 col-12  '>

                    <Swiper
                        slidesPerView={1}
                        autoplay={{
                            delay: 10000,

                        }
                        }
                        pagination={{
                            clickable: true,

                        }
                        }
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >

                        {Images.map((img , index) => (

                            <SwiperSlide  >
                                <video  preload="true" autoplay="autoplay" loop="loop">
                                    <source src={img} type="video/mp4" />
                                </video>
                            </SwiperSlide>


                        ))
                        }
                    </Swiper>

                </div>
                <div className='col-lg-7 col-12'>

                    <div className='lg:max-w-[450px] m-auto lg:mt-[3rem] text-center page_wrapper'>
                        <img onClick={() => setplay(true)} src={logoImage} className="lg:ml-[85px] w-[40%]" alt="logo" />
                        {term && <PopUp permition={term} Toggle={setterm} />}
                        {about && <Whatabout permition={true} Toggle={setAbout} />}
                        <div className='mt-[3rem]'>

                            <div className='text-center flex justify-center items-center mb-4'>
                                <h2 className='flex items-center  text-[30px] text-[#93C234]'>Public <span className=' text-[#E84025] ml-1'>Beta</span> <span className='text-[17px] text-black pt-3 pl-2 font-bold'> v.1.0</span></h2>
                            </div>

                            <div className='border mb-5  cursor-pointer  rounded-md flex items-center'>
                                <IoMail className={`${login.email ? 'text-[20px]  ml-2 mr-2 text-[#93C234]' : 'text-[20px] ml-2 mr-2  '}`} />
                                <input type="email" onChange={handleChange} name="email" value={login.email} placeholder='John@gmail.com' className='focus:outline-none text-[#93C234] w-full rounded-md  h-[45px] ' />
                                <HiCheckCircle className={`${login.email && 'text-[#93C234]'} text-gray-400 text-[1.5rem] mr-1`} />
                            </div>
                            <div className={` border mb-4  cursor-pointer rounded-md flex items-center`}>
                                <FaLock className={`${login.password ? 'text-[18px]  ml-2 mr-2 text-[#93C234]' : 'text-[18px] ml-2 mr-2 '}`} />
                                <input type={show ? "text" : "password"} onChange={handleChange} name="password" value={login.password} placeholder='Password' className='focus:outline-none text-[#93C234] w-full rounded-md  h-[45px] ' />
                                <HiCheckCircle className={`${login.password && 'text-[#93C234]'} text-gray-400 text-[1.5rem] mr-1`} />

                            </div>
                        </div>
                        <div className='mt-[2rem] flex items-center check_term ' >
                            <input type="checkbox" onChange={handleValue} />
                            <span className='text-[13px] ml-2 text-gray-400'>Accept terms and condition</span>
                        </div>
                        <div>
                            <div className="hover:underline text-sm mt-2 cursor-pointer text-black text-left hover:text-[#93C234]" onClick={() => setAbout(true)}>What is beta ?</div>
                        </div>

                        <div className='flex justify-between items-center mt-5 bg-gray-100 p-3'>
                            <div className='flex items-center '>
                                <div className=' border rounded-full p-2 bg-green-500 text-white'>
                                    <AiFillLock className='text-[15px]' />
                                </div>
                                <h2 className='flex flex-col text-left ml-2 font-bold text-[15px]'>
                                    SSL
                                    <br />
                                    <span className='font-medium'>encryption</span>

                                </h2>
                            </div>
                            <div className='flex items-center ml-1'>
                                <div className='  rounded-full '>
                                    <IoMdClock className='text-[2rem] text-blue-900' />
                                </div>
                                <h2 className='flex flex-col text-left ml-2 font-bold text-[15px]'>
                                    GDPR-
                                    <br />
                                    <span className='font-medium'>compliant</span>

                                </h2>
                            </div>
                            <div className='flex items-center ml-1'>
                                <div className=' rounded-full '>
                                    <ImDatabase className='text-[20px] ' />
                                </div>
                                <h2 className='flex flex-col text-left ml-2 font-bold text-[15px]'>
                                    <span className='font-medium'>Hosted in</span>
                                    Europe

                                </h2>
                            </div>
                        </div>

                        <div className='text-center mt-[1.2rem]' >
                            <Link to="/Home">
                                <button disabled={!terms ? true : false} className={`${!terms && `disabled:opacity-50 disabled:cursor-not-allowed`} opacity-1 px-9 py-3 rounded-md text-white hover:bg-[#93C234] bg-[#E84025] `}>Login
                                </button>
                            </Link>
                        </div>

                        <div className='mt-[1.2rem]'>
                            <div >
                                <span className='text-[14px] text-gray-400'>Organic Health </span>
                                <span className='text-[14px] ml-1 text-gray-400'>. Organic Health </span>
                                <span className='text-[14px] ml-1 text-gray-400'>. Organic Health </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default PublicBetaLogin