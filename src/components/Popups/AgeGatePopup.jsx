import React, { useState, useEffect } from 'react'
import { Country } from 'country-state-city';
import axios from 'axios'
import { FaChevronDown } from "react-icons/fa";

const AgeGatePopup = (props) => {
    const [all_Countries] = useState(() => Country.getAllCountries())
    const [formModel, setformModel] = useState({

        country: "AF",
        state: "BDS",

    })
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

            setformModel((prevmodel) => ({
                ...prevmodel,
                country: currentCountryCode,

            }))

        })();
    }, [])
    return (
        <div style={{ display: props.isOpen ? "block" : "", background: "#00000091" }} className="modal fade show fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog  modal-xl relative w-auto pointer-events-none">
                <div className="modal-content   border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">

                    <div className='bscontainer-fluid bg-[#00492C] rounded-md'>
                        <div className='row h-16 border'>
                            <div className='col-lg-6'>
                                asdfasfd
                            </div>
                            <div className='col-lg-6 text-right'>
                                <button type="button"
                                    onClick={props.onClose}
                                    class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        </div>
                        <div className='row  '>
                            <div className='col-lg-6 flex items-center lg:py-14 '>
                                <div className='w-full lg:border-r-2 lg:border-b-0 border-b-2'>
                                    <div className='flex flex-wrap g-0 mb-9'>
                                        <div className='lg:w-[24%] w-[10%] text-right'>
                                            <h1 className='text-white text-xl font-light'>Win</h1>
                                        </div>
                                        <div className='lg:w-[53%] w-[80%] text-center pt-5'>
                                            <div>
                                                <h1 className='text-white text-9xl font-medium -m-3'>1000</h1>
                                                <h1 className='text-white text-2xl font-light'>Gift Card or Cash Prize</h1>
                                            </div>
                                        </div>
                                        <div className='lg:w-[23%] w-[10%]  flex items-end'>
                                            <h1 className='text-white text-5xl font-medium mb-5'>$</h1>
                                        </div>
                                    </div>
                                    <h1 className='text-center text-[#b4b4b4] lg:px-12 px-2 leading-5 mb-10 lg:text-xs text-base font-light'>You have oppertunity to do is submit a short 15-30 second testimonials video on how cannabis has helped you</h1>
                                    <div className='text-center mb-10'>
                                        <label className='bg-green-800 cursor-pointer text-white font-light text-xs px-9 py-3 rounded-md  '>
                                            Choose file
                                            <input type="file" hidden />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 flex items-center'>
                                <div className='w-full lg:px-32  px-2 py-5'>
                                    <h1 className='text-white font-light text-center text-xl mb-5'>Please select your country and state</h1>
                                    <div>
                                        <div className="dropdown relative mb-5">
                                            <button className="  w-full bg-transparent border-2 border-[#b4b4b4]  rounded-lg h-full   text-[#b4b4b4] dropdown-toggle p-2   focus:outline-blue-400 focus:ring-0 active:border-blue-400   transition duration-150 ease-in-out flex justify-between items-center whitespace-nowrap " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                {all_Countries.find((city) => city.isoCode === formModel.country)?.name}
                                                <FaChevronDown />
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
                                        <div className="dropdown relative mb-5">
                                            <button className="  w-full bg-transparent border-2 border-[#b4b4b4]  rounded-lg h-full   text-[#b4b4b4] dropdown-toggle p-2   focus:outline-blue-400 focus:ring-0 active:border-blue-400   transition duration-150 ease-in-out flex justify-between items-center whitespace-nowrap " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                {all_Countries.find((city) => city.isoCode === formModel.country)?.name}
                                                <FaChevronDown />
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
                                    <button className='bg-white text-[#00492C]  px-2 py-2 rounded-full  font-medium tracking-widest mb-5 w-4/5 m-auto block'>Next</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default AgeGatePopup