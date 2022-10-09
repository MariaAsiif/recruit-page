import React from 'react'
import { FaRegUser, FaUnlockAlt, FaCheckCircle, FaCheckDouble, FaCloudUploadAlt } from "react-icons/fa";
import { IoChevronDownCircleOutline, IoChevronForward } from "react-icons/io5";
const CompanyInformation = (props) => {
    return (
        <div className='w-full px-4 lg:px-16'>
            <div style={{ boxShadow: "0px 3px 6px #00000029" }} className="border border-[#70707045]  pt-4 pb-1 lg:px-6 px-6 rounded-md font-sans">
                <h1 className='text-[#626973] text-center font-sans font-bold text-lg mb-1'>Company Information</h1>
                <p className='text-[#626973] text-center font-sans text-[10px] mb-2'>Please share complete details about your business</p>
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
                        <h1 className='text-[#707070] text-sm ml-5'>Business Logo</h1>
                        <label className='border py-2 block rounded-md px-3 w-full border-[#707070] text-[#707070] text-sm font-sans cursor-pointer'>
                            <FaCloudUploadAlt className='inline mr-3' />  Upload business logo
                            <input type="file" hidden />
                        </label>
                    </div>
                    <div className='mb-3 col-lg-7'>
                        <h1 className='text-[#707070] text-sm ml-5'>Business Name</h1>
                        <input className='border py-2 block rounded-md px-3 w-full border-[#707070] text-[#707070] text-sm font-sans focus:outline-none placeholder:text-[#707070]' placeholder='Enter Your Business Name' />
                    </div>
                    <div className='mb-3 col-lg-7'>
                        <h1 className='text-[#707070] text-sm ml-5'>Industry</h1>
                        <div className="relative dropdown">
                            <button className=" dropdown-toggle py-2 px-3  border font-sans text-sm border-[#707070] text-[#707070] w-full rounded-md justify-between focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex items-center whitespace-nowrap " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Industry
                                <IoChevronDownCircleOutline size={20} className='inline' />
                            </button>
                            <ul style={{ boxShadow: "0px 3px 6px #00000029" }} className="absolute z-50 hidden float-left w-full py-2 m-0 text-base text-left list-none bg-white border-none rounded-b-lg dropdown-menu min-w-max bg-clip-padding" aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <p className='block w-full px-2 py-2 text-sm font-normal text-[#707070] font-sans bg-transparent cursor-pointer dropdown-item whitespace-nowrap hover:bg-gray-100'>Action</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='mb-3 col-lg-7'>
                        <h1 className='text-[#707070] text-sm ml-5'>Category</h1>
                        <div className="relative dropdown">
                            <button className=" dropdown-toggle py-2 px-3  border font-sans text-sm border-[#707070] text-[#707070] w-full rounded-md justify-between focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex items-center whitespace-nowrap " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Industry
                                <IoChevronDownCircleOutline size={20} className='inline' />
                            </button>
                            <ul style={{ boxShadow: "0px 3px 6px #00000029" }} className="absolute z-50 hidden float-left w-full py-2 m-0 text-base text-left list-none bg-white border-none rounded-b-lg dropdown-menu min-w-max bg-clip-padding" aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <p className='block w-full px-2 py-2 text-sm font-normal text-[#707070] font-sans bg-transparent cursor-pointer dropdown-item whitespace-nowrap hover:bg-gray-100'>Action</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='mb-3 col-lg-7'>
                        <h1 className='text-[#707070] text-sm ml-5'>Business Portfolio</h1>
                        <label className='border py-2 block rounded-md px-3 w-full border-[#707070] text-[#707070] text-sm font-sans cursor-pointer'>
                            <FaCloudUploadAlt className='inline mr-3' />  Upload business Portfolio
                            <input type="file" hidden />
                        </label>
                    </div>
                    <div className='mb-3 text-center col-lg-7'>
                        <button onClick={() => props.onNext("ReferralLink")} className='font-sans font-medium text-lg border-2 border-[#4DA676] rounded px-16 py-1 text-[#4DA676] hover:text-white hover:bg-[#4DA676] transition-all'>Next <IoChevronForward className='inline' /></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CompanyInformation