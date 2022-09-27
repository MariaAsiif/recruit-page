import React from 'react'
import MainProfile from '../components/ProfileSettingComponents/MainProfile'
import NeedHelp from '../components/ProfileSettingComponents/NeedHelp'
import { ImUser } from "react-icons/im";
import { MdOutlineLockOpen } from "react-icons/md";
import { BsShieldFillCheck, BsCheck2All } from "react-icons/bs";
// import profile_animation from "../assets/images/profile_animation.gif"
import profile_animation from "../animation.json"
import Lottie from "lottie-react"
const ProfileSetting = () => {
    return (
        <div className='bscontainer-fluid px-6 py-6'>
            <div className='row mb-6'>
                <div className='col-lg-12'>
                    <h1 className='font-sans font-bold text-lg mb-1'>Edit Profile</h1>
                    <h1 className='text-[#949799] font-sans font-normal text-xs'>Based on your preferences</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-3'>
                    <div className='row gy-4'>
                        <div className='col-lg-12'>
                            <MainProfile />
                        </div>
                        <div className='col-lg-12'>
                            <NeedHelp />
                        </div>
                    </div>
                </div>

                <div className='col-lg-9'>
                    <div className='row gy-4'>
                        <div className='col-lg-12 '>
                            <div style={{ boxShadow: "0px 3px 6px #00000029" }} className='bg-white  rounded-xl flex justify-center items-center'>
                                <div className='w-1/6 '>
                                    <Lottie animationData={profile_animation} />
                                </div>
                                <div className='w-5/6 '>
                                    <div className='flex flex-wrap justify-center items-center '>
                                        <div className='lg:w-[4%] w-[8%] text-center relative'>
                                            <div className={` rounded-full bg-[#65A33A] text-white pt-2 text-sm  w-[40px] h-[40px] `}>
                                                <ImUser size={24} className='inline' />
                                            </div>

                                        </div>
                                        <div className={` bg-[#65A33A]  md:w-[25%] md:-ml-5 h-[1px] lg:w-[28%] w-[22.6%]`}></div>
                                        <div className='lg:w-[4%] w-[8%] text-center relative'>
                                            <div className={`bg-[#dfe0e0] text-[#999FA9] pt-2 text-sm w-[40px] h-[40px] rounded-full`}>
                                                <MdOutlineLockOpen size={24} className='inline' />
                                            </div>

                                        </div>
                                        <div className={`bg-[#dfe0e0] md:w-[25%] md:-ml-5 h-[1px] lg:w-[28%] w-[22.6%]`}></div>
                                        <div className='lg:w-[4%] w-[8%] text-center relative'>
                                            <div className={`bg-[#dfe0e0] text-[#999FA9] pt-2 text-sm w-[40px] h-[40px] rounded-full`}>
                                                <BsShieldFillCheck size={24} className='inline' />
                                            </div>

                                        </div>
                                        <div className={`bg-[#dfe0e0] md:w-[25%] md:-ml-5  h-[1px] lg:w-[28%] w-[22.6%]`}></div>
                                        <div className='lg:w-[4%] w-[8%] text-center relative'>
                                            <div className={`bg-[#dfe0e0] text-[#999FA9] pt-2 text-sm w-[40px] h-[40px] rounded-full`}>
                                                <BsCheck2All size={24} className='inline' />
                                            </div>

                                        </div>




                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div style={{ boxShadow: "0px 3px 6px #00000029" }} className='bg-white h-[368px] rounded-xl p-4'>
                                <div className='row'>
                                    <div className='col-lg-6 mb-10'>
                                        <label className='text-[#999FA9] mb-2 block'>Enter your First Name*</label>
                                        <input className='border-b border-[#999FA9] w-full text-[#626973] font-sans text-xl font-medium' value="Eddie" />
                                    </div>
                                    <div className='col-lg-6 mb-10'>
                                        <label className='text-[#999FA9] mb-2 block'>Enter your First Name*</label>
                                        <input className='border-b border-[#999FA9] w-full text-[#626973] font-sans text-xl font-medium' value="Eddie" />
                                    </div>
                                    <div className='col-lg-6 mb-10'>
                                        <label className='text-[#999FA9] mb-2 block'>Enter your First Name*</label>
                                        <input className='border-b border-[#999FA9] w-full text-[#626973] font-sans text-xl font-medium' value="Eddie" />
                                    </div>
                                    <div className='col-lg-6 mb-10'>
                                        <label className='text-[#999FA9] mb-2 block'>Enter your First Name*</label>
                                        <input className='border-b border-[#999FA9] w-full text-[#626973] font-sans text-xl font-medium' value="Eddie" />
                                    </div>
                                    <div className='col-lg-6 mb-10'>
                                        <label className='text-[#999FA9] mb-2 block'>Enter your First Name*</label>
                                        <input className='border-b border-[#999FA9] w-full text-[#626973] font-sans text-xl font-medium' value="Eddie" />
                                    </div>
                                    <div className='col-lg-12'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileSetting