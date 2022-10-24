import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../../images/logo.png'
import { BiSearch, BiUserCircle } from "react-icons/bi";
import { BsBarChartFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaRegBell } from 'react-icons/fa'
import { AiOutlinePoweroff } from 'react-icons/ai'
const DashboardSidebar = ({ sidebarOpen, setSidebarOpen, setCheckExpand }) => {
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

    useEffect(() => {
        localStorage.setItem('sidebar-expanded', sidebarExpanded);
        setCheckExpand(sidebarExpanded)
        if (sidebarExpanded) {
            document.querySelector('body').classList.add('sidebar-expanded');
        } else {
            document.querySelector('body').classList.remove('sidebar-expanded');
        }
    }, [sidebarExpanded]);
    return (
        <div>
            {/* Sidebar backdrop (mobile only) */}
            <div
                className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"  ></div>

            {/* Sidebar */}
            <div id="sidebar" ref={sidebar} className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-[15rem] lg:sidebar-expanded:!w-[15rem] 2xl:!w-64 shrink-0 bg-white p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}  >
                {/* Sidebar header */}
                <div className="flex lg:justify-between justify-center mb-10 pr-3 sm:px-2">
                    {/* Close button */}
                    <button ref={trigger} className="lg:hidden text-slate-500 hover:text-slate-400" onClick={() => setSidebarOpen(!sidebarOpen)} aria-controls="sidebar" aria-expanded={sidebarOpen} >
                        <span className="sr-only">Close sidebar</span>
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" /> </svg>
                    </button>
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
                            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0  `}>
                                <div className='flex '>
                                    <div className=' w-[20px] -ml-[28px] bg-[#42946C] rounded-r-md'></div>
                                    <NavLink
                                        end to="/dashboard/new-job" className={`block text-slate-200 ml-2 hover:text-white truncate transition duration-150 `} >
                                        <div className="flex items-center justify-between ">
                                            <div className="grow flex items-center">

                                                <BiSearch size={24} className={`${pathname.includes('new-job') ? 'text-[#65A33A]  ' : "text-[#999FA9]"} `} />
                                                <span className={`${pathname.includes('new-job') ? 'text-[#65A33A] font-medium' : "text-[#999FA9] font-light"} text-sm ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200`}>Apply New Job</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0'}`}>
                                <div className='flex '>
                                    <div className=' w-[20px] -ml-[28px] bg-[#42946C] rounded-r-md'></div>
                                    <NavLink
                                        end to="/dashboard/applied-jobs" className={`block ml-2 text-slate-200 truncate transition duration-150`} >
                                        <div className="flex items-center justify-between">
                                            <div className="grow flex items-center">
                                                <IoMail size={24} className={`${pathname.includes('applied-jobs') ? 'text-[#65A33A]  ' : "text-[#999FA9]"} `} />
                                                <span className={`${pathname.includes('applied-jobs') ? 'text-[#65A33A] font-medium' : "text-[#999FA9] font-light"} text-sm   ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200`}>Recent Applied Job</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0'}`}>
                                <div className='flex '>
                                    <div className=' w-[20px] -ml-[28px] bg-[#42946C] rounded-r-md'></div>
                                    <NavLink
                                        end to="/dashboard/recent-jobs" className={`block ml-2 text-slate-200 truncate transition duration-150`} >
                                        <div className="flex items-center justify-between">
                                            <div className="grow flex items-center">
                                                <BsBarChartFill size={24} className={`${pathname.includes('recent-jobs') ? 'text-[#65A33A]  ' : "text-[#999FA9]"} `} />
                                                <span className={`${pathname.includes('recent-jobs') ? 'text-[#65A33A] font-medium' : "text-[#999FA9] font-light"} text-sm   ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200`}>Jobs History</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0'}`}>
                                <div className='flex '>
                                    <div className=' w-[20px] -ml-[28px] bg-[#42946C] rounded-r-md'></div>
                                    <NavLink
                                        end to="/dashboard/profile-setting" className={`block ml-2 text-slate-200 truncate transition duration-150`} >
                                        <div className="flex items-center justify-between">
                                            <div className="grow flex items-center">
                                                <BiUserCircle size={24} className={`${pathname.includes('profile-setting') ? 'text-[#65A33A]  ' : "text-[#999FA9]"} `} />
                                                <span className={`${pathname.includes('profile-setting') ? 'text-[#65A33A] font-medium' : "text-[#999FA9] font-light"} text-sm   ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200`}>Profile Setting</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0'}`}>
                                <div className='flex '>
                                    <div className=' w-[20px] -ml-[28px] bg-[#42946C] rounded-r-md'></div>
                                    <NavLink
                                        end to="/dashboard/notification" className={`block ml-2 text-slate-200 truncate transition duration-150`} >
                                        <div className="flex items-center justify-between">
                                            <div className="grow flex items-center">
                                                <FaRegBell size={24} className={`${pathname.includes('notification') ? 'text-[#65A33A]  ' : "text-[#999FA9]"} `} />
                                                <span className={`${pathname.includes('notification') ? 'text-[#65A33A] font-medium' : "text-[#999FA9] font-light"} text-sm   ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200`}>Notification</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>


                        </ul>
                    </div>
                    {/* More group */}

                </div>

                {/* Expand / collapse button */}


              
                <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-center mt-auto">
                <div className='flex items-center -mt-[3rem]'>
                    <AiOutlinePoweroff className='text-gray-400' />
                    <h2 className='mx-3 text-gray-400'>Sign Out </h2>
                </div>
                    {/* <div className="px-3 py-2">
                        <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
                            <span className="sr-only">Expand / collapse sidebar</span>
                            <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                                <path className="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                                <path className="text-slate-600" d="M3 23H1V1h2z" />
                            </svg>
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default DashboardSidebar