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
import { useEffect } from 'react';
import moment from 'moment';
// import moment from 'moment';

const schema = yup.object({
  requestCategory: yup.string().required('Request Category is Required'),
  reasonOfCurrentVisit: yup.string().required('Problem is Required'),
});
const Category = ({ handleNext, handleBack, data, updateState }) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  const [quoteDate, setquoteDate] = useState({
    day: dd,
    month: mm,
    year: yyyy,
  });

  let current = new Date();
  const [value, setValue] = useState("")
  let time = current.toLocaleTimeString();


  useEffect(() => {
    setValue(time)
  }, [value])



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




  const onSubmit = async (values) => {
    let updatedDate = `${quoteDate.year}-${quoteDate.month}-${quoteDate.day} ${value}`;

    let payload = {
      reasonOfCurrentVisit: values.reasonOfCurrentVisit,
      requestCategory: values.requestCategory,
      status: "pending",
      requestDate: updatedDate,
    }
    updateState(payload)
    handleNext()

  };

  useEffect(() => {
    // var parts = data?.quoteDate?.split('-');
    // var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 
    if (data.requestDate) {
      reset(data);
      const date = moment(data?.requestDate).format('yyyy-M-D').split('-')
      const time = data?.requestDate?.substring(11, 18)
      console.log("time is here " , time )
      setquoteDate({ day: +date[2], month: +date[1], year: +date[0] })
      setValue(time)
    }
  }, [data, reset])


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
              {!errors.requestCategory && watch('requestCategory') ? (
                <FcCheckmark />
              ) : errors.requestCategory ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('requestCategory')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.requestCategory && 'border-red-400'
                }`}
              name='requestCategory'
              id='name'
              type='text'
              placeholder='Category Name'
            />
            <span
              hidden={watch('requestCategory')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[150px]'
            >
              *
            </span>

            {errors.requestCategory && (
              <p className='text-red-500 text-sm'>{errors.requestCategory.message}</p>
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

              <TimeInput
                value={value}
                hour12Format
                eachInputDropdown
                manuallyDisplayDropdown
                onChange={(dateString) => setValue(dateString)} />
            </div>
          </div>

          <div className='col-lg-12 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='quote'>
              Problem
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.reasonOfCurrentVisit && watch('reasonOfCurrentVisit') ? (
                <FcCheckmark />
              ) : errors.reasonOfCurrentVisit ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <textarea
              {...register('reasonOfCurrentVisit')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.reasonOfCurrentVisit && 'border-red-500'
                }`}
              name='reasonOfCurrentVisit'
              id='reasonOfCurrentVisit'
              placeholder='Problem'
              cols='20'
            ></textarea>
            {/* <span hidden={watch('quot')} className='absolute text-red-400 text-sm font-medium  top-9 left-[170px]'>(optional)</span> */}

            {errors.reasonOfCurrentVisit && (
              <p className='text-red-500 text-sm'>{errors.reasonOfCurrentVisit.message}</p>
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