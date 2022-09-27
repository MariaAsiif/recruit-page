import React, { useRef, useEffect, useState } from 'react'
import Transition from '../../utils/Transition';
import { callApi } from '../../utils/CallApi';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from "react-hook-form";
import { Country, State, City } from 'country-state-city';
import axios from 'axios';


const ViewEditDoctorPopup = ({ id, modalOpen, onClose, mode, data }) => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange ', });
    const modalContent = useRef(null);

    const [all_Countries, setall_Countries] = useState([])
    const [all_States, setall_States] = useState([])
    const [all_Cities, setall_Cities] = useState([])
    const [recruitModel, setrecruitModel] = useState({
        city: "",
        state: "",
        country: "",
    })
    const [countryCode, setCountryCode] = useState("")


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

        }
        setrecruitModel((prevmodel) => ({
            ...prevmodel,
            [name]: value
        }))
    }

    const onSubmit = async (formdata) => {
        console.log('====================================');
        console.log(formdata);
        console.log('====================================');

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
    useEffect(() => {
        reset(data);

    }, [data, reset]);

    return (
        <>
            {/* Modal backdrop */}
            <Transition show={modalOpen} className="fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity" enter="transition ease-out duration-200" enterStart="opacity-0" enterEnd="opacity-100" leave="transition ease-out duration-100" leaveStart="opacity-100" leaveEnd="opacity-0" aria-hidden="true"
            />
            {/* Modal dialog */}
            <Transition id={id} show={modalOpen} className="fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center px-4 sm:px-6" role="dialog" aria-modal="true" enter="transition ease-in-out duration-200" enterStart="opacity-0 translate-y-4" enterEnd="opacity-100 translate-y-0" leave="transition ease-in-out duration-200" leaveStart="opacity-100 translate-y-0" leaveEnd="opacity-0 translate-y-4" >
                <div ref={modalContent} className="bg-white rounded shadow-lg overflow-auto w-3/4 h-2/3">
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
                    {/* Modal header */}
                    <div className="px-5 py-3 border-b border-slate-200">
                        <div className="flex justify-between items-center">
                            <div className="font-semibold text-slate-800">View Doctor</div>
                            <button className="text-slate-400 hover:text-slate-500" onClick={onClose}>
                                <div className="sr-only">Close</div>
                                <svg className="w-4 h-4 fill-current">
                                    <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className='bscontainer'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='row p-5'>

                                <div className='col-lg-4 mb-5'>
                                    <label className="block text-lg font-medium mb-1" htmlFor="description">Service Name</label>
                                    {mode === "view" ?
                                        (
                                            <p>{data.serviceName}</p>
                                        ) : (
                                            <input    {...register("serviceName", { required: true })} className={`form-input w-full ${errors.serviceName ? "border-red-500" : "border-green-500"}`} />
                                        )}
                                    {errors.serviceName && (<p className="text-red-500 text-sm">This field is required</p>)}
                                </div>

                                <div className='col-lg-4 mb-5'>
                                    <label className="block text-lg font-medium mb-1" htmlFor="description">Country</label>
                                    {mode === "view" ?
                                        (
                                            <p>{data.serviceCountry}</p>
                                        ) : (
                                            <>
                                                <select value={recruitModel.country} onChange={handleChange} name="country" id="country" className={`form-input w-full`}   >
                                                    <option defaultChecked disabled>Select Country </option>
                                                    {all_Countries.map((contry) => <option value={contry.isoCode}>{contry.name}</option>)}
                                                </select>
                                            </>
                                        )}
                                </div>
                                <div className='col-lg-4 mb-5'>
                                    <label className="block text-lg font-medium mb-1" htmlFor="description">Category</label>
                                    {mode === "view" ?
                                        (
                                            <p>{data.category}</p>
                                        ) : (
                                            <input    {...register("category", { required: true })} className={`form-input w-full ${errors.category ? "border-red-500" : "border-green-500"}`} />
                                        )}
                                    {errors.serviceName && (<p className="text-red-500 text-sm">This field is required</p>)}
                                </div>
                                <div className='col-lg-4 mb-5'>
                                    <label className="block text-lg font-medium mb-1" htmlFor="description">City</label>
                                    {mode === "view" ?
                                        (
                                            <p>{data.serviceCity}</p>
                                        ) : (
                                            <>
                                                <select value={recruitModel.city} onChange={handleChange} name="country" id="country" className={`form-input w-full`}   >
                                                    <option defaultChecked disabled>Select Country </option>
                                                    {all_Cities.map((city) => <option >{city.name}</option>)}
                                                </select>
                                            </>
                                        )}
                                </div>
                                <div className='col-lg-4 mb-5'>
                                    <label className="block text-lg font-medium mb-1" htmlFor="description">Website</label>
                                    {mode === "view" ?
                                        (
                                            <p>{data.website}</p>
                                        ) : (
                                            <input    {...register("website", { required: true })} className={`form-input w-full ${errors.website ? "border-red-500" : "border-green-500"}`} />
                                        )}
                                    {errors.website && (<p className="text-red-500 text-sm">This field is required</p>)}
                                </div>
                                <div className='col-lg-4 mb-5'>
                                    <label className="block text-lg font-medium mb-1" htmlFor="description">Facebook</label>
                                    {mode === "view" ?
                                        (
                                            <p>{data.facebook}</p>
                                        ) : (
                                            <input    {...register("website", { required: true })} className={`form-input w-full ${errors.facebook ? "border-red-500" : "border-green-500"}`} />
                                        )}
                                    {errors.facebook && (<p className="text-red-500 text-sm">This field is required</p>)}
                                </div>
                                <div className='col-lg-4 mb-5'>
                                    <label className="block text-lg font-medium mb-1" htmlFor="description">Twitter</label>
                                    {mode === "view" ?
                                        (
                                            <p>{data.twitter}</p>
                                        ) : (
                                            <input    {...register("website", { required: true })} className={`form-input w-full ${errors.twitter ? "border-red-500" : "border-green-500"}`} />
                                        )}
                                    {errors.twitter && (<p className="text-red-500 text-sm">This field is required</p>)}
                                </div>
                                <div className='col-lg-4 mb-5'>
                                    <label className="block text-lg font-medium mb-1" htmlFor="description">Instagram</label>
                                    {mode === "view" ?
                                        (
                                            <p>{data.instagram}</p>
                                        ) : (
                                            <input    {...register("instagram", { required: true })} className={`form-input w-full ${errors.instagram ? "border-red-500" : "border-green-500"}`} />
                                        )}
                                    {errors.instagram && (<p className="text-red-500 text-sm">This field is required</p>)}
                                </div>
                                {
                                    mode !== "view" ? (
                                        <div className='col-lg-12'>
                                            <button type="submit" className="btn bg-red-500 hover:bg-green-600 text-white" >Update Doctor</button>
                                        </div>
                                    ) : null
                                }


                            </div>
                        </form>



                    </div>

                </div>
            </Transition>
        </>

    )
}

export default ViewEditDoctorPopup