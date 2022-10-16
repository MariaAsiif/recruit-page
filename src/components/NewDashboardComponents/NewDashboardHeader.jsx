import React from 'react'

import { FaSearch } from "react-icons/fa";
const NewDashboardHeader = ({ sidebarOpen, setSidebarOpen, profileBarOpen, setprofileBar }) => {
    return (
        <header style={{ boxShadow: "0px 0px 6px #00000029" }} className="sticky top-0 z-30 bg-[#4DA676] border-b border-slate-200">
            <div className="px-4 bg-white rounded-tl-none sm:px-6 lg:px-6 lg:rounded-tl-3xl">
                <div className="flex items-center justify-between h-[8vh] -mb-px">
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
                        <div className='flex items-center justify-between'>
                            <div className='hidden font-semibold  lg:block text-[#707070] text-xl'>Dashboard</div>
                            <div className=' grow'>
                                <div className='flex items-center m-auto  mx-9  px-3 rounded-full bg-[#E3E3E372]'>
                                    <input placeholder='Search anything here' className='w-full py-2 bg-transparent focus:outline-none text-[#A7A7A7] placeholder:text-[#A7A7A7]' />
                                    <FaSearch className='inline' />
                                </div>
                            </div>
                            <div className=''>
                                <img onClick={setprofileBar} src="http://placekitten.com/200/300" alt="test" className='w-10 h-10 rounded-full' />
                            </div>

                        </div>
                    </div>



                </div>
            </div>
        </header>
    )
}

export default NewDashboardHeader