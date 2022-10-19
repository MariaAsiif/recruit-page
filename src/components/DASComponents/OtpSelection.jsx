import React, { useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import email_verify from "../../images/email_verfication.svg"
const OtpSelection = (props) => {
    const [vType, setvType] = useState("email")
    const verificationChange = (type) => {
        setvType(type)
    }
    return (
        <div className='w-full px-4 lg:px-52'>
            <div style={{ boxShadow: "0px 3px 6px #00000029" }} className="border border-[#70707045] py-8 lg:px-5 px-6 rounded-md font-sans">
                <div className='justify-center row g-0'>
                    <div className='mb-3 text-center col-lg-3'>
                        <button onClick={() => verificationChange("email")} className={`px-3 py-1 text-xs ${vType === "email" ? "bg-[#42946C] text-white " : "bg-white text-[#42946C] "}border-2 border-[#42946C] rounded-md `}>Email</button>
                    </div>
                    <div className='mb-3 text-center col-lg-3'>
                        <button onClick={() => verificationChange("phone")} className={`px-3 py-1 text-xs ${vType === "phone" ? "bg-[#42946C] text-white " : "bg-white text-[#42946C] "}border-2 border-[#42946C] rounded-md `}>Phone</button>
                    </div>
                    <div className='mb-1 col-lg-12'>
                        <h1 className='text-[#626973] font-sans text-center'>{vType === "email" ? "Email" : "Phone"} Verification</h1>
                    </div>
                    <div className='mb-3 col-lg-12'>
                        <h1 className='text-[#626973] font-sans text-[10px] text-center'>Enter your {vType === "email" ? "Email" : "Phone"} to get OTP</h1>
                    </div>
                    <div className='mb-3 col-lg-12'>
                        <img src={email_verify} className="w-full h-auto max-w-[50px] m-auto " alt="loginimg" />
                    </div>
                    {
                        vType === "email" ? (
                            <div className='mb-5 text-center col-lg-12'>
                                <input type="email" className='border-b text-[#42946C] focus:outline-none' placeholder='john@gmail.com' />
                            </div>
                        ) : (
                            <div className='mb-5 text-center col-lg-12'>
                                <input type="text" className='border-b text-[#42946C] focus:outline-none' placeholder='03542468545' />
                            </div>
                        )
                    }
                    <div className='text-center col-lg-12'>
                        <button onClick={() => props.onBack("IdentityVerification")} className='border-2 border-[#4DA676] text-[#4DA676] rounded font-sans font-semibold text-lg px-10 py-1 m-10'><FaChevronLeft className='inline' /> Back </button>
                        <button onClick={() => props.onNext("SmsVerification")} className='bg-[#4DA676] text-white px-7 py-2 rounded'>GET OTP</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtpSelection