import React from 'react'
import { ImUser } from "react-icons/im";
import { MdOutlineLockOpen } from "react-icons/md";
import { BsShieldFillCheck, BsCheck2All } from "react-icons/bs";
import profile_animation from "../../animation.json"
import Lottie from "lottie-react"
const ProfilerStepper = () => {
    return (
        <div style={{ boxShadow: "0px 3px 6px #00000029" }} className='bg-white  rounded-xl flex justify-center items-center'>
            <div className='w-1/6 '>
                <Lottie animationData={profile_animation} />
            </div>
            <div className='w-5/6 '>
                <div className='flex flex-wrap justify-center items-center '>
                    <div className='lg:w-[6%] w-[8%] text-center relative'>
                        <div className={` rounded-full bg-[#65A33A] text-white pt-2 text-sm  w-[40px] h-[40px] `}>
                            <ImUser size={24} className='inline' />
                        </div>

                    </div>
                    <div className={` bg-[#65A33A]  md:w-[25%] md:-ml-5 h-[1px] lg:w-[25%] w-[22.6%]`}></div>
                    <div className='lg:w-[6%] w-[8%] text-center relative'>
                        <div className={`bg-[#dfe0e0] text-[#999FA9] pt-2 text-sm w-[40px] h-[40px] rounded-full`}>
                            <MdOutlineLockOpen size={24} className='inline' />
                        </div>

                    </div>
                    <div className={`bg-[#dfe0e0] md:w-[25%] md:-ml-5 h-[1px] lg:w-[25%] w-[22.6%]`}></div>
                    <div className='lg:w-[6%] w-[8%] text-center relative'>
                        <div className={`bg-[#dfe0e0] text-[#999FA9] pt-2 text-sm w-[40px] h-[40px] rounded-full`}>
                            <BsShieldFillCheck size={24} className='inline' />
                        </div>

                    </div>
                    <div className={`bg-[#dfe0e0] md:w-[25%] md:-ml-5  h-[1px] lg:w-[25%] w-[22.6%]`}></div>
                    <div className='lg:w-[6%] w-[8%] text-center relative'>
                        <div className={`bg-[#dfe0e0] text-[#999FA9] pt-2 text-sm w-[40px] h-[40px] rounded-full`}>
                            <BsCheck2All size={24} className='inline' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilerStepper