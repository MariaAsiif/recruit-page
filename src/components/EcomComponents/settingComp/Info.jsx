import React from 'react'
import dp_img from '../../../assets/images/Botanist.jpg'
import { FcCheckmark } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { callApi } from '../../../utils/CallApi';
const schema = yup.object({
    name: yup.string().required('Author Name is Required'),
    username: yup.string().required('Username is Required'),
    email: yup.string().required('Email Adress is Required'),
    website: yup.string().required('Website is Required'),
    password: yup.string().required('Password is Required'),
    confirm: yup.string().required('Confirm password is Required'),
    country: yup.string().required('Country is Required'),
    seller: yup.string().required('Seller is Required'),
    bio: yup.string().required('Bio is Required'),
});
const Info = () => {

    const {
        register,
        watch,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });


    const onSubmit = async (data) => {

        const res = await callApi('/quotes/createQuote', 'post');
        if (res.status === 'Success') {
            toast.success(res.message);
            reset();
        } else {
            toast.error(res.message);
        }
    };


    return (
        <>
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
            <div className='pt-6'>
                <div className='flex justify-center'>
                    <img src={dp_img} className="lg:mx-1 mx-5 rounded-full w-[150px]  h-[150px] object-cover" alt="agenciyCart" />
                </div>
                <div className='flex items-center justify-center pt-3'>
                    <button className='border mx-2 p-2 pl-3 bg-[#27D6A5] text-white pr-3 rounded-md text-[14px] font-medium'>Upload Image</button>
                    <button className='border p-2 pl-3 pr-3 bg-[#DD2E44] text-white rounded-md text-[14px] font-medium'>Delete Image</button>
                </div>
            </div>

            <div className='mb-2 mt-6 w-full'>
                <div className="tranding-heading relative">
                    <h1 className=" font-medium text-[20px] pl-2">Personal Information</h1>
                    <hr className="mt-2 " />
                    <hr className="border-[2px] -bottom-[1px] absolute z-99 rounded-sm border-[#24D29F] w-[20%]" />
                </div>
            </div>
            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row p-5'>
                    <div className='col-lg-6 mb-4 relative'>
                        <label className='flex items-center text-sm font-medium ' htmlFor='name'>
                            <h2 >Account  Name </h2>
                            <span className='text-red-400 text-lg font-medium ml-1 mt-1 '>*</span>
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
                            className={`border p-2 focus:outline-blue-500 h-[50px] w-full rounded-md  ${errors.name && 'border-red-400'
                                }`}
                            name='name'
                            id='name'
                            type='text'
                            placeholder='Account Name'
                        />


                        {errors.name && (
                            <p className='text-red-500 text-sm'>{errors.name.message}</p>
                        )}
                    </div>
                    <div className='col-lg-6 mb-4 relative'>
                        <label className='flex items-center text-sm font-medium ' htmlFor='name'>
                            <h2 >Username </h2>
                            <span className='text-red-400 text-lg font-medium ml-1 mt-1 '>*</span>
                        </label>

                        <div className='absolute right-5 top-10'>
                            {!errors.username && watch('username') ? (
                                <FcCheckmark />
                            ) : errors.username ? (
                                <div className=' text-red-500'>
                                    <MdClose />
                                </div>
                            ) : null}
                        </div>
                        <input
                            {...register('username')}
                            autoComplete='off'
                            className={`border p-2 focus:outline-blue-500 h-[50px] w-full rounded-md  ${errors.username && 'border-red-400'
                                }`}
                            name='username'
                            id='username'
                            type='text'
                            placeholder='Username'
                        />


                        {errors.username && (
                            <p className='text-red-500 text-sm'>{errors.username.message}</p>
                        )}
                    </div>
                    <div className='col-lg-6 mb-4 relative'>
                        <label className='flex items-center text-sm font-medium ' htmlFor='name'>
                            <h2 >Email Address</h2>
                            <span className='text-red-400 text-lg font-medium ml-1 mt-1 '>*</span>
                        </label>

                        <div className='absolute right-5 top-10'>
                            {!errors.email && watch('email') ? (
                                <FcCheckmark />
                            ) : errors.email ? (
                                <div className=' text-red-500'>
                                    <MdClose />
                                </div>
                            ) : null}
                        </div>
                        <input
                            {...register('email')}
                            autoComplete='off'
                            className={`border p-2 focus:outline-blue-500 h-[50px] w-full rounded-md  ${errors.email && 'border-red-400'
                                }`}
                            name='email'
                            id='email'
                            type='email'
                            placeholder='demo@gmail.com'
                        />


                        {errors.email && (
                            <p className='text-red-500 text-sm'>{errors.email.message}</p>
                        )}
                    </div>
                    <div className='col-lg-6 mb-4 relative'>
                        <label className='flex items-center text-sm font-medium ' htmlFor='name'>
                            <h2 >Website</h2>
                            <span className='text-red-400 text-lg font-medium ml-1 mt-1 '>*</span>
                        </label>

                        <div className='absolute right-5 top-10'>
                            {!errors.website && watch('website') ? (
                                <FcCheckmark />
                            ) : errors.name ? (
                                <div className=' text-red-500'>
                                    <MdClose />
                                </div>
                            ) : null}
                        </div>
                        <input
                            {...register('website')}
                            autoComplete='off'
                            className={`border p-2 focus:outline-blue-500 h-[50px] w-full rounded-md  ${errors.website && 'border-red-400'
                                }`}
                            name='website'
                            id='website'
                            type='text'
                            placeholder='www.test.com'
                        />


                        {errors.website && (
                            <p className='text-red-500 text-sm'>{errors.website.message}</p>
                        )}
                    </div>

                    <div className='col-lg-6 mb-4 relative'>
                        <label className='flex items-center text-sm font-medium ' htmlFor='name'>
                            <h2 >Password</h2>
                            <span className='text-red-400 text-lg font-medium ml-1 mt-1 '>*</span>
                        </label>

                        <div className='absolute right-5 top-10'>
                            {!errors.password && watch('password') ? (
                                <FcCheckmark />
                            ) : errors.name ? (
                                <div className=' text-red-500'>
                                    <MdClose />
                                </div>
                            ) : null}
                        </div>
                        <input
                            {...register('password')}
                            autoComplete='off'
                            className={`border p-2 focus:outline-blue-500 h-[50px] w-full rounded-md  ${errors.password && 'border-red-400'
                                }`}
                            name='password'
                            id='password'
                            type='password'
                            placeholder='password'
                        />


                        {errors.password && (
                            <p className='text-red-500 text-sm'>{errors.password.message}</p>
                        )}
                    </div>


                    <div className='col-lg-6 mb-4 relative'>
                        <label className='flex items-center text-sm font-medium ' htmlFor='name'>
                            <h2 >Confirm Password</h2>
                            <span className='text-red-400 text-lg font-medium ml-1 mt-1 '>*</span>
                        </label>

                        <div className='absolute right-5 top-10'>
                            {!errors.confirm && watch('confirm') ? (
                                <FcCheckmark />
                            ) : errors.name ? (
                                <div className=' text-red-500'>
                                    <MdClose />
                                </div>
                            ) : null}
                        </div>
                        <input
                            {...register('confirm')}
                            autoComplete='off'
                            className={`border p-2 focus:outline-blue-500 h-[50px] w-full rounded-md  ${errors.confirm && 'border-red-400'
                                }`}
                            name='confirm'
                            id='confirm'
                            type='password'
                            placeholder='confirm'
                        />


                        {errors.confirm && (
                            <p className='text-red-500 text-sm'>{errors.confirm.message}</p>
                        )}
                    </div>
                    <div className='col-lg-6 mb-4 relative'>
                        <label className='flex items-center text-sm font-medium ' htmlFor='name'>
                            <h2 >Country</h2>
                            <span className='text-red-400 text-lg font-medium ml-1 mt-1 '>*</span>
                        </label>

                        <div className='absolute right-5 top-10'>
                            {!errors.country && watch('country') ? (
                                <FcCheckmark />
                            ) : errors.name ? (
                                <div className=' text-red-500'>
                                    <MdClose />
                                </div>
                            ) : null}
                        </div>
                        <select className='pt-3 pb-3 mt-[1px]' >
                            <option>Select Country</option>
                            <option>Select Country</option>
                            <option>Select Country</option>
                            <option>Select Country</option>
                        </select>

                        {errors.country && (
                            <p className='text-red-500 text-sm'>{errors.country.message}</p>
                        )}
                    </div>



                    <div className='col-lg-6 mb-4 relative'>
                        <label className='flex items-center text-sm font-medium ' htmlFor='name'>
                            <h2 >Profile Heading</h2>
                            <span className='text-red-400 text-lg font-medium ml-1 mt-1 '>*</span>
                        </label>

                        <div className='absolute right-5 top-10'>
                            {!errors.profile && watch('profile') ? (
                                <FcCheckmark />
                            ) : errors.profile ? (
                                <div className=' text-red-500'>
                                    <MdClose />
                                </div>
                            ) : null}
                        </div>
                        <input
                            {...register('profile')}
                            autoComplete='off'
                            className={`border p-2 focus:outline-blue-500 h-[50px] w-full rounded-md  ${errors.profile && 'border-red-400'
                                }`}
                            name='profile'
                            id='profile'
                            type='password'
                            placeholder='Seller of the Month'
                        />


                        {errors.profile && (
                            <p className='text-red-500 text-sm'>{errors.profile.message}</p>
                        )}
                    </div>




                    <div className='col-lg-12 mb-4 relative'>
                        <label className='block text-sm font-medium mb-1' htmlFor='quote'>
                            Auther Bio
                        </label>
                        <div className='absolute right-5 top-10'>
                            {!errors.bio && watch('bio') ? (
                                <FcCheckmark />
                            ) : errors.bio ? (
                                <div className=' text-red-500'>
                                    <MdClose />
                                </div>
                            ) : null}
                        </div>
                        <textarea
                            {...register('bio')}
                            autoComplete='off'
                            className={`border p-2 focus:outline-blue-500 h-full w-full rounded-md  ${errors.bio && 'border-red-500'
                                }`}
                            name='bio'
                            id='bio'
                            placeholder='Auther Bio'
                            cols='20'
                        ></textarea>
                        {/* <span hidden={watch('quot')} className='absolute text-red-400 text-sm font-medium  top-9 left-[170px]'>(optional)</span> */}

                        {errors.bio && (
                            <p className='text-red-500 text-sm'>{errors.bio.message}</p>
                        )}
                    </div>

                    
                </div>
            </form>

        </>
    )
}

export default Info