import React, { useState, useEffect } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { callApi } from '../../../utils/CallApi';
// import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
// import moment from 'moment';
// import { Link } from 'react-router-dom';

const schema = yup.object({
  name: yup.string().required('Category Name is Required'),
  desc: yup.string().required('Description is Required'),
  image: yup.mixed().test("required", "File is required", value => {
    return value && value.length
  })
});

const History = ({ handleNext, handleBack }) => {
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
  const [allDisease, setallDisease] = useState([])

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


  useEffect(() => {
    (async () => {
      try {
        const payload = {
          sortproperty: "created_at",
          sortorder: -1,
          offset: 0,
          limit: 50,
          query: {
            critarion: { active: true, },
            addedby: "_id email first_name",
            lastModifiedBy: "_id email first_name"
          }
        }
        const response = await callApi("/diseases/getDiseasesWithFullDetails", "post", payload)
        setallDisease(response.data.diseases)
      } catch (error) {
        console.log(error);
      }
    })();

  }, [])


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
          {/* <div className='col-12 mb-6'>
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
                    to='/inspire'
                    className='text-slate-500 hover:text-indigo-500'
                  >
                    Inspire{' '}
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
                    to='/inspire/create-inspire'
                    className='text-slate-500 hover:text-indigo-500'
                    href='#0'
                  >
                    Create inspire
                  </Link>
                </li>
              </ul>
            </div>
            <header className='py-4'>
              <h2 className='font-semibold text-slate-800'>Add new Inspire</h2>
            </header>
          </div> */}

          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
              Disease
            </label>
            <select
              className={`border p-[10px] focus:outline-blue-500 rounded-sm w-full -mt-[1px]  ${errors.name && 'border-red-500'
                  }`}
            >
              <option value="">Select Disease</option>
              {allDisease.map((dis) => (
                <option key={dis._id} value={dis._id}>{dis?.diseaseName}</option>
              ))}

            </select>
            {errors.name && (
                <p className='text-red-500 text-sm'>{errors.name.message}</p>
              )}

          </div>

          <div className='col-lg-4 mb-4 relative'>
            <div>
              <div className='text-sm text-slate-800 font-semibold mb-3'>
                Nagative / Positive
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
                    {companySetting ? 'Positive' : 'Negative'}
                  </div>
                </label>



              </div>
            </div>
          </div>

          <div className='col-lg-4 mb-4 '>
            <label className='block text-sm font-medium mb-1 '>
              Medical Files
            </label>
            <div className='relative'>
              <input
                type="file"
                className={`border p-1 focus:outline-blue-500 rounded-sm w-full  ${errors.image && 'border-red-500'
                  }`}

              />

              {errors.image && (
                <p className='text-red-500 text-sm'>{errors.image.message}</p>
              )}
            </div>
          </div>






          <div className='col-lg-12 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='quote'>
              Description
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.desc && watch('desc') ? (
                <FcCheckmark />
              ) : errors.desc ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <textarea
              {...register('desc')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.desc && 'border-red-500'
                }`}
              name='desc'
              id='desc'
              placeholder='Description'
              cols='20'
            ></textarea>
            {/* <span hidden={watch('quot')} className='absolute text-red-400 text-sm font-medium  top-9 left-[170px]'>(optional)</span> */}

            {errors.desc && (
              <p className='text-red-500 text-sm'>{errors.desc.message}</p>
            )}
          </div>

          <div className='col-lg-12'>
            <div className='col-lg-12 flex justify-between'>
              <button onClick={(e) => handleBack(e)} className='p-2 bg-red-500 hover:bg-green-600 text-white'>
                Back
              </button>
              <button className='p-2 bg-red-500 hover:bg-green-600 text-white'>
                Next
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default History;
