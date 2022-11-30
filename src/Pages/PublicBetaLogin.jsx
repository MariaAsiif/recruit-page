import React, { useState, useEffect } from 'react'
import slider1 from '../assets/videos/comming-soon.mp4'
// import slider2 from '../assets/videos/slider2.mp4'
// import slider3 from '../assets/videos/slider3.mp4'
// import slider4 from '../assets/videos/slider4.mp4'
// import slider5 from '../assets/videos/slider5.mp4'
import logoImage from '../images/hporx-1.png'
// import beta from '../images/beta.png'
import { IoMail } from 'react-icons/io5'
import { FaLock } from 'react-icons/fa'
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
// import { HiCheckCircle } from 'react-icons/hi'
import { Link, redirect, useNavigate } from 'react-router-dom'
// import ReactPlayer from 'react-player/lazy'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";
import PopUp from '../components/popup/popup'
import { AiFillEye, AiFillEyeInvisible, AiFillLock } from 'react-icons/ai'
import { ImDatabase } from 'react-icons/im'
import { IoMdClock } from 'react-icons/io'
import Whatabout from '../components/popup/whatAbout'
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
} from "react-share";
import { FiFacebook } from 'react-icons/fi'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { toast, ToastContainer } from 'react-toastify'
import { RiMessage2Line } from 'react-icons/ri'
// import beta from '../assets/images/beta.png'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// import axios from 'axios'
import { callPublicApi } from '../utils/CallApi'

