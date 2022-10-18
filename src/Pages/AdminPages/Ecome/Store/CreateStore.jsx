import React, { useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { callApi } from '../../../../utils/CallApi';

import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import moment from 'moment';
import { Link } from 'react-router-dom';

const schema = yup.object({
  name: yup.string().required('Store Name is Required'),
  owner: yup.string().required('Store Owner is Required'),
  reg: yup.string().required('Registration Name is Required'),
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
  const [companySetting, setCompanySetting] = useState(true);

  const {
    register,
    watch,
    reset,
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

  const handleChangeDate = (data) => {
    const date = moment(data).format('yyyy-M-D').split('-');
    setquoteDate({ day: +date[2], month: +date[1], year: +date[0] });
  };

  const onSubmit = async (data) => {
    let updated = `${quoteDate.year}-${quoteDate.month}-${quoteDate.day}`;

    let value = {
      quoteText: data.quote,
      authorName: data.name,
      quoteColor: 'Red',
      quoteDate: updated,
      storeOwner: '6305dac13c594d3538c790b8',
    };
    const res = await callApi('/stores/createStore', 'post', value);
    if (res.status === 'Success') {
      toast.success(res.message);
      reset();
    } else {
      toast.error(res.message);
    }
  };

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
              <option>Select Owner</option>
              <option>Admin</option>
            </select>


            {errors.owner && (
              <p className='text-red-500 text-sm'>{errors.owner.message}</p>
            )}
          </div>

          <div className='col-lg-6 mb-4 '>
            <label className='block text-sm font-medium mb-1 '>
              Quote Date
            </label>
            <div className='relative'>
              <DatePicker
                value={quoteDate}
                name='quoteDate'
                onChange={(date) => setquoteDate(date)}
                renderInput={renderCustomInput} // render a custom input
                shouldHighlightWeekends
                calendarPopperPosition='bottom'
              />
            </div>
          </div>

          <div className='col-lg-6 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='quote'>
              Image
            </label>
            <div className='border p-[5px] focus:outline-blue-500 rounded-sm w-full '>
              <input type="file"
              />

            </div>


          </div>

          <div className='col-lg-12'>
            <button className='p-2 bg-red-500 hover:bg-green-600 text-white'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateStore;
