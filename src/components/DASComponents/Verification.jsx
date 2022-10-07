import React, { useState } from 'react'
import OtpInput from 'react-otp-input'
import email_verify from "../../images/email_verfication.svg"
const Verification = () => {
    const [emailotp, setemailotp] = useState("")
    const onChangeOTP = (otp) => {
        setemailotp(otp)
    }
    return (
        <div className='w-full px-4 lg:px-28'>
            <div style={{ boxShadow: "0px 3px 6px #00000029" }} className="border border-[#70707045] py-8 lg:px-32 px-6 rounded-md font-sans">
                <div className='justify-center row g-0'>
                    <div className='mb-3 text-center col-lg-3'>
                        <button className='px-3 py-1 text-sm text-green-500 border-2 border-green-600 rounded-md '>Email</button>

                    </div>
                    <div className='mb-3 text-center col-lg-3'>
                        <button className='px-3 py-1 text-sm text-green-500 border-2 border-green-600 rounded-md '>Phone</button>
                    </div>
                    <div className='col-lg-12'>
                        <h1 className='text-[#626973] font-sans text-center'>Email Verification</h1>
                    </div>
                    <div className='mb-5 col-lg-12'>
                        <img src={email_verify} className="w-full h-auto max-w-[50px] m-auto " alt="loginimg" />
                    </div>
                    <div className='mb-5 col-lg-12'>
                        <OtpInput
                            value={emailotp}
                            onChange={onChangeOTP}
                            numInputs={6}
                            separator={<span className='text-white'>-</span>}
                            containerStyle={"justify-center"}
                            inputStyle={"border-2 border-[#4DA676] rounded  text-lg !w-8"}
                            focusStyle={"outline-none"}
                        />
                    </div>
                    <div className='text-center col-lg-12'>
                        <button className='bg-[#4DA676] text-white px-7 py-2 rounded'>Verify</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Verification