import React, { useState, useEffect } from 'react'
import { surnames } from '../../utils/enum'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import { Country } from 'country-state-city';
import axios from 'axios'
const InfoForm = ({ handleNext }) => {
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
        <div>
            <div className='row'>
                <div className='col-lg-6  '>
                    <div className="dropdown relative ">
                        <label className='text-sm text-gray-400'>Enter your First Name <span>*</span></label>
                        <input className='w-full mb-5  font-sans  focus:outline-none border-b border-[#6D6E71] py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='First Name' />
                    </div>
                </div>
                <div className=' col-lg-6 '>
                    <label className='text-sm text-gray-400'>Enter your First Family Name <span>*</span></label>
                    <input className='w-full mb-5  font-sans  focus:outline-none border-b border-[#6D6E71] py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Name' />
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6  '>
                    <div className="dropdown relative ">
                        <label className='text-sm text-gray-400'>Enter your Second Family Name <span>*</span></label>
                        <input className='w-full mb-5  font-sans  focus:outline-none border-b border-[#6D6E71] py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Name' />
                    </div>
                </div>
                <div className=' col-lg-6 '>
                    <label className='text-sm text-gray-400'>Enter your Third Family Name <span>*</span></label>
                    <input className='w-full mb-5  font-sans  focus:outline-none border-b border-[#6D6E71] py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder=' Name' />
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <label className='text-sm text-gray-400'> Mobile Number<span>*</span></label>
                    <PhoneInput
                        country={countryCode}
                        // enableSearch
                        // disableSearchIcon
                        containerStyle={{ marginBottom: "20px" , marginTop:'10px' }}
                        inputStyle={{ width: "100%", height: "40px",  color: "#CCCCCC" }}
                        buttonStyle={{ borderBottom: "1px solid #6D6E71", borderRadius: "8px 0 0 8px" }}
                        countryCodeEditable={false}
                        value={formModel.mobile}
                        onChange={handleChangeMobile} />
                </div>
                <div className=' col-lg-6 '>
                    <label className='text-sm text-gray-400'>Enter your Email Address <span>*</span></label>
                    <input type="email" className='w-full mb-5  font-sans  focus:outline-none border-b border-[#6D6E71] py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Email' />
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6  '>
                    <div className="dropdown relative mb-5">
                    <label className='text-sm text-gray-400'>Enter Remail Address <span>*</span></label>
                        <input className='w-full mb-5  font-sans  focus:outline-none border-b border-[#6D6E71] py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Re-Email' type="email" />
                    </div>
                </div>
                <div className=' col-lg-6 '>
                <label className='text-sm text-gray-400'>Location </label>
                        <input className='w-full mb-5  font-sans  focus:outline-none border-b border-[#6D6E71] py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Location*' />
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6  '>
                    <div className="dropdown relative ">
                        <label className='text-sm text-gray-400'>Postal Code <span>*</span></label>
                        <input className='w-full mb-5  font-sans  focus:outline-none border-b border-[#6D6E71] py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='postal code' />
                    </div>
                </div>
                <div className=' col-lg-6 '>
                <label className='text-sm text-gray-400'>Address<span>*</span></label>
                        <input className='w-full mb-5  font-sans  focus:outline-none border-b border-[#6D6E71] py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Address' />
                </div>
            </div>

            <div className='flex justify-between '>

                <div className=''>
                    <button onClick={() => handleNext()} className=' bg-[#DB4446] hover:bg-[#93C234] px-2 py-2 mb-5 text-sm font-sans text-white w-full'>{"Next Step"}</button>
                </div>
            </div>

        </div>
    )
}

export default InfoForm