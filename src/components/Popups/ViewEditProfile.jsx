import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import 'react-responsive-modal/styles.css';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Transition from '../../utils/Transition';
import { Country, State, City } from 'country-state-city';
import moment from 'moment';
import { HOSTNAME, callApi } from '../../utils/CallApi';
import PhoneInput from 'react-phone-input-2';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { updateProfile } from '../../Redux/RecruitAuthSlice/RecruitAuthSlice';

const schema = yup.object({
    first_name: yup.string().required(),
    first_family_name: yup.string().required(),
    second_family_name: yup.string().optional(),
    third_family_name: yup.string().optional(),
    email: yup.string().email('Invalid email format').required(),
    phoneNumber: yup.string().required(),
});




const ViewEditProfile = (props) => {
    const modalContent = useRef(null);
    const {
        register,
        reset,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({ mode: 'onChange ', resolver: yupResolver(schema) });

    const [isActive, setIsActive] = useState(true);
    const [approved, setApproved] = useState(true);
    const [verified, setVerified] = useState(true);
    const [roles, setallroles] = useState([]);
    const [role, setRole] = useState('');
    const [error, setError] = useState({
        userError: '',
        roleError: '',
    });

    const dispatch = useDispatch()

    // ROle Handler
    const [all_Countries, setall_Countries] = useState([]);
    const [all_States, setall_States] = useState([]);
    const [all_Cities, setall_Cities] = useState([]);
    const [countryCode, setCountryCode] = useState('');

    const [recruitModel, setrecruitModel] = useState({
        surname: 'Mr',
        fullname: '',
        first_family_name: '',
        second_family_name: '',
        third_family_name: '',
        email: '',
        reEmail: '',
        country: props?.data?.Country,
        state: props?.data?.state,
        city: props?.data?.city,
        industry: '',
        position: '',
        mobile: '',
        age: '',
    });


    const [location, setlocation] = useState("")


    const handleIsActive = () => setIsActive(!isActive);
    const handleApproved = () => setApproved(!approved);
    const handleVerified = () => setVerified(!verified);

    // ROle Set
    const handleChangeRole = (e) => {
        let findRole = roles.find((f) => f._id === e.target.value);
        setRole(findRole._id);
    };

    const handleChangeCountry = (e) => {
        let { value } = e.target;
        let countryCode = all_Countries.find(
            (country) => country.name === value
        ).isoCode;
        const updatedStates = State.getStatesOfCountry(countryCode);
        setCountryCode(countryCode);
        setall_States(updatedStates);
        setrecruitModel((prevmodel) => ({
            ...prevmodel,
            country: value,
        }));
    };

    const handleChangeState = (e) => {
        let { value } = e.target;
        let stateCode = all_States.find((state) => state.name === value).isoCode;
        const updatedCities = City.getCitiesOfState(
            countryCode.toUpperCase(),
            stateCode
        );
        setrecruitModel((prevmodel) => ({
            ...prevmodel,
            state: value,
        }));
        setall_Cities(updatedCities);
    };

    const handleChangeCity = (e) => {
        let { value } = e.target;
        let latitudeCode = all_Cities.find((city) => city.name === value).latitude;
        let longitudeCode = all_Cities.find((city) => city.name === value).longitude;
        let locationCoordinates = {
            type: "Point",
            coordinates: [
                latitudeCode,
                longitudeCode
            ]
        }
        setrecruitModel((prevmodel) => ({
            ...prevmodel,
            city: value,
        }));
        setlocation(locationCoordinates)

    };

    const onSubmit = async (values) => {
        const { created_at } = values;
        const formattedDate = moment(created_at).format('YYYY-MM-DD');
        const dummylocation  = {
            "coordinates": [
                74.28911289869139,
                31.624848273644957
            ],
            "type": "Point"
        }
        const payload = {
            ...values,
            country: recruitModel.country,
            state: recruitModel.state,
            city: recruitModel.city,
            created_at: formattedDate,
            location: location ? location : dummylocation 
        };
        try {
            let response = await callApi('/users/updateuser', 'post', payload);
            if (response.status === 'Success') {
                dispatch(updateProfile(response.data))
                
                toast.success(`User updated successfully`);
                props.onClose();
            } else {
                console.log(`Error reponse message ========`, response.message);
                toast.error(response.message);
            }
        } catch (error) {
            console.log(`error ============`, error);
        }
    };

    useEffect(() => {
        reset(props?.data);
    }, [props?.data, reset]);

    // Geo

    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await axios(
                    'https://api.ipregistry.co/?key=m7irmmf8ey12rx7o'
                );
                const currentCountryCode = response.data.location.country.code;
                let id = response.data.location.country.tld;
                let removeDot = id.replace('.', '');
                setCountryCode(removeDot);
                const get_countris = Country.getAllCountries();
                const CurrentStates = State.getStatesOfCountry(currentCountryCode);
                const CurrentCities = City.getCitiesOfState(
                    currentCountryCode,
                    CurrentStates[0].isoCode
                );
                setall_Countries(get_countris);
                setall_States(CurrentStates);
                setall_Cities(CurrentCities);
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, []);

    // ROle Set
    useEffect(() => {
        (async () => {
            try {
                const roles = {
                    sortproperty: 'createdAt',
                    sortorder: -1,
                    offset: 0,
                    limit: 50,
                    query: {
                        critarion: { active: true },
                        fields: '_id roleName',
                    },
                };

                const resRole = await callApi('/roles/getRolesList', 'post', roles);
                setallroles(resRole.data.roles);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);


    return (
        <>
          
            {/* Modal backdrop */}
            <Transition
                className="fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity"
                show={props.modalOpen}
                enter="transition ease-out duration-200"
                enterStart="opacity-0"
                enterEnd="opacity-100"
                leave="transition ease-out duration-100"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"
                aria-hidden="true"
            />
            {/* Modal dialog */}
            <Transition
                id={props.id}
                style={{zIndex:99999}}
                className="fixed inset-0 z-50 overflow-hidden flex items-center mt-20 justify-center px-4 sm:px-6"
                role="dialog"
                aria-modal="true"
                show={props.modalOpen}
                enter="transition ease-in-out duration-200"
                enterStart="opacity-0 translate-y-4"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-200"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 translate-y-4"
            >
                <div ref={modalContent} className="bg-white rounded shadow-lg overflow-auto w-3/4 h-[80%]">
                    {/* Modal header */}
                    <div className="px-5 py-3 border-b border-slate-200">
                        <div className="flex justify-between items-center">
                            <div className="font-semibold text-slate-800">Edit Profile</div>
                            <button className="text-slate-400 hover:text-slate-500" onClick={props.onClose}>
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
                                    <label
                                        className='block text-lg font-medium mb-1'
                                        htmlFor='description'
                                    >
                                        First Name
                                    </label>
                                    {props.mode === 'view' ? (
                                        <p>{props?.data?.first_name}</p>
                                    ) : (
                                        <input
                                            {...register('first_name', { required: true })}
                                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.first_name
                                                ? 'border-red-500'
                                                : 'border-green-500'
                                                }`}
                                        />
                                    )}
                                    {errors.first_name && (
                                        <span className='text-red-500'>This field is required</span>
                                    )}
                                </div>
                                <div className='col-lg-4 mb-5'>
                                    <label
                                        className='block text-lg font-medium mb-1'
                                        htmlFor='description'
                                    >
                                        First Family Name
                                    </label>
                                    {props.mode === 'view' ? (
                                        <p>{props?.data?.first_family_name}</p>
                                    ) : (
                                        <input
                                            {...register('first_family_name', { required: true })}
                                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.first_family_name
                                                ? 'border-red-500'
                                                : 'border-green-500'
                                                }`}
                                        />
                                    )}
                                    {errors.first_family_name && (
                                        <span className='text-red-500'>This field is required</span>
                                    )}
                                </div>
                                <div className='col-lg-4 mb-5'>
                                    <label
                                        className='block text-lg font-medium mb-1'
                                        htmlFor='description'
                                    >
                                        Second Family Name
                                    </label>
                                    {props.mode === 'view' ? (
                                        <p>{props?.data?.second_family_name}</p>
                                    ) : (
                                        <input
                                            {...register('second_family_name', { required: true })}
                                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.second_family_name
                                                ? 'border-red-500'
                                                : 'border-green-500'
                                                }`}
                                        />
                                    )}
                                    {errors.second_family_name && (
                                        <span className='text-red-500'>This field is required</span>
                                    )}
                                </div>
                                <div className='col-lg-4 mb-5'>
                                    <label
                                        className='block text-lg font-medium mb-1'
                                        htmlFor='description'
                                    >
                                        Third Family Name
                                    </label>
                                    {props.mode === 'view' ? (
                                        <p>{props?.data?.third_family_name}</p>
                                    ) : (
                                        <input
                                            {...register('third_family_name', { required: true })}
                                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.third_family_name
                                                ? 'border-red-500'
                                                : 'border-green-500'
                                                }`}
                                        />
                                    )}
                                    {errors.third_family_name && (
                                        <span className='text-red-500'>This field is required</span>
                                    )}
                                </div>
                                <div className='col-lg-4 mb-5'>
                                    <label
                                        className='block text-lg font-medium mb-1'
                                        htmlFor='description'
                                    >
                                        Email
                                    </label>
                                    {props.mode === 'view' ? (
                                        <p>{props?.data?.email}</p>
                                    ) : (
                                        <input
                                            {...register('email', { required: true })}
                                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.email ? 'border-red-500' : 'border-green-500'
                                                }`}
                                        />
                                    )}
                                    {errors.email && (
                                        <span className='text-red-500'>This field is required</span>
                                    )}
                                </div>

                                <div className='col-lg-4 mb-5'>
                                    <label
                                        className='block text-lg font-medium mb-1'
                                        htmlFor='description'
                                    >
                                        Country
                                    </label>
                                    {props.mode === 'view' ? (
                                        <p>{props?.data?.country}</p>
                                    ) : (
                                        <select
                                            value={
                                                recruitModel.country
                                                    ? recruitModel.country
                                                    : props?.data?.country
                                            }
                                            onChange={handleChangeCountry}
                                            name='country'
                                            id='country'
                                            className={` border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.country && 'border-red-500'
                                                }`}
                                        >
                                            <option value=''>{props?.data?.country} </option>
                                            {all_Countries.map((country) => (
                                                <option>{country.name}</option>
                                            ))}
                                        </select>
                                    )}
                                    {errors.country && (
                                        <span className='text-red-500'>This field is required</span>
                                    )}
                                </div>
                                <div className='col-lg-4 mb-5'>
                                    <label
                                        className='block text-lg font-medium mb-1'
                                        htmlFor='description'
                                    >
                                        State
                                    </label>
                                    {props.mode === 'view' ? (
                                        <p>{props?.data?.state}</p>
                                    ) : (
                                        <select
                                            value={
                                                recruitModel.state
                                                    ? recruitModel.state
                                                    : props?.data?.state
                                            }
                                            onChange={handleChangeState}
                                            name='state'
                                            id='state'
                                            className={`border p-[10px] focus:outline-blue-500 rounded-sm w-full ${errors.state && 'border-red-500'
                                                }`}
                                        >
                                            <option value=''>{props?.data?.state}</option>
                                            {all_States.map((state) => (
                                                <option>{state.name}</option>
                                            ))}
                                        </select>
                                    )}
                                    {errors.state && (
                                        <span className='text-red-500'>This field is required</span>
                                    )}
                                </div>
                                <div className='col-lg-4 mb-5'>
                                    <label
                                        className='block text-lg font-medium mb-1'
                                        htmlFor='city'
                                    >
                                        City
                                    </label>
                                    {props.mode === 'view' ? (
                                        <p>{props?.data?.city}</p>
                                    ) : (
                                        <select
                                            // {...register('city')}
                                            value={
                                                recruitModel.city ? recruitModel.city : props?.data?.city
                                            }
                                            onChange={handleChangeCity}
                                            name='city'
                                            id='city'
                                            className={`border p-[10px] focus:outline-blue-500 rounded-sm w-full   ${errors.city && 'border-red-500'
                                                }`}
                                        >
                                            <option>{props?.data?.city}</option>
                                            {all_Cities.map((city) => {
                                                return <option>{city.name}</option>;
                                            })}
                                        </select>
                                    )}
                                    {errors.city && (
                                        <span className='text-red-500'>This field is required</span>
                                    )}
                                </div>

                                <div className='col-lg-4 mb-5 mt-2'>
                                    <label
                                        className='block text-lg font-medium mb-1'
                                        htmlFor='description'
                                    >
                                        Phone Number
                                    </label>
                                    {props.mode === 'view' ? (
                                        <p>{props?.data?.phoneNumber}</p>
                                    ) : (
                                        <Controller
                                            name='phoneNumber'
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field: { onChange, value } }) => (
                                                <PhoneInput
                                                    value={value}
                                                    enableSearch
                                                    disableSearchIcon
                                                    country={countryCode}
                                                    onChange={onChange}
                                                    placeholder='000 000 000'
                                                    className={` w-full  ${errors.phoneNumber && 'error_form'
                                                        }`}
                                                    dropdownClass={'custom-dropdown'}
                                                />
                                            )}
                                        />
                                    )}
                                    {errors.phoneNumber && (
                                        <span className='text-red-500'>This field is required</span>
                                    )}
                                </div>

                                <div className='col-lg-6 mb-5'>
                                    <label className='block text-sm font-medium mb-1' htmlFor='quote'>
                                        IMAGE
                                    </label>
                                    {props.mode === "view" ?
                                        (
                                            <img src={`${HOSTNAME}${props?.data?.profile_picture_url}`} />
                                        ) : (
                                            <div
                                                className={`border mt-3 p-[5px] focus:outline-blue-500 rounded-sm w-full  ${errors.image && 'border-red-400'
                                                    }`}
                                            >
                                                <input type="file"
                                                    {...register('image')}
                                                />
                                            </div>
                                        )}
                                    {errors.image && (
                                        <p className='text-red-500 text-sm'>{errors.image.message}</p>
                                    )}


                                </div>
                                {/* <div className='col-lg-4 mb-5'>
                  <label
                    className='block text-lg font-medium mb-1'
                    htmlFor='description'
                  >
                    Role
                  </label>
                  {props.mode === 'view' ? (
                    <p>{props?.data?.role}</p>
                  ) : (
                    <select
                      onChange={handleChangeRole}
                      className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${error.roleError ? 'border-red-400' : 'border-gray-400'
                        }`}
                    >
                      <option>{props?.data?.role}</option>

                      {roles.map((business) => (
                        <option key={business._id} value={business.value}>
                          <span>{business.roleName}</span>
                        </option>
                      ))}
                    </select>
                  )}
                  {errors.role && (
                    <span className='text-red-500'>This field is required</span>
                  )}
                </div> */}

                                {/* <div className='row'>
                  <div className='col-lg-4 mb-5'>
                    <label
                      className='block text-lg font-medium mb-1'
                      htmlFor='created_at'
                    >
                      Active
                    </label>
                    {props.mode === 'view' ? (
                      <p> {isActive ? 'Active' : 'InActive'}</p>
                    ) : (
                      <div className='flex items-center'>

                        <label for="default-toggle" className="inline-flex relative items-center cursor-pointer">
                          <input type="checkbox"
                            id="default-toggle" className="sr-only peer"
                            checked={isActive}
                            onChange={handleIsActive}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          <div className='text-sm text-slate-400 italic ml-2'>
                            {isActive ? 'Active' : 'InActive'}
                          </div>
                        </label>


                      </div>
                    )}
                    {errors.isActive && (
                      <span className='text-red-500'>
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className='col-lg-4 mb-5'>
                    <label
                      className='block text-lg font-medium mb-1'
                      htmlFor='created_at'
                    >
                      Approved
                    </label>
                    {props.mode === 'view' ? (
                      <p> {approved ? 'Approved' : 'DisApproved'}</p>
                    ) : (
                      <div className='flex items-center'>

                        <label for="default-toggle" className="inline-flex relative items-center cursor-pointer">
                          <input type="checkbox"
                            id="default-toggle" className="sr-only peer"
                            checked={approved}
                            onChange={handleApproved}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          <div className='text-sm text-slate-400 italic ml-2'>
                            {approved ? 'Approved' : 'DisApproved'}
                          </div>
                        </label>



                      </div>
                    )}
                    {errors.approved && (
                      <span className='text-red-500'>
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className='col-lg-4 mb-5'>
                    <label
                      className='block text-lg font-medium mb-1'
                      htmlFor='verified'
                    >
                      Verified
                    </label>
                    {props.mode === 'view' ? (
                      <p> {verified ? 'Verified' : 'DisVerified'}</p>
                    ) : (
                      <div className='flex items-center'>
                        <div className='flex items-center'>

                          <label for="default-toggle" className="inline-flex relative items-center cursor-pointer">
                            <input type="checkbox"
                              id="default-toggle" className="sr-only peer"
                              checked={verified}
                            onChange={handleVerified}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <div className='text-sm text-slate-400 italic ml-2'>
                          {verified ? 'Verified' : 'DisVerified'}
                        </div>
                          </label>



                        </div>
                        
                      </div>
                    )}
                    {errors.verified && (
                      <span className='text-red-500'>
                        This field is required
                      </span>
                    )}
                  </div>
                </div> */}
                                {props.mode !== 'view' ? (
                                    <div className='col-lg-12'>
                                        <button
                                            type='submit'
                                            className='p-2 bg-red-500 hover:bg-green-600 text-white'
                                        >
                                            Update Profile
                                        </button>
                                    </div>
                                ) : null}
                            </div>
                        </form>

                    </div>
                </div>
            </Transition>
        </>
    )
}

export default ViewEditProfile