import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'
// import { BiSearch, BiUserCircle } from "react-icons/bi";
// import { BsBarChartFill } from "react-icons/bs";
// import { IoMail } from "react-icons/io5"
// import LanguageDropdown from '../../LanguageDropdown';
// import CountryDropdown from '../../CountryDropdown';
// import ProfileDropdown from '../../ProfileDropdown';
import { BsArrowRight } from 'react-icons/bs';
import flag from '../../../assets/images/usflag_logo.png'
import { BiSearch } from 'react-icons/bi';

const DashboardRightbar = ({ rightbarOpen, setRightbarOpen, }) => {

    const [active, setActive] = useState(null)

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

    const handleActive = (id) => {
        if (id === active) {
            setActive(null)
        }
        else {
            setActive(id)
        }
    }



    return (
        <div>
            {/* Sidebar backdrop (mobile only) */}
            <div
                className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${rightbarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"  ></div>

            {/* Sidebar */}
            <div id="rightbar" ref={rightbar} className={`flex flex-col absolute z-40 right-0 top-0  h-screen overflow-y-scroll w-64 no-scrollbar  shrink-0 bg-white p-4 transition-all duration-200 ease-in-out ${rightbarOpen ? '-translate-x-0' : 'translate-x-64'}`}  >
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

                            <li className='mb-6'>
                                <div className={`flex  search_bar`}>
                                    <input  className={`bg-[#F3F6FB]   focus:outline-none py-1 px-2 text-xs text-[#999FA9]`} placeholder='search' />
                                    <button className='bg-green-700 h-[35px] rounded-sm w-[20%] ml-2'><BiSearch className='inline text-white' /></button>
                                </div>
                            </li>

                            <li>
                                <ul>
                                    <li onClick={() => handleActive(0)} className='flex justify-between items-center w-full border px-2 py-2'>
                                        <div className='flex items-center'>
                                            <img src={flag} className="w-5" alt="profile" />
                                            <h1 className='mx-1'>Uk</h1>
                                        </div>
                                        <svg className="shrink-0 ml-1 fill-current text-slate-400" width="11" height="7" viewBox="0 0 11 7">
                                            <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
                                        </svg>
                                    </li>
                                    {
                                        active === 0 &&
                                        <>
                                            <li className='flex justify-between items-center w-full border px-2 py-2'>
                                                <div className='flex items-center'>
                                                    <img src={flag} className="w-5" alt="profile" />
                                                    <h1 className='mx-1'>Uk</h1>
                                                </div>

                                            </li>
                                            <li className='flex justify-between items-center w-full border px-2 py-2'>
                                                <div className='flex items-center'>
                                                    <img src={flag} className="w-5" alt="profile" />
                                                    <h1 className='mx-1'>Uk</h1>
                                                </div>

                                            </li>
                                            <li className='flex justify-between items-center w-full border px-2 py-2'>
                                                <div className='flex items-center'>
                                                    <img src={flag} className="w-5" alt="profile" />
                                                    <h1 className='mx-1'>Uk</h1>
                                                </div>

                                            </li>
                                        </>
                                    }
                                </ul>
                            </li>
                            <li className='my-6' >
                                <ul>
                                    <li onClick={() => handleActive(1)} className='flex justify-between items-center w-full border px-2 py-2'>
                                        <div className='flex items-center'>
                                            <img src={flag} className="w-5" alt="profile" />
                                            <h1 className='mx-1'>English</h1>
                                        </div>
                                        <svg className="shrink-0 ml-1 fill-current text-slate-400" width="11" height="7" viewBox="0 0 11 7">
                                            <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
                                        </svg>
                                    </li>
                                    {
                                        active === 1 &&
                                        <>
                                            <li className='flex justify-between items-center w-full border px-2 py-2'>
                                                <div className='flex items-center'>
                                                    <img src={flag} className="w-5" alt="profile" />
                                                    <h1 className='mx-1'>Uk</h1>
                                                </div>

                                            </li>
                                            <li className='flex justify-between items-center w-full border px-2 py-2'>
                                                <div className='flex items-center'>
                                                    <img src={flag} className="w-5" alt="profile" />
                                                    <h1 className='mx-1'>Uk</h1>
                                                </div>

                                            </li>
                                            <li className='flex justify-between items-center w-full border px-2 py-2'>
                                                <div className='flex items-center'>
                                                    <img src={flag} className="w-5" alt="profile" />
                                                    <h1 className='mx-1'>Uk</h1>
                                                </div>

                                            </li>
                                        </>
                                    }
                                </ul>
                            </li>
                            <li >
                                <ul>
                                    <li onClick={() => handleActive(2)} className='flex justify-between items-center w-full border px-2 py-2'>
                                        <div className='flex items-center'>
                                            <img src={flag} className="w-5" alt="profile" />
                                            <h1 className='mx-1'>Islamabad</h1>
                                        </div>
                                        <svg className="shrink-0 ml-1 fill-current text-slate-400" width="11" height="7" viewBox="0 0 11 7">
                                            <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
                                        </svg>
                                    </li>
                                    {
                                        active === 2 &&
                                        <>
                                            <li className='flex justify-between items-center w-full border px-2 py-2'>
                                                <div className='flex items-center'>
                                                    <img src={flag} className="w-5" alt="profile" />
                                                    <h1 className='mx-1'>Uk</h1>
                                                </div>

                                            </li>
                                            <li className='flex justify-between items-center w-full border px-2 py-2'>
                                                <div className='flex items-center'>
                                                    <img src={flag} className="w-5" alt="profile" />
                                                    <h1 className='mx-1'>Uk</h1>
                                                </div>

                                            </li>
                                            <li className='flex justify-between items-center w-full border px-2 py-2'>
                                                <div className='flex items-center'>
                                                    <img src={flag} className="w-5" alt="profile" />
                                                    <h1 className='mx-1'>Uk</h1>
                                                </div>

                                            </li>
                                        </>
                                    }
                                </ul>

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