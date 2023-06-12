import React from 'react'
import { ImUser } from "react-icons/im";
import { MdOutlineLockOpen } from "react-icons/md";
import { BsShieldFillCheck, BsCheck2All } from "react-icons/bs";
import profile_animation from "../../animation.json"
import Lottie from "lottie-react"
const ProfilerStepper = ({step}) => {

    console.log("step", step)
    return (
        <div style={{ boxShadow: "0px 3px 6px #00000029" }} className='bg-white p-3 rounded-xl flex flex-wrap justify-center items-center'>
            <div className='sm:w-1/6  w-full   '>

                <Lottie animationData={profile_animation} />
            </div>
            <div className='sm:w-5/6 w-full  '>
                <div className='flex flex-wrap justify-center items-center '>
                    <div className='lg:w-[6%] w-[14%] text-center relative'>
                        <div className={`${step.one === true ? 'bg-[#42946C]' : 'bg-[#dfe0e0]' } rounded-full  text-white pt-2 text-sm  w-[40px] h-[40px] `}>
                            <ImUser size={24} className='inline' />
                        </div>

                    </div>
                    <div className={`${step.one === true ? 'bg-[#42946C]' : 'bg-[#dfe0e0]' }   md:w-[25%] md:-ml-5 h-[1px] lg:w-[25%] w-[13.6%]`}></div>
                    <div className='lg:w-[6%] w-[14%] text-center relative'>
                        <div className={`${step.two === true ? 'bg-[#42946C] ' : 'bg-[#dfe0e0] text-[#999FA9] ' }  text-white pt-2 text-sm w-[40px] h-[40px] rounded-full`}>
                            <MdOutlineLockOpen size={24} className='inline' />
                        </div>

                    </div>
                    <div className={`${step.two === true ? 'bg-[#42946C]' : 'bg-[#dfe0e0]' } md:w-[25%] md:-ml-5 h-[1px] lg:w-[25%] w-[13.6%]`}></div>
                    <div className='lg:w-[6%] w-[14%] text-center relative'>
                        <div className={`${step.three === true ? 'bg-[#42946C] ' : 'bg-[#dfe0e0] text-[#999FA9]' } text-white pt-2 text-sm w-[40px] h-[40px] rounded-full`}>
                            <BsShieldFillCheck size={24} className='inline' />
                        </div>

                    </div>
                    <div className={`${step.three === true ? 'bg-[#42946C]' : 'bg-[#dfe0e0]' } md:w-[25%] md:-ml-5  h-[1px] lg:w-[25%] w-[13.6%]`}></div>
                    <div className='lg:w-[6%] w-[14%] text-center relative'>
                        <div className={`${step.five === true ? 'bg-[#42946C] text-white' : 'bg-[#dfe0e0] text-[#999FA9]' }  pt-2 text-sm w-[40px] h-[40px] rounded-full`}>
                            <BsCheck2All size={24} className='inline' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilerStepper