import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
    first_name: yup.string().required(),
    first_family_name: yup.string().required(),
    second_family_name: yup.string().optional(),
    third_family_name: yup.string().optional(),
    email: yup.string().email("Invalid email format").required(),
    phoneNumber: yup.string().required(),
});

const BasicInfoStep = ({ handleNext, userInfo }) => {
    const user = useSelector((state) => state?.recruitAuth?.userInfo)

    const { register, watch, reset, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });


    const onSubmit = (data) => {
        userInfo(data)
        handleNext()
    }


    useEffect(() => {
        reset(user)
    }, [reset])
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                    <div className='col-lg-6 mb-10'>
                        <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>Enter your First Name*</label>
                        <input className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[14px]' {...register('first_name')} placeholder='First Name' />
                    </div>
                    <div className='col-lg-6 mb-10'>
                        <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>Enter your FAMILY NAME (Optional)</label>
                        <input className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[16px]'  {...register('first_family_name')} placeholder='Family name' />
                    </div>
                    <div className='col-lg-6 mb-10'>
                        <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>Enter your Second FAMILY NAME (Optional)</label>
                        <input className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[16px]'  {...register('second_family_name')} placeholder='Second Family name' />
                    </div>
                    <div className='col-lg-6 mb-10'>
                        <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>Enter your Third FAMILY NAME (Optional)</label>
                        <input className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[16px]' {...register('third_family_name')} placeholder='Third Family name' />
                    </div>
                    <div className='col-lg-6 mb-10'>
                        <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>Mobile Number *</label>
                        <input className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[14px]' {...register('phoneNumber')} placeholder='Mobile Number' />
                    </div>
                    <div className='col-lg-6 mb-10'>
                        <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>Enter Email Address</label>
                        <input className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[14px]' {...register('email')} placeholder='Email' />
                    </div>

                    <div className='text-right'>
                        <button className='bg-[#42946C] text-right  font-semibold font-sans rounded-md px-9 py-3 text-white '>Next Step</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default BasicInfoStep