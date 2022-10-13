import React from 'react'
import { FaCheckCircle, FaCheckDouble, FaEnvelope, FaLock, FaRegUser, FaUnlockAlt } from 'react-icons/fa'
import { IoChevronForward } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import social_group_2x from '../../images/social_group_2x.png'
const DASAccountSignup = (props) => {

    return (
        <div className='w-full px-4 lg:px-16'>
            <div style={{ boxShadow: "0px 3px 6px #00000029" }} className="border border-[#70707045]  pt-4 pb-1 lg:px-6 px-6 rounded-md font-sans">
                <h1 className='text-[#626973] text-center font-sans font-bold text-lg mb-1'>Account</h1>
                <p className='text-[#626973] text-center font-sans text-[10px] mb-2'>Create new Account</p>
                <div className='flex justify-center mb-4'>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#E84125]'>
                            <FaRegUser size={15} className='inline text-white' />
                        </div>
                    </div>
                    <div class=" w-[20%] flex items-center">
                        <div className='w-full h-[1px] bg-[#42946C]'></div>
                    </div>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#42946C]'>
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
                        <div className='w-full h-[1px] bg-[#E84125]'></div>
                    </div>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#E84125]'>
                            <FaCheckDouble size={15} className='inline text-white' />
                        </div>
                    </div>
                </div>
                <div className='justify-center row g-0'>
                    <div className='mb-3 col-lg-7'>
                        <h1 className='text-[#707070] text-sm ml-5'>Email Address</h1>
                        <label className='border py-2 block rounded-md px-3 w-full border-[#707070] text-[#707070] text-sm font-sans cursor-pointer'>
                            <FaEnvelope className='inline mr-3' />Enter your email here
                            <input type="email" />
                        </label>
                    </div>
                    <div className='mb-3 col-lg-7'>
                        <h1 className='text-[#707070] text-sm ml-5'>New Password</h1>
                        <label className='border py-2 block rounded-md px-3 w-full border-[#707070] text-[#707070] text-sm font-sans cursor-pointer'>
                            <FaLock className='inline mr-3' />Enter new password
                            <input type="password" />
                        </label>
                    </div>
                    <div className='mb-3 col-lg-7'>
                        <h1 className='text-[#707070] text-sm ml-5'>Confirm Password</h1>
                        <label className='border py-2 block rounded-md px-3 w-full border-[#707070] text-[#707070] text-sm font-sans cursor-pointer'>
                            <FaEnvelope className='inline mr-3' />Confirm password
                            <input type="password" />
                        </label>
                    </div>

                    <div className='mb-3 text-center col-lg-7'>
                        <button onClick={() => props.onNext("ProviderSelection")} className='font-sans font-medium text-lg border-2 border-[#4DA676] rounded px-16 py-1 text-[#4DA676] hover:text-white hover:bg-[#4DA676] transition-all'>Sing Up <IoChevronForward className='inline' /></button>
                        <h1 className='text-[#707070] font-medium mb-8 text-xs'>Already have an account. <Link className='text-[#4DA676] underline' onClick={() => props.onNext("LoginPage")}>Login</Link></h1>
                    </div>
                    <img src={social_group_2x} alt="social" className='w-full h-auto max-w-[380px] m-auto mb-10' />

                </div>

            </div>
        </div>
    )
}

export default DASAccountSignup