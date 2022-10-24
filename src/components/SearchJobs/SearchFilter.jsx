import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { RiCloseCircleLine } from 'react-icons/ri'
import { IoLocationOutline } from 'react-icons/io5'
const SearchFilter = () => {
    return (
        <div className='bg-[#F4F5FA] h-full pb-4 mb-4 pt-[40px]  '>
            <div className='bscontainer '>
                <div className='border p-5 bg-white rounded-lg ' style={{ margin: '0px 25px', boxShadow: '0px 15px 34px rgba(0, 0, 0, 0.25)' }}>
                    <div className='row'>
                        <div className='col-lg-6  h-full lg:h-[60px] pt-4 '>
                            <div className='flex'>
                                <BiSearch className='text-[25px] text-gray-300' />
                                <input type="text" placeholder="Type Here..." className=' w-full h-full focus:outline-none' />
                                <RiCloseCircleLine className='text-[25px] text-gray-300' />
                            </div>
                        </div>
                        <div className='col-lg-6 lg:border-l-2 md:border-0  h-[60px] pt-4 search_filter'>
                            <div className='flex items-center relative location_search'>
                                <IoLocationOutline className='text-[25px] text-gray-300' />
                                <select className='!p-0  custom_select border-0 focus:outline-none'>
                                    <option>Select Loction</option>
                                    <option>Select Loction</option>
                                    <option>Select Loction</option>
                                    <option>Select Loction</option>
                                </select>
                                <div className='absolute right-0 '>
                                    <button className='hover:bg-[#93C234] text-white rounded-lg w-full h-full p-3 bg-[#DB4446] ' >Find Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row' style={{ margin: '0px 25px' , paddingTop:'20px' }}>
                    <div className='col-lg-3 col-md-6 md:order-1 lg:order-1'>
                        <label className='text-[18px] font-semibold mb-3'>Sort by:</label>
                        <select className='bg-white border w-full h-[35px] pl-1 placeholder:text-gray-200 rounded-md '>
                            <option>Select here</option>
                            <option>Select here</option>
                            <option>Select here</option>
                        </select>
                    </div>
                    <div className='col-lg-3 col-md-6 md:order-2 lg:order-2'>
                        <label className='text-[18px] font-semibold mb-3'>Type:</label>
                        <select className='bg-white border w-full h-[35px] pl-1 placeholder:text-gray-200 rounded-md'>
                            <option>Select here</option>
                            <option>Select here</option>
                            <option>Select here</option>
                        </select>
                    </div>
                    <div className='col-lg-2 col-md-4 md:order-4 lg:order-3'>
                        <div className="flex  lg:justify-center pt-[40px] pb-3">
                            <div className="form-check form-switch pl-0">
                                <label className="form-check-label inline-block text-gray-800 -pl-2" for="flexSwitchCheckDefault text-[14px] ">Remote Only</label>
                                <input className="form-check-input ml-2 appearance-none w-9 rounded-full float-right h-5 align-top  bg-no-repeat bg-contain  bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-5 md:order-3 lg:order-4'>
                        <label className='text-[18px] font-semibold mb-3 '>Type:</label>
                        <select className='bg-white border w-full h-[35px] pl-1 placeholder:text-gray-200 rounded-md'>
                            <option>Select here</option>
                            <option>Select here</option>
                            <option>Select here</option>
                        </select>
                    </div>

                    <div className='col-lg-1 col-md-3 md:order-5 lg:order-5'>
                        <h2 className='text-[14px] pt-[40px] text-[#969696] cursor-pointer'>Clear full</h2>
                    </div>
                </div>

                {/* <div className='flex flex-wrap items-center pt-5' style={{ margin: '0px 25px' }}>
                    <div className='flex flex-col w-[21.2%]'>
                        <label className='text-[18px] font-semibold mb-3'>Sort by:</label>
                        <select className='bg-white border w-full h-[35px] pl-1 placeholder:text-gray-200 rounded-md '>
                            <option>Select here</option>
                            <option>Select here</option>
                            <option>Select here</option>
                        </select>
                    </div>
                    <div className='flex flex-col w-[21.2%] ml-4'>
                        <label className='text-[18px] font-semibold mb-3'>Type:</label>
                        <select className='bg-white border w-full h-[35px] pl-1 placeholder:text-gray-200 rounded-md'>
                            <option>Select here</option>
                            <option>Select here</option>
                            <option>Select here</option>
                        </select>
                    </div>
                    <div className=' w-[21.2%] ml-4 pt-[40px]'>
                        <div className="flex justify-center">
                            <div className="form-check form-switch">
                                <label className="form-check-label inline-block text-gray-800" for="flexSwitchCheckDefault text-[14px] ">Remote Only</label>
                                <input className="form-check-input ml-2 appearance-none w-9 rounded-full float-right h-5 align-top  bg-no-repeat bg-contain  bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col w-[21.2%] ml-4'>
                        <label className='text-[18px] font-semibold mb-3'>Type:</label>
                        <select className='bg-white border w-full h-[35px] pl-1 placeholder:text-gray-200 rounded-md'>
                            <option>Select here</option>
                            <option>Select here</option>
                            <option>Select here</option>
                        </select>
                    </div>

                    <div className='ml-3 pt-[40px]'>
                        <h2 className='text-[18px]'>Clear full</h2>
                    </div>
                </div> */}
            </div>

        </div>
    )
}

export default SearchFilter