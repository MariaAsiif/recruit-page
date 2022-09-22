import React, { useState, useEffect } from 'react'
import { Country, State, City } from 'country-state-city';
import axios from 'axios'
import { FaChevronDown } from "react-icons/fa";
const CountryState = ({ handleNext }) => {

    const [all_Countries] = useState(() => Country.getAllCountries())
    const [all_States, setall_States] = useState([])
    const [all_Cities, setall_Cities] = useState([])
    const [formModel, setformModel] = useState({
        country: "AF",
        state: "BDS",

    })


    const handleChangeCountry = (e) => {
        let { value } = e.target
        const updatedStates = State.getStatesOfCountry(value)
        setall_States(updatedStates)
        setformModel((prevmodel) => ({
            ...prevmodel,
            country: value,

        }))



    }


    const handleState = (e) => {
        let { value } = e.target
        const updatedCities = City.getCitiesOfState(formModel.country, value)
        setformModel((prevmodel) => ({
            ...prevmodel,
            state: value,

        }))
        setall_Cities(updatedCities)

    }

    


    useEffect(() => {
        (async () => {
            const response = await axios('https://api.ipregistry.co/?key=m7irmmf8ey12rx7o')
            const currentCountryCode = response.data.location.country.code
            const updatedStates = State.getStatesOfCountry(currentCountryCode)
            setall_States(updatedStates)
            setformModel((prevmodel) => ({
                ...prevmodel,
                country: currentCountryCode,

            }))

        })();
    }, [])
    return (
        <div>
            <div className='w-full lg:px-20  px-2 py-5 text-center'>
                <h1 className='text-white font-light text-center text-xl mb-5'>Please select your country and state and city</h1>
                <div>
                    <div className="dropdown relative mb-5">
                        <select value={formModel.country} onChange={handleChangeCountry} name="country" id="country" className={`w-full bg-transparent h-[40px] border border-white rounded-lg pl-1 `} >
                            <option value="">Select Country </option>
                            {all_Countries.map((contry) => <option value={contry.isoCode}>{contry.name}</option>)}
                        </select>

                    </div>
                    <div className="dropdown relative mb-5">

                        <select value={formModel.state} onChange={handleState} name="state" id="state" className={`w-full bg-transparent h-[40px] border border-white rounded-lg pl-1 `}   >
                            <option value="">Select State </option>
                            {all_States.map((contry) => <option value={contry.isoCode}>{contry.name}</option>)}
                        </select>

                    </div>
                    <div className="dropdown relative mb-5">
                        <select value={formModel.city}  name="city" id="city" className={`w-full bg-transparent h-[40px] border border-white rounded-lg pl-1 `}     >
                            <option value="">Select city </option>
                            {all_Cities.map((contry) => <option >{contry.name}</option>)}
                        </select>
                    </div>
                </div>
                <button onClick={() => handleNext()} className='bg-white text-[#00492C]  px-2 py-2 rounded-full  font-medium tracking-widest mb-5 w-4/5 m-auto block'>Next</button>
            </div>
        </div>
    )
}

export default CountryState