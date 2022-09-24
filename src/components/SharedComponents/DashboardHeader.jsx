import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi";

const DashboardHeader = ({ sidebarOpen, setSidebarOpen }) => {
    const [searchModalOpen, setSearchModalOpen] = useState(false)
    return (
        <header style={{ boxShadow: "0px 0px 6px #00000029" }} className="sticky top-0 ml-1 bg-white border-b border-slate-200 z-30">
            <div className="px-4 sm:px-6 lg:px-6">
                <div className="flex items-center justify-between h-16 -mb-px">

                    {/* Header: Left side */}
                    <div className="flex   w-[10%] lg:hidden">

                        {/* Hamburger button */}
                        <button className="text-slate-500 hover:text-slate-600 lg:hidden" aria-controls="sidebar" aria-expanded={sidebarOpen} onClick={() => setSidebarOpen(!sidebarOpen)}    >
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">   <rect x="4" y="5" width="16" height="2" />   <rect x="4" y="11" width="16" height="2" /> <rect x="4" y="17" width="16" height="2" />   </svg>
                        </button>
                    </div>

                    {/* Header: Right side */}
                    <div className="   lg:w-[100%] w-[90%]">
                        <div className='row'>
                            <div className='col-lg-4 lg:flex hidden   '>
                                <input className='bg-[#F3F6FB] focus:outline-none w-[96%] py-1 px-2 text-xs text-[#999FA9]' placeholder='search' />
                                <button className='bg-[#E84025] rounded-sm w-[8%] ml-2'><BiSearch className='inline text-white' /></button>
                            </div>
                            <div className='col-lg-6'>
                                asdfdadsf
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default DashboardHeader