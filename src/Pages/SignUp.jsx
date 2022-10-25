import React, { useState, useEffect } from 'react'
import loginImage from '../images/login/Login.png'
import logoImage from '../images/logo.png'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import { surnames } from '../utils/enum'
import { Country, State, City } from 'country-state-city';
import { FiFacebook } from 'react-icons/fi'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import verifygif from '../images/verify-giff.gif'
import axios from 'axios'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { FcCheckmark } from 'react-icons/fc'
import { MdClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import { callPublicApi } from '../utils/CallApi'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const schema = yup.object({
    first_name: yup.string().required(),
    first_family_name: yup.string().required(),
    second_family_name: yup.string().optional(),
    third_family_name: yup.string().optional(),
    email: yup.string().email("Invalid email format").required(),
    password: yup.string().required(),
    phoneNumber: yup.string().required(),
    role: yup.string().required(),
    country: yup.string().required(),
});

const SignUp = () => {

    const [countryCode, setcountryCode] = useState("se")
    const [activeIndex, setActiveIndex] = useState(0)
    const [show, setShow] = useState(false)
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

    const { register, watch, reset, handleSubmit, control, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });




    const onHandleChange = (e) => {
        let { name, value } = e.target

        setformModel((prevmodel) => ({
            ...prevmodel,
            [name]: value
        }))
    }

    const handleSurname = (sname) => {
        setformModel((prevmodel) => ({
            ...prevmodel,
            surname: sname
        }))
    }


    const handleChangeMobile = (number) => {
        setformModel((prevmodel) => ({
            ...prevmodel,
            mobile: number
        }))
    }

    const handleChangeCountryStateCity = (value, fieldname) => {
        let updatedCities = []
        let cityName = ""
        if (fieldname === "country") {
            const updatedStates = State.getStatesOfCountry(value)
            const stateCode = updatedStates.length > 0 ? updatedStates[0].isoCode : ""
            updatedCities = City.getCitiesOfState(value, stateCode)
            cityName = updatedCities.length > 0 ? updatedCities[0].name : ""
            setall_States(updatedStates)
            setall_Cities(updatedCities)
            setformModel((prevmodel) => ({
                ...prevmodel,
                state: stateCode,
                city: cityName
            }))
        }
        else if (fieldname === "state") {
            console.log("state", value);
            updatedCities = City.getCitiesOfState(formModel.country, value)
            cityName = updatedCities.length > 0 ? updatedCities[0].name : ""
            setall_Cities(updatedCities)
            setformModel((prevmodel) => ({
                ...prevmodel,
                city: cityName
            }))
        }
        setformModel((prevmodel) => ({
            ...prevmodel,
            [fieldname]: value
        }))
    }

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
                approved: "pending",
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

            <div className='row h-full g-0 '>
                <div className='col-lg-4 left_img '>
                    <img src={loginImage} className="lg:h-full " alt="login_image" />
                </div>
                <div className='col-lg-8 pl-10 pt-6'>
                    <div className='flex justify-center lg:justify-start'>
                        <img src={logoImage} className="lg:ml-[18rem] lg:w-[20%] w-[40%] " alt="logo" />
                    </div>

                    <div className='mt-8'>

                        <div className='flex flex-wrap lg:ml-[18rem] justify-center lg:justify-start items-center  lg:mb-12 mb-5'>
                            <div className='lg:w-[4%] w-[8%] text-center relative'>
                                <div className={`${activeIndex === 1 ? 'bg-[#42946C]' : ''} rounded-full border bg-[#DB4446] text-white pt-1 text-sm  w-[30px] h-[30px] `}>01</div>
                            </div>
                            <div className={`${activeIndex === 1 ? 'bg-[#42946C]' : 'bg-gray-100'} md:w-[25%] md:-ml-5 h-1 lg:w-[28%] w-[50%]`}></div>
                            <div className='lg:w-[4%] w-[8%] text-center relative'>
                                <div className={`${activeIndex === 1 && 'rounded-full border bg-[#42946C] text-white'} pt-1 text-sm w-[30px] h-[30px] rounded-full border`}>02</div>
                            </div>

                        </div>
                    </div>
                    {

                        activeIndex === 0 ?
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div className='row  mt-[5rem]  '>

                                    <div className='col-lg-2'>
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
                                    </div>
                                    <div className='col-lg-5'>
                                        <label className='text-[14px] font-semibold flex items-center'>First Name <span className='pt-1 text-green-600 ml-2'>*</span></label>
                                        <input name="first_name" {...register('first_name')} className='w-full  font-sans  focus:outline-none border border-gray-300  py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Enter your First  Name' />
                                        {errors.first_name && (
                                            <p className="text-red-500 text-sm">{errors.first_name.message}</p>
                                        )}

                                    </div>
                                    <div className='col-lg-5'>
                                        <label className='text-[14px] font-semibold  flex items-center'>Family Name <span className='pt-1 text-green-600 ml-2'>*</span></label>

                                        <input className='w-full   font-sans  focus:outline-none border border-gray-300  py-2 px-2 placeholder:text-sm placeholder:font-medium'
                                            name="first_family_name" {...register('first_family_name')}
                                            placeholder='Enter your Family Name ' />
                                        {errors.first_family_name && (
                                            <p className="text-red-500 text-sm">{errors.first_family_name.message}</p>
                                        )}
                                    </div>

                                    <div className='col-lg-6 mb-6'>
                                        <label className='text-[14px] font-semibold  flex items-center'>Second Family Name<span className='pt-1 text-green-600 ml-2'> (Optioanl)</span> </label>

                                        <input className='w-full   font-sans  focus:outline-none border border-gray-300  py-2 px-2 placeholder:text-sm placeholder:font-medium'
                                            name="second_family_name" {...register('second_family_name')} placeholder='Enter your Second Family Name ' />
                                        {errors.second_family_name && (
                                            <p className="text-red-500 text-sm">{errors.second_family_name.message}</p>
                                        )}
                                    </div>

                                    <div className='col-lg-6 mb-6'>
                                        <label className='text-[14px] font-semibold  flex items-center'>Third Family Name <span className='pt-1 text-green-600 ml-2'> (Optioanl)</span></label>

                                        <input onChange={onHandleChange} className='w-full  font-sans  focus:outline-none border border-gray-300 
                                         py-2 px-2 placeholder:text-sm placeholder:font-medium'
                                            name="third_family_name" {...register('third_family_name')}
                                            placeholder='Enter your Third Family Name' />
                                        {errors.third_family_name && (
                                            <p className="text-red-500 text-sm">{errors.third_family_name.message}</p>
                                        )}
                                    </div>
                                    <div className='col-lg-6 mb-6'>
                                        <label className='text-[14px] font-semibold  flex items-center'>Email Address <span className='pt-1 text-green-600 ml-2'> * </span></label>

                                        <input className='w-full   font-sans  focus:outline-none border border-gray-300  py-2 px-2 placeholder:text-sm placeholder:font-medium'
                                            name="email" {...register('email')}
                                            placeholder='Enter valid email address' />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                                        )}
                                    </div>

                                    <div className='col-lg-6 mb-6'>
                                        <label className='text-[14px] font-semibold  flex items-center'>Password <span className='pt-1 text-green-600 ml-2'> * </span></label>

                                        <input
                                            className='w-full  font-sans  focus:outline-none border border-gray-300  py-2 px-2 placeholder:text-sm placeholder:font-medium'
                                            type="password"
                                            name="password" {...register('password')}
                                            placeholder='Enter your chosen password ' />
                                        {errors.password && (
                                            <p className="text-red-500 text-sm">{errors.password.message}</p>
                                        )}
                                    </div>

                                    <div className='col-lg-4'>
                                        <label className='text-[14px] font-semibold'>Roles
                                            <span className='pt-1 text-green-600 ml-2'> * </span></label>

                                        <div className="dropdown relative ">
                                            <div className='w-full  font-sans flex items-center border rounded-none border-gray-300 mt-[2px] py-[9px] px-2 '>
                                                <select {...register('role')} name="role" className='w-full  font-sans  focus:outline-none border-0  pt-0 pb-0 m-0  placeholder:text-sm placeholder:font-medium' >
                                                    <option value="">Select Role </option>
                                                    {all_Roles.map((country) => {
                                                        return (
                                                            <option  key={country} value={country}>
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
                                                <p className="text-red-500 text-sm -mt-[7px]">{errors.role.message}</p>
                                            )}

                                        </div>

                                    </div>


                                    <div className='col-lg-4 mb-4'>
                                        <label className='text-[14px] font-semibold  flex items-center'>Phone Number<span className='pt-1 text-green-600 ml-2'> * </span></label>
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
                                                    inputStyle={{ width: "100%", height: "40px", border: "1px solid #6D6E71", borderRadius: "8px", }}
                                                    buttonStyle={{ border: "1px solid #6D6E71", borderRadius: "8px 0 0 8px" }}
                                                    countryCodeEditable={false}
                                                // value={formModel.mobile}
                                                // onChange={handleChangeMobile} 
                                                />
                                            )}
                                        />
                                        {errors.phoneNumber && (
                                            <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
                                        )}
                                    </div>
                                    <div className='col-lg-4'>
                                        <label className='text-[14px] font-semibold'>Country
                                            <span className='pt-1 text-green-600 ml-2'> * </span></label>
                                        <div className="dropdown relative mb-5">
                                            <div className='w-full  font-sans flex items-center border rounded-none border-gray-300 mt-[2px] py-[9px] px-2 '>
                                                <select {...register('country')} name="country" className='border-0 pt-0 pb-0 m-0  focus:outline-none placeholder:text-sm placeholder:font-medium' >
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
                                                <p className="text-red-500 text-sm -mt-[7px]">{errors.country.message}</p>
                                            )}
                                        </div>

                                    </div>


                                    <div className='col-lg-12 text-center mt-4 items-center lg:flex justify-end mb-4' >
                                        <div className='border w-full max-w-[400px]   flex items-center lg:flex-row flex-col p-1 rounded-md border-green-500 m'>
                                            <div className='flex items-center '>

                                                <div className='bg-blue-900 text-center flex justify-center ml-2 rounded-full pt-2 text-[20px]  w-[35px] h-[35px]' >
                                                    <FiFacebook className='text-[18px] text-white' />

                                                </div>
                                                <div className='bg-blue-800 text-center flex justify-center ml-2 rounded-full pt-2 text-[20px]  w-[35px] h-[35px]' >
                                                    <BsLinkedin className='text-[18px] text-white' />

                                                </div>
                                                <div className='  bg-blue-500 text-center flex justify-center ml-2 rounded-full pt-2 text-[20px]  w-[35px] h-[35px]' >
                                                    <BsTwitter className='text-[18px] text-white' />

                                                </div>
                                            </div>
                                            <h2 className='ml-3  text-[18px] text-green-600'>SignUp with Social Media</h2>
                                        </div>
                                        <button className='border lg:mx-4 mt-3 lg:mt-0 lg:w-[20%] py-3 w-[100%] rounded-md text-white hover:bg-[#93C234] bg-green-600' type="submit ">SignUp</button>
                                    </div>

                                    <div className='mt-6 '>
                                        <span className='text-[12px] flex justify-center text-gray-400'>
                                            You have an account to login,
                                            <Link to="/signin">
                                                <span className='hover:underline text-[#42946C] text-[12px] pl-1'>Click here to login account!</span>
                                            </Link>
                                        </span>
                                    </div>

                                </div>
                            </form>
                            :
                            <div>
                                <div className='lg:ml-[16rem]'>

                                    <img src={verifygif} className="w-[50%]" alt="gif" />
                                </div>
                                <div className='flex justify-center lg:justify-center mt-8 '>
                                    <button className='w-[25%]  bg-[#42946C] p-3 rounded-md text-white'>Submit</button>

                                </div>
                            </div>
                    }




                    {/* <div className='mt-[5rem]'>
                        <div className='mt-4'>
                            <span className='text-[12px] text-gray-400'>
                                You have an account to login,
                                <Link to="/signin">
                                    <span className='hover:underline text-[#E84025] text-[12px] pl-1'>Click here to signIn the account!</span>
                                </Link>
                            </span>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default SignUp