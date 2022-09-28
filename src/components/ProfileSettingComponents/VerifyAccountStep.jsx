import React from 'react'
import { MdPhoneIphone, MdMail } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";
const VerifyAccountStep = () => {
    return (
        <>
            <div className='col-lg-12 text-center pt-14'>
                <h1 className='text-[#626973] font-sans font-semibold mb-2'>Verify Your Account</h1>
                <h1 className='text-[#999FA9] text-[10px] font-light mb-20'>Click on verify and get OTP code to verify your account</h1>
                <h1 className='text-[#999FA9] text-[10px] font-light mb-2'>Enter Your Mobile number that’s end with (055)</h1>
                <div className='text-[#626973] fonst-sans font-medium mb-20'>
                    <MdPhoneIphone size={32} className='inline border-b border-[#d4d5d6] pb-1' />
                    <input value="321 5432190" className='border-b border-[#d4d5d6] focus:outline-none px-2 py-1 mr-2  sm:w-56 w-44' />
                    <BsCheckCircleFill size={20} className='inline' />
                </div>
                <h1 className='text-[#999FA9] text-[10px] font-light mb-2'>Enter Your email that’s started with (a————butt@gmail.com)</h1>
                <div className='text-[#626973] fonst-sans font-medium mb-20'>
                    <MdMail size={32} className='inline border-b border-[#d4d5d6] pb-1' />
                    <input value="testingemail@email.com" className='border-b border-[#d4d5d6] focus:outline-none px-2 py-1 mr-2  sm:w-56 w-44' />
                    <BsCheckCircleFill size={20} className='inline' />
                </div>
            </div>
        </>
    )
}

export default VerifyAccountStep