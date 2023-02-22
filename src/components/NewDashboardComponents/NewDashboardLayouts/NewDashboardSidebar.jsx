import React, { useRef, useState, useEffect } from 'react'
import { BiDetail, BiSupport } from 'react-icons/bi';
import { BsInfoSquare } from 'react-icons/bs';
import { FaFileInvoice, FaQuestion } from 'react-icons/fa';
import { FiBell } from 'react-icons/fi';
import { GiGoldShell } from 'react-icons/gi';
import { HiOutlineMail } from 'react-icons/hi';
import { MdMiscellaneousServices } from 'react-icons/md';
import { TbBorderAll, TbFileInvoice, TbLayoutDashboard } from 'react-icons/tb';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../../images/logo.png'
const NewDashboardSidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const location = useLocation();
    const { pathname } = location;
    const trigger = useRef(null);
    const sidebar = useRef(null);



    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    useEffect(() => {
        if (sidebarOpen === true) {
            if (typeof window != 'undefined' && window.document) {
                document.body.style.overflow = 'hidden';
            }

        }
        else {
            document.body.style.overflow = 'auto';

        }


    }, [sidebarOpen]);


    return (
        <div>
            {/* Sidebar backdrop (mobile only) */}


            {/* <div className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity lg:duration-200 opacity-100 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"  ></div>

            
            <div id="sidebar" ref={sidebar} className={`flex flex-col relative z-1 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-auto lg:overflow-y-auto  no-scrollbar w-64  2xl:!w-64 shrink-0 bg-[#4DA676]   transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`} > */}


            <div
                className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"  ></div>

            {/* Sidebar */}
            <div id="sidebar" ref={sidebar} className={`lg:flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen  overflow-y-auto lg:overflow-y-auto no-scrollbar w-64  2xl:!w-64 shrink-0 bg-[#4DA676] p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}  >
                <div>
                    {/* Close button */}
                    <button ref={trigger} className="lg:hidden text-white hover:text-slate-400" onClick={() => setSidebarOpen(!sidebarOpen)} aria-controls="sidebar" aria-expanded={sidebarOpen} >
                        <span className="sr-only">Close sidebar</span>
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" /> </svg>
                    </button>
                </div>
                {/* Sidebar header */}
                <div className="flex mt-4 mb-3 lg:justify-center justify-evenly ">

                    {/* Logo */}
                    <NavLink end to="/" className="block">
                        <img className='m-auto w-full h-auto max-w-[90px]' src={logo} alt="logo" loading="lazy" />
                    </NavLink>
                </div>


                <div className="space-y-8">
                    <div>
                        <ul className="mt-3 h-[550px] overflow-y-auto ">
                            <li onClick={() => setSidebarOpen(false)} className={`mb-3 last:mb-0  ${pathname === "/providerDashboard" ? "bg-white" : ""} group  hover:bg-white transition duration-150 `}>
                                <div className='flex '>
                                    <NavLink end to="/providerDashboard" className={`block w-full px-3 py-2  ${pathname === "/providerDashboard" ? 'text-[#4DA676]  ' : "text-white"} group-hover:text-[#4DA676] truncate transition duration-150 `} >
                                        <div className="flex items-center justify-between ">
                                            <div className="flex items-center grow">
                                                <TbLayoutDashboard size={18} />
                                                <span className={`font-semibold text-sm ml-2 opacity-100  2xl:opacity-100 duration-200`}>Dashboard</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li onClick={() => setSidebarOpen(false)} className={`mb-3 last:mb-0  ${pathname === "/providerDashboard/services" ? "bg-white" : ""} group  hover:bg-white transition duration-150 `}>
                                <div className='flex '>
                                    <NavLink end to="/providerDashboard/services" className={`block w-full px-3 py-2  ${pathname === "/providerDashboard/services" ? 'text-[#4DA676]  ' : "text-white"} group-hover:text-[#4DA676] truncate transition duration-150 `} >
                                        <div className="flex items-center justify-between ">
                                            <div className="flex items-center grow">
                                                <MdMiscellaneousServices size={18} />
                                                <span className={`font-semibold text-sm ml-2 opacity-100  2xl:opacity-100 duration-200`}>Services</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li onClick={() => setSidebarOpen(false)} className={`mb-3 last:mb-0  ${pathname === "/providerDashboard/inbox" ? "bg-white" : ""} group  hover:bg-white transition duration-150 `}>
                                <div className='flex '>
                                    <NavLink end to="/providerDashboard/inbox" className={`block w-full px-3 py-2  ${pathname === "/providerDashboard/inbox" ? 'text-[#4DA676]  ' : "text-white"} group-hover:text-[#4DA676] truncate transition duration-150 `} >
                                        <div className="flex items-center justify-between ">
                                            <div className="flex items-center grow">
                                                <HiOutlineMail size={18} />
                                                <span className={`  font-semibold text-sm ml-2 opacity-100  2xl:opacity-100 duration-200`}>Inbox</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>

                            <li onClick={() => setSidebarOpen(false)} className={`mb-3 last:mb-0  ${pathname === "/providerDashboard/orders" ? "bg-white" : ""} group  hover:bg-white transition duration-150 `}>
                                <div className='flex '>
                                    <NavLink end to="/providerDashboard/orders" className={`block w-full px-3 py-2  ${pathname === "/providerDashboard/orders" ? 'text-[#4DA676]  ' : "text-white"} group-hover:text-[#4DA676] truncate transition duration-150 `} >
                                        <div className="flex items-center justify-between ">
                                            <div className="flex items-center grow">
                                                <TbBorderAll size={18} />
                                                <span className={`  font-semibold text-sm ml-2 opacity-100  2xl:opacity-100 duration-200`}>Orders</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li onClick={() => setSidebarOpen(false)} className={`mb-3 last:mb-0  ${pathname === "/providerDashboard/notifications" ? "bg-white" : ""} group  hover:bg-white transition duration-150 `}>
                                <div className='flex '>
                                    <NavLink end to="/providerDashboard/notifications" className={`block w-full px-3 py-2  ${pathname === "/providerDashboard/notifications" ? 'text-[#4DA676]  ' : "text-white"} group-hover:text-[#4DA676] truncate transition duration-150 `} >
                                        <div className="flex items-center justify-between ">
                                            <div className="flex items-center grow">
                                                <FiBell size={18} />
                                                <span className={`  font-semibold text-sm ml-2 opacity-100  2xl:opacity-100 duration-200`}>Notifications</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li onClick={() => setSidebarOpen(false)} className={`mb-3 last:mb-0  ${pathname === "/providerDashboard/support" ? "bg-white" : ""} group  hover:bg-white transition duration-150 `}>
                                <div className='flex '>
                                    <NavLink end to="/providerDashboard/support" className={`block w-full px-3 py-2  ${pathname === "/providerDashboard/support" ? 'text-[#4DA676]  ' : "text-white"} group-hover:text-[#4DA676] truncate transition duration-150 `} >
                                        <div className="flex items-center justify-between ">
                                            <div className="flex items-center grow">
                                                <BiSupport size={18} />
                                                <span className={`  font-semibold text-sm ml-2 opacity-100  2xl:opacity-100 duration-200`}>Support</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li onClick={() => setSidebarOpen(false)} className={`mb-3 last:mb-0  ${pathname === "/providerDashboard/invoice" ? "bg-white" : ""} group  hover:bg-white transition duration-150 `}>
                                <div className='flex '>
                                    <NavLink end to="/providerDashboard/invoice" className={`block w-full px-3 py-2  ${pathname === "/providerDashboard/invoice" ? 'text-[#4DA676]  ' : "text-white"} group-hover:text-[#4DA676] truncate transition duration-150 `} >
                                        <div className="flex items-center justify-between ">
                                            <div className="flex items-center grow">
                                                <TbFileInvoice size={18} />
                                                <span className={`  font-semibold text-sm ml-2 opacity-100  2xl:opacity-100 duration-200`}>Invoice</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li onClick={() => setSidebarOpen(false)} className={`mb-3 last:mb-0  ${pathname === "/providerDashboard/faqs" ? "bg-white" : ""} group  hover:bg-white transition duration-150 `}>
                                <div className='flex '>
                                    <NavLink end to="/providerDashboard/faqs" className={`block w-full px-3 py-2  ${pathname === "/providerDashboard/faqs" ? 'text-[#4DA676]  ' : "text-white"} group-hover:text-[#4DA676] truncate transition duration-150 `} >
                                        <div className="flex items-center justify-between ">
                                            <div className="flex items-center grow">
                                                <FaQuestion size={18} />
                                                <span className={`  font-semibold text-sm ml-2 opacity-100  2xl:opacity-100 duration-200`}>FAQ's</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li onClick={() => setSidebarOpen(false)} className={`mb-3 last:mb-0  ${pathname === "/providerDashboard/gig" ? "bg-white" : ""} group  hover:bg-white transition duration-150 `}>
                                <div className='flex '>
                                    <NavLink end to="/providerDashboard/gig" className={`block w-full px-3 py-2  ${pathname === "/providerDashboard/gig" ? 'text-[#4DA676]  ' : "text-white"} group-hover:text-[#4DA676] truncate transition duration-150 `} >
                                        <div className="flex items-center justify-between ">
                                            <div className="flex items-center grow">
                                                <GiGoldShell size={18} />
                                                <span className={`  font-semibold text-sm ml-2 opacity-100  2xl:opacity-100 duration-200`}>Gig</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li onClick={() => setSidebarOpen(false)} className={`mb-3 last:mb-0  ${pathname === "/providerDashboard/orderdetails" ? "bg-white" : ""} group  hover:bg-white transition duration-150 `}>
                                <div className='flex '>
                                    <NavLink end to="/providerDashboard/orderdetails" className={`block w-full px-3 py-2  ${pathname === "/providerDashboard/orderdetails" ? 'text-[#4DA676]  ' : "text-white"} group-hover:text-[#4DA676] truncate transition duration-150 `} >
                                        <div className="flex items-center justify-between ">
                                            <div className="flex items-center grow">
                                                <BiDetail size={18} />
                                                <span className={`  font-semibold text-sm ml-2 opacity-100  2xl:opacity-100 duration-200`}>Order Details</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li onClick={() => setSidebarOpen(false)} className={`mb-3 last:mb-0  ${pathname === "/providerDashboard/invoiceinfo" ? "bg-white" : ""} group  hover:bg-white transition duration-150 `}>
                                <div className='flex '>
                                    <NavLink end to="/providerDashboard/invoiceinfo" className={`block w-full px-3 py-2  ${pathname === "/providerDashboard/invoiceinfo" ? 'text-[#4DA676]  ' : "text-white"} group-hover:text-[#4DA676] truncate transition duration-150 `} >
                                        <div className="flex items-center justify-between ">
                                            <div className="flex items-center grow">
                                                <BsInfoSquare size={18} />
                                                <span className={`  font-semibold text-sm ml-2 opacity-100  2xl:opacity-100 duration-200`}>Invoice Info</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li onClick={() => setSidebarOpen(false)} className={`mb-3 last:mb-0  ${pathname === "/providerDashboard/newinvoice" ? "bg-white" : ""} group  hover:bg-white transition duration-150 `}>
                                <div className='flex '>
                                    <NavLink end to="/providerDashboard/newinvoice" className={`block w-full px-3 py-2  ${pathname === "/providerDashboard/newinvoice" ? 'text-[#4DA676]  ' : "text-white"} group-hover:text-[#4DA676] truncate transition duration-150 `} >
                                        <div className="flex items-center justify-between ">
                                            <div className="flex items-center grow">
                                                <FaFileInvoice size={18} />
                                                <span className={`  font-semibold text-sm ml-2 opacity-100  2xl:opacity-100 duration-200`}>New Invoice</span>
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