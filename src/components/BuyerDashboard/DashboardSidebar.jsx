import React, { useEffect, useRef, useState } from 'react'
import { Navigate, NavLink, useLocation } from 'react-router-dom';
import logo from '../../images/logo.png'
// import { BiSearch, BiUserCircle } from "react-icons/bi";
import { BsBarChartFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
// import { FaRegBell } from 'react-icons/fa'
import { AiOutlinePoweroff } from 'react-icons/ai'
import { signout } from '../../Redux/RecruitAuthSlice/RecruitAuthSlice';
import { useDispatch } from 'react-redux';
import Loader from '../Loader/loader';
import dash_black from '../../images/buyer/Icon material-dashboard.svg'
import dash_white from '../../images/buyer/Icon material-dashboard-white.svg'
import notif_black from '../../images/buyer/Icon ionic-ios-notifications.svg'
import notif_white from '../../images/buyer/Icon ionic-ios-notifications-white.svg'
import order_black from '../../images/buyer/Icon simple-clockify.svg'
import order_white from '../../images/buyer/Icon simple-clockify-white.svg'
import mes_black from '../../images/buyer/Icon material-message.svg'
import mes_white from '../../images/buyer/Icon material-message-white.svg'
import person_black from '../../images/buyer/Icon ionic-md-person.svg'
import person_white from '../../images/buyer/Icon ionic-md-person-white.svg'
const DashboardSidebar = ({ sidebarOpen, setSidebarOpen, setCheckExpand }) => {
    const location = useLocation();
    const { pathname } = location;
    const n_path = location.pathname
    const [back, setBack] = useState(false)
    const [loader, setLoader] = useState(false)
    const trigger = useRef(null);
    const sidebar = useRef(null);

    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
    const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

    const dispatch = useDispatch()

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



    const logout = () => {
        setLoader(true)
        setTimeout(() => {
            setBack(true)
            dispatch(signout())
        }, 1500)
    }



    return (
        <div>
            {
                back &&
                <Navigate to="/signin" replace={true} />
            }

            {loader && <Loader />}

            {/* Sidebar backdrop (mobile only) */}
            <div
                className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"  ></div>

            {/* Sidebar */}
            <div id="sidebar" ref={sidebar} className={`lg:flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen  rounded-tr-[50px] rounded-br-[50px] border border-gray-100  overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-[15rem] lg:sidebar-expanded:!w-[15rem] 2xl:!w-64 shrink-0 bg-white text-center transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`} style={{ boxShadow: '0px 3px 6px #00000029' }}>
                {/* Sidebar header */}
                <div>
                    <button ref={trigger} className="lg:hidden text-slate-500 border rounded-full  py-3 px-3 hover:text-slate-400" onClick={() => setSidebarOpen(!sidebarOpen)} aria-controls="sidebar" aria-expanded={sidebarOpen} >
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
                            <li className={` py-3 px-3 rounded-sm mb-0.5 last:mb-0 ${n_path === "/buyerDashboard" ? 'bg-[#24D29F] text-white' : 'bg-white'} `} onClick={() => setSidebarOpen(false)}>
                                <div className='flex  '>
                                    <NavLink
                                        end to="/buyerDashboard" className={`block text-slate-200 ml-2  truncate transition duration-150 `} >
                                        <div className="flex items-center justify-between ">
                                            <div className="grow flex items-center">
                                                <img src={`${n_path === "/buyerDashboard" ? dash_white : dash_black}`} className='w-[15%] object-cover' alt="dashboard" />
                                                <span className={` ${n_path === "/buyerDashboard" ? ' text-white' : 'text-[#999FA9]'} font-light text-sm ml-3 `}>Dashboard</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>

                            <li className={` ${n_path === "/buyerDashboard/buyernotification" ? 'bg-[#24D29F] text-white' : 'bg-white'}  py-3 px-3 rounded-sm mb-0.5 last:mb-0  `} onClick={() => setSidebarOpen(false)}>
                                <div className='flex '>

                                    <NavLink
                                        end to="/buyerDashboard/buyernotification" className={`block text-slate-200 ml-2 hover:text-white truncate transition duration-150 `} >
                                        <div className="flex items-center justify-between ">
                                            <div className="grow flex items-center">
                                                <img src={`${n_path === "/buyerDashboard/buyernotification" ? notif_white : notif_black}`} className='w-[15%] object-cover' alt="dashboard" />
                                                <span className={` ${n_path === "/buyerDashboard/buyernotification" ? ' text-white' : 'text-[#999FA9]'} font-light text-sm ml-3 `}>Notification</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li className={` py-3 px-3 rounded-sm mb-0.5 last:mb-0'}`} onClick={() => setSidebarOpen(false)}>
                                <div className='flex '>

                                    <NavLink
                                        end to="/buyerDashboard/order" className={`block text-slate-200 ml-2 hover:text-white truncate transition duration-150 `} >
                                        <div className="flex items-center justify-between ">
                                            <div className="grow flex items-center">
                                                <img src={`${n_path === "/buyerDashboard/order" ? order_white : order_black}`} className='w-[15%] object-cover' alt="dashboard" />
                                                <span className={` ${n_path === "/buyerDashboard/order" ? ' text-white' : 'text-[#999FA9]'} font-light text-sm ml-3 `}>Order</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li className={`  ${n_path === "/buyerDashboard/message" ? 'bg-[#24D29F] text-white' : 'bg-white'} py-3 px-3 rounded-sm mb-0.5 last:mb-0'}`} onClick={() => setSidebarOpen(false)}>
                                <div className='flex '>

                                    <NavLink
                                        end to="/buyerDashboard/message" className={`block text-slate-200 ml-2 hover:text-white truncate transition duration-150 `} >
                                        <div className="flex items-center justify-between ">
                                            <div className="grow flex items-center">
                                                <img src={`${n_path === "/buyerDashboard/message" ? mes_white : mes_black}`} className='w-[15%] object-cover' alt="dashboard" />
                                                <span className={` ${n_path === "/buyerDashboard/message" ? ' text-white' : 'text-[#999FA9]'} font-light text-sm ml-3 `}>Message</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li className={` ${n_path === "/buyerDashboard/profile" ? 'bg-[#24D29F] text-white' : 'bg-white'} py-3 px-3 rounded-sm mb-0.5 last:mb-0'}`} onClick={() => setSidebarOpen(false)}>
                                <div className='flex '>

                                    <NavLink
                                        end to="/buyerDashboard/profile" className={`block text-slate-200 ml-2 hover:text-white truncate transition duration-150 `} >
                                        <div className="flex items-center justify-between ">
                                            <div className="grow flex items-center">
                                                <img src={`${n_path === "/buyerDashboard/profile" ? person_white : person_black}`} className='w-[15%] object-cover' alt="dashboard" />
                                                <span className={` ${n_path === "/buyerDashboard/profile" ? ' text-white' : 'text-[#999FA9]'} font-light text-sm ml-3 `}>Seller Profile</span>
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


                <div className="pt-3 mx-2 lg:inline-flex 2xl:hidden justify-center mt-auto bg-help-img bg-contain bg-no-repeat h-[400px]">
                    <div className='flex items-center justify-center mt-[9.6rem]   cursor-pointer' onClick={() => logout()}>
                        <AiOutlinePoweroff className='text-gray-400' />
                        <h2 className='mx-3 text-gray-400'>LogOut </h2>
                    </div>
                    {/* <div className=" py-3 px-3">
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