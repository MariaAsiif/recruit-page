import React, { useState , useEffect} from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { callApi } from '../../utils/CallApi';
import { Link } from 'react-router-dom';

const schema = yup.object({
  name: yup.string().required('Budget is Required'),
  quote: yup.string().required('Quotation is Required'),
  days: yup.string().required('No of days is Required'),
  category: yup.string().required('category is Required'),
});

const CreateTask = () => {
  const [file, setFile] = useState('')
  const [categories, setCategories] = useState([])

  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  // ****************** Datepicker Content ***********


  const onSubmit = async (data) => {


    let value = {

    };
    const res = await callApi('/quotes/createQuote', 'post', value);
    if (res.status === 'Success') {
      toast.success(res.message);
      reset();
    } else {
      toast.error(res.message);
    }
  };


  useEffect(() => {
    (async () => {
      try {
        const payload = {
          "sortproperty": "createdAt",
          "sortorder": -1,
          "offset": 0,
          "limit": 50

        }
        const response = await callApi("/jobcategories/getcategories", "post", payload)

        setCategories(response.data.categories)
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
          <div className='col-12 mb-6'>
            <div className='mb-3'>
              <ul className='inline-flex flex-wrap text-sm font-medium'>
                <li className="flex items-center">
                  <Link to="/admindashboard" className="text-slate-500 hover:text-indigo-500" >dashboard </Link>
                  <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                    <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                  </svg>
                </li>
                <li className='flex items-center'>
                  <Link
                    to='/inspire'
                    className='text-slate-500 hover:text-indigo-500'
                  >
                    Task{' '}
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
                    Create Task
                  </Link>
                </li>
              </ul>
            </div>
            <header className='py-4'>
              <h2 className='font-semibold text-slate-800'>Add new Task</h2>
            </header>
          </div>

          <div className='col-lg-6 mb-4 relative'>
            <label className="block text-sm font-medium " htmlFor="category">Category</label>
            <div className='absolute right-10 top-10'>
              {!errors.category && watch('days') ? <FcCheckmark /> : errors.category ? <div className=' text-red-500'><MdClose /></div> : null}
            </div>
            <select
              {...register('category')}
              name="category"
              id="category"
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.category && 'border-red-500'}`}
            >
              <option value="">Select Category</option>
              {
                categories.map((item, i) => (
                  <option key={i} value={item._id}>{item?.jobCategoryTitle}</option>
                ))
              }
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>

          <div className='col-lg-6 mb-4 relative'>
            <label className="block text-sm font-medium mb-1" htmlFor="secondFname">Upload File </label>
            <div className='absolute right-5 top-10'>
              {!errors.logoimg && watch('logoimg') ? <FcCheckmark /> : errors.logo ? <div className=' text-red-500'><MdClose /></div> : null}
            </div>
            <input type="file" className={`border p-[6px] focus:outline-blue-500 rounded-sm w-full h-[30px`} onChange={(e) => setFile(e.target.files[0])} />
            <small className='text-red-500'>only png, svg images can be added</small>
          </div>

          <div className='col-lg-6 mb-4 relative'>
            <label className="block text-sm font-medium " htmlFor="jobtype">When would you like service delivered</label>
            <div className='absolute right-10 top-10'>
              {!errors.jobtype && watch('days') ? <FcCheckmark /> : errors.days ? <div className=' text-red-500'><MdClose /></div> : null}
            </div>
            <select
              {...register('days')}
              name="days"
              id="days"
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.days && 'border-red-500'}`}
            >
              <option value="">Select days</option>
              {
                Array(10).fill(10).map((_, i) => (
                  <option>{i + 1}</option>
                ))
              }
            </select>
            {errors.days && (
              <p className="text-red-500 text-sm">{errors.days.message}</p>
            )}
          </div>
          <div className='col-lg-6 mb-4 relative'>
            <label className='block text-sm font-medium mb-[6px]' htmlFor='name'>
              Budget
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
              placeholder='Budget'
            />
            <span
              hidden={watch('name')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[90px]'
            >
              *
            </span>

            {errors.name && (
              <p className='text-red-500 text-sm'>{errors.name.message}</p>
            )}
          </div>

          <div className='col-lg-12 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='quote'>
              Description
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
              placeholder='Description'
              cols='20'
            ></textarea>
            {/* <span hidden={watch('quot')} className='absolute text-red-400 text-sm font-medium  top-9 left-[170px]'>(optional)</span> */}

            {errors.quote && (
              <p className='text-red-500 text-sm'>{errors.quote.message}</p>
            )}
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

export default CreateTask;
