import React, { useState } from 'react'
import OtpInput from 'react-otp-input'
const OtpVerification = (props) => {
    const [emailotp, setemailotp] = useState("")
    const onChangeOTP = (otp) => {
        setemailotp(otp)
    }

    return (
        <div className='w-full px-4 lg:px-56'>
            <div style={{ boxShadow: "0px 3px 6px #00000029" }} className="border border-[#70707045] py-8 lg:px-14 px-6 rounded-md font-sans">
                <div className='justify-center row g-0'>

                    <div className='mb-5 col-lg-12'>
                        <h1 className='text-[#626973] font-sans text-center'>OTP Verification</h1>
                    </div>

                    <div className='mb-5 col-lg-12'>
                        <OtpInput
                            value={emailotp}
                            onChange={onChangeOTP}
                            numInputs={6}
                            separator={<span className='text-white'>-</span>}
                            containerStyle={"justify-center"}
                            inputStyle={"border-2 border-[#4DA676] rounded text-[#626973] font-medium text-lg !w-8"}
                            focusStyle={"outline-none"}
                        />
                    </div>
                    <div className='mb-2 text-center col-lg-12'>
                        <button onClick={() => props.onBack("OtpSelection")} className='bg-[#d2d8d5] text-black px-7 py-2 rounded m-10' >Back</button>
                        <button onClick={() => props.onNext("IdentityVerification")} className='bg-[#4DA676] text-white px-7 py-2 rounded'>Verify</button>
                    </div>
                    <div className='text-center col-lg-12'>
                        <p className='text-[6px] text-[#626973]'>Code expires in : <span className='text-[#F39200]'>00 : 56</span> <span className='ml-3'>Didn't recieve code? </span><span className='text-[9px] font-bold cursor-pointer'>Resend Code</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtpVerification