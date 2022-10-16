import React, { useRef } from 'react'
import { BiSearch } from 'react-icons/bi';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../images/logo.png'
const NewDashboardSidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const location = useLocation();
    const { pathname } = location;

    const trigger = useRef(null);
    const sidebar = useRef(null);

    console.log(location);


    return (
        <div>
            {/* Sidebar backdrop (mobile only) */}
            <div className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"  ></div>

            {/* Sidebar */}
            <div id="sidebar" ref={sidebar} className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-52 lg:w-20 lg:sidebar-expanded:!w-40 2xl:!w-64 shrink-0 bg-[#4DA676] transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}  >
                {/* Sidebar header */}
                <div className="flex mt-4 mb-10 lg:justify-center justify-evenly ">
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


                <div className="space-y-8">
                    <div>
                        <ul className="mt-3">

                            <li className={`mb-3 last:mb-0  ${pathname === "/newdashboard" ? "bg-white" : ""} group  hover:bg-white transition duration-150 `}>
                                <div className='flex '>
                                    <NavLink end to="/newdashboard" className={`block w-full px-3 py-2  ${pathname === "/newdashboard" ? 'text-[#4DA676]  ' : "text-white"} group-hover:text-[#4DA676] truncate transition duration-150 `} >
                                        <div className="flex items-center justify-between ">
                                            <div className="flex items-center grow">
                                                <BiSearch size={18} />
                                                <span className={`font-semibold text-sm ml-2 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200`}>Dashboard</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li className={`mb-3 last:mb-0  ${pathname === "/newdashboard/services" ? "bg-white" : ""} group  hover:bg-white transition duration-150 `}>
                                <div className='flex '>
                                    <NavLink end to="/newdashboard/services" className={`block w-full px-3 py-2  ${pathname === "/newdashboard/services" ? 'text-[#4DA676]  ' : "text-white"} group-hover:text-[#4DA676] truncate transition duration-150 `} >
                                        <div className="flex items-center justify-between ">
                                            <div className="flex items-center grow">
                                                <BiSearch size={18} />
                                                <span className={`font-semibold text-sm ml-2 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200`}>Services</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li className={`mb-3 last:mb-0  ${pathname === "/newdashboard/inbox" ? "bg-white" : ""} group  hover:bg-white transition duration-150 `}>
                                <div className='flex '>
                                    <NavLink end to="/newdashboard/inbox" className={`block w-full px-3 py-2  ${pathname === "/newdashboard/inbox" ? 'text-[#4DA676]  ' : "text-white"} group-hover:text-[#4DA676] truncate transition duration-150 `} >
                                        <div className="flex items-center justify-between ">
                                            <div className="flex items-center grow">
                                                <BiSearch size={18} />
                                                <span className={`  font-semibold text-sm ml-2 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200`}>Inbox</span>
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

export default NewDashboardSidebar