import React, { useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { callApi } from '../../../utils/CallApi';

import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
const schema = yup.object({
  name: yup.string().required('Author Name is Required'),
  quote: yup.string().required('Quotation is Required'),
});

const SocialHistory = ({ handleNext, handleBack }) => {
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
      addedby: '6305dac13c594d3538c790b8',
    };
    const res = await callApi('/quotes/createQuote', 'post', value);
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
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <form >
        <div className='row p-11'>
         

          <div className='flex'>
            <div className='col-lg-12 flex items-center justify-between '>
              <h2 className='text-[18px] font-medium'>Addictions</h2>
              <button className='p-2 bg-red-500 hover:bg-green-600 text-white flex items-center'>
                Add <BsFillPlusCircleFill className='ml-2' />
              </button>
            </div>
          </div>

          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
            Addiction Name{' '}
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
              placeholder='Operational Name'
            />
            <span
              hidden={watch('name')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[170px]'
            >
              *
            </span>

            {errors.name && (
              <p className='text-red-500 text-sm'>{errors.name.message}</p>
            )}
          </div>

          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
            How Long Used
            </label>

            <select
              className={`border p-[10px] focus:outline-blue-500 rounded-sm w-full -mt-[1px]  `}
            >
              <option>Select operationResult</option>
              <option>Admin</option>
              <option>Super Admin</option>
              <option>Hr</option>
            </select>


          </div>

          <div className='col-lg-4 mb-4 relative'>
            <div>
              <div className='text-sm text-slate-800 font-semibold mb-3'>
              Ever Used
              </div>
              <div className='flex items-center'>

                <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox"
                    checked={companySetting}
                    onChange={() => setCompanySetting(!companySetting)}
                    id="default-toggle"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <div className='text-sm text-slate-400 italic ml-2'>
                    {companySetting ? 'True' : 'False'}
                  </div>
                </label>



              </div>
            </div>
          </div>

          <div className='col-lg-4 mb-4 '>
            <label className='block text-sm font-medium mb-1 '>
            When Started
            </label>
            <div className='relative flex items-center'>
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

          <div className='col-lg-4 mb-4 '>
            <label className='block text-sm font-medium mb-1 '>
            When Quited
            </label>
            <div className='relative flex items-center'>
              <DatePicker
                value={quoteDate}
                name='quoteDate'
                onChange={(date) => setquoteDate(date)}
                renderInput={renderCustomInput} // render a custom input
                shouldHighlightWeekends
                calendarPopperPosition='bottom'
              />
              {/* <button className='p-2 ml-2 bg-red-500 hover:bg-green-600 text-white'>
                <MdDelete />
              </button> */}
            </div>
          </div>

          <div className='col-lg-4 mb-4 '>
            <label className='block text-sm font-medium mb-1 '>
            Last Time Used
            </label>
            <div className='relative flex items-center'>
              <input type="text"
               {...register('lastTime')}
               autoComplete='off'
               className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.lastTime && 'border-red-400'
                 }`}
              placeholder='Last Time Used' />
              {/* <button className='p-2 ml-2 bg-red-500 hover:bg-green-600 text-white'>
                <MdDelete />
              </button> */}
            </div>
          </div>

          <div className='col-lg-12 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
            Description
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
            <textarea
              {...register('name')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.name && 'border-red-400'
                }`}
              name='name'
              id='name'
              placeholder='Description'
            ></textarea>
            

            {errors.name && (
              <p className='text-red-500 text-sm'>{errors.name.message}</p>
            )}
          </div>

          <hr className='mb-4'/>

          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
            Marital Status
            </label>

            <select
              className={`border p-[10px] focus:outline-blue-500 rounded-sm w-full -mt-[1px]  `}
            >
              <option>Select operationResult</option>
              <option>Admin</option>
              <option>Super Admin</option>
              <option>Hr</option>
            </select>


          </div>
          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
            Sexual Orientation
            </label>

            <select
              className={`border p-[10px] focus:outline-blue-500 rounded-sm w-full -mt-[1px]  `}
            >
              <option>Select sexualOrientation</option>
              <option>Admin</option>
              <option>Super Admin</option>
              <option>Hr</option>
            </select>


          </div>

          <div className='col-lg-2 mb-4 relative'>
            <div>
              <div className='text-sm text-slate-800 font-semibold mb-3'>
              Ever Hurt
              </div>
              <div className='flex items-center'>

                <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox"
                    checked={companySetting}
                    onChange={() => setCompanySetting(!companySetting)}
                    id="default-toggle"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <div className='text-sm text-slate-400 italic ml-2'>
                    {companySetting ? 'True' : 'False'}
                  </div>
                </label>



              </div>
            </div>
          </div>

          <div className='col-lg-2 mb-4 relative'>
            <div>
              <div className='text-sm text-slate-800 font-semibold mb-3'>
              Need Carrier
              </div>
              <div className='flex items-center'>

                <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox"
                    checked={companySetting}
                    onChange={() => setCompanySetting(!companySetting)}
                    id="default-toggle"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <div className='text-sm text-slate-400 italic ml-2'>
                    {companySetting ? 'True' : 'False'}
                  </div>
                </label>



              </div>
            </div>
          </div>
          <div className='col-lg-2 mb-4 relative'>
            <div>
              <div className='text-sm text-slate-800 font-semibold mb-3'>
              Exercise
              </div>
              <div className='flex items-center'>

                <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox"
                    checked={companySetting}
                    onChange={() => setCompanySetting(!companySetting)}
                    id="default-toggle"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <div className='text-sm text-slate-400 italic ml-2'>
                    {companySetting ? 'True' : 'False'}
                  </div>
                </label>



              </div>
            </div>
          </div>
          <div className='col-lg-2 mb-4 relative'>
            <div>
              <div className='text-sm text-slate-800 font-semibold mb-3'>
              Pregnant
              </div>
              <div className='flex items-center'>

                <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox"
                    checked={companySetting}
                    onChange={() => setCompanySetting(!companySetting)}
                    id="default-toggle"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <div className='text-sm text-slate-400 italic ml-2'>
                    {companySetting ? 'True' : 'False'}
                  </div>
                </label>



              </div>
            </div>
          </div>
          <div className='col-lg-2 mb-4 relative'>
            <div>
              <div className='text-sm text-slate-800 font-semibold mb-3'>
              Breast Feeding
              </div>
              <div className='flex items-center'>

                <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox"
                    checked={companySetting}
                    onChange={() => setCompanySetting(!companySetting)}
                    id="default-toggle"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <div className='text-sm text-slate-400 italic ml-2'>
                    {companySetting ? 'True' : 'False'}
                  </div>
                </label>



              </div>
            </div>
          </div>
          <div className='col-lg-2 mb-4 relative'>
            <div>
              <div className='text-sm text-slate-800 font-semibold mb-3'>
              Delivery Injury
              </div>
              <div className='flex items-center'>

                <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox"
                    checked={companySetting}
                    onChange={() => setCompanySetting(!companySetting)}
                    id="default-toggle"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <div className='text-sm text-slate-400 italic ml-2'>
                    {companySetting ? 'True' : 'False'}
                  </div>
                </label>



              </div>
            </div>
          </div>

          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
            No Of Childrens
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
              type='number'
              placeholder='noOfChildrens'
            />
           

            {errors.name && (
              <p className='text-red-500 text-sm'>{errors.name.message}</p>
            )}
          </div>

          <div className='col-lg-6 mb-4 '>
            <label className='block text-sm font-medium mb-1 '>
            Last Menstrual Date
            </label>
            <div className='relative flex items-center'>
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
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
            Delivery Method
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
              type='number'
              placeholder=' Delivery Method'
            />
           

            {errors.name && (
              <p className='text-red-500 text-sm'>{errors.name.message}</p>
            )}
          </div>
         


          <div className='col-lg-12 flex justify-between'>
            <button onClick={(e) => handleBack(e)} className='p-2 bg-red-500 hover:bg-green-600 text-white'>
              Back
            </button>
            <button onClick={(e) => handleNext(e)} className='p-2 bg-red-500 hover:bg-green-600 text-white'>
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SocialHistory;
