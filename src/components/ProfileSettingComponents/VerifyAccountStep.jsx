import React, { useState } from 'react'
import { MdMail } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { toast } from 'react-toastify';
import { callPublicApi } from '../../utils/CallApi';
// import { useSelector } from 'react-redux';


const schema = yup.object({
    email: yup.string().email("Invalid email format").required(),
});

const VerifyAccountStep = ({ handleNext, setUserEmail }) => {
    // const user = useSelector((state) => state?.recruitAuth?.userInfo)


    const { register, watch, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });


    const onSubmit = async (data) => {
        setUserEmail(data.email)

        try {
            let payload = {
                email: data.email
            }
            let res = await callPublicApi('/verifications/sendCodeOnEmail', "post", payload)
            if (res.status === "Success") {
                toast.success(res.message)
                handleNext()
            }
            else {
                toast.error(res.message)

            }
        }
        catch (err) {

        }

    }

    return (
        <>
            <div className='col-lg-12 text-center pt-14'>
                <h1 className='text-[#626973] font-sans font-semibold mb-2'>Verify Your Account</h1>
                <h1 className='text-[#999FA9] text-[10px] font-light mb-20'>Click on verify and get OTP code to verify your account</h1>
                {/* <h1 className='text-[#999FA9] text-[10px] font-light mb-2'>Enter Your Mobile number that’s end with (055)</h1>
                <div className='text-[#626973] fonst-sans font-medium mb-20'>
                    <MdPhoneIphone size={32} className='inline border-b border-[#d4d5d6] pb-1' />
                    <input value="321 5432190" className='border-b border-[#d4d5d6] focus:outline-none px-2 py-1 mr-2  sm:w-56 w-44' />
                    <BsCheckCircleFill size={20} className='inline' />
                </div> */}
                <h1 className='text-[#999FA9] text-[10px] font-light mb-2'>Enter Your email that’s started with (a————butt@gmail.com)</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='text-[#626973] fonst-sans font-medium'>
                        <MdMail size={32} className={` inline  pb-1 border-b border-[#d4d5d6] `} />
                        <input  {...register('email')} className={` ${errors.email ? 'border-b border-red-500' : 'border-b border-[#d4d5d6]'}  focus:outline-none px-2 py-1 mr-2  sm:w-56 w-44`} />
                        {
                            watch('email') && !errors.email &&
                            <BsCheckCircleFill size={20} className='inline' />
                        }
                    </div>
                    {errors.email && (
                        <p className="text-red-500  text-sm">{errors.email.message}</p>
                    )}

                    <div className='text-right'>
                        <button className='bg-[#42946C] text-right  font-semibold font-sans rounded-md px-9 py-3 text-white '> Next Step</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default VerifyAccountStep