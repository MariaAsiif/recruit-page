import React from 'react'
import { BiSearch } from "react-icons/bi";
import { AiTwotoneCloud } from 'react-icons/ai'
import { IoMdNotificationsOutline, IoIosBody } from 'react-icons/io'
import ProfileDropdown from '../ProfileDropdown';
import { MdOutlineDarkMode } from 'react-icons/md';
import CountryDropdown from '../CountryDropdown';
import LanguageDropdown from '../LanguageDropdown';
import logo from '../../images/logo.png'
import { BsSearch } from 'react-icons/bs';
// import { useSelector } from 'react-redux';

const DashboardHeader = ({ sidebarOpen, setSidebarOpen, checkExpand, setRightbarOpen, rightbarOpen, Toggle }) => {

    return (
        <header style={{ boxShadow: "0px 0px 6px #00000029" }} className="sticky top-0 bg-white border-b border-slate-200 z-30">
            <div className="px-6 sm:px-6 lg:px-6 md:px-6">
                <div className="flex items-center justify-between h-20 -mb-px">

                    {/* Header: Left side */}
                    <div className="flex   w-[10%] lg:hidden">
                        {/* Hamburger button */}
                        <button className="text-slate-500 hover:text-slate-600 lg:hidden" aria-controls="sidebar" aria-expanded={sidebarOpen} onClick={() => setSidebarOpen(!sidebarOpen)}    >
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">   <rect x="4" y="5" width="16" height="2" />   <rect x="4" y="11" width="16" height="2" /> <rect x="4" y="17" width="16" height="2" />   </svg>
                        </button>
                    </div>
                    <div className="flex lg:hidden items-center justify-center  w-full ">
                        <img className='m-auto w-[20%] h-auto ' src={logo} alt="logo" loading="lazy" />
                    </div>

                    {/* Header: Right side */}
                    <div className="lg:w-[100%] ">
                        <div className='flex justify-between items-center top_search_bar '>
                            <div className={`lg:flex hidden search_bar  pt-1 ${checkExpand ? "w-[40%]" : "w-[40%]"} `}>
                                <div className="border rounded-md flex px-2 items-center w-full">
                                    <BsSearch className='mx-2' />
                                    <input type="text" placeholder=' Search for projects' className='w-full h-[40px]' />
                                </div>
                            </div>
                            <div className='search_bar_items w-full'>
                                <div className={checkExpand ? "lg:flex hidden items-center text-[16px]" : 'lg:flex hidden items-center '}>
                                    <div className='lg:flex hidden justify-end w-[50%]'>
                                        <AiTwotoneCloud className='text-[20px]' />
                                    </div>
                                    <div className='lg:flex   hidden w-[50%] justify-end'>

                                        <span className='ml-2 text-[16px]'>Rain-1'C</span>
                                    </div>
                                    <div className={'mx-2'}>
                                        <IoIosBody className='text-[20px]' />
                                    </div>
                                    <div className={''}>
                                        <IoMdNotificationsOutline className='text-[20px]' />
                                    </div>
                                    {/* <div className='lg:flex lg:items-center border rounded-full ml-2  px-1  hidden '>
                                        <img src={flag} className="w-6" alt="profile" />
                                        <select className='w-auto p-0 m-0 border-0 text-[13px] focus:outline-none px-1'>
                                            <option>Uk</option>
                                        </select>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                            <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                                        </svg>
                                    </div> */}
                                    <div className='mx-2'>
                                        <CountryDropdown />
                                    </div>

                                    <div className='lg:flex lg:items-center w-[70%] justify-between  lg:mx-1 ml-2  hidden border rounded-full '>
                                        <span className='text-[16px] px-2'>Dark Mode</span>
                                        <div className='border rounded-full mx-[1px] bg-black'>
                                            <MdOutlineDarkMode className='text-[24px] text-white ' />
                                        </div>
                                    </div>
                                    <div className='  mx-2'>
                                        <LanguageDropdown />
                                    </div>
                                    {/* <div className='lg:flex lg:items-center   lg:p-[2px] border rounded-full ml-2  hidden '>
                                        <img src={flag} className=" w-6" alt="profile" />
                                        <select className='w-auto p-0 m-0 border-0 text-[13px] focus:outline-none px-1'>
                                            <option>English</option>
                                        </select>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                            <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                                        </svg>
                                    </div> */}

                                    <div className=' '>
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


                    <div className="flex  lg:hidden justify-between md:justify-end">
                        <div className={'lg:hidden flex items-center justify-center md:mx-3 '}>
                            <IoMdNotificationsOutline className='text-[20px]' />
                        </div>


                        {/* Hamburger button */}
                        <button className="text-slate-500 hover:text-slate-600  lg:hidden" aria-controls="sidebar" aria-expanded={rightbarOpen} onClick={() => setRightbarOpen(!rightbarOpen)}    >
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