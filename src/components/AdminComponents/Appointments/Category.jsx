import React, { useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { callApi } from '../../../utils/CallApi';
import TimeInput from 'react-time-picker-input';
import "react-time-picker-input/dist/components/TimeInput.css"
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
// import moment from 'moment';

const schema = yup.object({
  name: yup.string().required('Category Name is Required'),
  quote: yup.string().required('Problem is Required'),
});
const Category = ({ handleNext, handleBack }) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  const [quoteDate, setquoteDate] = useState({
    day: dd,
    month: mm,
    year: yyyy,
  });
  // const [companySetting, setCompanySetting] = useState(true);
  
  let current = new Date();
  let time  = current.toLocaleTimeString();
  const [value, setValue] = useState(time)

  console.log("time is" , time )


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


  console.log("time" , value )


  const onSubmit = async (data) => {
    
    handleNext()

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
        <div className='row p-5'>

          <h2 className='text-[18px] mb-2 font-medium'>Category</h2>

          <div className='col-lg-6 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
              Category Name{' '}
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
              placeholder='Category Name'
            />
            <span
              hidden={watch('name')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[150px]'
            >
              *
            </span>

            {errors.name && (
              <p className='text-red-500 text-sm'>{errors.name.message}</p>
            )}
          </div>


          <h2 className='text-[18px] font-medium mb-2'>Schedule </h2>

          <div className='col-lg-6 mb-4 '>
            <label className='block text-sm font-medium mb-1 '>
              Date
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
          <div className='col-lg-6 mb-4 '>
            <label className='block text-sm font-medium mb-1 '>
              Time
            </label>
            <div className='relative z-10'>

              <TimeInput value={time}
                hour12Format
                eachInputDropdown
                format="hh:mm:ss:a"
                manuallyDisplayDropdown
                onChange={(dateString) => setValue(dateString)} />
            </div>
          </div>

          <div className='col-lg-12 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='quote'>
              Problem
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.quote && watch('quote') ? (
                <FcCheckmark />
              ) : errors.quote ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <textarea
              {...register('quote')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.quote && 'border-red-500'
                }`}
              name='quote'
              id='quote'
              placeholder='Problem'
              cols='20'
            ></textarea>
            {/* <span hidden={watch('quot')} className='absolute text-red-400 text-sm font-medium  top-9 left-[170px]'>(optional)</span> */}

            {errors.quote && (
              <p className='text-red-500 text-sm'>{errors.quote.message}</p>
            )}
          </div>

          <div className='col-lg-12 flex justify-between'>
            <button onClick={(e) => handleBack(e)} className='p-2 bg-red-500 hover:bg-green-600 text-white'>
              Back
            </button>
            <button className='p-2 bg-red-500 hover:bg-green-600 text-white'>
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Category