import React from 'react'

import Chat from '../SmallComponents/Chat';
import Notify from '../SmallComponents/Notify';
// import { CiSearch } from "react-icons/ci";
import { BsChevronDown } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
const NewDashboardHeader = ({ sidebarOpen, setSidebarOpen, setprofileBar }) => {
    return (
        <header style={{ boxShadow: "0px 0px 6px #00000029" }} className="sticky top-0 z-30 bg-[#4DA676] border-b border-slate-200">
            <div className="py-2 pl-4 bg-white rounded-tl-none sm:pl-6 lg:pl-6 lg:rounded-tl-3xl">
                <div className="flex items-center justify-between -mb-px">
                    {/* Header: Left side */}
                    <div className="flex   w-[10%] lg:hidden">

                        {/* Hamburger button */}
                        <button className="text-slate-500 hover:text-slate-600 lg:hidden" aria-controls="sidebar" aria-expanded={sidebarOpen} onClick={() => setSidebarOpen(!sidebarOpen)}    >
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">   <rect x="4" y="5" width="16" height="2" />   <rect x="4" y="11" width="16" height="2" /> <rect x="4" y="17" width="16" height="2" />   </svg>
                        </button>
                    </div>

                    {/* Header: Right side */}
                    <div className=" w-[100%] ">
                        <div class="grid grid-cols-24 items-center gap-1">
                            <div class="lg:col-span-3 items-center hidden lg:block text-[#707070]">Notifications</div>
                            <div class="lg:col-span-15 col-span-15 items-center lg:px-20  ">
                                <div className='flex items-center m-auto  px-3 rounded-full bg-[#E3E3E372]'>
                                    <input placeholder='Search anything here' className='w-full py-1 bg-transparent focus:outline-none text-[#A7A7A7] placeholder:text-[#A7A7A7]' />
                                    <FiSearch className='inline' />
                                </div>
                            </div>
                            <div class="lg:col-span-1 col-span-3 text-center items-center ">
                                <Chat align="right" />
                            </div>
                            <div class="lg:col-span-1 col-span-3 text-center items-center ">
                                <Notify align="right" />
                            </div>
                            <div class="lg:col-span-4 col-span-3 items-center flex justify-end ">
                                <div>
                                    <img onClick={setprofileBar} src="http://placekitten.com/200/200" alt="test" className=' cursor-pointer object-cover m-auto w-full h-auto max-w-[30px] rounded-full' />
                                </div>
                                <div className="text-xs hidden lg:block font-medium text-[#0D1829] ml-3 ">Arslan Ahmed <BsChevronDown size={18} className='inline pl-1 mr-3' /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NewDashboardHeader