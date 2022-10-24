import React from 'react'
import { BiSearch } from "react-icons/bi";
import { AiTwotoneCloud } from 'react-icons/ai'
import { IoMdNotificationsOutline, IoIosBody } from 'react-icons/io'
import profileImage from '../../images/people.png'
import DateSelect from '../DateSelect';
import ProfileDropdown from '../ProfileDropdown';
const DashboardHeader = ({ sidebarOpen, setSidebarOpen, checkExpand, setRightbarOpen, rightbarOpen, Toggle }) => {
    return (
        <header style={{ boxShadow: "0px 0px 6px #00000029" }} className="sticky top-0 lg:ml-1 bg-white border-b border-slate-200 z-30">
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
                        <div className='flex justify-between items-center top_search_bar '>
                            <div className={`flex search_bar pt-1 ${checkExpand ? "w-[40%]" : "w-[45%]"} `}>
                                <input onClick={() => Toggle(true)} className={`bg-[#F3F6FB]  ${checkExpand ? "max-w-[400px]" : "w-[500px]"} focus:outline-none  md:w-[100%] py-1 px-2 text-xs text-[#999FA9]`} placeholder='search' />
                                <button className='bg-green-700 h-[35px] rounded-sm lg:w-[8%] ml-2'><BiSearch className='inline text-white' /></button>
                            </div>
                            <div className='search_bar_items'>
                                <div className={checkExpand ? "flex items-center text-[10px]" : 'flex items-center '}>
                                    <div className='lg:flex lg:items-center lg:p-2  hidden'>
                                        <AiTwotoneCloud className='text-[20px]' />
                                        <span className='ml-2 text-[12px]'>Rain-1'C</span>
                                    </div>
                                    <div className={'ml-2'}>
                                        <IoIosBody className='text-[20px]' />
                                    </div>
                                    <div className={'ml-2'}>
                                        <IoMdNotificationsOutline className='text-[20px]' />
                                    </div>
                                    <div className='lg:flex lg:items-center border rounded-full ml-3  lg:pl-2 lg:pr-2  hidden '>
                                        <img src={profileImage} className="w-6" alt="profile" />
                                        <select className='w-auto p-0 m-0 border-0 text-[13px] focus:outline-none px-1'>
                                            <option>Uk</option>
                                        </select>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                            <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                                        </svg>
                                    </div>
                                    <div className='lg:flex lg:items-center   lg:p-[2px] ml-3  hidden border rounded-full '>
                                        <img src={profileImage} className=" w-6" alt="profile" />
                                        <select className='w-auto p-0 m-0 border-0 text-[13px] focus:outline-none px-1'>
                                            <option>Dark Mode</option>
                                        </select>
                                    </div>
                                    <div className='lg:flex lg:items-center   lg:p-[2px] border rounded-full ml-3  hidden '>
                                        <img src={profileImage} className=" w-6" alt="profile" />
                                        <select className='w-auto p-0 m-0 border-0 text-[13px] focus:outline-none px-1'>
                                            <option>English</option>
                                        </select>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                            <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                                        </svg>
                                    </div>

                                    <div className=' p-[2px] ml-3  '>
                                        <ProfileDropdown />
                                        {/* <img src={profileImage} className=" w-8" alt="profile" />
                                        <select className='w-auto p-0 m-0 border-0 text-[13px] focus:outline-none mx-1'>
                                            <option>Islamabad</option>
                                        </select>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                            <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                                        </svg> */}
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex   w-[10%] lg:hidden md:justify-end">

                        {/* Hamburger button */}
                        <button className="text-slate-500 hover:text-slate-600 lg:hidden" aria-controls="sidebar" aria-expanded={rightbarOpen} onClick={() => setRightbarOpen(!rightbarOpen)}    >
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">   <rect x="4" y="5" width="16" height="2" />   <rect x="4" y="11" width="16" height="2" /> <rect x="4" y="17" width="16" height="2" />   </svg>
                        </button>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default DashboardHeader