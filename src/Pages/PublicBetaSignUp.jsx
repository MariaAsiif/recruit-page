import React, { useState, useEffect } from 'react'
import slider1 from '../assets/videos/comming-soon.mp4'
// import slider2 from '../assets/videos/slider2.mp4'
// // import slider3 from '../assets/videos/slider3.mp4'
// import slider4 from '../assets/videos/slider4.mp4'
// import slider5 from '../assets/videos/slider5.mp4'
import logoImage from '../images/hporx-1.png'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
// import { surnames } from '../utils/enum'
import { Country, State, City } from 'country-state-city';
// import beta from '../images/beta.png'
// import { IoMail } from 'react-icons/io5'
// import { FaLock } from 'react-icons/fa'
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
// import { HiCheckCircle } from 'react-icons/hi'
import { Link } from 'react-router-dom'
// import ReactPlayer from 'react-player/lazy'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";
// import PopUp from '../components/popup/popup'
// import { AiFillEye, AiFillEyeInvisible, AiFillLock } from 'react-icons/ai'
// import { ImDatabase } from 'react-icons/im'
// import { IoMdClock } from 'react-icons/io'
// import Whatabout from '../components/popup/whatAbout'
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
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios'
import { callPublicApi } from '../utils/CallApi'
import EmailVerify from '../components/Popups/EmailVerify'
import EmailOtp from '../components/Popups/EmailOtp'


const schema = yup.object({
    first_name: yup.string().required(),
    first_family_name: yup.string().required(),
    second_family_name: yup.string().optional(),
    third_family_name: yup.string().optional(),
    email: yup.string().email("Invalid email format").required(),
    password: yup.string().required(),
    phoneNumber: yup.string().required(),
    role: yup.string().required(),
    // country: yup.string().required(),
});

