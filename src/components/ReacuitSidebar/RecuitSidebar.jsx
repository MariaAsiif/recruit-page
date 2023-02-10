import React, { useEffect, useRef, useState } from 'react'
import {  NavLink, useLocation } from 'react-router-dom';
import logo from '../../images/logo.png'
import { BiSearch, BiUserCircle } from "react-icons/bi";
import { BsBarChartFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaRegBell } from 'react-icons/fa'
import { AiOutlineAppstore,  } from 'react-icons/ai'
const RecruitSidebar = ({ sidebarOpen, setSidebarOpen, setCheckExpand }) => {
    const location = useLocation();
    const { pathname } = location;
    const trigger = useRef(null);
    const sidebar = useRef(null);

    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
    const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');


    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    // useEffect(() => {
    //     localStorage.setItem('sidebar-expanded', sidebarExpanded);
    //     // setCheckExpand(sidebarExpanded)
    //     if (sidebarExpanded) {
    //         document.querySelector('body').classList.add('sidebar-expanded');
    //     } else {
    //         document.querySelector('body').classList.remove('sidebar-expanded');
    //     }
    // }, [sidebarExpanded]);





    return (
        <div>
         

            {/* Sidebar backdrop (mobile only) */}
            <div
                className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"  ></div>

            {/* Sidebar */}
            <div id="sidebar" ref={sidebar} className={`lg:flex flex-col fixed z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen  overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-[15rem] lg:sidebar-expanded:!w-[15rem] 2xl:!w-64 shrink-0 bg-white p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}  >
                {/* Sidebar header */}
                <div>
                    <button ref={trigger} className="lg:hidden text-slate-500 border rounded-full px-2  py-2 hover:text-slate-400" onClick={() => setSidebarOpen(!sidebarOpen)} aria-controls="sidebar" aria-expanded={sidebarOpen} >
                        <span className="sr-only">Close sidebar</span>
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" /> </svg>
                    </button>
                </div>
                <div className="flex lg:justify-between justify-center mb-10 pr-3 sm:px-2">
                    {/* Close button */}

                    {/* Logo */}
                    <NavLink end to="/" className="block">
                        <img className='m-auto w-full h-auto max-w-[90px]' src={logo} alt="logo" loading="lazy" />
                    </NavLink>
                </div>

                {/* Links */}
                <div className="space-y-8">
                    {/* Pages group */}
                    <div>

                        <ul className="mt-3">

                            {/* Messages */}
                            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0  `} onClick={() => setSidebarOpen(false)}>
                                <div className='flex '>

                                    <NavLink
                                        end to="/dashboard/new-job" className={`block text-slate-200 ml-2  truncate transition duration-150 `} >
                                        <div className="flex items-center justify-between ">
                                            <div className="grow flex items-center">
                                                <AiOutlineAppstore size={24} className={` text-[#999FA9] hidden `} />
                                                <span className={` text-[#999FA9] text-sm ml-3 text-[18px] font-medium `}>Home</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>

                            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0  `} onClick={() => setSidebarOpen(false)}>
                                <div className='flex '>
                                    {
                                        pathname.includes('about') &&
                                        <div className=' w-[20px] -ml-[28px] bg-[#42946C] rounded-r-md'></div>
                                    }
                                    <NavLink
                                        end to="/recruit" className={`block text-slate-200 ml-2 hover:text-white truncate transition duration-150 `} >
                                        <div className="flex items-center justify-between ">
                                            <div className="grow flex items-center">
                                                <BiSearch size={24} className={`${pathname.includes('about') ? 'text-[#42946C]  ' : "text-[#999FA9]"} hidden`} />
                                                <span className={`${pathname.includes('about') ? 'text-[#42946C] font-medium' : "text-[#999FA9] font-medium "} text-sm ml-3  lg:sidebar-expanded:opacity-100 text-[18px] 2xl:opacity-100 duration-200`}>About</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0  `} onClick={() => setSidebarOpen(false)}>
                                <div className='flex '>
                                    {
                                        pathname.includes('recruit') &&
                                        <div className=' w-[20px] -ml-[28px] bg-[#42946C] rounded-r-md'></div>
                                    }
                                    <NavLink
                                        end to="/recruit" className={`block text-slate-200 ml-2 hover:text-white truncate transition duration-150 `} >
                                        <div className="flex items-center justify-between ">
                                            <div className="grow flex items-center">
                                                <BiSearch size={24} className={`${pathname.includes('recruit') ? 'text-[#42946C]  ' : "text-[#999FA9]"} hidden`} />
                                                <span className={`${pathname.includes('recruit') ? 'text-[#42946C] font-medium' : "text-[#999FA9] font-medium "} text-sm ml-3  lg:sidebar-expanded:opacity-100 text-[18px] 2xl:opacity-100 duration-200`}>Quick Cv</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0'}`} onClick={() => setSidebarOpen(false)}>  
                                <div className='flex '>
                                    {
                                        pathname.includes('next') &&
                                        <div className=' w-[20px] -ml-[28px] bg-[#42946C] rounded-r-md'></div>
                                    }
                                    <NavLink
                                        end to="/next" className={`block ml-2 text-slate-200 truncate transition duration-150`} >
                                        <div className="flex items-center justify-between">
                                            <div className="grow flex items-center">
                                                <IoMail size={24} className={`${pathname.includes('next') ? 'text-[#42946C]  ' : "text-[#999FA9]"} hidden`} />
                                                <span className={`${pathname.includes('next') ? 'text-[#42946C] font-medium' : "text-[#999FA9] font-medium"} text-sm   ml-3  lg:sidebar-expanded:opacity-100 2xl:opacity-100 text-[18px] duration-200`}>What's Next</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0'}`} onClick={() => setSidebarOpen(false)}>
                                <div className='flex '>
                                    {
                                        pathname.includes('recent-jobs') &&
                                        <div className=' w-[20px] -ml-[28px] bg-[#42946C] rounded-r-md'></div>
                                    }
                                    <NavLink
                                        end to="/dashboard/recent-jobs" className={`block ml-2 text-slate-200 truncate transition duration-150`} >
                                        <div className="flex items-center justify-between">
                                            <div className="grow flex items-center">
                                                <BsBarChartFill size={24} className={`${pathname.includes('recent-jobs') ? 'text-[#42946C]  ' : "text-[#999FA9]"} hidden`} />
                                                <span className={`${pathname.includes('recent-jobs') ? 'text-[#42946C] font-medium' : "text-[#999FA9] font-medium"} text-sm   ml-3  lg:sidebar-expanded:opacity-100 2xl:opacity-100 text-[18px] duration-200 border rounded-md px-3 py-2`}>Sign In</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            


                        </ul>
                    </div>
                    {/* More group */}

                </div>




               
            </div>
        </div>
    )
}

export default RecruitSidebar