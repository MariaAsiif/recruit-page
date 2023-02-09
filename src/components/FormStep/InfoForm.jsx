import React, { useState, useEffect, useCallback } from 'react'
import { surnames } from '../../utils/enum'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import { Country, State, City } from 'country-state-city';
import Validator, { ValidationTypes as V_Type, } from 'react-form-supervalidator';
import axios from 'axios'
const InfoForm = (props) => {
    const [all_Countries, setall_Countries] = useState([]);
    const [all_States, setall_States] = useState([]);
    const [all_Cities, setall_Cities] = useState([]);
    const [countryCode, setCountryCode] = useState("")

    const [formModel, setformModel] = useState({
        surname: "Mr.",
        username: "",
        firstFname: "",
        secondFname: "",
        thirdFname: "",
        email: "",
        reemail: "",
        mobile: "",
        country: "",
        state: "",
        city: "",
        industry: "",
        interest: "",
        age: "",
        dob: ""
    })

    const [validationModel, setvalidationModel] = useState({
        usernameError: null,
        firstFnameError: null,
        emailError: null,
        reemailError: null,
        sameEmailError: null,
        mobileError: null,
        cityError: null,
        countryError: null,
        ageError: null,
    });

    const setValidation = () => {
        let myvalidation_Obj = {
            ...validationModel,
            usernameError: Validator(formModel.username, [V_Type.required], ['Please fill out this required field']),
            emailError: Validator(formModel.email, [V_Type.required], ['Please fill out this required field',]),
            reemailError: Validator(formModel.reemail, [V_Type.required], ['Please fill out this required field',]),
            mobileError: Validator(formModel.mobile, [V_Type.required], ['Please fill out this required field',]),


        };



        setvalidationModel(myvalidation_Obj);

        return Validator(myvalidation_Obj, V_Type.NullCheck);
    };

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

  

    const onNext = () => {
        let my_validation = setValidation();
        if (my_validation) {
        }
        else {

            props.handleNext(formModel)

        }
    }


    // useEffect(() => {
    //     (async () => {
    //         const response = await axios('https://api.ipregistry.co/?key=m7irmmf8ey12rx7o')
    //         const currentCountryCode = response.data.location.country.code

    //         setcountryCode(currentCountryCode.toLowerCase())
    //         const CurrentStates = State.getStatesOfCountry(currentCountryCode)
    //         const CurrentCities = City.getCitiesOfState(currentCountryCode, CurrentStates[0].isoCode)
    //         setformModel((prevmodel) => ({
    //             ...prevmodel,
    //             country: currentCountryCode,
    //             state: CurrentStates.length > 0 ? CurrentStates[0].isoCode : "",
    //             city: CurrentCities.length > 0 ? CurrentCities[0].name : ""
    //         }))
    //         setall_States(CurrentStates)
    //         setall_Cities(CurrentCities)

    //     })();
    // }, [])


    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await axios(
                    "https://api.ipregistry.co/?key=m7irmmf8ey12rx7o"
                );
                const currentCountryCode = response.data.location.country.code;

                let id = response.data.location.country.tld;
                let removeDot = id.replace(".", "");
                setCountryCode(removeDot);
                const get_countris = Country.getAllCountries();
                const CurrentStates = State.getStatesOfCountry(currentCountryCode);
                const CurrentCities = City.getCitiesOfState(
                    currentCountryCode,
                    CurrentStates[0].isoCode
                );
                setformModel((prevmodel) => ({
                    ...prevmodel,
                    country: currentCountryCode,
                    
                }))
                setall_Countries(get_countris);
                setall_States(CurrentStates);
                setall_Cities(CurrentCities);

            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, []);



    return (
        <div>
            <div className='row   h-[750px]'>
                <div className='col-lg-3  '>
                    <div className="dropdown relative mb-5">
                        <button className="  w-full bg-white border border-[lightgray]  rounded-lg h-full   text-gray-400 dropdown-toggle p-2   focus:outline-blue-400 focus:ring-0 active:border-blue-400   transition duration-150 ease-in-out flex justify-between items-center whitespace-nowrap " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
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
                <div className=' col-12 mb-5 '>
                    <input value={formModel.username} name="username" onChange={onHandleChange} className='w-full text-[#CCCCCC] font-sans  focus:outline-none border border-[lightgray] rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Enter your First  Name*' />
                    {validationModel.usernameError}
                </div>
                <div className=' col-12 mb-5 '>
                    <input className='w-full  text-[#CCCCCC] font-sans  focus:outline-none border border-[lightgray] rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Enter your FAMILY NAME (Optional)' />

                </div>
                <div className=' col-12 mb-5 '>
                    <input className='w-full  text-[#CCCCCC] font-sans  focus:outline-none border border-[lightgray] rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Enter your Second FAMILY NAME (Optional)' />
                </div>
                <div className=' col-12 mb-5 '>
                    <input type="email" value={formModel.email} name="email" onChange={onHandleChange} className='w-full  text-[#CCCCCC] font-sans  focus:outline-none border border-[lightgray] rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Enter Email Address *' />
                    {validationModel.emailError}
                </div>
                <div className=' col-12 mb-5 '>
                    <input type="email" value={formModel.reemail} name="reemail" onChange={onHandleChange} className='w-full  text-[#CCCCCC] font-sans  focus:outline-none border border-[lightgray] rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Re-Enter Email Address *' />
                    {validationModel.reemailError}
                </div>
                <div className=' col-12 mb-5 '>
                    <input className='w-full  text-[#CCCCCC] font-sans  focus:outline-none border border-[lightgray] rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Point of interest' />
                </div>
                <div className=' col-12 mb-5 '>
                    <input className='w-full  text-[#CCCCCC] font-sans  focus:outline-none border border-[lightgray] rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Current Industry' />
                </div>
                <div className='col-12  mb-5'>
                    <PhoneInput
                        country={countryCode}
                        // enableSearch
                        // disableSearchIcon
                        // containerStyle={{ marginBottom: "20px" }}
                        inputStyle={{ width: "100%", height: "40px", border: "1px solid lightgray", borderRadius: "10px !important", color: "#CCCCCC" }}
                        buttonStyle={{ border: "1px solid lightgray", borderRadius: "8px 0 0 8px" }}
                        countryCodeEditable={false}
                        value={formModel.mobile}
                        onChange={handleChangeMobile} />
                    {validationModel.mobileError}
                </div>
                    <div className="dropdown relative mb-5 col-lg-4 col-md-4">
                   
                        <select value={formModel.country} onChange={handleChangeCountry} name="country" id="country" className={`w-full  border  rounded-lg p-[10px] border-[lightgray]   `} >
                            <option value="">Select Country </option>
                            {all_Countries.map((contry) => <option value={contry.isoCode}>{contry.name}</option>)}
                        </select>

                    </div>
                    <div className="dropdown relative mb-5 col-lg-4 col-md-4">

                        <select value={formModel.state} onChange={handleState} name="state" id="state" className={`w-full  border  rounded-lg p-[10px] border-[lightgray]   `}   >
                            <option value="">Select State </option>
                            {all_States.map((contry) => <option value={contry.isoCode}>{contry.name}</option>)}
                        </select>

                    </div>
                    <div className="dropdown relative mb-5 col-lg-4 col-md-4">
                        <select value={formModel.city} onChange={onHandleChange}   name="city" id="city" className={`w-full  border  rounded-lg p-[10px] border-[lightgray]   `}     >
                            <option value="">Select city </option>
                            {all_Cities.map((contry) => <option >{contry.name}</option>)}
                        </select>
                    </div>

            </div>
            <div className='flex justify-between lg:mt-0 md:mt-0 mt-7 '>
                <div className=''>
                    <button onClick={onNext} className=' bg-[#DB4446] hover:bg-[#93C234] px-2 py-2 mb-5 text-sm font-sans text-white w-full'>{"Next Step"}</button>
                </div>
            </div>
        </div>
    )
}

export default InfoForm