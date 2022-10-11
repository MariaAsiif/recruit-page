import React from 'react'
import { FaRegUser, FaUnlockAlt, FaCheckCircle, FaCheckDouble } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";
const Assesment = (props) => {
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
                        <h1 className='text-[#626973] font-sans text-lg font-bold mb-2'>Question <span className='text-sm font-normal'>1 of 10</span></h1>
                        <p className='text-sm pl-4 font-normal text-[#626973] mb-2'>It is a long established fact that a reader will be distracted by the readable content of a page ?</p>
                        <ul className='ml-10'>
                            <li>
                                <label style={{ boxShadow: "0px 3px 6px #0000001A" }} className={`flex items-center mb-3 py-1  px-4  cursor-pointer text-sm   w-fit rounded-md `}>
                                    <span className={`border-2  rounded-[50%] p-1 w-4 h-4 flex justify-center items-center mr-4 border-[#626973]`}>
                                        <span className={`rounded-[50%] w-[100%] h-[100%] inline-block bg-white`}></span>
                                    </span>
                                    <input type="radio" hidden name="provider" />
                                    <span className="text-[#626973]">Option A</span>
                                </label>
                            </li>
                            <li>
                                <label style={{ boxShadow: "0px 3px 6px #0000001A" }} className={`flex items-center mb-3  py-1  px-4  cursor-pointer text-sm   w-fit rounded-md `}>
                                    <span className={`border-2  rounded-[50%] p-1 w-4 h-4 flex justify-center items-center mr-4 border-[#626973]`}>
                                        <span className={`rounded-[50%] w-[100%] h-[100%] inline-block bg-white`}></span>
                                    </span>
                                    <input type="radio" hidden name="provider" />
                                    <span className="text-[#626973]">Option A</span>
                                </label>
                            </li>
                            <li>
                                <label style={{ boxShadow: "0px 3px 6px #0000001A" }} className={`flex items-center mb-3  py-1  px-4  cursor-pointer text-sm   w-fit rounded-md `}>
                                    <span className={`border-2  rounded-[50%] p-1 w-4 h-4 flex justify-center items-center mr-4 border-[#626973]`}>
                                        <span className={`rounded-[50%] w-[100%] h-[100%] inline-block bg-white`}></span>
                                    </span>
                                    <input type="radio" hidden name="provider" />
                                    <span className="text-[#626973]">Option A</span>
                                </label>
                            </li>
                            <li>
                                <label style={{ boxShadow: "0px 3px 6px #0000001A" }} className={`flex items-center mb-3  py-1  px-4  cursor-pointer text-sm   w-fit rounded-md `}>
                                    <span className={`border-2  rounded-[50%] p-1 w-4 h-4 flex justify-center items-center mr-4 border-[#626973]`}>
                                        <span className={`rounded-[50%] w-[100%] h-[100%] inline-block bg-white`}></span>
                                    </span>
                                    <input type="radio" hidden name="provider" />
                                    <span className="text-[#626973]">Option A</span>
                                </label>
                            </li>
                        </ul>
                    </div>




                    <div className='mb-3 text-right col-lg-12'>
                        <button onClick={() => props.onNext("Result")} className='font-sans font-medium text-lg border-2 border-[#4DA676] rounded px-16 py-1 text-[#4DA676] hover:text-white hover:bg-[#4DA676] transition-all'>Next <IoChevronForward className='inline' /></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Assesment