import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { surnames } from '../../utils/enum';
import { FcCheckmark } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import { Country, State, City } from 'country-state-city';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { callApi } from '../../utils/CallApi';
const schema = yup.object({
  first_name: yup.string().required(),
  first_family_name: yup.string().required(),
  second_family_name: yup.string().optional(),
  third_family_name: yup.string().optional(),
  email: yup.string().email('Invalid email format').required(),
  password: yup.string().required(),
  phoneNumber: yup.string().required(),
});

const CreateUser = () => {
  let navigate = useNavigate();

  const [roles, setallroles] = useState([]);
  const [roleId, setRoleId] = useState('');
  const [roleName, setRoleName] = useState();
  const [error, setError] = useState({
    userError: '',
    roleError: '',
  });

  const [isActive, setIsActive] = useState(true);
  const [approved, setApproved] = useState(true);
  const [verified, setVerified] = useState(true);
  const [all_Countries, setall_Countries] = useState([]);
  const [all_States, setall_States] = useState([]);
  const [all_Cities, setall_Cities] = useState([]);
  const [countryCode, setCountryCode] = useState('');
  const [recruitModel, setrecruitModel] = useState({
    city: '',
    state: '',
    country: '',
  });



  // const [location, setLocation] = useState({
  //   type: 'Point',
  //   coordinates: [0, 0],
  // });

  const [location, setlocation] = useState("")



  const {
    register,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === 'country') {
      const updatedStates = State.getStatesOfCountry(value);
      const stateCode =
        updatedStates.length > 0 ? updatedStates[0].isoCode : '';
      const updatedCities = City.getCitiesOfState(value, stateCode);
      setall_States(updatedStates);
      setall_Cities(updatedCities);
    } else if (name === 'state') {
      const updatedStates = State.getStatesOfCountry(value);
      const stateCode =
        updatedStates.length > 0 ? updatedStates[0].isoCode : '';
      const updatedCities = City.getCitiesOfState(value, stateCode);
      setall_Cities(updatedCities);
    }
    setrecruitModel((prevmodel) => ({
      ...prevmodel,
      [name]: value,
    }));
  };
  const handleIsActiveToggle = () => setIsActive(!isActive);
  const handleApprovedToggle = () => setApproved(!approved);
  const handleVerifiedToggle = () => setVerified(!verified);

  // ROll Set

  const handleChangeRole = (e) => {
    let findRole = roles.find((f) => f._id === e.target.value);
    setRoleId(findRole._id);
    setRoleName(findRole.roleName);
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

  const onSubmit = async (data) => {
    console.log(`roleName ===========`, roleName);
    const newData = {
      ...data,
      active: isActive,
      approved,
      is_verified: verified,
      country: recruitModel.country,
      state: recruitModel.state,
      city: recruitModel.city,
      role: roleName,
      location: location,
    };
    console.log(`newData ========`, newData);
    try {
      if (!newData.role) {
        toast.warning(`Please Select One Role`);
        return;
      }
      let response = await callApi('/users/signup', 'post', newData);
      console.log(`response==============`, response);
      if (response.status === 'Success') {
        console.log(`response message ========`, response.message);
        toast.success(`User successfully created`);
        setTimeout(() => {
          navigate('/user/list');
        }, 5000);
      } else {
        console.log(`Error reponse message ========`, response.message);

        toast.error(response.message);
      }
    } catch (error) {
      console.log(`error ============`, error);
    }
  };

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
    <div className='bscontainer-fluid'>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='row p-11'>
          <div className='col-12 mb-6'>
            <div className='mb-3'>
              <ul className='inline-flex flex-wrap text-sm font-medium'>
                <li className='flex items-center'>
                  <Link
                    to='/dashboard'
                    className='text-slate-500 hover:text-indigo-500'
                  >
                    Dashboard{' '}
                  </Link>
                  <svg
                    className='h-4 w-4 fill-current text-slate-400 mx-3'
                    viewBox='0 0 16 16'
                  >
                    <path d='M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z' />
                  </svg>
                </li>
                <li className='flex items-center'>
                  <Link
                    to='/user/list'
                    className='text-slate-500 hover:text-indigo-500'
                  >
                    Users{' '}
                  </Link>
                  <svg
                    className='h-4 w-4 fill-current text-slate-400 mx-3'
                    viewBox='0 0 16 16'
                  >
                    <path d='M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z' />
                  </svg>
                </li>
                <li className='flex items-center'>
                  <Link
                    to='/user/list/create-user'
                    className='text-slate-500 hover:text-indigo-500'
                    href='#0'
                  >
                    Create Users
                  </Link>
                </li>
              </ul>
            </div>
            <header className='py-4'>
              <h2 className='font-semibold text-slate-800'>Add New User</h2>
            </header>
          </div>
          <div className='col-lg-4 mb-4 relative'>
            <label
              className='block text-sm font-medium mb-1'
              htmlFor='first_name'
            >
              Full Name
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.first_name ? (
                <FcCheckmark />
              ) : errors.first_name ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <div className='text-gray-500 text-base bg-light-gray flex h-11'>
              <div className='dropdown relative w-1/5'>
                <select
                  className=' w-full h-full'
                  {...register('surname')}
                  id='dropdown'
                >
                  {surnames.map((sur, i) => {
                    return <option>{sur}</option>;
                  })}
                </select>
              </div>
              <div className='relative inline-block w-4/5 '>
                <input
                  name='first_name'
                  type='text'
                  {...register('first_name')}
                  placeholder='Name'
                  className={`form-input w-full h-full  ${errors.first_name ? 'border-red-400' : 'border-gray-400'
                    } `}
                />
                {errors.first_name && (
                  <p className='text-red-500 text-sm'>
                    {`first name is a required`}
                  </p>
                )}
                <span
                  hidden={watch('first_name')}
                  className='absolute  text-red-400 font-medium text-lg top-1/4 left-[70px]'
                >
                  *
                </span>
                <span
                  className={
                    watch('first_name')
                      ? `visible absolute top-1/4 right-3`
                      : `invisible`
                  }
                >
                  <FcCheckmark />
                </span>
              </div>
            </div>
          </div>

          <div className='col-lg-4 mb-4 relative'>
            <label
              className='block text-sm font-medium mb-1'
              htmlFor='first_family_name'
            >
              First Family Name
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.first_family_name && watch('first_family_name') ? (
                <FcCheckmark />
              ) : errors.first_family_name ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('first_family_name')}
              autoComplete='off'
              className={`w-full  ${errors.first_family_name ? 'border-red-400' : 'border-gray-400'
                }`}
              name='first_family_name'
              id='first_family_name'
              type='text'
              placeholder='FIRST FAMILY NAME '
            />
            <span
              hidden={watch('first_family_name')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[175px]'
            >
              *
            </span>

            {errors.first_family_name && (
              <p className='text-red-500 text-sm'>
                {`first family name is a required`}
              </p>
            )}
          </div>
          <div className='col-lg-4 mb-4 relative'>
            <label
              className='block text-sm font-medium mb-1'
              htmlFor='second_family_name'
            >
              Second Family Name{' '}
            </label>
            <input
              {...register('second_family_name')}
              autoComplete='off'
              className={`form-input w-full  ${errors.second_family_name && 'border-red-500'
                }`}
              name='second_family_name'
              id='second_family_name'
              placeholder='2nd Family Name'
              type='text'
            />
            <span
              hidden={watch('second_family_name')}
              className='absolute text-red-400 text-sm font-medium  top-9 left-[170px]'
            >
              (optional)
            </span>
          </div>
          <div className='col-lg-4 mb-4 relative'>
            <label
              className='block text-sm font-medium mb-1'
              htmlFor='third_family_name'
            >
              Third Family Name{' '}
            </label>
            <input
              {...register('third_family_name')}
              autoComplete='off'
              className={`form-input w-full  ${errors.third_family_name && 'border-red-500'
                }`}
              name='third_family_name'
              id='third_family_name'
              placeholder='3rd Family Name'
              type='text'
            />
            <span
              hidden={watch('third_family_name')}
              className='absolute text-red-400 text-sm font-medium  top-9 left-[170px]'
            >
              (optional)
            </span>
          </div>
          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='email'>
              Email
            </label>
            <div className='absolute right-10 top-10'>
              {!errors.email && watch('email') ? (
                <FcCheckmark />
              ) : errors.email ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('email')}
              autoComplete='off'
              className={`form-input w-full  ${errors.email && 'border-red-500'
                }`}
              name='email'
              id='email'
              placeholder='Email Address'
              type='text'
            />
            <span
              hidden={watch('email')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[150px]'
            >
              *
            </span>

            {errors.email && (
              <p className='text-red-500 text-sm'>{errors.email.message}</p>
            )}
          </div>
          <div className='col-lg-4 mb-4 relative'>
            <label
              className='block text-sm font-medium mb-1'
              htmlFor='password'
            >
              Password
            </label>
            <div className='absolute right-10 top-10'>
              {!errors.password && watch('password') ? (
                <FcCheckmark />
              ) : errors.password ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('password')}
              autoComplete='off'
              className={`form-input w-full  ${errors.password && 'border-red-500'
                }`}
              name='password'
              id='password'
              placeholder='Password'
              type='password'
            />
            <span
              hidden={watch('password')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[150px]'
            >
              *
            </span>

            {errors.password && (
              <p className='text-red-500 text-sm'>{errors.password.message}</p>
            )}
          </div>
          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='country'>
              Country
            </label>
            <div className='absolute right-10 top-10'>
              {!errors.country ? (
                <FcCheckmark />
              ) : errors.country ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <select
              value={recruitModel.country}
              onChange={handleChangeCountry}
              name='country'
              id='country'
              className={`form-input w-full   ${errors.country && 'border-red-500'
                }`}
            >
              <option value=''>Select Country </option>
              {all_Countries.map((country) => (
                <option>{country.name}</option>
              ))}
            </select>
          </div>
          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='state'>
              State
            </label>
            <div className='absolute right-10 top-10'>
              {!errors.state ? (
                <FcCheckmark />
              ) : errors.state ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>

            <select
              value={recruitModel.state}
              onChange={handleChangeState}
              name='state'
              id='state'
              className={`form-input w-full   ${errors.state && 'border-red-500'
                }`}
            >
              <option value=''>Select State </option>
              {all_States.map((state) => (
                <option>{state.name}</option>
              ))}
            </select>
          </div>
          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='city'>
              City
            </label>
            <div className='absolute right-10 top-10'>
              {!errors.city ? (
                <FcCheckmark />
              ) : errors.city ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <select
              // {...register('city')}
              value={recruitModel.city}
              onChange={handleChangeCity}
              name='city'
              id='city'
              className={`form-input w-full   ${errors.city && 'border-red-500'
                }`}
            >
              <option>Select city </option>
              {all_Cities.map((city) => {
                return <option>{city.name}</option>;
              })}
            </select>
            {/* {errors.city && (
                            <p className="text-red-500 text-sm">{errors.city.message}</p>
                        )} */}
          </div>
          <div className='col-lg-4 mb-4 relative '>
            <label
              className='block text-sm font-medium mb-1'
              htmlFor='phoneNumber'
            >
              Phone
            </label>
            <div className='absolute right-10 top-10'>
              {!errors.phoneNumber && watch('phoneNumber') ? (
                <FcCheckmark />
              ) : errors.phoneNumber ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>

            <div className='w-full '>
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
                    // countryCodeEditable={false}
                    className={` w-full  ${errors.phoneNumber && 'error_form'}`}
                    dropdownClass={'custom-dropdown'}
                  />
                )}
              />
            </div>
            {errors.phoneNumber && (
              <p className='text-red-500 text-sm'>
                {`phone number is a required`}
              </p>
            )}
          </div>

          <div className='col-lg-4 mb-4 relative'>
            <label
              className='block text-sm font-medium mb-1'
              htmlFor='businessName'
            >
              Roles
            </label>
            <div className='absolute right-5 top-10'>
              {!error.roleError ? (
                <FcCheckmark className='mr-5' />
              ) : error.roleError ? (
                <div className=' text-red-500'>
                  <MdClose className='mr-5' />
                </div>
              ) : null}
            </div>
            <select
              onChange={handleChangeRole}
              className={`w-full  ${error.roleError ? 'border-red-400' : 'border-gray-400'
                }`}
            >
              <option>Select Role</option>

              {roles.map((business) => (
                <option key={business._id} value={business._id}>
                  <span>{business.roleName}</span>
                </option>
              ))}
            </select>

            {error.roleError && (
              <p className='text-red-500 text-sm'>{error.roleError}</p>
            )}
          </div>
          <div className='row'>
            <div className='col-lg-4 mb-4 relative'>
              <div>
                <div className='text-sm text-slate-800 font-semibold mb-3'>
                  Active
                </div>
                <div className='flex items-center'>
                  <div className='form-switch'>
                    <input
                      type='checkbox'
                      id='active-toggle'
                      className='sr-only'
                      checked={isActive}
                      onChange={handleIsActiveToggle}
                    />
                    <label className='bg-slate-400' htmlFor='active-toggle'>
                      <span
                        className='bg-white shadow-sm'
                        aria-hidden='true'
                      ></span>
                      <span className='sr-only'>Active Culture</span>
                    </label>
                  </div>
                  <div className='text-sm text-slate-400 italic ml-2'>
                    {isActive ? 'Active' : 'InActive'}
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-4 relative'>
              <div>
                <div className='text-sm text-slate-800 font-semibold mb-3'>
                  Approved
                </div>
                <div className='flex items-center'>
                  <div className='form-switch'>
                    <input
                      type='checkbox'
                      id='approved-toggle'
                      className='sr-only'
                      checked={approved}
                      onChange={handleApprovedToggle}
                    />
                    <label className='bg-slate-400' htmlFor='approved-toggle'>
                      <span
                        className='bg-white shadow-sm'
                        aria-hidden='true'
                      ></span>
                      <span className='sr-only'>Approved Culture</span>
                    </label>
                  </div>
                  <div className='text-sm text-slate-400 italic ml-2'>
                    {approved ? 'Approved' : 'DisApproved'}
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-4 relative'>
              <div>
                <div className='text-sm text-slate-800 font-semibold mb-3'>
                  Verified
                </div>
                <div className='flex items-center'>
                  <div className='form-switch'>
                    <input
                      type='checkbox'
                      id='verified-toggle'
                      className='sr-only'
                      checked={verified}
                      onChange={handleVerifiedToggle}
                    />
                    <label className='bg-slate-400' htmlFor='verified-toggle'>
                      <span
                        className='bg-white shadow-sm'
                        aria-hidden='true'
                      ></span>
                      <span className='sr-only'>Verified Culture</span>
                    </label>
                  </div>
                  <div className='text-sm text-slate-400 italic ml-2'>
                    {verified ? 'Verified' : 'Non Verified'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-12'>
            <button className='btn bg-red-500 hover:bg-green-600 text-white'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
