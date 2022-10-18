import React from 'react'

import Chat from './SmallComponents/Chat';
import Notify from './SmallComponents/Notify';
import { CiSearch } from "react-icons/ci";
const NewDashboardHeader = ({ sidebarOpen, setSidebarOpen, setprofileBar }) => {
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
                        {/* <div className='flex items-center justify-between'>

                            <div className='hidden font-semibold  lg:block text-[#707070] text-lg border'>Dashboard</div>
                            <div className='border grow'>
                                <div className='flex items-center m-auto  mx-9  px-3 rounded-full bg-[#E3E3E372]'>
                                    <input placeholder='Search anything here' className='w-full py-1 bg-transparent focus:outline-none text-[#A7A7A7] placeholder:text-[#A7A7A7]' />
                                    <FaSearch className='inline' />
                                </div>
                            </div>
                            <div className='pr-5 border'> <Notify align="right" /></div>
                            <div className='pr-5 border'> <Notify align="right" /></div>
                            <div className='flex items-center space-x-2 border'>
                                <img onClick={setprofileBar} src="http://placekitten.com/200/200" alt="test" className='flex-none  object-cover m-auto w-full h-auto max-w-[30px] rounded-full' />
                                <div className="flex-auto hidden lg:block ">
                                    <div className="text-xs font-medium text-[#0D1829] ">
                                        Arslan Ahmed
                                    </div>

                                </div>

                            </div>

                        </div> */}
                        <div className='items-center justify-center row g-0'>
                            <div className=' col-lg-3  hidden lg:block text-[#707070] text-lg '>
                                Dashboard
                            </div>
                            <div className=' col-lg-6 col-7 grow'>
                                <div className='flex items-center m-auto  px-3 rounded-full bg-[#E3E3E372]'>
                                    <input placeholder='Search anything here' className='w-full py-1 bg-transparent focus:outline-none text-[#A7A7A7] placeholder:text-[#A7A7A7]' />
                                    <CiSearch className='inline' />
                                </div>
                            </div>
                            <div className='flex items-center justify-center col-lg-1 col-3'>
                                <Chat align="right" />
                                <Notify align="right" />
                            </div>

                            <div className=' col-lg-2 col-2'>
                                <div className='flex items-center justify-end space-x-2 '>
                                    <img onClick={setprofileBar} src="http://placekitten.com/200/200" alt="test" className='flex-none cursor-pointer object-cover m-auto w-full h-auto max-w-[30px] rounded-full' />
                                    <div className="flex-auto hidden lg:block ">
                                        <div className="text-xs font-medium text-[#0D1829] ">
                                            Arslan Ahmed
                                        </div>
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

export default NewDashboardHeader