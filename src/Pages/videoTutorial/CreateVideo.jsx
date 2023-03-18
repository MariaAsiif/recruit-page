import React, { useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { callApi } from '../../utils/CallApi';
import { Link } from 'react-router-dom';

const schema = yup.object({
  name: yup.string().required('Author Name is Required'),
});

const CreateVideo = () => {

  const [File, setFile] = useState('')
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });



  const handleImage = async (e) => {
    let file = e.target.files[0]

    let formData = new FormData();
    formData.append('file', file);   //append the values with key, value pair
    


    try {
      const res = await callApi("/uploads/uploadVideoTutorial", "post", formData)
      if (res) {
        let obj = Object.assign({}, ...res)
        setFile(obj.url)
        toast.success("Video Successfully uploaded");
      }
      else {
        toast.error(res.message);

      }

    } catch (error) {
      console.log(error);
    }
  }



  const onSubmit = async (data) => {

    let value = {
      "tutorialName": data.name,
      "tutorialUrl": File
    }
    const res = await callApi('/tutorials/createTutorial', 'post', value);
    if (res.status === 'Success') {
      toast.success(res.message);
      reset();
    } else {
      toast.error(res.message);
    }
  };




  return (
    <div className='bscontainer-fluid'>
     
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
                    to='/tutorial'
                    className='text-slate-500 hover:text-indigo-500'
                  >
                    Video Tutorial
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
                    to='/create-tutorial'
                    className='text-slate-500 hover:text-indigo-500'
                    href='#0'
                  >
                    Create Video Tutorial
                  </Link>
                </li>
              </ul>
            </div>
            <header className='py-4'>
              <h2 className='font-semibold text-slate-800'>Add new Tutorial</h2>
            </header>
          </div>

          <div className='col-lg-6 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
              Tutorial Name {' '}
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
              placeholder=' Tutorial Name '
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
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
              Video  {' '}
            </label>

            <input
              className={`border p-[5px] focus:outline-blue-500 rounded-sm w-full  ${errors.name && 'border-red-400'
                }`}
              name='name'
              id='name'
              onChange={(e) => handleImage(e)}
              type='file'
            />



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

export default CreateVideo;
