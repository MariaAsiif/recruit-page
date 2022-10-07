import React from 'react'
import { FaChevronRight } from "react-icons/fa";
const ProviderSelection = (props) => {
    return (
        <div className='w-full px-4 lg:px-28'>
            <div style={{ boxShadow: "0px 3px 6px #00000029" }} className="border border-[#70707045] py-8 lg:px-32 px-6 rounded-md font-sans">
                <h1 className='text-[#626973] font-sans text-center font-bold text-xl mb-3'>Sign up</h1>
                <p className='text-center text-[#626973] text-xs leading-5 mb-8'>Create your account and manage your company and personal profiles and grow your business</p>
                <div className='mb-8 text-center'>
                    <label className={`flex items-center mb-4 py-1  px-4 border-2 cursor-pointer text-lg ${props.provider === "individualProvider" ? "border-[#4DA676]" : "border-[#626973]"} rounded-md `}>
                        <span className={`border-2  rounded-[50%] p-1 w-7 h-7 flex justify-center items-center mr-4 ${props.provider === "individualProvider" ? "border-[#4DA676]" : "border-[#626973]"}`}>
                            <span className={`rounded-[50%] w-[100%] h-[100%] inline-block ${props.provider === "individualProvider" ? "  bg-[#4DA676]" : "bg-white"}`}></span>
                        </span>
                        <input type="radio" hidden value="individualProvider" checked={props.provider === "individualProvider"} onChange={props.onProviderChange} name="provider" />
                        <span className={props.provider === "individualProvider" ? "  text-[#4DA676] " : "text-[#626973]"}>Individual Provider</span>
                    </label>
                    <label className={`flex items-center mb-4 py-1  px-4 border-2 cursor-pointer text-lg ${props.provider === "companyProvider" ? "border-[#4DA676]" : "border-[#626973]"} rounded-md `}>
                        <span className={`border-2  rounded-[50%] p-1 w-7 h-7 flex justify-center items-center mr-4 ${props.provider === "companyProvider" ? "border-[#4DA676]" : "border-[#626973]"}`}>
                            <span className={`rounded-[50%] w-[100%] h-[100%] inline-block ${props.provider === "companyProvider" ? "  bg-[#4DA676]" : "bg-white"}`}></span>
                        </span>
                        <input type="radio" hidden value="companyProvider" checked={props.provider === "companyProvider"} onChange={props.onProviderChange} name="provider" />
                        <span className={props.provider === "companyProvider" ? "  text-[#4DA676] " : "text-[#626973]"}>Company Provider</span>
                    </label>
                </div>
                <div className='text-center'>
                    <button onClick={props.onNext()} className='border-2 border-[#4DA676] text-[#4DA676] rounded font-sans font-semibold text-lg px-10 py-1'>Next <FaChevronRight className='inline' /></button>
                </div>

            </div>
        </div>
    )
}

export default ProviderSelection