import React from 'react'
import { FcCheckmark } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const schema = yup.object({
    name: yup.string().required('Author Name is Required'),
    compname: yup.string().required('Compnay  is Required'),
    email: yup.string().required('Email Address   is Required'),
    country: yup.string().required('Country is Required'),
    state: yup.string().required('State is Required'),
    zip: yup.string().required('Zip Code is Required'),

});
const Personal = () => {

    const {
        register,
        watch,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });


    const onSubmit = async (data) => {

     
    };


    return (
        <>


            <div className='mb-6 mt-8 w-full'>
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
                            <h2 >Full  Name </h2>
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
                            <h2 >Company Name </h2>
                            <span className='text-red-400 text-lg font-medium ml-1 mt-1 '>*</span>
                        </label>

                        <div className='absolute right-5 top-10'>
                            {!errors.compname && watch('compname') ? (
                                <FcCheckmark />
                            ) : errors.compname ? (
                                <div className=' text-red-500'>
                                    <MdClose />
                                </div>
                            ) : null}
                        </div>
                        <input
                            {...register('compname')}
                            autoComplete='off'
                            className={`border p-2 focus:outline-blue-500 h-[50px] w-full rounded-md  ${errors.compname && 'border-red-400'
                                }`}
                            name='compname'
                            id='compname'
                            type='text'
                            placeholder='Compnay Name'
                        />


                        {errors.compname && (
                            <p className='text-red-500 text-sm'>{errors.compname.message}</p>
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
                            <h2 >Address Line 1 </h2>
                        </label>


                        <input
                            {...register('address')}
                            autoComplete='off'
                            className={`border p-2 focus:outline-blue-500 h-[50px] w-full rounded-md  `}
                            name='profile'
                            id='profile'
                            type='text'
                            placeholder='Address'
                        />



                    </div>
                    <div className='col-lg-6 mb-4 relative'>
                        <label className='flex items-center text-sm font-medium ' htmlFor='name'>
                            <h2 >Address Line 2 </h2>
                        </label>


                        <input
                            {...register('address2')}
                            autoComplete='off'
                            className={`border p-2 focus:outline-blue-500 h-[50px] w-full rounded-md  `}
                            name='profile'
                            id='profile'
                            type='text'
                            placeholder='Address'
                        />



                    </div>

                    <div className='col-lg-6 mb-4 relative'>
                        <label className='flex items-center text-sm font-medium ' htmlFor='name'>
                            <h2 >City / State</h2>
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
                            <h2 >Zip/ Postal Code</h2>
                            <span className='text-red-400 text-lg font-medium ml-1 mt-1 '>*</span>
                        </label>

                        <div className='absolute right-5 top-10'>
                            {!errors.zip && watch('zip') ? (
                                <FcCheckmark />
                            ) : errors.zip ? (
                                <div className=' text-red-500'>
                                    <MdClose />
                                </div>
                            ) : null}
                        </div>
                        <input
                            {...register('zip')}
                            autoComplete='off'
                            className={`border p-2 focus:outline-blue-500 h-[50px] w-full rounded-md  ${errors.zip && 'border-red-400'
                                }`}
                            name='zip'
                            id='zip'
                            type='text'
                            placeholder='Zip code'
                        />


                        {errors.email && (
                            <p className='text-red-500 text-sm'>{errors.email.message}</p>
                        )}
                    </div>


                </div>
            </form>

        </>
    )
}

export default Personal