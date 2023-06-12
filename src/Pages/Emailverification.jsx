import React, { useState } from 'react'
import logoImage from '../images/logo.png'
import email_verify from "../images/email_verfication.svg"
import OtpInput from 'react-otp-input';
const Emailverification = () => {
    const [emailotp, setemailotp] = useState("")
    const onChangeOTP = (otp) => {
        setemailotp(otp)
    }
    return (
        <div className='h-screen bscontainer-fluid'>
            <div className='h-full border row'>
                <div className='bg-bottom bg-no-repeat bg-cover col-lg-4 bg-login-img '>  </div>
                <div className='flex items-center justify-center col-lg-8'>
                    <div className='w-full px-28'>
                        <img src={logoImage} className="w-full h-auto max-w-[120px] m-auto mb-10" alt="loginimg" />
                        <div style={{ boxShadow: "0px 3px 6px #00000029" }} className="border border-[#70707045] p-8 rounded-md">
                            <div className='justify-center row g-0'>
                                <div className='mb-3 text-center col-lg-4'>
                                    <button className='px-3 py-1 text-sm text-green-500 border-2 border-green-600 rounded-md '>Email</button>

                                </div>
                                <div className='mb-3 text-center col-lg-4'>
                                    <button className='px-3 py-1 text-sm text-green-500 border-2 border-green-600 rounded-md '>Phone</button>
                                </div>
                                <div className='col-lg-12'>
                                    <h1 className='text-[#626973] font-sans text-center'>Email Verification</h1>
                                </div>
                                <div className='col-lg-12'>
                                    <img src={email_verify} className="w-full h-auto max-w-[50px] m-auto mb-10" alt="loginimg" />
                                </div>
                                <div className='col-lg-12'>
                                    <OtpInput
                                        value={emailotp}
                                        onChange={onChangeOTP}
                                        numInputs={6}
                                        separator={<span>-</span>}
                                        inputStyle={"border-2 border"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Emailverification