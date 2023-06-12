import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FcCheckmark } from 'react-icons/fc'
import { MdClose } from 'react-icons/md';
import { ToastContainer } from 'react-toastify';
import { Country, State, City } from 'country-state-city';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { callApi } from '../../../utils/CallApi';
import { Link } from 'react-router-dom';
const schema = yup.object({
    business: yup.string().required(),
    content: yup.string().required(),
    gender: yup.string().required(),
    longitude: yup.string().required(),
    email: yup.string().email('Invalid email format').required(),
    latitude: yup.string().required(),
    zipcode: yup.string().required(),
    website: yup.string().required(),
    mobile: yup.string().required(),
    address: yup.string().required(),
});

const CreateServices = () => {

    const [all_Countries, setall_Countries] = useState([])
    const [all_States, setall_States] = useState([])
    const [all_Cities, setall_Cities] = useState([])
    const [countryCode, setCountryCode] = useState("")
    const [recruitModel, setrecruitModel] = useState({
        fullname: "",
        firstFname: "",
        secondFname: "",
        thirdFname: "",
        email: "",
        reEmail: "",
        city: "",
        state: "",
        industry: "",
        country: "",
        // postcode:"",
        position: "",
        mobile: "",
        age: "",
    })



    const { register, watch, handleSubmit, control, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });


    const handleChange = (e) => {
        let { name, value } = e.target
        if (name === "country") {
            const updatedStates = State.getStatesOfCountry(value)
            const stateCode = updatedStates.length > 0 ? updatedStates[0].isoCode : ""
            const updatedCities = City.getCitiesOfState(value, stateCode)
            setall_States(updatedStates)
            setall_Cities(updatedCities)

        }
        else if (name === "state") {
            const updatedStates = State.getStatesOfCountry(value)
            const stateCode = updatedStates.length > 0 ? updatedStates[0].isoCode : ""
            const updatedCities = City.getCitiesOfState(value, stateCode)
            setall_Cities(updatedCities)

        }
        else {
            setrecruitModel((prevmodel) => ({
                ...prevmodel,
                [name]: value
            }))
        }
    }


    const onSubmit = async (e) => {
        e.preventDefault()
        try {

            let payload = {
                businessName: "data.title",
                content: "data.content",
                gender: "data.gender",
                category: "Associations & Clubs",
                contactNo: "data.mobile",
                address: "data.address",
                state: "abc",
                zip: "123",
                email: "a@a.com",
                website: "www.a.com",
                facebook: "www.facebook.com",
                twitter: "www.twitter.com",
                instagram: "www.instagram.com",
                linkedin: "www.linkedin.com",

                "isIndividual": false,
                "serviceCountry": "Spain",
                "serviceCity": "Alava",
                "serviceLocation": {
                    "type": "Point",
                    "coordinates": [
                        -2.681792,
                        42.859165
                    ]
                }
            }

            const res = await callApi("/locateservices/createService", "post", payload)
            console.log("Rs", res)
        }
        catch (err) { }

    }





    useEffect(() => {
        try {
            (async () => {
                const response = await axios('https://api.ipregistry.co/?key=m7irmmf8ey12rx7o')
                const currentCountryCode = response.data.location.country.code
                let id = response.data.location.country.tld
                let removeDot = id.replace('.', "")
                setCountryCode(removeDot)
                const get_countris = Country.getAllCountries()
                const CurrentStates = State.getStatesOfCountry(currentCountryCode)
                const CurrentCities = City.getCitiesOfState(currentCountryCode, CurrentStates[0].isoCode)
                setrecruitModel((prevmodel) => ({
                    ...prevmodel,
                    country: currentCountryCode,
                    state: CurrentStates.length > 0 ? CurrentStates[0].isoCode : "",
                    city: CurrentCities.length > 0 ? CurrentCities[0].name : ""
                }))
                setall_Countries(get_countris)
                setall_States(CurrentStates)
                setall_Cities(CurrentCities)

            })();
        } catch (error) {
            console.log(error);
        }

    }, [])




    return (
        <div className='bscontainer-fluid'>
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
            <form >
                <div className='row p-11'>

                    <div className='col-12  mb-5'>
                        <div className='mb-3'>
                            <ul className="inline-flex flex-wrap text-sm font-medium">
                                <li className="flex items-center">
                                    <Link to="/admindashboard" className="text-slate-500 hover:text-indigo-500" >Dashboard </Link>
                                    <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                    </svg>
                                </li>
                                <li className="flex items-center">
                                    <Link to="/locate/services" className="text-slate-500 hover:text-indigo-500" href="#0">Services</Link>
                                    <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                    </svg>
                                </li>
                                <li>
                                    <div className="text-slate-500 hover:text-indigo-500" >Create Services</div>

                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className='col-12 mb-6'>
                        <header className="py-4">
                            <h2 className="font-semibold text-slate-800">Add new Service</h2>
                        </header>
                    </div>

                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="business">Business </label>
                        <div className='absolute right-10 top-10'>
                            {!errors.business && watch('business') ? <FcCheckmark /> : errors.business ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <div className='text-gray-500 text-base bg-light-gray  h-11'>
                            <input name='business'
                                type="text"
                                {...register('business')}
                                placeholder='business'
                                className={`border p-2 focus:outline-blue-500 rounded-sm w-full h-full  ${errors.business && "border-red-400"} `}
                            />
                            {errors.business && (
                                <p className="text-red-500 text-sm">{errors.business.message}</p>
                            )}
                            <span hidden={watch('business')} className='absolute  text-red-400 font-medium text-lg top-[36px] left-[98px]'>*</span>
                            <span className={watch('business') ? `visible absolute top-1/4 right-3` : `invisible`}>
                                <FcCheckmark />
                            </span>

                        </div>
                    </div>

                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="salary">Content</label>
                        <div className='absolute right-5 top-10'>
                            {!errors.content && watch("content") ? <FcCheckmark /> : errors.content ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <input
                            {...register('content')}
                            autoComplete="off"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.content && "border-red-400" }`}
                            name='content' id="content"
                            type="text"
                            placeholder="Content"

                        />
                        <span hidden={watch("content")} className='absolute text-red-400 text-lg font-medium  top-9 left-[95px]'>*</span>

                        {errors.content && (
                            <p className="text-red-500 text-sm">{errors.content.message}</p>
                        )}
                    </div>

                    <div className='col-lg-4 mb-4 relative'>

                        <label className="block text-sm font-medium mb-1" htmlFor="gender">Gender </label>
                        <div className='absolute right-5 top-10'>
                            {!errors.gender && watch("gender") ? <FcCheckmark className='mr-5' /> : errors.gender ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <select
                            // value={recruitModel.gender}
                            // onChange={handleChange}
                            {...register('gender')}
                            name="gender"
                            id="gender"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full   ${errors.gender && 'border-red-500'}`}
                        >
                            <option disabled>Select Gender </option>
                            <option>Male</option>
                            <option>FeMale</option>


                        </select>
                        {errors.gender && (
                            <p className="text-red-500 text-sm">{errors.gender.message}</p>
                        )}
                    </div>
                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                        <div className='absolute right-10 top-10'>
                            {!errors.email && watch('email') ? <FcCheckmark /> : errors.email ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <input
                            {...register('email')}
                            autoComplete="off"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.email && 'border-red-500'}`}
                            name='email' id="email"
                            placeholder="Email Address"
                            type="text" />
                        <span hidden={watch('email')} className='absolute text-red-400 text-lg font-medium  top-9 left-[150px]'>*</span>

                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="longitude">Longitude </label>
                        <div className='absolute right-5 top-10'>
                            {!errors.longitude && watch('longitude') ? <FcCheckmark /> : errors.longitude ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <input
                            {...register('longitude')}
                            autoComplete="off"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.longitude && 'border-red-500'}`}
                            name='longitude' id="longitude"
                            placeholder="Longitude"
                            type="text"
                        />
                        <span hidden={watch('longitude')} className='absolute text-red-400 text-lg font-medium  top-9 left-[110px]'>*</span>
                        {/* <span hidden={watch('longitude')} className='absolute text-red-400 text-sm font-medium  top-9 left-[170px]'>(optional)</span> */}

                        {errors.longitude && (
                            <p className="text-red-500 text-sm">{errors.longitude.message}</p>
                        )}
                    </div>


                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="latitude">Latitude </label>
                        <div className='absolute right-10 top-10'>
                            {!errors.latitude && watch('latitude') ? <FcCheckmark /> : errors.latitude ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <input
                            {...register('latitude')}
                            autoComplete="off"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.latitude && 'border-red-500'}`}
                            name='latitude' id="latitude"
                            placeholder="Latitude "
                            type="text" />
                        <span hidden={watch('latitude')} className='absolute text-red-400 text-lg font-medium  top-9 left-[95px]'>*</span>

                        {errors.latitude && (
                            <p className="text-red-500 text-sm">{errors.latitude.message}</p>
                        )}
                    </div>

                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="country">Country</label>
                        <div className='absolute right-10 top-10'>
                            {!errors.country ? <FcCheckmark /> : errors.country ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>


                        <select
                            value={recruitModel.country}
                            onChange={handleChange}
                            name="country"
                            id="country"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full   ${errors.country && 'border-red-500'}`}
                        >
                            <option defaultChecked disabled>Select Country </option>
                            {all_Countries.map((contry) => {
                                return (
                                    <option value={contry.isoCode}>{contry.name}</option>

                                )
                            })
                            }

                        </select>

                    </div>

                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="state">State</label>
                        <div className='absolute right-10 top-10'>
                            {!errors.state ? <FcCheckmark /> : errors.state ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <select
                            // {...register('state')}
                            value={recruitModel.state}
                            onChange={handleChange}
                            name="state"
                            id="state"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full   ${errors.state && 'border-red-500'}`}
                        >
                            <option defaultChecked disabled>Select State </option>
                            {all_States.map((contry) => {
                                return (
                                    <option value={contry.isoCode}>{contry.name}</option>

                                )
                            })
                            }

                        </select>
                        {/* {errors.state && (
                            <p className="text-red-500 text-sm">{errors.state.message}</p>
                        )} */}
                    </div>
                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="city">City</label>
                        <div className='absolute right-10 top-10'>
                            {!errors.city ? <FcCheckmark /> : errors.city ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <select
                            // {...register('city')}
                            value={recruitModel.city}
                            onChange={handleChange}
                            name="city"
                            id="city"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full   ${errors.city && 'border-red-500'}`}
                        >
                            <option defaultChecked disabled>Select city </option>
                            {all_Cities.map((contry) => {
                                return (
                                    <option >{contry.name}</option>

                                )
                            })
                            }

                        </select>
                        {/* {errors.city && (
                            <p className="text-red-500 text-sm">{errors.city.message}</p>
                        )} */}
                    </div>
                    <div className='col-lg-4 mb-4 relative '>
                        <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone</label>
                        <div className='absolute right-10 top-10'>
                            {!errors.mobile && watch('mobile') ? <FcCheckmark /> : errors.mobile ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>

                        <div className='w-full '>
                            <Controller
                                name="mobile"
                                control={control}
                                rules={{ required: true }}
                                render={({ field: { onChange, value } }) => (
                                    <PhoneInput
                                        value={value}
                                        enableSearch
                                        disableSearchIcon
                                        country={countryCode}
                                        onChange={onChange}
                                        placeholder="000 000 000"
                                        // countryCodeEditable={false}
                                        className={` w-full  ${errors.mobile && 'error_form'}`}
                                        dropdownClass={"custom-dropdown"}
                                    />
                                )}
                            />
                            {/* <PhoneInput
                                country={countryCode}
                                dropdownClass={"custom-dropdown"}
                                enableSearch
                                disableSearchIcon
                                placeholder="000 000 000"
                                countryCodeEditable={false}
                                value={mobile}
                                onChange={handleMobileChange} /> */}
                        </div>
                        {errors.mobile && (
                            <p className="text-red-500 text-sm">{errors.mobile.message}</p>
                        )}
                    </div>
                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="zipcode">ZipCode</label>
                        <div className='absolute right-10 top-10'>
                            {!errors.zipcode && watch('zipcode') ? <FcCheckmark /> : errors.zipcode ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <input
                            {...register('zipcode')}
                            autoComplete="off"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.zipcode && 'border-red-500'}`}
                            name='zipcode' id="zipcode"
                            placeholder="Zipcode"

                            type="text" />
                        {errors.zipcode && (
                            <p className="text-red-500 text-sm">{errors.zipcode.message}</p>
                        )}
                    </div>
                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="website">Website </label>
                        <div className='absolute right-10 top-10'>
                            {!errors.website && watch('website') ? <FcCheckmark /> : errors.website ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <input
                            {...register('website')}
                            autoComplete="off"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.website && 'border-red-500'}`}
                            name='website' id="website"
                            placeholder="website"

                            type="text" />
                        {errors.website && (
                            <p className="text-red-500 text-sm">{errors.website.message}</p>
                        )}
                    </div>
                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="facebook">Facebook </label>
                        <div className='absolute right-10 top-10'>
                            {!errors.facebook && watch('facebook') ? <FcCheckmark /> : errors.facebook ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <input
                            {...register('facebook')}
                            autoComplete="off"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.facebook && 'border-red-500'}`}
                            name='facebook' id="facebook"
                            placeholder="Facebook"

                            type="text" />
                        {errors.facebook && (
                            <p className="text-red-500 text-sm">{errors.facebook.message}</p>
                        )}
                    </div>
                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="twitter">Twitter </label>
                        <div className='absolute right-10 top-10'>
                            {!errors.twitter && watch('twitter') ? <FcCheckmark /> : errors.twitter ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <input
                            {...register('twitter')}
                            autoComplete="off"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.twitter && 'border-red-500'}`}
                            name='twitter' id="twitter"
                            placeholder="Twitter"

                            type="text" />
                        {errors.twitter && (
                            <p className="text-red-500 text-sm">{errors.twitter.message}</p>
                        )}
                    </div>
                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="instagram">Instagram </label>
                        <div className='absolute right-10 top-10'>
                            {!errors.instagram && watch('instagram') ? <FcCheckmark /> : errors.instagram ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <input
                            {...register('instagram')}
                            autoComplete="off"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.instagram && 'border-red-500'}`}
                            name='instagram' id="instagram"
                            placeholder="instagram"

                            type="text" />

                    </div>
                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="linkedIn">LinkedIn </label>
                        <div className='absolute right-10 top-10'>
                            {!errors.linkedIn && watch('linkedIn') ? <FcCheckmark /> : errors.linkedIn ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <input
                            {...register('linkedIn')}
                            autoComplete="off"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.linkedIn && 'border-red-500'}`}
                            name='linkedIn' id="linkedIn"
                            placeholder="LinkedIn"

                            type="text" />

                    </div>
                    <div className='col-lg-8 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="address"> Permanet Address </label>
                        <div className='absolute right-5 top-10'>
                            {!errors.address && watch('address') ? <FcCheckmark /> : errors.address ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <input

                            autoComplete="off"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.address && 'border-red-500'}`}
                            {...register('address')}
                            name='address' id="address"
                            placeholder="Permanent Address "
                            type="text"
                        // pattern="[0-9]+"
                        // type="number"
                        />

                        {errors.address && (
                            <p className="text-red-500 text-sm">{errors.address.message}</p>
                        )}
                    </div>


                    <div className='col-lg-12'>
                        <button onClick={(e) => onSubmit(e)} className="p-2 bg-red-500 hover:bg-green-600 text-white" >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateServices