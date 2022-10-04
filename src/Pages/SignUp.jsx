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

import axios from 'axios'
// import { Link } from 'react-router-dom'
const SignUp = () => {
    const [login, setLogin] = useState({ username: '', email: '', password: '', repassword: '' })
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
        dob: ""
    })


    const handleChange = (e) => {
        const { value, name } = e.target

        setLogin((prev) => ({
            ...prev,
            [name]: value
        }))
    }



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
            <div className='row h-full'>
                <div className='col-lg-4 left_img'>
                    <img src={loginImage} className="lg:h-full" alt="login_image" />
                </div>
                <div className='col-lg-8 p-10'>
                    <div className='flex justify-center lg:justify-start'>
                        <img src={logoImage} className="lg:ml-[15rem] lg:w-[20%] w-[40%] " alt="logo" />
                    </div>

                    <div className='mt-5'>
                        <div className='flex flex-wrap lg:ml-[15rem] justify-center lg:justify-start items-center  lg:mb-12 mb-5'>
                            <div className='lg:w-[4%] w-[8%] text-center relative'>
                                <div className={` rounded-full border bg-[#DB4446] text-white pt-1 text-sm  w-[30px] h-[30px] `}>01</div>
                            </div>
                            <div className={`${activeIndex === 1 ? 'bg-gradient-to-r from-[#DB4446] to-[#E9644F]' : 'bg-gray-100'} md:w-[25%] md:-ml-5 h-1 lg:w-[28%] w-[50%]`}></div>
                            <div className='lg:w-[4%] w-[8%] text-center relative'>
                                <div className={`${activeIndex === 1 && 'rounded-full border bg-[#DB4446] text-white'} pt-1 text-sm w-[30px] h-[30px] rounded-full border`}>02</div>
                            </div>

                        </div>
                    </div>

                    <div className='row  mt-[5rem]  '>

                        <div className='col-lg-2'>
                            <div className="dropdown relative mb-5">
                                <label className='text-[14px] font-semibold'>Title</label>
                                <button className="  w-full bg-white border border-[#6D6E71]  rounded-lg h-full   text-gray-400 dropdown-toggle p-2   focus:outline-blue-400 focus:ring-0 active:border-blue-400   transition duration-150 ease-in-out flex justify-between items-center whitespace-nowrap " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {surnames.find((s_name) => s_name === formModel.surname)}
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                        <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                                    </svg>
                                </button>
                                <ul className=" dropdown-menu min-w-max w-full  max-h-52 overflow-y-scroll overflow-x-hidden absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-2xl m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
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

                            <input value={formModel.username} name="username" onChange={onHandleChange} className='w-full  font-sans  focus:outline-none border border-[#6D6E71] rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Enter your First  Name' />

                        </div>
                        <div className='col-lg-5'>
                            <label className='text-[14px] font-semibold  flex items-center'>Family Name <span className='pt-1 text-green-600 ml-2'>*</span></label>

                            <input className='w-full   font-sans  focus:outline-none border border-[#6D6E71] rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Enter your Family Name ' />

                        </div>

                        <div className='col-lg-6 mb-6'>
                            <label className='text-[14px] font-semibold  flex items-center'>First Family Name<span className='pt-1 text-green-600 ml-2'> (Optioanl)</span> </label>

                            <input className='w-full   font-sans  focus:outline-none border border-[#6D6E71] rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Enter your First Family Name ' />

                        </div>

                        <div className='col-lg-6 mb-6'>
                            <label className='text-[14px] font-semibold  flex items-center'>Third Family Name <span className='pt-1 text-green-600 ml-2'> (Optioanl)</span></label>

                            <input value={formModel.username} name="username" onChange={onHandleChange} className='w-full  font-sans  focus:outline-none border border-[#6D6E71] rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Enter your Third Family Name' />

                        </div>
                        <div className='col-lg-6 mb-6'>
                            <label className='text-[14px] font-semibold  flex items-center'>Email Address <span className='pt-1 text-green-600 ml-2'> * </span></label>

                            <input className='w-full   font-sans  focus:outline-none border border-[#6D6E71] rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Enter valid email address' />

                        </div>

                        <div className='col-lg-6 mb-6'>
                            <label className='text-[14px] font-semibold  flex items-center'>Password <span className='pt-1 text-green-600 ml-2'> * </span></label>

                            <input value={formModel.username} name="username" onChange={onHandleChange} className='w-full  font-sans  focus:outline-none border border-[#6D6E71] rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Enter your chosen password ' />

                        </div>


                        <div className='col-lg-6 mb-6'>
                            <label className='text-[14px] font-semibold  flex items-center'>Phone Number<span className='pt-1 text-green-600 ml-2'> * </span></label>

                            <PhoneInput
                                country={countryCode}
                                // enableSearch
                                // disableSearchIcon
                                // containerStyle={{ marginBottom: "20px" }}
                                inputStyle={{ width: "100%", height: "40px", border: "1px solid #6D6E71", borderRadius: "8px", color: "#CCCCCC" }}
                                buttonStyle={{ border: "1px solid #6D6E71", borderRadius: "8px 0 0 8px" }}
                                countryCodeEditable={false}
                                value={formModel.mobile}
                                onChange={handleChangeMobile} />

                        </div>
                        <div className='col-lg-6 mb-6'>
                            <label className='text-[14px] font-semibold'>Country</label>

                            <div className="dropdown relative mb-5">
                                <button className="  w-full bg-white border border-[#6D6E71]  rounded-lg h-full   text-gray-400 dropdown-toggle p-2   focus:outline-blue-400 focus:ring-0 active:border-blue-400   transition duration-150 ease-in-out flex justify-between items-center whitespace-nowrap " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {all_Countries.find((city) => city.isoCode === formModel.country)?.name}
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"> <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" /></svg>
                                </button>
                                <ul className=" dropdown-menu min-w-max w-full  max-h-52 overflow-y-scroll overflow-x-hidden absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-2xl m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
                                    {all_Countries.map((country) => {
                                        return (
                                            <li key={country.name}>
                                                <span onClick={() => handleChangeCountryStateCity(country.isoCode, "country")} className=" cursor-pointer dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 "  >{country.name}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                        </div>


                        <div className='col-lg-12 text-center mt-4 items-center lg:flex justify-end' >
                            <div className='border w-full max-w-[400px]   flex items-center jus p-1 rounded-md border-green-500 m'>
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
                            <button className='border lg:mx-4 mt-3 lg:mt-0 lg:w-[20%] h-full w-[100%] rounded-md text-white hover:bg-[#93C234] bg-green-600 '>SignUp</button>
                        </div>



                    </div>



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