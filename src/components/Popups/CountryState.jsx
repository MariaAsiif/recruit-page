import React, { useState, useEffect } from 'react'
import { Country } from 'country-state-city';
import axios from 'axios'
import { FaChevronDown } from "react-icons/fa";
const CountryState = ({ handleNext }) => {

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
        <div>
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
                <button onClick={() => handleNext()} className='bg-white text-[#00492C]  px-2 py-2 rounded-full  font-medium tracking-widest mb-5 w-4/5 m-auto block'>Next</button>
            </div>
        </div>
    )
}

export default CountryState