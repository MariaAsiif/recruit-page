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
    cvv: yup.string().required('CVV Code is Required'),

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
                            {/* <span className='text-red-400 text-lg font-medium ml-1 mt-1 '>*</span> */}
                        </label>

                        <div className='absolute right-5 top-10'>
                            {!errors.country && watch('country') ? (
                                <FcCheckmark />
                            ) : errors.country ? (
                                <div className=' text-red-500'>
                                    <MdClose />
                                </div>
                            ) : null}
                        </div>
                        <select className={`border p-2 focus:outline-blue-500 h-[50px] w-full rounded-md  ${errors.country && 'border-red-400'
                            }`} >
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
                            <h2 >Currency</h2>
                            {/* <span className='text-red-400 text-lg font-medium ml-1 mt-1 '>*</span> */}
                        </label>

                        <div className='absolute right-5 top-10'>
                            {!errors.currency && watch('currency') ? (
                                <FcCheckmark />
                            ) : errors.currency ? (
                                <div className=' text-red-500'>
                                    <MdClose />
                                </div>
                            ) : null}
                        </div>
                        <select className={`border p-2 focus:outline-blue-500 h-[50px] w-full rounded-md  ${errors.currency && 'border-red-400'
                            }`} >
                            <option>Select Currency</option>
                            <option>Select Country</option>
                            <option>Select Country</option>
                            <option>Select Country</option>
                        </select>

                        {errors.currency && (
                            <p className='text-red-500 text-sm'>{errors.currency.message}</p>
                        )}
                    </div>
                    <div className='col-lg-6 mb-4 relative'>
                        <label className='flex items-center text-sm font-medium mb-1 ' htmlFor='name'>
                            <h2 >Card Holder Name </h2>
                            {/* <span className='text-red-400 text-lg font-medium ml-1 mt-1 '>*</span> */}
                        </label>
                        <div className='absolute right-5 top-10'>
                            {!errors.card && watch('card') ? (
                                <FcCheckmark />
                            ) : errors.card ? (
                                <div className=' text-red-500'>
                                    <MdClose />
                                </div>
                            ) : null}
                        </div>
                        <input
                            {...register('card')}
                            autoComplete='off'
                            className={`border p-2 focus:outline-blue-500 h-[50px] w-full rounded-md  ${errors.card && 'border-red-400'
                                }`}
                            name='card'
                            id='card'
                            type='text'
                            placeholder='Enter Name Here'
                        />


                        {errors.name && (
                            <p className='text-red-500 text-sm'>{errors.name.message}</p>
                        )}
                    </div>
                    <div className='col-lg-6 mb-4 relative'>
                        <label className='flex items-center text-sm font-medium mb-1' htmlFor='name'>
                            <h2 >Card Number </h2>
                            {/* <span className='text-red-400 text-lg font-medium ml-1 mt-1 '>*</span> */}
                        </label>

                        <div className='absolute right-5 top-10'>
                            {!errors.cardno && watch('cardno') ? (
                                <FcCheckmark />
                            ) : errors.cardno ? (
                                <div className=' text-red-500'>
                                    <MdClose />
                                </div>
                            ) : null}
                        </div>
                        <input
                            {...register('cardno')}
                            autoComplete='off'
                            className={`border p-2 focus:outline-blue-500 h-[50px] w-full rounded-md  ${errors.cardno && 'border-red-400'
                                }`}
                            name='cardno'
                            id='cardno'
                            type='text'
                            placeholder='Enter Card Number'
                        />


                        {errors.cardno && (
                            <p className='text-red-500 text-sm'>{errors.cardno.message}</p>
                        )}
                    </div>
                    <div className='col-lg-3 mb-4 relative'>
                        <label className='flex items-center text-sm font-medium ' htmlFor='name'>
                            <h2 >Expire Date</h2>
                            {/* <span className='text-red-400 text-lg font-medium ml-1 mt-1 '>*</span> */}
                        </label>

                        <div className='absolute right-5 top-10'>
                            {!errors.datemonth && watch('datemonth') ? (
                                <FcCheckmark />
                            ) : errors.datemonth ? (
                                <div className=' text-red-500'>
                                    <MdClose />
                                </div>
                            ) : null}
                        </div>

                        <select className={`border p-2 focus:outline-blue-500 h-[50px] w-full rounded-md  ${errors.datemonth && 'border-red-400'
                            }`} >
                            <option>Month</option>
                            <option>Select Country</option>
                            <option>Select Country</option>
                            <option>Select Country</option>
                        </select>

                        {errors.datemonth && (
                            <p className='text-red-500 text-sm'>{errors.datemonth.message}</p>
                        )}
                    </div>
                    <div className='col-lg-3 mt-5 relative'>
                        <div className='absolute right-5 top-10'>
                            {!errors.dateyear && watch('dateyear') ? (
                                <FcCheckmark />
                            ) : errors.dateyear ? (
                                <div className=' text-red-500'>
                                    <MdClose />
                                </div>
                            ) : null}
                        </div>

                        <select className={`border p-2 focus:outline-blue-500 h-[50px] w-full rounded-md  ${errors.dateyear && 'border-red-400'
                            }`} >
                            <option>Year</option>
                            <option>Select Country</option>
                            <option>Select Country</option>
                            <option>Select Country</option>
                        </select>

                        {errors.dateyear && (
                            <p className='text-red-500 text-sm'>{errors.dateyear.message}</p>
                        )}
                    </div>

                    <div className='col-lg-6 mb-4 relative'>
                        <label className='flex items-center text-sm font-medium mb-2 ' htmlFor='name'>
                            <h2 >CVV Code</h2>
                            {/* <span className='text-red-400 text-lg font-medium ml-1 mt-1 '>*</span> */}
                        </label>

                        <div className='absolute right-5 top-10'>
                            {!errors.cvv && watch('cvv') ? (
                                <FcCheckmark />
                            ) : errors.cvv ? (
                                <div className=' text-red-500'>
                                    <MdClose />
                                </div>
                            ) : null}
                        </div>
                        <input
                            {...register('cvv')}
                            autoComplete='off'
                            className={`border p-2 focus:outline-blue-500 h-[50px] w-full rounded-md  ${errors.cvv && 'border-red-400'
                                }`}
                            name='cvv'
                            id='cvv'
                            type='text'
                            placeholder='Enter Security Code '
                        />


                        {errors.cvv && (
                            <p className='text-red-500 text-sm'>{errors.cvv.message}</p>
                        )}
                    </div>


                    <div className='col-lg-12 mb-4 relative'>

                    </div>


                </div>
            </form>

        </>
    )
}

export default CardInfo