import React from 'react'
import { FaRegUser, FaUnlockAlt, FaCheckCircle, FaCheckDouble } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";
const Result = (props) => {
    return (
        <div className='w-full px-4 lg:px-16'>
            <div style={{ boxShadow: "0px 3px 6px #00000029" }} className="border border-[#70707045]  pt-4 pb-1 lg:px-6 px-6 rounded-md font-sans">
                <h1 className='text-[#626973] text-center font-sans font-bold text-lg mb-1'>Assesment</h1>
                <p className='text-[#626973] text-center font-sans text-[10px] mb-2'>Following is the assessment evaluation criteria</p>
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
                <div className=' row g-0'>

                    <div style={{ boxShadow: "inset 0px 0px 0px #00000010, 0px 0px 6px #00000002" }} className='col-lg-12 mb-3 border border-[#70707045] p-3 '>

                        <div className='grid grid-cols-12 gap-4 mb-3'>
                            <div className="col-span-4 text-[#626973] font-sans font-bold">Application Name</div>
                            <div className="col-span-4 text-[#626973] font-sans font-bold">Total Number of Question</div>
                            <div className="col-span-4 text-[#626973] font-sans font-bold">Total Marks</div>
                            <div className="col-span-4  text-[#626973] font-sans font-light">UI/UX Design</div>
                            <div className="col-span-4 text-[#626973] font-sans font-light text-center">10</div>
                            <div className="col-span-4 text-[#626973] font-sans font-light text-center">-</div>

                            <div className="col-span-4  text-[#626973] font-sans font-light">UI/UX Design</div>
                            <div className="col-span-4 text-[#626973] font-sans font-light text-center">10</div>
                            <div className="col-span-4 text-[#626973] font-sans font-light text-center">-</div>

                            <div className="col-span-4  text-[#626973] font-sans font-light">UI/UX Design</div>
                            <div className="col-span-4 text-[#626973] font-sans font-light text-center">10</div>
                            <div className="col-span-4 text-[#626973] font-sans font-light text-center">-</div>

                            <div className="col-span-4  text-[#626973] font-sans font-light">UI/UX Design</div>
                            <div className="col-span-4 text-[#626973] font-sans font-light text-center">10</div>
                            <div className="col-span-4 text-[#626973] font-sans font-light text-center">-</div>

                            <div className="col-span-4  text-[#626973] font-sans font-light">UI/UX Design</div>
                            <div className="col-span-4 text-[#626973] font-sans font-light text-center">10</div>
                            <div className="col-span-4 text-[#626973] font-sans font-light text-center">-</div>
                        </div>
                        <h1 className=' text-[#626973] font-sans  text-xs'>Note: You have to get above then 98% marks otherwise you will be disqualified</h1>
                    </div>





                    <div className='mb-3 text-right col-lg-12'>
                        <button onClick={() => props.onNext("Result")} className='font-sans font-medium text-lg border-2 border-[#4DA676] rounded px-16 py-1 text-[#4DA676] hover:text-white hover:bg-[#4DA676] transition-all'>Next <IoChevronForward className='inline' /></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Result