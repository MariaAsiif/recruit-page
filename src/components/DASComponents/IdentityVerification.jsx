import React, { useState } from 'react'
import { FaCheckCircle, FaCheckDouble, FaChevronLeft, FaChevronRight, FaRegUser, FaUnlockAlt } from 'react-icons/fa'

const IdentityVerification = (props) => {
    const [verifyType, setverifyType] = useState("sms")
    const onVerifyChange = (e) => {
        const type = e.target.value;
        if (type) {
            setverifyType(e.target.value)
        }
    }
    return (
        <div className='w-full px-4 lg:px-16'>
            <div style={{ boxShadow: "0px 3px 6px #00000029" }} className="border border-[#70707045]  pt-4 pb-4 lg:px-6 px-6  rounded-md font-sans">
                <h1 className='text-[#626973] text-center font-sans font-bold text-lg mb-1'>Identity Verification</h1>
                <p className='text-[#626973] text-center font-sans text-[10px] mb-2'>Identity Your Account</p>
                <div className='flex justify-center mb-4'>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#E84125]'>
                            <FaRegUser size={15} className='inline text-white' />
                        </div>
                    </div>
                    <div class=" w-[20%] flex items-center">
                        <div className='w-full h-[1px] bg-[#E84125]'></div>
                    </div>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#E84125]'>
                            <FaUnlockAlt size={15} className='inline text-white' />
                        </div>
                    </div>
                    <div class=" w-[20%] flex items-center">
                        <div className='w-full h-[1px] bg-[#E84125]'></div>
                    </div>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#E84125]'>
                            <FaCheckCircle size={15} className='inline text-white' />
                        </div>
                    </div>
                    <div class=" w-[20%] flex items-center">
                        <div className='w-full h-[1px] bg-[#E84125]'></div>
                    </div>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#E84125]'>
                            <FaCheckDouble size={15} className='inline text-white' />
                        </div>
                    </div>
                    <div class=" w-[20%] flex items-center">
                        <div className='w-full h-[1px] bg-[#42946C]'></div>
                    </div>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#42946C]'>
                            <FaCheckDouble size={15} className='inline text-white' />
                        </div>
                    </div>
                </div>

                <p className='text-center text-[#626973] text-xs leading-5 mb-8'>For identity verification use your mobile device</p>
                <div className='px-0 mb-8 text-center lg:px-36'>
                    <label className={`flex items-center mb-4 py-1  px-4 border-2 cursor-pointer text-lg ${verifyType === "sms" ? "border-[#4DA676]" : "border-[#626973]"} rounded-md `}>
                        <span className={`border-2  rounded-[50%] p-1 w-7 h-7 flex justify-center items-center mr-4 ${verifyType === "sms" ? "border-[#4DA676]" : "border-[#626973]"}`}>
                            <span className={`rounded-[50%] w-[100%] h-[100%] inline-block ${verifyType === "sms" ? "  bg-[#4DA676]" : "bg-white"}`}></span>
                        </span>
                        <input type="radio" hidden value="sms" checked={verifyType === "sms"} onChange={onVerifyChange} name="provider" />
                        <span className={verifyType === "sms" ? "  text-[#4DA676] " : "text-[#626973]"}>Send Link Via SMS</span>
                    </label>
                    <label className={`flex items-center mb-4 py-1  px-4 border-2 cursor-pointer text-lg ${verifyType === "qr" ? "border-[#4DA676]" : "border-[#626973]"} rounded-md `}>
                        <span className={`border-2  rounded-[50%] p-1 w-7 h-7 flex justify-center items-center mr-4 ${verifyType === "qr" ? "border-[#4DA676]" : "border-[#626973]"}`}>
                            <span className={`rounded-[50%] w-[100%] h-[100%] inline-block ${verifyType === "qr" ? "  bg-[#4DA676]" : "bg-white"}`}></span>
                        </span>
                        <input type="radio" hidden value="qr" checked={verifyType === "qr"} onChange={onVerifyChange} name="provider" />
                        <span className={verifyType === "qr" ? "  text-[#4DA676] " : "text-[#626973]"}>Through Via QR Scan</span>
                    </label>
                </div>
                <div className='text-center'>
                    {/* <button onClick={() => props.onBack(props.flow ? "LoginPage" : "newAccount")} className='border-2 border-[#4DA676] text-[#4DA676] rounded font-sans font-semibold text-lg px-10 py-1 m-10'><FaChevronLeft className='inline' /> Back </button> */}
                    <button onClick={() => props.onNext(verifyType === "sms" ? "OtpSelection" : "QrVerification")} className='border-2 border-[#4DA676] text-[#4DA676] rounded font-sans font-semibold text-lg px-10 py-1'>Next <FaChevronRight className='inline' /></button>
                </div>
            </div>
        </div>
    )
}

export default IdentityVerification