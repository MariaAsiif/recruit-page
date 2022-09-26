import React from 'react'
import { BiSearch } from "react-icons/bi";
import { AiTwotoneCloud } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import profileImage from '../../images/people.png'
const DashboardHeader = ({ sidebarOpen, setSidebarOpen }) => {
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
                    <div className="lg:w-[100%] ">
                        <div className='row '>
                            <div className='col-lg-6 flex    '>
                                <input className='bg-[#F3F6FB] h-auto focus:outline-none lg:w-[100%] py-1 px-2 text-xs text-[#999FA9]' placeholder='search' />
                                <button className='bg-[#E84025] rounded-sm w-[8%] ml-2'><BiSearch className='inline text-white' /></button>
                            </div>
                            <div className='col-lg-6 '>
                                <div className='flex lg:items-center'>
                                    <div className='lg:flex lg:items-center lg:border-l  lg:p-2 border-r hidden'>
                                        <AiTwotoneCloud className='text-[20px]' />
                                        <span className='ml-2 text-sm'>Rain-1'C</span>
                                    </div>
                                    <div className='lg:flex lg:items-center lg:border-l  lg:p-2 border-r hidden'>
                                        <select className='focus:outline-none'>
                                            <option>Islamabad</option>
                                        </select>
                                    </div>
                                    <div className='lg:flex lg:items-center lg:border-l  lg:p-2 border-r hidden'>
                                        <img src={profileImage} className=" ml-3 w-6" alt="profile" />
                                        <select className='focus:outline-none'>
                                            <option>Islamabad</option>
                                        </select>
                                    </div>
                                    <div className='flex items-center  p-2'>
                                        <IoMdNotificationsOutline className='text-[20px]' />
                                        <img src={profileImage} className=" ml-3 w-6" alt="profile" />
                                        <select className='focus:outline-none'>
                                            <option>Islamabad</option>
                                        </select>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default DashboardHeader