import React, { useEffect, useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { callApi } from '../../../../utils/CallApi';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import moment from 'moment';
import { Link } from 'react-router-dom';
import axios from 'axios';

const schema = yup.object({
  name: yup.string().required('Store Name is Required'),
  // owner: yup.string().required('Store Owner is Required'),
  reg: yup.string().required('Registration Name is Required'),
  detail: yup.string().required('Vender Detail is Required'),
  phone: yup.string().required('Contact No is Required'),
  image: yup.mixed().test('required', "Select a file", value => {
    return value && value.length
  })
});

const CreateStore = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  const [quoteDate, setquoteDate] = useState({
    day: dd,
    month: mm,
    year: yyyy,
  });

  const [dob, setDob] = useState({
    day: dd,
    month: mm,
    year: yyyy,
  });
  const [countryCode, setCountryCode] = useState('');
  const [file, setFiles] = useState('');

  const {
    register,
    watch,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  // ****************** Datepicker Content ***********
  const renderCustomInput = ({ ref }) => (
    <div className='relative cursor-pointe w-full'>
      <input
        readOnly
        ref={ref} // necessary  placeholder="yyy-mm-dd"
        value={
          quoteDate
            ? `${quoteDate.year}/${quoteDate.month}/${quoteDate.day}`
            : ''
        }
        className={` border p-2 focus:outline-blue-500 rounded-sm w-full cursor-pointer z-30  px-2 py-2 `}
      />
      <div className={`visible absolute top-3 cursor-pointer right-5`}>
        {' '}
        <FcCheckmark />{' '}
      </div>
    </div>
  );


  // ****************** Datepicker Content ***********
  const renderCustomInputDob = ({ ref }) => (
    <div className='relative cursor-pointe w-full'>
      <input
        readOnly
        ref={ref} // necessary  placeholder="yyy-mm-dd"
        value={
          dob
            ? `${dob.year}/${dob.month}/${dob.day}`
            : ''
        }
        className={` border p-2 focus:outline-blue-500 rounded-sm w-full cursor-pointer z-30  px-2 py-2 `}
      />
      <div className={`visible absolute top-3 cursor-pointer right-5`}>
        {' '}
        <FcCheckmark />{' '}
      </div>
    </div>
  );
  const handleChangeDate = (data) => {
    const date = moment(data).format('yyyy-M-D').split('-');
    setquoteDate({ day: +date[2], month: +date[1], year: +date[0] });
  };

  const onSubmit = async (data) => {
    let dobirth = `${dob.year}-${dob.month}-${dob.day}`;
    let startdate = `${quoteDate.year}-${quoteDate.month}-${quoteDate.day}`;

    let formData = new FormData();
    formData.append('storeimg', data.image[0])
    formData.append('request', JSON.stringify({
      storeName: data.name,
      storeOwner: "632da843c93ba13ac8732183",
      storeStartDate: startdate,
      registrationNo: data.reg,
      vendorDetails: data.detail,
      dob: dobirth,
      contactNo: data.phone
    }));
    const res = await callApi('/stores/createStore', 'post', formData);
    if (res.status === 'Success') {
      toast.success(res.message);
      reset();
    } else {
      toast.error(res.message);
    }
  };


  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios(
          'https://api.ipregistry.co/?key=m7irmmf8ey12rx7o'
        );
        let id = response.data.location.country.tld;
        let removeDot = id.replace('.', '');
        setCountryCode(removeDot);

      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
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
                    to='/ecome/store'
                    className='text-slate-500 hover:text-indigo-500'
                  >
                    Stores{' '}
                  </Link>
                  <svg
                    className='h-4 w-4 fill-current text-slate-400 mx-3'
                    viewBox='0 0 16 16'
                  >
                    <path d='M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z' />
                  </svg>
                </li>
                <li className='flex items-center'>

                  Create Store
                </li>
              </ul>
            </div>
            <header className='py-4'>
              <h2 className='font-semibold text-slate-800'>Add new Store</h2>
            </header>
          </div>

          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
              Store Name{' '}
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.name && watch('name') ? (
                <FcCheckmark />
              ) : errors.name ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('name')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.name && 'border-red-400'
                }`}
              name='name'
              id='name'
              type='text'
              placeholder='Store Name'
            />
            <span
              hidden={watch('name')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[125px]'
            >
              *
            </span>

            {errors.name && (
              <p className='text-red-500 text-sm'>{errors.name.message}</p>
            )}
          </div>


          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
              Registration Number
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.name && watch('reg') ? (
                <FcCheckmark />
              ) : errors.reg ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('reg')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.reg && 'border-red-400'
                }`}
              name='reg'
              id='reg'
              type='text'
              placeholder='Registration No'
            />
            <span
              hidden={watch('reg')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[145px]'
            >
              *
            </span>

            {errors.name && (
              <p className='text-red-500 text-sm'>{errors.name.message}</p>
            )}
          </div>

          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium mb-2' htmlFor='name'>
              Store Owner
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.name && watch('owner') ? (
                <FcCheckmark />
              ) : errors.reg ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>

            <select
              className={`border p-[9px] -mt-[3px] focus:outline-blue-500 rounded-sm w-full  ${errors.owner && 'border-red-400'
                }`}
            >
              <option value="">Select Owner</option>
              <option>Admin</option>
            </select>


            {errors.owner && (
              <p className='text-red-500 text-sm'>{errors.owner.message}</p>
            )}
          </div>
          <div className='col-lg-6 mb-4 '>
            <label className='block text-sm font-medium mb-1 '>
              Date of Birth
            </label>
            <div className='relative'>
              <DatePicker
                value={dob}
                name='dob'
                onChange={(date) => setDob(date)}
                renderInput={renderCustomInputDob} // render a custom input
                shouldHighlightWeekends
                calendarPopperPosition='top'
              />
            </div>
          </div>

          <div className='col-lg-6 mb-4 '>
            <label className='block text-sm font-medium mb-1 '>
              Store Start Date
            </label>
            <div className='relative'>
              <DatePicker
                value={quoteDate}
                name='quoteDate'
                onChange={(date) => setquoteDate(date)}
                renderInput={renderCustomInput} // render a custom input
                shouldHighlightWeekends
                calendarPopperPosition='top'
              />
            </div>
          </div>

          <div className='col-lg-6 mb-4'>
            <label className='block text-sm font-medium mb-1 '>
              Contact No
            </label>
            <div className='w-full '>
              <Controller
                name='phone'
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
                    className={` w-full  ${errors.phone && 'error_form'}`}
                    dropdownClass={'custom-dropdown'}
                  />
                )}
              />
            </div>
            {errors.phone && (
              <p className='text-red-500 text-sm'>
                {`phone number is a required`}
              </p>
            )}
          </div>

          <div className='col-lg-6 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='quote'>
              Image
            </label>
            <div
              className={`border p-[9px] -mt-[3px] focus:outline-blue-500 rounded-sm w-full  ${errors.image && 'border-red-400'
                }`}
            >
              <input type="file"
                {...register('image')}
              />
            </div>
              {errors.image && (
                <p className='text-red-500 text-sm'>{errors.image.message}</p>
              )}


          </div>

          <div className='col-lg-12 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='quote'>
              Vender Detail
            </label>
            <textarea {...register('detail')} placeholder='Detail' cols={20} {...register('detail')}
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.detail && 'border-red-400'
                }`}
            >
            </textarea>
            {errors.detail && (
              <p className='text-red-500 text-sm'>{errors.detail.message}</p>
            )}


          </div>




          <div className='col-lg-12'>
            <button className='p-2 bg-red-500 hover:bg-green-600 text-white'>
              Submit
            </button>
          </div>
        </div>
      </form >
    </div >
  );
};

export default CreateStore;
