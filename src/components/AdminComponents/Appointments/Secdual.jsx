import React, { useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { callApi } from '../../../utils/CallApi';
import { MdDelete } from 'react-icons/md'
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import moment from 'moment';
import { BsPlusCircle } from 'react-icons/bs'
const schema = yup.object({
  name: yup.string().required('Doctor Name is Required'),
  special: yup.string().required('Specialization is Required'),
  link: yup.string().required('Profile link is Required'),
  quote: yup.string().required('Quotation is Required'),
  prs: yup.mixed().test('required ', "File is required", value => {
    return value && value.length
  }),
  med: yup.mixed().test('required ', "File is required", value => {
    return value && value.length
  })

});

const Schedule = ({ handleNext, handleBack }) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  const [quoteDate, setquoteDate] = useState({
    day: dd,
    month: mm,
    year: yyyy,
  });

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
        <div className='row p-11'>
          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
              Doctor Name{' '}
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
              placeholder='doctor Name'
            />
            <span
              hidden={watch('name')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[145px]'
            >
              *
            </span>

            {errors.name && (
              <p className='text-red-500 text-sm'>{errors.name.message}</p>
            )}
          </div>

          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
              Specialization
            </label>

            <div className='absolute right-5 top-10'>
              {!errors.special && watch('special') ? (
                <FcCheckmark />
              ) : errors.special ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input type="text"
              {...register('special')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.special && 'border-red-500'
                }`}
              name='special'
              id='special'
              placeholder='Specialization'
            />
            {/* <span hidden={watch('quot')} className='absolute text-red-400 text-sm font-medium  top-9 left-[170px]'>(optional)</span> */}

            {errors.link && (
              <p className='text-red-500 text-sm'>{errors.link.message}</p>
            )}





          </div>

          <div className='col-lg-4 mb-4 '>
            <label className='block text-sm font-medium mb-1 '>
              Last Checkup Date
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

          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='quote'>
              Profile Link
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
            <input type="text"
              {...register('link')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.link && 'border-red-500'
                }`}
              name='link'
              id='link'
              placeholder='profile Link'
              cols='20'
            />
            {/* <span hidden={watch('quot')} className='absolute text-red-400 text-sm font-medium  top-9 left-[170px]'>(optional)</span> */}

            {errors.link && (
              <p className='text-red-500 text-sm'>{errors.link.message}</p>
            )}
          </div>
          <div className='col-lg-4 mb-4 '>
            <label className='block text-sm font-medium mb-1 '>
              Dr Prescription
            </label>
            <div className='relative'>
              <input
                type="file"
                className={`border p-[5px] focus:outline-blue-500 rounded-sm w-full  ${errors.prs && 'border-red-500'
                  }`}
              />
              {errors.prs && (
                <p className='text-red-500 text-sm'>{errors.prs.message}</p>
              )}
            </div>
          </div>
          <div className='col-lg-4 mb-4 '>
            <label className='block text-sm font-medium mb-1 '>
              Medical Reports
            </label>
            <div className='relative'>
              <input
                type="file"
                className={`border p-[5px] focus:outline-blue-500 rounded-sm w-full  ${errors.med && 'border-red-500'
                  }`}
              />
              {errors.med && (
                <p className='text-red-500 text-sm'>{errors.med.message}</p>
              )}
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className='mb-3 font-medium'>Family Diseases</h2>
            <button className='p-2 mb-3 flex items-center bg-red-500 hover:bg-green-600 text-white'>
              Add <BsPlusCircle className='ml-2' />
            </button>
          </div>
          <div className='col-lg-12 mb-4 border '>
            <div className='row p-2'>

              <div className='col-lg-4 mb-4 relative'>
                <label className='block text-sm font-medium mb-1' htmlFor='name'>
                  Disease
                </label>

                <input type="text" {...register('disease')} placeholder="Disease"
                  className={`border p-[10px] focus:outline-blue-500 rounded-sm w-full -mt-[1px]  `}
                />

              </div>

              <div className='col-lg-4 mb-4 relative'>

                <button className='p-2 ml-2 mt-7 h-[10] bg-red-500 hover:bg-green-600 text-white'>
                  <MdDelete />
                </button>
              </div>


            </div>
          </div>

          <div className='col-lg-12 flex justify-between'>
            <button onClick={(e) => handleBack(e)} className='p-2 bg-red-500 hover:bg-green-600 text-white'>
              Back
            </button>
            <button  className='p-2 bg-red-500 hover:bg-green-600 text-white'>
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Schedule;
