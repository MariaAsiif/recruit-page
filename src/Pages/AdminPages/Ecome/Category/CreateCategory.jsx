import React, { useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { callApi } from '../../../../utils/CallApi';

import { Link } from 'react-router-dom';

const schema = yup.object({
  name: yup.string().required('Category Name is Required'),
  added: yup.string().required('Added is Required'),
});

const CreateCategory = () => {


  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });



  const onSubmit = async (data) => {

    let value = {
      productCategoryTitle: data.name,
    };
    const res = await callApi('/productcategories/createcategory', 'post', value);
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
                    to='/ecome/category'
                    className='text-slate-500 hover:text-indigo-500'
                  >
                    Category
                  </Link>
                  <svg
                    className='h-4 w-4 fill-current text-slate-400 mx-3'
                    viewBox='0 0 16 16'
                  >
                    <path d='M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z' />
                  </svg>
                </li>
                <li className='flex items-center'>

                  Create Category
                </li>
              </ul>
            </div>
            <header className='py-4'>
              <h2 className='font-semibold text-slate-800'>Add new Category</h2>
            </header>
          </div>

          <div className='col-lg-6 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
              Catagory Name
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
              className={`border p-2  focus:outline-blue-500 rounded-sm w-full  ${errors.name && 'border-red-400'
                }`}
              name='name'
              id='name'
              type='text'
              placeholder='Catagory Name'
            />
            <span
              hidden={watch('name')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[155px]'
            >
              *
            </span>

            {errors.name && (
              <p className='text-red-500 text-sm'>{errors.name.message}</p>
            )}
          </div>
          <div className='col-lg-6 mb-4 relative'>
            <label className="block text-sm font-medium mb-1" htmlFor="city">Departmant</label>
            <div className='absolute right-10 top-10'>
              {!errors.added ? <FcCheckmark /> : errors.added ? <div className=' text-red-500'><MdClose /></div> : null}
            </div>
            <select
              {...register('added')}
              // value={recruitModel.added}
              // onChange={handleChange}
              name="added"
              id="added"
              className={`border p-2 lg:-mt-[1px] focus:outline-blue-500 rounded-sm w-full   ${errors.added && 'border-red-500'}`}
            >
              <option value="">Select Added By </option>
              <option >Super Admin</option>
              <option >Admin</option>
              <option >Hr</option>
            </select>
            {errors.added && (
              <p className="text-red-500 text-sm">{errors.added.message}</p>
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

export default CreateCategory;
