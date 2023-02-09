import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'
// import { BiSearch, BiUserCircle } from "react-icons/bi";
// import { BsBarChartFill } from "react-icons/bs";
// import { IoMail } from "react-icons/io5"
import LanguageDropdown from '../../LanguageDropdown';
import CountryDropdown from '../../CountryDropdown';
import ProfileDropdown from '../../ProfileDropdown';
import { BsArrowRight } from 'react-icons/bs';

const DashboardRightbar = ({ rightbarOpen, setRightbarOpen, }) => {


    const trigger = useRef(null);
    const rightbar = useRef(null);

    // const storedSidebarExpanded = localStorage.getItem('rightbar-expanded');

    // const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!rightbarOpen || keyCode !== 27) return;
            setRightbarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    // useEffect(() => {
    //     let check = localStorage.setItem('rightbar-expanded', sidebarExpanded);
    //     if (sidebarExpanded) {
    //         document.querySelector('body').classList.add('rightbar-expanded');
    //     } else {
    //         document.querySelector('body').classList.remove('rightbar-expanded');
    //     }
    // }, [sidebarExpanded]);
    return (
        <div>
            {/* Sidebar backdrop (mobile only) */}
            <div
                className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${rightbarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"  ></div>

            {/* Sidebar */}
            <div id="rightbar" ref={rightbar} className={`flex flex-col absolute z-40 right-0 top-0  h-screen overflow-y-scroll  no-scrollbar  shrink-0 bg-white p-4 transition-all duration-200 ease-in-out ${rightbarOpen ? '-translate-x-0' : 'translate-x-64'}`}  >
                {/* Sidebar header */}
                <div className='flex justify-end'>
                    {/* Close button */}
                    <button ref={trigger} className="lg:hidden border rounded-full p-2  text-slate-500 hover:text-slate-400" onClick={() => setRightbarOpen(!rightbarOpen)} aria-controls="rightbar" aria-expanded={rightbarOpen} >
                        <BsArrowRight />
                    </button>
                </div>
                <div className="flex justify-center mb-10 pr-3 sm:px-2">

                    {/* Logo */}
                    <NavLink end to="/" className="block">
                        <img className='m-auto w-full h-auto max-w-[90px]' src={logo} alt="logo" loading="lazy" />
                    </NavLink>
                </div>

                {/* Links */}
                <div className="space-y-8">
                    {/* Pages group */}
                    <div>

                        <ul className="mt-3 ">

                            {/* Messages */}

                            <li className={`flex justify-center items-center`}>
                                <CountryDropdown type="rightbar" />
                            </li>
                            <li className={`flex justify-center items-center my-5 `}>
                                <LanguageDropdown type="rightbar" />
                            </li>
                            <li className={`flex justify-center items-center`}>
                                <ProfileDropdown type="rightbar" />

                            </li>



                        </ul>
                    </div>
                    {/* More group */}

                </div>

                {/* Expand / collapse button */}
                <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
                    <div className="px-3 py-2">
                        <button onClick={() => setRightbarOpen(!rightbarOpen)}>
                            <span className="sr-only">Expand / collapse sidebar</span>
                            <svg className="w-6 h-6 fill-current rightbar-expanded:rotate-180" viewBox="0 0 24 24">
                                <path className="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                                <path className="text-slate-600" d="M3 23H1V1h2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardRightbar