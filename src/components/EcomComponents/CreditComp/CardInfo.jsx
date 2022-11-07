import React, { useState } from 'react'
import { FcCheckmark } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import credit from '../../../assets/ecome/credit.png'
const schema = yup.object({
    payment: yup.string().required('Payment is Required'),
    currency: yup.string().required('Currency  is Required'),
    holder: yup.string().required('Holder is Required'),
    card: yup.string().required('Card is Required'),
    state: yup.string().required('State is Required'),
    zip: yup.string().required('Zip Code is Required'),

});
const CardInfo = () => {
    const [active, setActive] = useState(2)
    const [card, setCard] = useState(1)
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
                    <h1 className=" font-medium text-[20px] pl-6">Payment Method & Confirmation</h1>
                    <hr className="mt-2 " />
                    <hr className="border-[2px] -bottom-[1px] absolute z-99 rounded-sm border-[#24D29F] w-[20%]" />
                </div>
            </div>

            <div className='pl-6'>
                <p className="text-[#707070]">How much credit would you like to add?</p>
                <div className='flex mt-4'>
                    <div className={`border w-[15%] h-[60px] text-[24px]  text-[#707070] text-center pt-3 ${active === 0 ? 'bg-[#24D29F] text-white' : "text-[#707070]"} `}>
                        $10
                    </div>
                    <div className={`border w-[15%] h-[60px] text-[24px]   ml-4 text-center pt-3 ${active === 0 ? 'bg-[#24D29F] text-white' : "text-[#707070]"}`}>
                        $10
                    </div>
                    <div className={`border w-[15%] h-[60px] text-[24px]   ml-4 text-center pt-3 ${active === 1 ? 'bg-[#24D29F] text-white' : "text-[#707070]"}`}>
                        $10
                    </div>
                    <div className={`border w-[15%] h-[60px] text-[24px]   ml-4 text-center pt-3 ${active === 2 ? 'bg-[#24D29F] text-white' : "text-[#707070]"}`}>
                        $10
                    </div>
                    <div className={`border w-[15%] h-[60px] text-[24px]   ml-4 text-center pt-3 ${active === 3 ? 'bg-[#24D29F] text-white' : "text-[#707070]"}`}>
                        $10
                    </div>

                    <div className="ml-5 w-[100%] flex justify-end mr-5 ">
                        <div className='absolute right-5 top-10'>
                            {!errors.amount && watch('amount') ? (
                                <FcCheckmark />
                            ) : errors.amount ? (
                                <div className=' text-red-500'>
                                    <MdClose />
                                </div>
                            ) : null}
                        </div>
                        <input
                            {...register('amount')}
                            autoComplete='off'
                            className={`border p-2 focus:outline-blue-500 h-[50px] w-[90%] rounded-md  ${errors.name && 'border-red-400'
                                }`}
                            name='amount'
                            id='amount'
                            type='text'
                            placeholder='Enter Custom amount'
                        />


                        {errors.amount && (
                            <p className='text-red-500 text-sm'>{errors.amount.message}</p>
                        )}
                    </div>

                </div>

            </div>


            <div className='mb-6 mt-8 w-full'>
                <div className="tranding-heading relative">
                    <h1 className=" font-medium text-[20px] pl-6">Payment Method & Confirmation</h1>
                    <hr className="mt-2 " />
                    <hr className="border-[2px] -bottom-[1px] absolute z-99 rounded-sm border-[#24D29F] w-[20%]" />
                </div>
            </div>
            <div className='flex justify-between pl-6 w-full'>
                <div className={`flex items-center ${card === 1 ? "border-l-0" : "border-r-0"}  border h-[45px] rounded-md border-[#24D29F]`}>
                    <div onClick={() => setCard(1)} className={`${card === 1 ? 'border' : ''}  p-3 cursor-pointer text-[14px] h-[45px]  rounded-md  ${card === 1 ? 'bg-[#24D29F] text-white' : "text-[#B8B8B8]"} `}>
                        Credit Card
                    </div>
                    <div onClick={() => setCard(2)} className={`${card === 2 ? 'border' : ''} p-3 cursor-pointer text-[14px] h-[45px] rounded-md  ${card === 2 ? 'bg-[#24D29F] text-white' : "text-[#B8B8B8]"} `}>
                        Paypal
                    </div>
                </div>
                <div className='flex justify-end'>
                    <img src={credit} className="w-[50%]" alt="credit" />
                </div>
            </div>
            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row p-5'>

                    <div className='col-lg-6 mb-4 relative'>
                        <label className='flex items-center text-sm font-medium ' htmlFor='name'>
                            <h2 >Payment Method</h2>
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

export default CardInfo