const PublicBetaSignUp = () => {


    // const Images = [
    //     slider1,
    //     slider2,
    //     // slider3,
    //     slider4,
    //     slider5,

    // ]


    const [countryCode, setcountryCode] = useState("se")
    const [email, setEmail] = useState('')
    const [showEmail, setShowEmail] = useState(false)
    const [all_Countries] = useState(() => Country.getAllCountries())
    const [all_States, setall_States] = useState(() => State.getStatesOfCountry("AF"))
    const [all_Cities, setall_Cities] = useState(() => City.getCitiesOfState("AF", "BDS"))
    const [formModel, setformModel] = useState({
        surname: "Mr.",
        username: "",
        firstFname: "",
        secondFname: "",
        thirdFname: "",
        email: "",
        reemail: "",
        mobile: "",
        country: "AF",
        state: "BDS",
        city: "Ashkāsham",
        industry: "",
        interest: "",
        age: "",
        dob: "",
        password: ""
    })

    const all_Roles = ["vendors", "manufacturer", "customer", "doctor", "finance admin", "superadmin", "HR", "admin"]

    const { register, reset, handleSubmit, control, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });



    const onHandleChange = (e) => {
        let { name, value } = e.target

        setformModel((prevmodel) => ({
            ...prevmodel,
            [name]: value
        }))
    }

    // const handleSurname = (sname) => {
    //     setformModel((prevmodel) => ({
    //         ...prevmodel,
    //         surname: sname
    //     }))
    // }


    // const handleChangeMobile = (number) => {
    //     setformModel((prevmodel) => ({
    //         ...prevmodel,
    //         mobile: number
    //     }))
    // }

    // const handleChangeCountryStateCity = (value, fieldname) => {
    //     let updatedCities = []
    //     let cityName = ""
    //     if (fieldname === "country") {
    //         const updatedStates = State.getStatesOfCountry(value)
    //         const stateCode = updatedStates.length > 0 ? updatedStates[0].isoCode : ""
    //         updatedCities = City.getCitiesOfState(value, stateCode)
    //         cityName = updatedCities.length > 0 ? updatedCities[0].name : ""
    //         setall_States(updatedStates)
    //         setall_Cities(updatedCities)
    //         setformModel((prevmodel) => ({
    //             ...prevmodel,
    //             state: stateCode,
    //             city: cityName
    //         }))
    //     }
    //     else if (fieldname === "state") {
    //         console.log("state", value);
    //         updatedCities = City.getCitiesOfState(formModel.country, value)
    //         cityName = updatedCities.length > 0 ? updatedCities[0].name : ""
    //         setall_Cities(updatedCities)
    //         setformModel((prevmodel) => ({
    //             ...prevmodel,
    //             city: cityName
    //         }))
    //     }
    //     setformModel((prevmodel) => ({
    //         ...prevmodel,
    //         [fieldname]: value
    //     }))
    // }

    const onSubmit = async (data) => {
        try {
            let option = {
                first_name: data.first_name,
                first_family_name: data.first_family_name,
                second_family_name: data.second_family_name,
                third_family_name: data.third_family_name,
                email: data.email,
                password: data.password,
                phoneNumber: data.phoneNumber,
                channel: "sms",
                role: data.role,
                // approved: "pending",
                location: {
                    type: "Point",
                    "coordinates": [
                        74.28911289869138,
                        31.624848273644956
                    ]
                }
            }

            const res = await callPublicApi('/users/signup', 'post', option)
            if (res.status === 'Success') {
                toast.success(res.message);
                setEmail(data.email)
                setShowEmail(true)
                reset();
            } else {
                toast.error(res.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        (async () => {
            const response = await axios('https://api.ipregistry.co/?key=m7irmmf8ey12rx7o')
            const currentCountryCode = response.data.location.country.code

            setcountryCode(currentCountryCode.toLowerCase())
            const CurrentStates = State.getStatesOfCountry(currentCountryCode)
            const CurrentCities = City.getCitiesOfState(currentCountryCode, CurrentStates[0].isoCode)
            setformModel((prevmodel) => ({
                ...prevmodel,
                country: currentCountryCode,
                state: CurrentStates.length > 0 ? CurrentStates[0].isoCode : "",
                city: CurrentCities.length > 0 ? CurrentCities[0].name : ""
            }))
            setall_States(CurrentStates)
            setall_Cities(CurrentCities)

        })();
    }, [])






    return (
        <div className='container h-screen'>
            { showEmail && <EmailOtp permition={showEmail} Toggle={setShowEmail} email={email}/> }
            
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

                            <SwiperSlide  >
                                <video preload="true" autoplay="autoplay" loop="loop" className={`${Object.keys(errors).length > 0  ? 'h-[770px]' : 'h-[700px]'}`}>
                                    <source src={slider1} type="video/mp4" />
                                </video>
                            </SwiperSlide>


                        {/* ))
                        } */}
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
                    <div className="flex justify-center flex-col items-center mt-[2rem]">
                        <img src={logoImage} className=" w-[25%]" alt="logo" />
                        <div className='text-center flex justify-center items-center mb-4'>
                            <h2 className='flex items-center  text-[30px] text-[#93C234]'>Public <span className=' text-[#E84025] ml-1'>Beta</span> <span className='text-[17px] text-black pt-3 pl-2 font-bold'> v.1.1</span></h2>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className='row lg:max-w-[700px] w-full m-auto  text-center mt-[1rem]  '>

                            {/* <div className='col-lg-2'>
                                        <div className="dropdown relative mb-5">
                                            <label className='text-[14px] font-semibold'>Title</label>
                                            <button className="  w-full bg-white border border-[gray-300  h-full   text-gray-400 dropdown-toggle p-2   focus:outline-blue-400 focus:ring-0 active:border-blue-400   transition duration-150 ease-in-out flex justify-between items-center whitespace-nowrap " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                {surnames.find((s_name) => s_name === formModel.surname)}
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                    <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                                                </svg>
                                            </button>
                                            <ul className=" dropdown-menu min-w-max w-full  max-h-52 overflow-y-scroll overflow-x-hidden absolute hidden bg-white text-base z-50 float-left py-2 list-none gray-300  shadow-2xl m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
                                                {surnames.map((sur, i) => {
                                                    return (
                                                        <li key={i} >
                                                            <span onClick={() => handleSurname(sur)} className=" cursor-pointer dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 "  >{sur}</span>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div> */}
                            <div className='col-lg-6 mb-2'>
                                <label className='text-[14px] font-semibold flex items-center'>First Name <span className='pt-1 text-green-600 ml-2'>*</span></label>
                                <input name="first_name" {...register('first_name')} className='w-full  font-sans  focus:outline-none border border-gray-300 rounded-md  py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Enter your First  Name' />
                                {errors.first_name && (
                                    <p className="text-red-500 text-sm flex justify-startm">{errors.first_name.message}</p>
                                )}

                            </div>
                            <div className='col-lg-6 mb-2'>
                                <label className='text-[14px] font-semibold  flex items-center'>Family Name <span className='pt-1 text-green-600 ml-2'>*</span></label>

                                <input className='w-full   font-sans  focus:outline-none border border-gray-300 rounded-md  py-2 px-2 placeholder:text-sm placeholder:font-medium'
                                    name="first_family_name" {...register('first_family_name')}
                                    placeholder='Enter your Family Name ' />
                                {errors.first_family_name && (
                                    <p className="text-red-500 text-sm flex justify-startm">{errors.first_family_name.message}</p>
                                )}
                            </div>

                            <div className='col-lg-6 mb-2'>
                                <label className='text-[14px] font-semibold  flex items-center'>Second Family Name<span className='pt-1 text-green-600 ml-2'> (Optioanl)</span> </label>

                                <input className='w-full   font-sans  focus:outline-none border border-gray-300 rounded-md  py-2 px-2 placeholder:text-sm placeholder:font-medium'
                                    name="second_family_name" {...register('second_family_name')} placeholder='Enter your Second Family Name ' />
                                {errors.second_family_name && (
                                    <p className="text-red-500 text-sm flex justify-startm">{errors.second_family_name.message}</p>
                                )}
                            </div>

                            <div className='col-lg-6 mb-2'>
                                <label className='text-[14px] font-semibold  flex items-center'>Third Family Name <span className='pt-1 text-green-600 ml-2'> (Optioanl)</span></label>

                                <input onChange={onHandleChange} className='w-full  font-sans  focus:outline-none border border-gray-300 rounded-md 
                                         py-2 px-2 placeholder:text-sm placeholder:font-medium'
                                    name="third_family_name" {...register('third_family_name')}
                                    placeholder='Enter your Third Family Name' />
                                {errors.third_family_name && (
                                    <p className="text-red-500 text-sm flex justify-startm">{errors.third_family_name.message}</p>
                                )}
                            </div>
                            <div className='col-lg-6 mb-2'>
                                <label className='text-[14px] font-semibold  flex items-center'>Email Address <span className='pt-1 text-green-600 ml-2'> * </span></label>

                                <input className='w-full   font-sans  focus:outline-none border border-gray-300 rounded-md  py-2 px-2 placeholder:text-sm placeholder:font-medium'
                                    name="email" {...register('email')}
                                    placeholder='Enter valid email address' />
                                {errors.email && (
                                    <p className="text-red-500 text-sm flex justify-startm">{errors.email.message}</p>
                                )}
                            </div>

                            <div className='col-lg-6 mb-2'>
                                <label className='text-[14px] font-semibold  flex items-center'>Password <span className='pt-1 text-green-600 ml-2'> * </span></label>

                                <input
                                    className='w-full  font-sans  focus:outline-none border border-gray-300 rounded-md  py-2 px-2 placeholder:text-sm placeholder:font-medium'
                                    type="password"
                                    name="password" {...register('password')}
                                    placeholder='Enter your chosen password ' />
                                {errors.password && (
                                    <p className="text-red-500 text-sm flex justify-startm">{errors.password.message}</p>
                                )}
                            </div>

                            <div className='col-lg-6'>
                                <label className='text-[14px] font-semibold flex justify-start'>Roles
                                    <span className='pt-1 text-green-600 ml-2'> * </span></label>

                                <div className="dropdown relative ">
                                    <div className='w-full  font-sans flex items-center border rounded-md border-gray-300 mt-[2px] py-[9px] px-2 h-[45px]'>
                                        <select {...register('role')} name="role" className='w-full  font-sans  focus:outline-none border-0  pt-0 pb-0 m-0  placeholder:text-sm placeholder:font-medium' >
                                            <option value="">Select Role </option>
                                            {all_Roles.map((country) => {
                                                return (
                                                    <option key={country} value={country}>
                                                        {country}

                                                    </option>
                                                )
                                            })}


                                        </select>
                                        <svg className="shrink-0 ml-1 fill-current text-slate-400" width="11" height="7" viewBox="0 0 11 7">
                                            <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
                                        </svg>
                                    </div>
                                    {errors.role && (
                                        <p className="text-red-500 text-sm flex justify-start ">{errors.role.message}</p>
                                    )}

                                </div>

                            </div>


                            <div className='col-lg-6 mb-4'>
                                <label className='text-[14px] font-semibold  flex items-center mb-[2px]'>Phone Number<span className='pt-1 text-green-600 ml-2'> * </span></label>
                                <Controller
                                    control={control}
                                    name="phoneNumber"
                                    {...register('phoneNumber')}
                                    render={({ field: { ref, ...field } }) => (
                                        <PhoneInput
                                            {...field}
                                            country={countryCode}
                                            // enableSearch
                                            // disableSearchIcon
                                            // containerStyle={{ marginBottom: "20px" }}
                                            inputStyle={{ width: "100%", height: "40px", border: "1px solid #6D6E71", borderRadius: "20px", }}
                                            buttonStyle={{ border: "1px solid #6D6E71", borderRadius: "8px 0 0 8px" }}
                                            countryCodeEditable={false}
                                        // value={formModel.mobile}
                                        // onChange={handleChangeMobile} 
                                        />
                                    )}
                                />
                                {errors.phoneNumber && (
                                    <p className="text-red-500 text-sm flex justify-startm">{errors.phoneNumber.message}</p>
                                )}
                            </div>
                            {/* <div className='col-lg-6'>
                                <label className='text-[14px] font-semibold flex justify-start'>Country
                                    <span className='pt-1 text-green-600 ml-2'> * </span></label>
                                <div className="dropdown relative mb-5">
                                    <div className='w-full  font-sans flex items-center border rounded-md border-gray-300 mt-[2px] py-[9px] px-2 '>
                                        <select {...register('country')} name="country" className='border-0 pt-0 pb-0 m-0 h-[25px] focus:outline-none placeholder:text-sm placeholder:font-medium' >
                                            <option value="">Select Country </option>
                                            {all_Countries.map((country) => {
                                                return (
                                                    <option key={country.name} value={country.isoCode}>
                                                        {country.name}

                                                    </option>
                                                )
                                            })}


                                        </select>
                                        <svg className="shrink-0 ml-1 fill-current text-slate-400" width="11" height="7" viewBox="0 0 11 7">
                                            <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
                                        </svg>
                                    </div>
                                    {errors.country && (
                                        <p className="text-red-500 text-sm flex justify-start ">{errors.country.message}</p>
                                    )}
                                </div>

                            </div> */}

                            <div className='text-center mt-[1.2rem]' >

                                <button  type="submit"  className={`disabled:opacity-50 disabled:cursor-not-allowed opacity-1 px-9 py-3 rounded-md text-white hover:bg-[#93C234] bg-[#E84025] `}>SignUp
                                </button>
                                {/* <Link to="/landingPage" className={`opacity-1 px-9 py-3 rounded-md text-white hover:bg-[#93C234] bg-[#E84025] `}>Login
                                </Link> */}

                            </div>

                            <div className='mt-6 '>
                                <span className='text-[12px] flex justify-center text-gray-400'>
                                    You have an account to login,
                                    <Link to="/">
                                        <span className='hover:underline text-[#42946C] text-[12px] pl-1'>Click here to login account!</span>
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

export default PublicBetaSignUp