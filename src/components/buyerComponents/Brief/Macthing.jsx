import React from 'react'
import user from '../../../images/Group 449.png'
import { BsFillExclamationCircleFill } from 'react-icons/bs'
import { HiOutlineArrowSmRight } from 'react-icons/hi'
const Macthing = ({setActive}) => {
    return (
        <>
            

            <div className="grid grid-cols-2 gap-5 px-10">
                <div className='pt-[60px]'>
                    <h2 className='text-[#3D4A59] font-semibold text-[50px] max-w-[500px]'>Let the matching begin………</h2>
                    <p className="pt-[20px] text-[18px] text-[#1F1F1F] max-w-[450px]">Part-timer, full-timer or contracted freelancer, you can find them all here.</p>
                    <p className='pt-[20px] text-[16px] text-[#65CFA2] underline'>How does this matching thing work?</p>

                    <img src={user} alt={user} className='object-cover w-[60%] mt-[30px]' />
                </div>
                <div className='pt-[2rem] pr-4 mb-4'>
                    <div className='bg-[#F4F4F4] flex justify-between items-center rounded-md px-4 py-2'>
                        <div className="flex items-center">
                            <BsFillExclamationCircleFill className='text-[#707070]' />
                            <h2 className='px-2 text-[#707070]'>Are you a freelancer?</h2>
                        </div>
                        <h2 className='text-[#707070] underline'>Become a seller</h2>
                    </div>
                    <div className="pt-[40px]">
                        <h2 className="text-[#707070] text-[16px] font-semibold">Give your project brief a title</h2>
                        <p className="pt-[10px] text-[#1F1F1F]">Part-timer, full-timer or contracted freelancer, you can find….</p>
                        <input type="text" className='border mt-[10px] py-2 w-full rounded-md px-2' placeholder='Example: Create a WordPress website for my company 0/70' />
                        <p className='text-[#65CFA2] text-[16px]  underline'>Some title examples</p>
                    </div>
                    <div className="pt-[40px]">
                        <h2 className="text-[#707070] text-[16px] font-semibold">What are you looking to get done?</h2>
                        <p className="pt-[10px] text-[#1F1F1F]">Part-timer, full-timer or contracted freelancer, you can find….</p>
                        <textarea row={8} className='border mt-[10px] py-2 w-full rounded-md px-2' placeholder='I need…………….' ></textarea>
                        <p className='text-[#65CFA2] text-[16px] underline'>How to write a great description</p>
                    </div>
                    <div className="pt-[40px]">
                        <h2 className="text-[#707070] text-[16px] font-semibold">What are you looking to get done?</h2>
                        <select className='border mt-[10px] py-2 w-full rounded-md px-2'>
                            <option>Choose 1 category</option>
                        </select>
                    </div>

                    <div className="pt-[30px] flex justify-end ">
                        <button onClick={() => setActive()} className='border   text-white text-center flex justify-center bg-[#24D29F] w-[28%] py-2 rounded-md text-[15px]'>
                            Continue
                            <HiOutlineArrowSmRight className='text-[20px] flex justify-end items-end mx-2 font-bold ' />
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Macthing