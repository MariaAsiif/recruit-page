import React, { useState, useEffect } from 'react'
import { surnames } from '../utils/enum'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import step1 from '../images/step1.png'
import { Country, State, City } from 'country-state-city';
import axios from 'axios'


export const RecruitPage = () => {
    const [countryCode, setcountryCode] = useState("se")
    const [all_Countries] = useState(() => Country.getAllCountries())
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
            setformModel((prevmodel) => ({
                ...prevmodel,
                country: currentCountryCode,

            }))

        })();
    }, [])
    return (
        <div className='bscontainer-fluid'>
            <div className='row h-full'>
                <div className='col-lg-7 flex items-center'>
                    <div className=' w-full pt-24'>
                        <h1 className='text-center font-bold text-2xl'>Recruit</h1>
                        <div>
                            <div className='flex flex-wrap justify-center items-center lg:px-14 px-1 lg:mb-12 mb-5'>
                                <div className='lg:w-[4%] w-[8%] text-center relative'>
                                    <img src={step1} alt="step1" className='w-full h-auto' />
                                    <span className='absolute bg-white hidden lg:inline  z-10 -left-10 mt-2 w-[115px] text-[10px] font-semibold text-[#464A53] font-sans'>Personal Information</span>
                                </div>
                                <div className='bg-gradient-to-r from-[#DB4446] to-[#E9644F] h-2 lg:w-[28%] w-[22.6%]'></div>
                                <div className='lg:w-[4%] w-[8%] text-center relative'>
                                    <img src={step1} alt="step1" className='w-full h-auto' />
                                    <span className='absolute bg-white hidden lg:inline  z-10 -left-10 mt-2 w-24 text-[10px] font-semibold text-[#464A53] font-sans'>Company/Job Info</span>
                                </div>
                                <div className='bg-gradient-to-r from-[#DB4446] to-[#E9644F] h-2 lg:w-[28%] w-[22.6%]'></div>
                                <div className='lg:w-[4%] w-[8%] text-center relative'>
                                    <img src={step1} alt="step1" className='w-full h-auto' />
                                    <span className='absolute bg-white hidden lg:inline  z-10 -left-4 mt-2  w-14 text-[10px] font-semibold text-[#464A53] font-sans'>Resume</span>
                                </div>
                                <div className='bg-gradient-to-r from-[#DB4446] to-[#E9644F] h-2 lg:w-[28%] w-[22.6%]'></div>
                                <div className='lg:w-[4%] w-[8%] text-center relative'>
                                    <img src={step1} alt="step1" className='w-full h-auto' />
                                    <span className='absolute bg-white hidden lg:inline  z-10 -left-5 mt-2 w-14 text-[10px] font-semibold text-[#464A53] font-sans'>Submit</span>
                                </div>

                                <div className='w-full text-[#464A53] lg:hidden text-center font-sans text-lg font-semibold mt-2'>
                                    Personal Information
                                </div>

                            </div>


                            <div className='lg:ml-10 lg:mr-24'>
                                <div className='row'>
                                    <div className='col-lg-3  '>
                                        <div className="dropdown relative mb-5">
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
                                    <div className=' col-12  '>
                                        <input className='w-full mb-5 text-[#CCCCCC] font-sans  focus:outline-none border border-[#6D6E71] rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Enter your First  Name*' />
                                    </div>
                                    <div className=' col-12  '>
                                        <input className='w-full mb-5 text-[#CCCCCC] font-sans  focus:outline-none border border-[#6D6E71] rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Enter your FAMILY NAME (Optional)' />
                                    </div>
                                    <div className=' col-12  '>
                                        <input className='w-full mb-5 text-[#CCCCCC] font-sans  focus:outline-none border border-[#6D6E71] rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Enter your Second FAMILY NAME (Optional)' />
                                    </div>
                                    <div className=' col-12  '>
                                        <input className='w-full mb-5 text-[#CCCCCC] font-sans  focus:outline-none border border-[#6D6E71] rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Enter Email Address *' />
                                    </div>
                                    <div className=' col-12  '>
                                        <input className='w-full mb-5 text-[#CCCCCC] font-sans  focus:outline-none border border-[#6D6E71] rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Re-Enter Email Address *' />
                                    </div>
                                    <div className='col-12'>
                                        <PhoneInput
                                            country={countryCode}
                                            // enableSearch
                                            // disableSearchIcon
                                            containerStyle={{ marginBottom: "20px" }}
                                            inputStyle={{ width: "100%", height: "40px", border: "1px solid #6D6E71", borderRadius: "8px", color: "#CCCCCC" }}
                                            buttonStyle={{ border: "1px solid #6D6E71", borderRadius: "8px 0 0 8px" }}
                                            countryCodeEditable={false}
                                            value={formModel.mobile}
                                            onChange={handleChangeMobile} />
                                    </div>
                                    <div className=' col-12  '>
                                        <div className="dropdown relative mb-5">
                                            <button className="  w-full bg-white border border-[#6D6E71]  rounded-lg h-full   text-gray-400 dropdown-toggle p-2   focus:outline-blue-400 focus:ring-0 active:border-blue-400   transition duration-150 ease-in-out flex justify-between items-center whitespace-nowrap " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                {all_Countries.find((city) => city.isoCode === formModel.country)?.name}
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                    <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                                                </svg>
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
                                    <div className=' col-lg-3 col-12 '>
                                        <button className='bg-[#DB4446] hover:bg-[#93C234] px-2 py-2 mb-5 text-sm font-sans text-white w-full'>Next Step</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='col-lg-5 bg-reruitBanner lg:h-auto h-96 bg-bottom bg-no-repeat bg-cover'>
                    <div className=''>

                    </div>
                </div>
            </div>
        </div>
    )
}