const schema = yup.object({
    email: yup.string().email("Invalid email").required("Enter your valid email address"),
    password: yup.string().required("Enter your chosen password"),


});
const PublicBetaLogin = () => {
    // const [login, setLogin] = useState({ email: '', password: '' })
    const [show, setShow] = useState(false)
    const [showpass, setShowPass] = useState(false)
    const [term, setterm] = useState(false)
    const [terms, setterms] = useState(false)
    const [about, setAbout] = useState(false)
    const [play, setplay] = useState(false)
    const [lang, setlang] = useState("en")

    // const navigate = useNavigate();

    // const Images = [
    //     slider1,
    // slider2,
    // slider3,
    // slider4,
    // slider5,

    // ]


    const { register, watch, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

    let navigate = useNavigate()

    // const handleChange = (e) => {
    //     const { value, name } = e.target

    //     setLogin((prev) => ({
    //         ...prev,
    //         [name]: value
    //     }))
    // }



    const handleValue = (e) => {
        const { value, checked } = e.target;
        if (checked === true) {
            setterm(true)
            setterms(true)
        }
        console.log(`${value} is ${checked}`);

    }





    const onSubmit = async (values) => {
        try {
            const response = await callPublicApi(
                '/users/signin',
                'post',
                values
            );
            if (response.data.role === "customer") {
                navigate('/landingPage')
            }
            else if (response.data.role === "vendor") {
                navigate('/e-dashboard')

            }
            else if (response.data.role === "companytasker" || "individualtasker") {
                navigate('/landingPage')

            }
            else if (response.data.role === "admin") {
                navigate('/admindashboard')

            }
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        setTimeout(() => {
            setplay(true)
        }, 3000)

        return (() => {
            clearTimeout()
        })
    }, [])




    return (
        <div className='container h-screen'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
            <div className='row h-full g-0'>
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

                        {/* {Images.map((img, index) => ( */}

                        <SwiperSlide >
                            <video preload="true" autoplay="autoplay" loop="loop">
                                <source src={slider1} type="video/mp4" />
                            </video>
                        </SwiperSlide>


                        {/* )) */}
                        {/* } */}
                    </Swiper>

                </div>
                <div className='col-lg-7 col-12'>

                    <div className=' lg:text-right mt-4 lg:mt-2 text-center'>
                        <div>
                            <span className='text-[16px] text-bold'>Please Share:</span>
                            <span className='lg:mx-2 mx-1  md:mx-2 mt-1 '  >
                                <FacebookShareButton url={"https://hporx.eu/"}>
                                    <div className='border text-center flex justify-center   rounded-full pt-2 text-[22px] border-blue-800 text-blue-800 w-[30px] h-[30px]' >
                                        <FiFacebook className='text-[15px]' />
                                    </div>
                                </FacebookShareButton>
                            </span>
                            <span className='lg:mx-2 mx-1  md:mx-2 mt-1 '  >
                                <LinkedinShareButton url={"https://hporx.eu/"}>
                                    <div className='border text-center flex justify-center   rounded-full pt-2 text-[22px] border-blue-900 text-blue-900 w-[30px] h-[30px]' >
                                        <BsLinkedin className='text-[15px]' />
                                    </div>
                                </LinkedinShareButton>
                            </span>
                            <span className='lg:mx-2 mx-1  md:mx-2 mt-1 '  >
                                <TwitterShareButton url={"https://hporx.eu/"}>
                                    <div className='border text-center flex justify-center   rounded-full pt-2 text-[22px] border-blue-500 text-blue-500 w-[30px] h-[30px]' >
                                        <BsTwitter className='text-[15px]' />
                                    </div>
                                </TwitterShareButton>
                            </span>

                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='lg:max-w-[450px] w-full m-auto  text-center page_wrapper'>
                            <img onClick={() => setplay(true)} src={logoImage} className="lg:ml-[85px] w-[40%]" alt="logo" />
                            {term && <PopUp permition={term} lang={lang} Toggle={setterm} />}
                            {about && <Whatabout lang={lang} permition={true} Toggle={setAbout} />}
                            <div className='mt-[1rem]'>

                                <div className='text-center flex justify-center items-center mb-4'>
                                    <h2 className='flex items-center  text-[30px] text-[#93C234]'>Public <span className=' text-[#E84025] ml-1'>Beta</span> <span className='text-[17px] text-black pt-3 pl-2 font-bold'> v.1.1</span></h2>
                                </div>

                                <div className='border   cursor-pointer  rounded-md flex items-center'>
                                    <IoMail className={`${watch('email') ? 'text-[20px]  ml-2 mr-2 text-[#93C234]' : 'text-[20px] ml-2 mr-2  '}`} />
                                    <input type={show ? "password" : "email"} {...register('email')} name="email" placeholder='John@gmail.com' className='focus:outline-none text-[#93C234] w-full rounded-md  h-[45px] ' />
                                    {
                                        show ?
                                            <AiFillEyeInvisible onClick={() => setShow(false)} className={`${watch('email') && 'text-[#93C234]'} text-[27px] mr-2 mt-2 `} />
                                            :
                                            <AiFillEye onClick={() => setShow(true)} className={` ${watch('email') && 'text-[#93C234]'} text-[27px] mr-2 mt-2 `} />


                                    }
                                </div>
                                <div>
                                    {errors.email && (
                                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                                    )}
                                </div>
                                <div className={` border mt-2  cursor-pointer rounded-md flex items-center`}>
                                    <FaLock className={`${watch('password') ? 'text-[18px]  ml-2 mr-2 text-[#93C234]' : 'text-[18px] ml-2 mr-2 '}`} />
                                    <input type={showpass ? "text" : "password"} {...register('password')} name="password" placeholder='Password' className='focus:outline-none text-[#93C234] w-full rounded-md  h-[45px] ' />
                                    {/* <HiCheckCircle className={`${login.password && 'text-[#93C234]'} text-gray-400 text-[1.5rem] mr-1`} /> */}
                                    {
                                        showpass ?
                                            <AiFillEyeInvisible onClick={() => setShowPass(false)} className={`${watch('password') && 'text-[#93C234]'} text-[27px] mr-2 mt-2 `} />
                                            :
                                            <AiFillEye onClick={() => setShowPass(true)} className={` ${watch('password') && 'text-[#93C234]'} text-[27px] mr-2 mt-2 `} />


                                    }
                                </div>
                                {errors.password && (
                                    <p className="text-red-500 text-sm">{errors.password.message}</p>
                                )}
                            </div>
                            <div className='mt-[1.2rem] flex items-center check_term ' >
                                <input type="checkbox" className='w-[15px] h-[15px] ml-2' onChange={handleValue} />
                                <span className='text-[13px] ml-[10px] text-gray-400'>Accept terms and condition</span>
                            </div>
                            <div className='mt-[10px] flex items-center check_term ' >
                                <input type="checkbox" className='w-[15px] h-[15px] ml-2' />
                                <span className='text-[13px] ml-[10px] text-gray-400'>Remember me</span>
                            </div>
                            <div>
                                <div className="hover:underline text-sm mt-2 cursor-pointer ml-[33px] text-black text-left hover:text-[#93C234]" onClick={() => setAbout(true)}>What is beta ?</div>
                            </div>


                            {/* <button onClick={changeLanguage}>
                            {lang === "en" ? "English" : "spanish"}
                        </button> */}

                            <div className='lg:flex lg:justify-between justify-center  items-center mt-5 bg-gray-100  '>
                                <div className='flex items-center '>
                                    <div className=' border rounded-full p-2 bg-green-500 text-white'>
                                        <AiFillLock className='text-[14px]' />
                                    </div>
                                    <h2 className='flex lg:flex-col flex-row text-left ml-2 font-bold text-[15px]'>
                                        SSL
                                        <br />
                                        <span className='font-medium lg:ml-0 ml-2'> encryption</span>

                                    </h2>
                                </div>
                                <div className='flex items-center ml-1 mt-1'>
                                    <div className='  rounded-full '>
                                        <IoMdClock className='text-[2rem] text-blue-900' />
                                    </div>
                                    <h2 className='flex lg:flex-col flex-row text-left ml-2 font-bold text-[15px]'>
                                        GDPR-
                                        <br />
                                        <span className='font-medium lg:ml-0 ml-2'>compliant</span>

                                    </h2>
                                </div>
                                <div className='flex items-center ml-1 mt-2'>
                                    <div className=' rounded-full '>
                                        <ImDatabase className='text-[20px] ' />
                                    </div>
                                    <h2 className='flex lg:flex-col flex-row  text-left ml-2 font-bold text-[15px]'>
                                        <span className='font-medium lg:mr-0 mr-2'>Hosted in</span>
                                        Europe

                                    </h2>
                                </div>
                            </div>

                            <div className='text-center mt-[1.2rem]' >

                                <button type="submit" disabled={!terms ? true : false} className={`${!terms && `disabled:opacity-50 disabled:cursor-not-allowed`} opacity-1 px-9 py-3 rounded-md text-white hover:bg-[#93C234] bg-[#E84025] `}>Login
                                </button>
                                {/* <Link to="/landingPage" className={`opacity-1 px-9 py-3 rounded-md text-white hover:bg-[#93C234] bg-[#E84025] `}>Login
                                </Link> */}

                            </div>
                            <div className='mt-6 '>
                                <span className='text-[12px] flex justify-center text-gray-400'>
                                    You don't have an account ,
                                    <Link to="/betaSignup">
                                        <span className='hover:underline text-[#42946C] text-[12px] pl-1'>Click here to signup account!</span>
                                    </Link>
                                </span>
                            </div>

                            <div className='mt-[1.2rem]'>
                                <div >
                                    <span className='text-[14px] text-gray-400'>Phytomedicine </span>
                                    <span className='text-[14px] ml-1 text-gray-400'>. Botanicals </span>
                                    <span className='text-[14px] ml-1 text-gray-400'>. Cultivated Wellness </span>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
                <div className='flex'>
                    <Link to="/user-feedback">
                        <div className='user-feedback fixed bottom-[10px] right-20 w-12 '>
                            <div className="rounded-full  bg-gray-400 p-3">
                                <RiMessage2Line className='text-[22px] text-white ml-[2px]' />
                            </div>
                            <span className='text-black text-[14px] text-center ml-[-8px]'>

                                Feedback
                            </span>
                        </div>
                    </Link>

                    {/* <div className='fixed bottom-[20px] lg:left-[40%] left-[10%]'>
                        <img src={beta} className="w-10 " alt="beta_image" />
                    </div> */}
                </div>
            </div>

        </div >
    )
}

export default PublicBetaLogin