import React from 'react'
import logo from '../../../images/logo.png'
import user from '../../../images/Group 473.png'
import { BsFillExclamationCircleFill } from 'react-icons/bs'
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi'
const Talk = ({setActive}) => {
    return (
        <>
        

            <div className="grid grid-cols-2 gap-5  px-10">
                <div className='pt-[60px]'>
                    <h2 className='text-[#3D4A59] font-semibold text-[50px] max-w-[520px]'>Now let’s talk budget and timing…</h2>
                    <p className="pt-[20px] text-[18px] text-[#1F1F1F] max-w-[450px]">Part-timer, full-timer or contracted freelancer, you can find them all here.</p>
                    <p className='pt-[20px] text-[16px] text-[#65CFA2] underline'>How does this matching thing work?</p>

                    <img src={user} alt={user} className='object-cover w-[50%] mt-[30px]' />

                </div>
                <div className='pt-[4rem] pr-4 mb-4 relative'>

                    <div className="pt-[40px]">
                        <h2 className="text-[#707070] text-[16px] font-semibold">I’m looking for sppend…..</h2>
                        <input type="text" className='border mt-[10px] py-2 w-full rounded-md px-2' placeholder='Example: Create a WordPress website for my company 0/70' />

                    </div>


                    <div className='pt-[40px] flex items-center'>
                        <input type="checkbox" className='w-[20px] h-[20px]' />
                        <p className='mx-2 text-[#8A9198]'>My budget is flexible</p>
                    </div>

                    <div className="pt-[40px]">
                        <h2 className="text-[#707070] text-[16px] font-semibold">Let’s talk timing</h2>
                        <input type="text" className='border mt-[10px] py-2 w-full rounded-md px-2' placeholder='Example: Create a WordPress website for my company 0/70' />
                        <p className=' text-[16px] pt-[10px] '>we’ll find available freelancers.</p>

                    </div>




                </div>
            </div>
            <div className='pt-[30px] flex justify-between items-center px-10 mb-4'>
                <div className="pt-[30px] flex justify-start   w-full">
                    <button onClick={() => setActive()} className='border   text-white text-center flex justify-center bg-[#BEBEBE] w-[15%] py-2 rounded-md text-[15px]'>
                        <HiOutlineArrowSmLeft className='text-[20px] flex justify-end items-end mx-2 font-bold ' />
                        Back
                    </button>
                </div>
                <div className="pt-[30px] flex justify-end   w-full">
                        <button className='border   text-white text-center flex justify-center bg-[#24D29F] w-[30%] py-2 rounded-md text-[15px]'>
                        Review Your brief 
                            <HiOutlineArrowSmRight className='text-[20px] flex justify-end items-end mx-2 font-bold ' />
                        </button>
                    </div>
            </div>
        </>
    )
}

export default Talk